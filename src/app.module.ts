import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesModule } from './heroes/heroes.module';
import {MongooseModule} from '@nestjs/mongoose'
import config from './config/keys'
import { HeroesService } from './heroes/heroes.service';
import { Hero } from './heroes/schema/hero.schema';
@Module({
  imports: [HeroesModule,MongooseModule.forRoot(config.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
