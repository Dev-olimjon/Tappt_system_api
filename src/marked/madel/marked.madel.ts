import {Column, DataType, Model, Table} from "sequelize-typescript";
import {MarkedDto} from "../dto/marked.dto";
@Table({tableName: 'marked'})
export class MarkedTable extends Model<MarkedDto>{
    @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
    @Column({ type: DataType.TEXT, allowNull: false }) userId: string;
    @Column({ type: DataType.TEXT, allowNull: false }) BookId: string;
    @Column({ type: DataType.TEXT, allowNull: false }) bookpath: string;
    @Column({ type: DataType.TEXT, allowNull: false }) bookbanner: string;
}