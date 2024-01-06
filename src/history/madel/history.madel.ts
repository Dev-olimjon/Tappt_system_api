import {Column, DataType, Model, Table} from "sequelize-typescript";
import {HistoryDto} from "../dto/history.dto";

@Table({tableName: 'history'})
export class  HistoryTable extends Model<HistoryDto>{
    @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
    @Column({ type: DataType.TEXT, allowNull: false }) userId: string;
    @Column({ type: DataType.TEXT, allowNull: false }) bookId: string;
    @Column({ type: DataType.TEXT, allowNull: false }) bookpath: string;
    @Column({ type: DataType.TEXT, allowNull: false }) bookbanner: string;
}
