import { Column, DataType, Model, Table } from 'sequelize-typescript'
import { BannedDto } from '../dto/banned.dto';
@Table({ tableName: 'Banned' })
export class BannedsTable extends Model<BannedDto> {
      @Column({ type: DataType.TEXT, unique: true, primaryKey: true }) id: string;
      @Column({ type: DataType.TEXT, allowNull: false, unique: true }) userId: string;
      @Column({ type: DataType.TEXT, allowNull: false, }) describtion: string
}