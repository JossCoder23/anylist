import { Injectable } from '@nestjs/common';
import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {

    constructor(){}

    async signup( signupInput:SignupInput ):Promise<AuthResponse> {

        // Todo: crear usuario
        // Todo: crear JWT
        
        throw new Error(`No implemented`);

        // return {
        //     token: 'asadsasd',
        //     user: new User()
        // }

    }

}
