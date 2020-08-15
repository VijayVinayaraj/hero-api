import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Hero } from './schema/hero.schema'

@Injectable()
export class HeroesService {
    constructor(@InjectModel(Hero.name) private heroModel:Model<Hero>){}

    async getAllHeroes():Promise<Hero[]>{
        return this.heroModel.find()
    }

    async getOneHero(id:string):Promise<Hero>{
        return this.heroModel.findById(id)
    }
    
    async createHero(hero:Hero):Promise<Hero>{
        const createHero=new this.heroModel(hero)
        return await createHero.save()
    }

    async updateHero(id:string,hero:Hero){
            return await this.heroModel.findByIdAndUpdate(id,hero)
    }

    async deleteHero(id:string){
        return await this.heroModel.findByIdAndDelete(id)
    }
}
