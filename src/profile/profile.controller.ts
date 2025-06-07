import { Controller, Get, UseGuards } from "@nestjs/common";
import { ProfileServices } from "./profile.service";
import { JwtAuthGuard } from "src/authentication/jwt/jwt.guard";

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileServices) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    getData(): string {
        return this.profileService.getData()
    }
}