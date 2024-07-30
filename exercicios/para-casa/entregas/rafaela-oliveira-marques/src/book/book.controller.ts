import { Controller, Get, Post, Body, Patch, OnApplicationShutdown, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  create(@Body() book: BookDto): Promise<Book> {
    return this.bookService.save(book);
  }

  @Patch(':id')
  modify(@Param('id') id: number, @Body()  book: BookDto): Promise<Book> {
    return this.bookService.patch(id, book);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body()  book: BookDto): Promise<Book>{

    return this.bookService.update(id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.remove(id);
  }
}

