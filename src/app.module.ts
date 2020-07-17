import { Module } from '@nestjs/common';
import { Connection } from './config/database';
import { GraphQL } from './config/graphql';
import { UsersModule } from './feature/users/users.module';
import { AuthModule } from './core/auth/auth.module';

@Module({
  imports: [
    Connection,
    GraphQL,
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
