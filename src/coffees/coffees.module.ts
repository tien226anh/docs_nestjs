import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../events/entities/event.entity';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './configs/coffees.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
  exports: [CoffeesService],
})
export class CoffeesModule {}
