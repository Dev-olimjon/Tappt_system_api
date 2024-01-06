import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('history')
export class HistoryController {
    constructor(private historyService: HistoryService) {}
    @UseGuards(AuthGuard)
    @Get()
      GetAll() {
        return this.historyService.GetAll()
    }

    @Post()
      Create(@Body() history: HistoryDto){
        return this.historyService.create(history)
    }

    @UseGuards(AuthGuard)
    @Get('/:id')  
      GetOne(@Param('id')id: string) {
        return this.historyService.GetOne(id)
    }

    @UseGuards(AuthGuard)
    @Get('/user/:id')
      GetByUserId(@Param('id')id: string) {
        return this.historyService.GetByUserId(id)
    }

    @UseGuards(AuthGuard)
    @Get('book/:id') 
      GetyBookId(@Param('id') id: string) {
        return this.historyService.GetByBookId(id)
    }

    @UseGuards(AuthGuard)
    @Delete('/:id')
      DeleteOne(@Param('id') id: string){
        return this.historyService.DeleteOne(id)
    }

    @UseGuards(AuthGuard)
    @Delete('/user/:id')
      DeleteByUserId(@Param('id') id: string){
        return this.historyService.DeleteByUserId(id)
    }

    @UseGuards(AuthGuard)
    @Delete('/book/:id')
      DeleteByBookId(@Param('id') id: string){
      return this.historyService.DeleteByBookId(id)
    }
}
