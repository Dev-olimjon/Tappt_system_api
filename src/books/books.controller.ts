import { Body, 
  Controller, 
  Delete, 
  Get, 
  HttpException, 
  HttpStatus, 
  Param, 
  Post, 
  Put, 
  Query, 
  UnauthorizedException, 
  UploadedFiles, 
  UseGuards, 
  UseInterceptors } 
  from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto } from './dto/books.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/guards/admin-auth.decorater';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}
    @Roles('ADMIN')
    @UseGuards(AdminGuard)
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'banner', maxCount: 1 },
        { name: 'book', maxCount: 1 }
      ]))
      CreateBooks(@UploadedFiles() files, @Body() Book: BooksDto) {
        const {banner, book} = files
        if(banner === undefined || book === undefined) {
          throw new HttpException('empty', HttpStatus.BAD_REQUEST)
        }
        else{
          return this.booksService.create(Book, banner[0], book[0])
        }
      }

    @UseGuards(AuthGuard)
    @Get()
      GetAll() {
        return this.booksService.GetAll()
      }

    @UseGuards(AuthGuard)
    @Get('/:id') 
      GetOne(@Param('id') idx: string){
        return this.booksService.GetOne(idx)
      }

    @UseGuards(AuthGuard)
    @Get('search/:name')
      SearchByName(@Query('name') name: string) {
        return this.booksService.SearchByName(name)
      }

    @UseGuards(AuthGuard)
    @Get('author/:author')
      SearchByAuthor(@Query('author') author: string) {
        return this.booksService.SearchByAuthor(author)
      }

    @UseGuards(AuthGuard)
    @Get('type/:type')
      SelectByType(@Param('type') type: string) {
        return this.booksService.SelectByType(type)
      }

    @UseGuards(AuthGuard)
    @Get('language/:language')
      SelectByLanguage(@Param('language') language: string) {
        return this.booksService.SelectByLanguage(language)
      }

    @Roles('ADMIN')
    @UseGuards(AdminGuard)
    @Put('/:id')  
      EditBook(@Param('id') id: string, @Body() Book: BooksDto) {
        return this.booksService.EditBook(id, Book)
      }

    @Roles('ADMIN')
    @UseGuards(AdminGuard)
    @Delete('/:id')
      DeleteBook(@Param('id') id: string) {
        return this.booksService.DeleteBook(id)
      }

}