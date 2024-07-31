import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  async findAll() {
    return this.bookService.listBooks();
  }

  @Delete(':id')
  async delete(id: number) {
    return this.bookService.deleteBook(id);
  }
}
