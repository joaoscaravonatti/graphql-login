import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  // eslint-disable-next-line
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  // eslint-disable-next-line
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
