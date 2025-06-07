import { Module } from "@nestjs/common";
import { JwtController } from "./jwt.controller";
import { JwtAuthService } from "./jwt.service";
import { PrismaModule } from "prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [PrismaModule, PassportModule, JwtModule.register({
        secret: 'jwt-secret-key',
        signOptions: { expiresIn: '1m' },
    })],
    controllers: [JwtController],
    providers: [JwtAuthService, JwtStrategy]
})

export class JwtAuthModule { }