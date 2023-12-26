import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import { v4 as uuid } from 'uuid';

export enum FileType {
    BOOK = 'book',
    BANNER = 'banner' 
}

@Injectable()
export class FileService {
    CreateFile(type: FileType, file): string {
        try {
            const FileException = file.originalname.split('.').pop()
            const FileName = uuid() + '.' + FileException
            const FilePath = path.resolve(__dirname, '..', 'discover', type)
            if(!fs.existsSync(FilePath)) {
                fs.mkdirSync(FilePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(FilePath, FileName), file.buffer)
            return type + '/' + FileName
        }
        catch(e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
