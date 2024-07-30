import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    create(book: BookDto): Promise<Book>;
    modify(id: number, book: BookDto): Promise<Book>;
    update(id: number, book: BookDto): Promise<Book>;
    remove(id: number): Promise<void>;
}
