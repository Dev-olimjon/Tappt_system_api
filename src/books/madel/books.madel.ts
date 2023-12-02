import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { BooksDto } from '../dto/books.dto';

@Table({ tableName: 'Books' })
export class BooksTable extends Model<BooksDto> {
    @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
    @Column({ type: DataType.TEXT, unique: true, allowNull: false }) name: string;
    @Column({ type: DataType.TEXT, allowNull: false }) author: string;
    @Column({ type: DataType.TEXT, allowNull: false }) path: string;
    @Column({ type: DataType.TEXT, allowNull: false }) describtion: string;
    @Column({ type: DataType.TEXT, unique: true, allowNull: false}) banner: string;
    @Column({ type: DataType.TEXT, allowNull: false }) language: string;
    @Column({ type: DataType.TEXT, allowNull: false }) type: string;
}