import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  health(): Date {
    return new Date(Date.now());
  }
}
