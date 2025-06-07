import { PipeTransform, Injectable, BadRequestException, ArgumentMetadata } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidatePipe implements PipeTransform {
    constructor(private schema: ZodSchema<any>) { }

    transform(value: any) {
        const result = this.schema.safeParse(value);
        if (!result.success) {
            throw new BadRequestException(result.error.flatten());
        }
        return result.data;
    }
}