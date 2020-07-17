import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GqlLocalAuthGuard } from '../../common/guards/gql-local-auth.guard';
import { LoginInput } from './inputs/login.inuput';
import { AuthResponse } from '../../common/models/authResponse.model';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/feature/users/user.entity';
import { CurrentUser } from '../../common/decorators/currentUser.decorator';
import { GqlJwtAuthGuard } from 'src/common/guards/gql-jwt-auth.guard';
import { UsersService } from 'src/feature/users/users.service';
import { User as UserModel } from 'src/common/models/user.model';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => AuthResponse)
  @UseGuards(GqlLocalAuthGuard)
  login(
    @Args('loginInput') _loginInput: LoginInput,
    @CurrentUser() user: User,
  ): Promise<AuthResponse> {
    return this.authService.login(user);
  }

  @Query(() => UserModel)
  @UseGuards(GqlJwtAuthGuard)
  whoAmI(@CurrentUser() user: User): Promise<User> {
    return this.usersService.findById(user.id);
  }
}
