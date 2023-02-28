import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ViewerPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): {
        name: any;
        age: any;
        isActive: any;
        email: any;
    };
}
