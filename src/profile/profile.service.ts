import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileServices {
    constructor() { }

    getData(): string {
        return "You Access The Profile Datas ;)"
    }
}