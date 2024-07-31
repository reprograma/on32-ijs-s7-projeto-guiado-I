import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { CreateBookUseCase } from '../book/use-cases/create-book-use-case';
import { ListBooksUseCase } from './use-cases/list-books.use-case';
import { DeleteBookUseCase } from './use-cases/delete-book-use-case';
import { Book } from '../domain/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [
    BookService,
    CreateBookUseCase,
    ListBooksUseCase,
    DeleteBookUseCase,
  ],
  controllers: [BookController],
})
export class BookModule {}
