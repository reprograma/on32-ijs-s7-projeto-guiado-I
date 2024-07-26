import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DeleteResult } from 'typeorm';
import { PatchProductDto } from './dto/patch-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // GET ALL
  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // GET ONE
  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id: id } });
  }

  // POST
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create({
      nome: createProductDto.nome,
      preco: createProductDto.preco,
      categoria: createProductDto.categoria,
      descricao: createProductDto.descricao,
    });
    return this.productRepository.save(newProduct);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOne({ where: { id } });
  }

  async patch(id: number, patchProductDto: PatchProductDto): Promise<Product> {
    await this.productRepository.update(id, patchProductDto);
    return this.productRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
