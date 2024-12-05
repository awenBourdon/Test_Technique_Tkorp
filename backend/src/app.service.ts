import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloTkorp(): string {
    return 'Hello Tkorp.';
  }
}
