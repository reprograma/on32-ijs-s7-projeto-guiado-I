import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.entity';
import { PatchBookDTO } from './dto/patch-book-dto';
import { BookDTO } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() bookDTO: BookDTO): Promise<Book> {
    return this.booksService.create(bookDTO);
  }

  @Get()
  getAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOneById(id);
  }

  @Put(':id')
  fullUpdate(@Param('id') id: number, @Body() updateBookDTO: BookDTO) {
    return this.booksService.update(id, updateBookDTO);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: number, @Body() patchBookDTO: PatchBookDTO) {
    return this.booksService.patch(id, patchBookDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.booksService.delete(id);
  }
}
