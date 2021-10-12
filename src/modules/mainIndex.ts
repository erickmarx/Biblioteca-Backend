import { PrismaClient } from '.prisma/client';
import { LibraryModule } from './library/library.module';
import { HealthModule } from './health/app.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HealthModule, LibraryModule, PrismaClient],
  controllers: [],
  exports: [],
  providers: [],
})
export class MainIndex {}
