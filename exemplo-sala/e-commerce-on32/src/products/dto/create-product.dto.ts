import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsArray()
  @IsString({ each: true })
  categoria: string[];
}
