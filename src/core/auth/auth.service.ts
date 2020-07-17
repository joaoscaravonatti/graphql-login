import { Injectable } from '@nestjs/common';
import { UsersService } from '../../feature/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../feature/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && user.password === password) {
      // eslint-disable-next-line
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
