import { PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@Injectable()
export class LibraryService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(list: CreateLibraryDto) {
    return await this.prisma.books.create({
      data: list,
    });
  }

  async findAll() {
    return await this.prisma.books.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.books.findFirst({ where: { id: id } });
  }

  async update(id: number, data: UpdateLibraryDto) {
    return await this.prisma.books.update({ where: { id: id }, data: data });
  }

  remove(id: number) {
    this.prisma.books.update({
      where: { id: id },
      data: { deletedAt: new Date(Date.now()) },
    });
    return `removed book id: ${id} `;
  }
}
