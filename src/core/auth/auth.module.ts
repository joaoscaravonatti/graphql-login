import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../feature/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthResolver } from './auth.resolver';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, JwtModule.register(jwtConstants), PassportModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
