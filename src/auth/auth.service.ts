import { Injectable } from '@nestjs/common';
import { SignupInput, LoginInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService:UsersService
    ){}

    async signup( signupInput:SignupInput ):Promise<AuthResponse> {

        const user = await this.usersService.create( signupInput );
        // Todo: crear JWT
        const token = 'ABC123';
        return { token, user }

    }

    async login( loginInput:LoginInput ):Promise<AuthResponse> {


        const { email, password } = loginInput;
        const user = await this.usersService.findOneByEmail( email );
        


        const token = 'ABC123';

        return {
            token,
            user
        }

    }


}
