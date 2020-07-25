import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}
