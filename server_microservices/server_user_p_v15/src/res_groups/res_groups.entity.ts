import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('res_groups')
export class ResGroups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category_id: number;

  @Column()
  color: string;

  @Column()
  create_uid: number;

  @Column()
  write_uid: number;

  @Column({ type: 'text', nullable: true })
  comment?: string;

  @Column({ default: false })
  share: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  write_date: Date;
}
