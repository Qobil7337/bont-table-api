import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './modules/branch/branch.module';
import { CompanyModule } from './modules/company/company.module';
import { CategoryModule } from './modules/category/category.module';
import { TableModule } from './modules/table/table.module';
import { ProductModule } from './modules/product/product.module';
import { ImageModule } from './modules/image/image.module';
import { PaymentTypeModule } from './modules/payment-type/payment-type.module';
import { OrderItemModule } from './modules/order-item/order-item.module';
import { PaymentModule } from './modules/payment/payment.module';
import { OrderModule } from './modules/order/order.module';
import { OrderStatusModule } from './modules/order-status/order-status.module';
import { CustomerModule } from './modules/customer/customer.module';
import { OrderTypeModule } from './modules/order-type/order-type.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BranchModule,
    CompanyModule,
    CategoryModule,
    TableModule,
    ProductModule,
    ImageModule,
    PaymentTypeModule,
    OrderItemModule,
    PaymentModule,
    OrderModule,
    OrderStatusModule,
    CustomerModule,
    OrderTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
