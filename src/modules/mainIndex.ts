import { LibraryModule } from './library/library.module';
import { HealthModule } from './health/app.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HealthModule, LibraryModule],
  controllers: [],
  exports: [],
  providers: [],
})
export class MainIndex {}
