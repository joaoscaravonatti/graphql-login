import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from '../../common/models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from 'src/feature/users/inputs/createUser.input';
import { UpdateUserInput } from './inputs/updateUser.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { nullable: true })
  users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findById(id);
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    const user = new User();
    return this.usersService.create(Object.assign(user, createUserInput));
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const user = new User();
    return this.usersService.update(Object.assign(user, updateUserInput));
  }
}
