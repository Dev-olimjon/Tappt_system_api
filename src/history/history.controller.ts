import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';

@Controller('history')
export class HistoryController {
    constructor(private historyService: HistoryService) {}
    @Get()
      GetAll() {
        return this.historyService.GetAll()
    }

    @Post()
      Create(@Body() history: HistoryDto){
        return this.historyService.create(history)
    }

    @Get('/:id')  
      GetOne(@Param('id')id: string) {
        return this.historyService.GetOne(id)
    }

    @Get('/user/:id')
      GetByUserId(@Param('id')id: string) {
        return this.historyService.GetByUserId(id)
    }

    @Get('book/:id') 
      GetyBookId(@Param('id') id: string) {
        return this.historyService.GetByBookId(id)
    }

    @Delete('/:id')
      DeleteOne(@Param('id') id: string){
        return this.historyService.DeleteOne(id)
    }

    @Delete('/user/:id')
      DeleteByUserId(@Param('id') id: string){
        return this.historyService.DeleteByUserId(id)
    }

    @Delete('/book/:id')
      DeleteByBookId(@Param('id') id: string){
      return this.historyService.DeleteByBookId(id)
    }
}
