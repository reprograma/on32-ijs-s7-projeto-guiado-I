import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { ClientsModule } from './clients/clients.module';
import { PurchasesModule } from './purchases/purchases.module';
import { Purchase } from './purchases/entities/purchase.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'data.db',
      entities: [Product, Client, Purchase],
      synchronize: true,
    }),
    ProductsModule,
    ClientsModule,
    PurchasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
