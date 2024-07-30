import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';


@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ){}

  async findAll(): Promise<Book[]>{
    return this.bookRepository.find()
  }

  //GET ONE
  async findOne(id: number): Promise<Book> {
    return await this.bookRepository.findOne({where: {id}});
  }

  //POST
  async save(book: BookDto): Promise<Book> {
    return await this.bookRepository.save(book);
  }

  //PATCH
  async patch(id: number, book: BookDto): Promise<Book> {
    await this.bookRepository.update(id, book);
    return this.bookRepository.findOne({where: {id}})
  }

  //PUT
  async update(id: number, book: BookDto): Promise<Book> {
    await this.bookRepository.update(id, book);
    return this.bookRepository.findOne({where: {id}})
  }

  //DELETE
  async remove(id: number): Promise<void> {
    await this.bookRepository.delete({id})
  }
}
