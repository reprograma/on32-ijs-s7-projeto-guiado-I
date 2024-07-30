import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class BookDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

}

