import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Family } from './family.entity';
import { Education } from './education.entity';
import { Language } from './language.entity';
import { Experience } from './experience.entity';

@Entity('hr_personnel')
export class Personnel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  full_name: string;

  @Column({ type: 'text' })
  gender: 'Male' | 'Female' | 'Other';

  @Column({ type: 'date', nullable: true })
  interview_date: Date;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  birth_date: Date;

  @Column({ type: 'text', nullable: true })
  id_number: string;

  @Column({ type: 'date', nullable: true })
  id_issue_date: Date;

  @Column({ type: 'text', nullable: true })
  ethnicity: string;

  @Column({ type: 'text', nullable: true })
  id_issue_place: string;

  @Column({ type: 'text', nullable: true })
  insurance_number: string;

  @Column({ type: 'text', nullable: true })
  tax_number: string;

  @Column({ type: 'text', nullable: true })
  phone_number: string;

  @Column({ type: 'text', nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  alternate_phone_number: string;

  @Column({ type: 'text', nullable: true })
  alternate_name: string;

  @Column({ type: 'text', nullable: true })
  alternate_relationship: string;

  @Column({ type: 'text', nullable: true })
  birth_address: string;

  @Column({ type: 'text', nullable: true })
  birth_province: string;

  @Column({ type: 'text', nullable: true })
  birth_district: string;

  @Column({ type: 'text', nullable: true })
  birth_ward: string;

  @Column({ type: 'text', nullable: true })
  current_address: string;

  @Column({ type: 'text', nullable: true })
  current_province: string;

  @Column({ type: 'text', nullable: true })
  current_district: string;

  @Column({ type: 'text', nullable: true })
  current_ward: string;

  @Column({ type: 'text', nullable: true })
  house_street_village: string;

  @OneToMany(() => Family, family => family.personnel) 
  families: Family[];

  @OneToMany(() => Education, education => education.personnel) 
  educations: Education[];

  @OneToMany(() => Language, language => language.personnel)
  languages: Language[];

  @OneToMany(() => Experience, experience => experience.personnel) 
  experiences: Experience[];



  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;

  @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
  })
  write_date: Date
}
