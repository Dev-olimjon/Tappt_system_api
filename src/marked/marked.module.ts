import { Module } from '@nestjs/common';
import { MarkedController } from './marked.controller';
import { MarkedService } from './marked.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {MarkedTable} from "./madel/marked.madel";

@Module({
  imports:[
    SequelizeModule.forFeature([MarkedTable])

  ],
  controllers: [MarkedController],
  providers: [MarkedService]
})
export class MarkedModule {}
