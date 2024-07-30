import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    save(book: BookDto): Promise<Book>;
    patch(id: number, book: BookDto): Promise<Book>;
    update(id: number, book: BookDto): Promise<Book>;
    remove(id: number): Promise<void>;
}
