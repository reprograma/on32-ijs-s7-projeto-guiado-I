import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'data.db',
    entities: [Book],
    synchronize: true,

  }), BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
