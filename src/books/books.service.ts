import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BooksTable } from './madel/books.madel';
import { BooksDto } from './dto/books.dto';
import { FileService, FileType } from 'src/file/file.service';
import { v4 as uuid } from 'uuid';
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class BooksService {
    constructor(
        @InjectModel(BooksTable) 
        private booksReporitory: typeof BooksTable,
        private fileService: FileService
        ) {}
    async create(Books: BooksDto, banner: any, book: any) {
        let idx = uuid()
        let canCreate = await this.booksReporitory.findOne({where: {name: Books.name}})
        if(!canCreate){
            const booksPath = this.fileService.CreateFile(FileType.BOOK, book)
            const bannerPath = this.fileService.CreateFile(FileType.BANNER, banner)
            return await this.booksReporitory.create({
                ...Books, 
                id: idx, 
                banner: bannerPath, 
                path: booksPath
            })    
        }
        return new HttpException('Conflict', HttpStatus.CONFLICT)
        }

    async GetAll() {
        return await this.booksReporitory.findAll()
    }

    async GetOne(idx: string) {
        return this.booksReporitory.findOne({where:{id: idx}})
    }

    async SearchByName(name: string){
        return await this.booksReporitory.findAll({where:{name: {[Op.like]: `%${name}%`}}})
    }
    async SearchByAuthor(author: string){
        return await this.booksReporitory.findAll({where:{author: {[Op.like]: `%${author}%`}}})
    }

    async RandomSelect() {
        return await this.booksReporitory.sequelize.query('select * from books order by random() limit 12;')
    }

    async EditBook(id: string, book: BooksDto) {
        let Book = {
            name: book.name,
            author: book.author,
            describtion: book.describtion,
            language: book.language,
            type: book.type
        }
        return await this.booksReporitory.update({...Book}, {where: {id: id}})
    }
    async DeleteBook(id: string) {
            return await this.booksReporitory.destroy({where: {id: id}})
    }

    async SelectByType(type: string){
        return await this.booksReporitory.findAll({where: {type: type}})
    }

    async SelectByLanguage(language: string){
        return await this.booksReporitory.findAll({where: {language: language}})
    }
       
    }