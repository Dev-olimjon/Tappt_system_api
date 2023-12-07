import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { UsersTable } from './users/madel/users.madel';
import { AuthModule } from './auth/auth.module';
import { BannedModule } from './banned/banned.module';
import { BannedsTable } from './banned/madel/banned.madel';
import { BooksModule } from './books/books.module';
import { BooksTable } from './books/madel/books.madel';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LanuageModule } from './lanuage/lanuage.module';
import * as path from 'path'
import { LanguageTable } from './lanuage/madel/language.madel';
import { MarkedModule } from './marked/marked.module';
import {MarkedTable} from "./marked/madel/marked.madel";
import { HistoryModule } from './history/history.module';
import {HistoryTable} from "./history/madel/history.madel";
import { TypesModule } from './types/types.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: 5432,
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      autoLoadModels: true,
      models: [
        UsersTable,
        BannedsTable,
        BooksTable,
        LanguageTable,
        MarkedTable,
        HistoryTable
      ],
    }),
    UsersModule,
    AuthModule,
    BannedModule,
    BooksModule,
    FileModule,
    LanuageModule,
    MarkedModule,
    HistoryModule,
    TypesModule,
  ],
})
export class AppModule {}