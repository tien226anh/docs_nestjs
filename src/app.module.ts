import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from '@nestjs/config';
import database from './config/database.config';
import app from './config/app.config';
// import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => database(),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [app],
    }),
    CoffeeRatingModule,
    // CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
