import { Controller, Delete, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { langaugeService } from "./language.service";
import { Roles } from "src/auth/guards/admin-auth.decorater";
import { AdminGuard } from "src/auth/guards/admin.guard";
import { AuthGuard } from "src/auth/guards/auth.guard";

@Controller('/langauge')
export class languageController {
  constructor(private languageService: langaugeService) {}

  @Roles('ADMIN')
  @UseGuards(AdminGuard)
  @Post() 
    AddLanguage(value: string) {
     return this.languageService.AddLanguage(value)
  }
  
  @UseGuards(AuthGuard)
  @Get()
    GetAll() {
       return this.languageService.GetAll()
    }

  @UseGuards(AdminGuard)
  @Get('/:id')
    GetByI(@Param('id') id :string) {
        return this.languageService.GetById(id)
    }

    @UseGuards(AdminGuard)
    @Get('/search')
      SearchLanguage(@Query('value') value: string) {
        return this.languageService.SearchLanguage(value) 
    }

  @Roles('ADMIN')
  @UseGuards(AdminGuard)
  @Delete('/:id')
    Delete(@Param('id') id: string){
    return this.languageService.Delete(id)
    }
}