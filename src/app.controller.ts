import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService
    ) { }

  // ! POST / login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  // ! GET /protected
  // @UseGuards(AuthenticatedGuard)// ? Like laravel middleware
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {  // TODO :require an beart token
    // return this.appService.getHello();
    return req.user;
  }
}
