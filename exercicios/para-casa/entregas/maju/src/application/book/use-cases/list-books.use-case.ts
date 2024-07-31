import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../domain/book.entity'; // Ajuste o caminho conforme necessário

@Injectable()
export class ListBooksUseCase {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>, // Use Repository<Book> diretamente
  ) {}

  async execute(): Promise<Book[]> {
    return this.bookRepository.find(); // Utilize o repositório padrão
  }
}
