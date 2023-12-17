import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { LanguageDto } from '../dto/language.dto';

@Table({ tableName: 'languages' })
export class LanguageTable extends Model<LanguageDto> {
    @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
    @Column({ type: DataType.TEXT, unique: true, allowNull: false }) value: string;
}