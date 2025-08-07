import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { SignupInput } from 'src/auth/dto/inputs/signup.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}

  async create( signupInput:SignupInput ):Promise<User> {

    try {
      const newUser = this.userRepository.create( signupInput );
      return await this.userRepository.save( newUser );
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Algo salio mal');
    }

  }

  async findAll():Promise<User[]> {
    return [];
  }

  findOne( id:string ):Promise<User> {
    throw new Error(`findOne not implemented`);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  block( id:string ):Promise<User> {
    throw new Error(`block not implemented`);
  }
  
}
