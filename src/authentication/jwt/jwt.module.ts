// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { Module } from "@nestjs/common";
import { JwtController } from "./jwt.controller";
import { JwtService } from "./jwt.service";

@Module({
    controllers: [JwtController], 
    providers : [JwtService]
})

export class JwtModule {}