import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    patch(id: number, patchProductDto: PatchProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
}
