import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtService {
    getChekingJwt(): string {
        return "You Are In The JWT Service";
    }
}