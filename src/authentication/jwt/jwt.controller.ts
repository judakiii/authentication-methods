import { Controller, Get } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Controller('jwt')
export class JwtController {
    constructor(private readonly jwtServices : JwtService) { }
    
    @Get()
    checkController(): string {
        return this.jwtServices.getChekingJwt()
    }
}