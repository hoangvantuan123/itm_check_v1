import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('res_groups')
export class ResGroups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'int', nullable: true })
  category_id: number;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  create_uid: number;

  @Column({ nullable: true })
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
