import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MarkedTable } from './madel/marked.madel';
import { MarkedDto } from './dto/marked.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MarkedService {
    constructor(@InjectModel(MarkedTable) private markedRepository: typeof MarkedTable) { }

    async create(data: MarkedDto) {
        let newData:MarkedDto = {
            id: uuid(),
            userId: data.userId,
            BookId: data.BookId,
            bookpath: data.bookpath,
            bookbanner: data.bookbanner
        }
        return await this.markedRepository.create(newData)
    }

    async GetAll() {
        return await this.markedRepository.findAll()
    }

    async GetOne(idx: string) {
        return await this.markedRepository.findOne({where:{id: idx}})
    }

    async GetByUserId(idx: string) {
        return await this.markedRepository.findOne({where:{userId: idx}})
    }

    async GetByBookId(idx: string) {
        return await this.markedRepository.findOne({where:{BookId: idx}})
    }

    async DeleteOne(idx: string) {
        return await this.markedRepository.destroy( { where: { id: idx } } )
    }

    async DeleteByUserId(idx: string) {
        return await this.markedRepository.destroy( { where: { userId: idx } } )
    }

    async DeleteByBookId(idx: string) {
        return await this.markedRepository.destroy( { where: { BookId: idx } } )
    }
}