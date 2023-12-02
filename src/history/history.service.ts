import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {HistoryTable} from "./madel/history.madel";

@Injectable()
export class HistoryService {
    constructor(@InjectModel(HistoryTable) private historyRepository: typeof HistoryTable) { }


}
