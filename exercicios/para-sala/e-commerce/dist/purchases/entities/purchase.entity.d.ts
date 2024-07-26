import { Product } from 'src/products/product.entity';
import { Client } from 'src/clients/entities/client.entity';
export declare class Purchase {
    id: number;
    valor: number;
    products: string[];
    client: Client;
    product: Product;
}
