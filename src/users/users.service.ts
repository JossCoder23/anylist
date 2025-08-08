import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';

import { UpdateUserInput } from './dto/update-user.input';
import { SignupInput, LoginInput } from './../auth/dto/inputs';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  private logger:Logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}

  async create( signupInput:SignupInput ):Promise<User> {

    try {

      const newUser = this.userRepository.create({
        ...signupInput,
        password: bcrypt.hashSync( signupInput.password, 10 )
      });
      return await this.userRepository.save( newUser );

    } catch (error) {

      this.handleDBErrors( error );

    }

  }

  async findAll():Promise<User[]> {
    return [];
  }

  async findOneByEmail( email:string ):Promise<User> {
    
    try {
      return await this.userRepository.findOneByOrFail({ email })
    } catch (error) {
      throw new NotFoundException(`${ email } not found`);
    }

  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  block( id:string ):Promise<User> {
    throw new Error(`block not implemented`);
  }

  private handleDBErrors( error:any ):never {
    
    if( error.code === "23505" ) {
      throw new BadRequestException( error.detail.replace('Key ', '') );
    }

    if( error.code === "error-001" ) {
      throw new BadRequestException( error.detail.replace('Key ', '') );
    }

    this.logger.error(error);
    
    throw new InternalServerErrorException('Plase check server logs');

  }
  
}
