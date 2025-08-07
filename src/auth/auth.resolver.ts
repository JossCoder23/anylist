import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation({name: 'signup'})
  async signup(

  ):Promise<??> {
    // return this.authService.signup();
  }

  @Mutation({name: 'login'})
  async login(
    
  ):Promise<??> {
    // return this.authService.login();
  }

  @Query({ name: 'revalite' })
  async revalidateToken() {
    // return this.authService.revalidateToken();
  }


}
