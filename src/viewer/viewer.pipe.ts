import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ViewerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    return {
        name: value.usarName,
        age: value.userAge,
        isActive: value.userActive,
        email: value.userEmail,
    };
  }
}