import { PrismaClient } from '.prisma/client';
import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';

@Module({
  imports: [PrismaClient],
  controllers: [LibraryController],
  providers: [LibraryService, PrismaClient],
})
export class LibraryModule {}
