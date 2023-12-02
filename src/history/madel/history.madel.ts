import {Column, DataType, Model, Table} from "sequelize-typescript";
import {HistoryDto} from "../dto/history.dto";

@Table({tableName: 'History'})
export class  HistoryTable extends Model<HistoryDto>{
    @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
    @Column({ type: DataType.TEXT, allowNull: false, unique: true }) userId: string;
    @Column({ type: DataType.TEXT, allowNull: false, unique: true }) bookId: string;
}