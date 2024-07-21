import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { BookDTO } from './dto/book.dto';
import { PatchBookDTO } from './dto/patch-book-dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  async create(createBookDTO: BookDTO): Promise<Book> {
    const newBookEntity = this.booksRepository.create(createBookDTO);

    return this.booksRepository.save(newBookEntity);
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOneById(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDTO: BookDTO): Promise<Book> {
    await this.booksRepository.update(id, updateBookDTO);
    return this.booksRepository.findOneBy({ id });
  }

  async patch(id: number, patchBookDTO: PatchBookDTO): Promise<Book> {
    await this.booksRepository.update(id, patchBookDTO);
    return this.booksRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<Book> {
    const deletedBook = await this.booksRepository.findOneBy({ id });
    await this.booksRepository.delete({ id });

    return deletedBook;
  }
}
