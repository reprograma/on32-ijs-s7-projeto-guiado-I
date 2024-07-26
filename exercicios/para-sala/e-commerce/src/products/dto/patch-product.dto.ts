import { IsOptional, IsString, IsNumber, IsArray } from 'class-validator';

export class PatchProductDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsNumber()
  @IsOptional()
  preco?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  categoria?: string[];
}
