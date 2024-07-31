import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../domain/book.entity';
@Injectable()
export class DeleteBookUseCase {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>, // Use Repository<Book> diretamente
  ) {}

  async execute(id: number): Promise<void> {
    const result = await this.bookRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Não há registo do livro no nosso bando de dados`,
      );
    }
  }
}
