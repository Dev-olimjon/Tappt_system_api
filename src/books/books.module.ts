import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksTable } from './madel/books.madel';
import { FileService } from 'src/file/file.service';

@Module({
  imports:[
    SequelizeModule.forFeature([BooksTable]),
  ],
  controllers: [BooksController],
  providers: [BooksService, FileService]
})
export class BooksModule {}
