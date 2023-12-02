import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {HistoryTable} from "./madel/history.madel";

@Module({
  imports:[
    SequelizeModule.forFeature([HistoryTable])
  ],
  controllers: [HistoryController],
  providers: [HistoryService]
})
export class HistoryModule {}
