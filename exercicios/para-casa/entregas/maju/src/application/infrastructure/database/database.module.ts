import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../../domain/book.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
