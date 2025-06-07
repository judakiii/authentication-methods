import { z } from "zod";

export const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters').max(10, 'Password must be at must 10 characters'),
    first_name: z.string(),
    last_name: z.string(),
});

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters').max(10, 'Password must be at must 10 characters'),
});



export type SignUpDto = z.infer<typeof SignUpSchema>;
export type LoginDto = z.infer<typeof LoginSchema>;