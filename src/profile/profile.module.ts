import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { ProfileServices } from "./profile.service";

@Module({
    controllers: [ProfileController],
    providers: [ProfileServices]
})

export class ProfileModule { }