import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../domain/book.entity';
import { CreateBookDto } from '../dto/create-book.dto'; // Import the CreateBookDto class or interface

@Injectable()
export class CreateBookUseCase {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>, // Use Repository<Book> diretamente
  ) {}

  async execute(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(book);
  }
}
