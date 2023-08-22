import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request-response time');

    console.log('I am a middleware');

    // res.on('finish', () => console.timeEnd());
    next();
  }
}
