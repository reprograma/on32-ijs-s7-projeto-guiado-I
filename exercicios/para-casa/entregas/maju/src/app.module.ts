import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './application/domain/book.entity';
import { BookModule } from './application/book/book.module';
import { DatabaseModule } from './application/infrastructure/database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Book],
      synchronize: true,
    }),
    BookModule,
    DatabaseModule,
  ],
})
export class AppModule {}
