import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import {HeroesService} from './heroes.service'
import {Hero} from './schema/hero.schema'
import {HeroDto} from './dto/hero.dto'
import { SrvRecord, promises } from 'dns';
@Controller('heroes')
export class HeroesController {
constructor(private heroesService:HeroesService){}

@Get()
getAllHeroes():Promise<Hero[]>{
 return this.heroesService.getAllHeroes();
}

@Get(':id')
getOneHero(@Param('id')id :string):Promise<Hero>{
    return this.heroesService.getOneHero(id)
}

@Post()
createhero(@Body() heroDto:Hero):Promise<Hero>{
    return this.heroesService.createHero(heroDto)
}

@Put(':id')
 updateHero(@Body()hero:Hero , @Param('id')id :string):Promise<Hero>{
    return this.heroesService.updateHero(id,hero)
 }

 @Delete(':id')
 deleteHero(@Param('id')id:string){
        return this.heroesService.deleteHero(id)
 }
}

