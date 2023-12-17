import {Table, Column, DataType, Model} from "sequelize-typescript";
import {TypesDto} from "../dto/types.dto";

@Table({tableName: 'types'})
export class TypesTable extends Model<TypesDto> {
    @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
    @Column({ type: DataType.TEXT, unique: true, allowNull: false }) value: string;
}
