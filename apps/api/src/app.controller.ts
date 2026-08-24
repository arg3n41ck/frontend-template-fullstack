import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '@ruflo/contracts';

@Controller('health')
export class AppController {
  @Get()
  getHealth(): HealthResponse {
    return { status: 'ok', service: 'api' };
  }
}
