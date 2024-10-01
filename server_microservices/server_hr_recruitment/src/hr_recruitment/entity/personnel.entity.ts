import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Family } from './family.entity';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { Education } from './education.entity';
import { Language } from './language.entity';
import { Experience } from './experience.entity';
import { InterviewResult } from './interview_results.entity';
@Entity('hr_personnel')
export class Personnel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'full_name', type: 'text', nullable: true})
  full_name: string;

  @Column({ type: 'text', nullable: true })
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

  @Column({  name: 'type_personnel', type: 'boolean', default: false })
  type_personnel: boolean;




  @Column({ type: 'text', nullable: true })
  @IsString()
  candidate_type: string;

  @Column({ type: 'text', nullable: true }) 
  @IsString()
  supplier_details?: string


  @OneToMany(() => Family, family => family.personnel) 
  families: Family[];

  @OneToMany(() => Education, education => education.personnel) 
  educations: Education[];

  @OneToMany(() => Language, language => language.personnel)
  languages: Language[];

  @OneToMany(() => Experience, experience => experience.personnel) 
  experiences: Experience[];


  @OneToMany(() => InterviewResult, interview => interview.personnel) 
  interviews: InterviewResult[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;

  @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
  })
  write_date: Date
}
