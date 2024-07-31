import { Injectable } from '@nestjs/common';
import { CreateBookUseCase } from '../book/use-cases/create-book-use-case';
import { ListBooksUseCase } from './use-cases/list-books.use-case';
import { CreateBookDto } from './dto/create-book.dto';
import { DeleteBookUseCase } from './use-cases/delete-book-use-case';

@Injectable()
export class BookService {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,
    private readonly listBooksUseCase: ListBooksUseCase,
    private readonly deleteBookUseCase: DeleteBookUseCase,
  ) {}

  createBook(createBookDto: CreateBookDto) {
    return this.createBookUseCase.execute(createBookDto);
  }

  listBooks() {
    return this.listBooksUseCase.execute();
  }

  async deleteBook(id: number) {
    await this.deleteBookUseCase.execute(id);
  }
}
