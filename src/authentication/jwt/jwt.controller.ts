import { Body, Controller, Get, Post, Res, UsePipes } from '@nestjs/common';
import { JwtAuthService } from './jwt.service';
import { LoginDto, LoginSchema, SignUpDto, SignUpSchema } from 'src/zodSchema/authentication.schema';
import { ZodValidatePipe } from 'src/zodSchema/zod.pipe';
import { Response } from 'express';
@Controller('jwt')
export class JwtController {
    constructor(private readonly jwtAuthService: JwtAuthService) { }

    @Get()
    checkController(): string {
        return this.jwtAuthService.getChekingJwt();
    }

    @Post('signup')
    @UsePipes(new ZodValidatePipe(SignUpSchema))
    signUp(@Body() body: SignUpDto, @Res() res: Response) {
        return this.jwtAuthService.signup(body, res)
    }

    @Post('login')
    @UsePipes(new ZodValidatePipe(LoginSchema))
    async login(@Body() body: LoginDto, @Res() res: Response): Promise<Response> {
        const result = await this.jwtAuthService.validateUser(body.email, body.password, res);
        if (result) {
            return this.jwtAuthService.login(body, res);
        }
    }
}
