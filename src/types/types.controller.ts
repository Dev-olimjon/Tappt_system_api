import { Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { TypesService } from './types.service';
import { Roles } from 'src/auth/guards/admin-auth.decorater';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService) {}
    @Roles('ADMIN')
    @UseGuards(AdminGuard)
    @Post() 
      AddLanguage(value: string) {
       return this.typesService.AddType(value)
    }
    
    @UseGuards(AuthGuard)
    @Get()
      GetAll() {
         return this.typesService.GetAll()
      }
  
    @UseGuards(AdminGuard)
    @Get('/:id')
      GetByI(@Param('id') id :string) {
          return this.typesService.GetById(id)
      }
  
      @UseGuards(AdminGuard)
      @Get('/search')
        SearchLanguage(@Query('value') value: string) {
          return this.typesService.SearchType(value) 
      }
  
    @Roles('ADMIN')
    @UseGuards(AdminGuard)
    @Delete('/:id')
      Delete(@Param('id') id: string){
      return this.typesService.Delete(id)
      }
  }