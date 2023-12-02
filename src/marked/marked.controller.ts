import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MarkedService } from './marked.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { MarkedDto } from './dto/marked.dto';

@Controller('marked')
export class MarkedController {
    constructor(private markedService: MarkedService) {}
    
    @UseGuards(AuthGuard)
    @Get()
      GetAll() {
        return this.markedService.GetAll()
    }

    @UseGuards(AuthGuard)
    @Post()
      Create(@Body() MarkedBook: MarkedDto) {
        return this.markedService.create(MarkedBook)
    }

    @UseGuards(AuthGuard)
    @Get('/:id')
      GetOne(@Param('id') id: string) {
        return this.markedService.GetOne(id)
    }

    @UseGuards(AuthGuard)
    @Get('/user/:id')
      GetByUserId(@Param('id') id: string) {
        return this.markedService.GetByUserId(id)
    }

    @UseGuards(AuthGuard)
    @Get('book/:id')
      GetByBookId(@Param('id') id: string) {
        return this.markedService.GetByBookId(id)
    }

    @UseGuards(AuthGuard)
    @Delete('/:id')
      DeleteOne(@Param('id') id: string) {
        return this.markedService.DeleteOne(id)
      }

    @UseGuards(AuthGuard)
    @Delete('/user/:id')  
      DeleteByUserId(@Param('id')id: string) {
        return this.markedService.DeleteByUserId(id)
      }

    @UseGuards(AuthGuard)
    @Delete('book/:id')  
      DeleteByBookId(@Param('id')id: string) {
        return this.markedService.DeleteByBookId(id)
      }
}
