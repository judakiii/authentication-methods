import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto, SignUpDto } from "src/zodSchema/authentication.schema";
import { Response } from "express";

@Injectable()
export class JwtAuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }

    getChekingJwt(): string {
        return "You Are In The JWsT Service";
    }

    async signup(data: SignUpDto, res: Response): Promise<Response> {
        try {
            const user = await this.prisma.prismaClient.users.create({
                data: {
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    password: await bcrypt.hash(data.password, 10),
                },
            });
            return res.status(201).json({ message: 'User created', user });
        } catch (error) {
            return res.status(500).json({ message: 'Sign-up failed', error: error.message });
        }
    }

    async login(data: LoginDto, res: Response): Promise<Response> {
        try {
            const payload = { email: data.email };
            return res.status(201).json({
                message: 'Login Successfully',
                payload: {
                    access_token: this.jwtService.sign(payload),
                }
            });
        } catch (error) {
            return res.status(500).json({ message: 'Login failed', error: error.message });
        }
    }

    async validateUser(email: string, pass: string, res: Response): Promise<Response | boolean> {
        const user = await this.prisma.prismaClient.users.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return res.status(401).json({
                message: 'User Not Found',
            });
        }
        if (await bcrypt.compare(pass, user.password)) {
            return true
        }

        return res.status(400).json({
            message: 'Password or Email dont Correct !',
        });
    }
}