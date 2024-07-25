import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository, DeleteResult } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of products when findAll is called', async () => {
    const products = [{ id: 1, nome: 'Test Product', preco: 9.99, descricao: 'Test Description', categoria: ['teste 1', 'teste 2'] }];
    jest.spyOn(repository, 'find').mockResolvedValue(products);

    const result = await service.findAll();
    expect(result).toEqual(products);
  });

  it('should return a product when findOne is called with a valid id', async () => {
    const product = { id: 1, nome: 'Test Product', preco: 9.99, descricao: 'Test Description', categoria: ['teste 1', 'teste 2'] };
    jest.spyOn(repository, 'findOne').mockResolvedValue(product);

    const result = await service.findOne(1);
    expect(result).toEqual(product);
  });

  it('should remove a product when remove is called with a valid id', async () => {
    const deleteResult: DeleteResult = { raw: {}, affected: 1 };
    jest.spyOn(repository, 'delete').mockResolvedValue(deleteResult);
    jest.spyOn(repository, 'findOne').mockResolvedValue(undefined);

    await service.remove(1);
    const product = await service.findOne(1);
    expect(product).toBeUndefined();
  });
});
