import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Family } from './family.entity';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { Education } from './education.entity';
import { Language } from './language.entity';
import { Experience } from './experience.entity';
import { InterviewResult } from './interview_results.entity';
import { HrInterviewCandidate } from './hr_interview_candidates.entity';
import { Projects } from './project.entity';
import { OfficeSkills } from './office_skills.entity';
@Entity('hr_personnel')
export class Personnel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'full_name', type: 'text', nullable: true })
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

  @Column({ name: 'type_personnel', type: 'boolean', default: false })
  type_personnel: boolean;


  @Column({ type: 'text', nullable: true })
  introducer_department: string;
  @Column({ type: 'text', nullable: true })
  introducer_introducer_name: string;
  @Column({ type: 'text', nullable: true })
  introducer_phone_number: string;

  @Column({ type: 'text', nullable: true })
  @IsString()
  candidate_type: string;

  @Column({ type: 'text', nullable: true })
  @IsString()
  supplier_details?: string


  @Column({ nullable: true, type: 'int' })
  id_hr_interview_candidates?: number;


  @Column({ type: 'boolean', default: false })
  synchronize: boolean;

  /* Vị trí */
  @Column({ type: 'text', nullable: true })
  fac: string;

  @Column({ type: 'text', nullable: true })
  department: string;
  @Column({ type: 'text', nullable: true })
  team: string;

  @Column({ type: 'text', nullable: true })
  jop_position: string;

  @OneToMany(() => HrInterviewCandidate, (candidate) => candidate.personnel)
  @JoinColumn({ name: 'candidate_id' })
  candidates: HrInterviewCandidate[];


  @OneToMany(() => Family, family => family.personnel)
  @JoinColumn({ name: 'family_id' })
  families: Family[];

  @OneToMany(() => Education, education => education.personnel)
  @JoinColumn({ name: 'education_id' })
  educations: Education[];

  @OneToMany(() => Language, language => language.personnel)
  @JoinColumn({ name: 'language_id' })
  languages: Language[];

  @OneToMany(() => Experience, experience => experience.personnel)
  @JoinColumn({ name: 'experience_id' })
  experiences: Experience[];


  @OneToMany(() => InterviewResult, interview => interview.personnel)
  @JoinColumn({ name: 'interview_id' })
  interviews: InterviewResult[];

  @OneToMany(() => Projects, project => project.personnel)
  @JoinColumn({ name: 'project_id' })
  projects: Projects[];


  @OneToMany(() => OfficeSkills, office_skill => office_skill.personnel)
  @JoinColumn({ name: 'office_skill_id' })
  office_skills: OfficeSkills[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  write_date: Date
}
