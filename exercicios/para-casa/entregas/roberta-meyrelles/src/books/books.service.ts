import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
//import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(@InjectRepository(Book)
  private readonly bookRepository: Repository<Book>
  ) { }

  //GET ALL
  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  //GET ONE
  async findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({ where: { id: id } });
  }

  //POST 
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create({
      title: createBookDto.title,
      author: createBookDto.author,
      publisher: createBookDto.publisher
    });

    return this.bookRepository.save(newBook);
  }

  //DELETE
  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
