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
  gender: string;

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

  @Column({ type: 'boolean', default: false })
  status_form: boolean;

  /* Vị trí */
  @Column({ type: 'text', nullable: true })
  fac: string;

  @Column({ type: 'text', nullable: true })
  department: string;

  @Column({ type: 'text', nullable: true })
  team: string;

  @Column({ type: 'text', nullable: true })
  jop_position: string;

  @Column({ type: 'text', nullable: true })
  type_of_degree: string;

  @Column({ type: 'text', nullable: true })
  type_classify: string;

  @Column({ type: 'text', nullable: true })
  employee_code: string;

  @Column({ type: 'text', nullable: true })
  contract_term: string;

  @Column({ type: 'text', nullable: true })
  line_model: string;

  @Column({ type: 'text', nullable: true })
  part: string;



  @Column({ nullable: true })
  erp_department_registration: string;  // Đăng ký bp trên ERP

  @Column({ nullable: true })
  production: string;

  @Column({ nullable: true })
  section: string;  // Section

  @Column({ nullable: true })
  job_field: string;  // Job field

  @Column({ nullable: true })
  position: string;  // Position

  @Column({ type: 'date', nullable: true })
  entering_day: Date;  // Entering day

  @Column({ type: 'date', nullable: true })
  leaving_day: Date;  // Leaving day

  @Column({ nullable: true })
  probation_days: number;  // PROBATION (day)

  @Column({ type: 'date', nullable: true })
  official_date_first: Date;  // OFFICIAL DATE 1st/Ngày ký HĐ lần 1

  @Column({ type: 'date', nullable: true })
  official_dateSecond: Date;  // OFFICIAL DATE 2nd/Ngày ký HĐ lần 2


  @Column({ nullable: true })
  age: number;  // Age

  @Column({ nullable: true })
  month_count: number;  // Đếm tháng

  @Column({ nullable: true })
  partner_name: string;  // Partner name

  @Column({ nullable: true })
  partner_phone_number: string;  // Partner's phone number

  @Column({ nullable: true })
  number_of_children: number;  // Số con

  @Column({ nullable: true })
  children_name_1: string;  // Children name 1

  @Column({ type: 'date', nullable: true })
  children_birth_date_1: Date;  // Children birth date 1

  @Column({ nullable: true })
  children_gender_1: string;  // Children gender 1

  @Column({ nullable: true })
  children_name_2: string;  // Children name 2

  @Column({ type: 'date', nullable: true })
  children_birth_date2: Date;  // Children date birth 2

  @Column({ nullable: true })
  children_gender_2: string;  // Children gender 2

  @Column({ nullable: true })
  children_name_3: string;  // Children name 3

  @Column({ type: 'date', nullable: true })
  children_birth_date_3: Date;  // Children date birth 3

  @Column({ nullable: true })
  children_gender_3: string;  // Children gender 3

  @Column({ nullable: true })
  father_name: string;  // Father name

  @Column({ nullable: true })
  father_phone_number: string;  // Father phone number

  @Column({ nullable: true })
  mother_name: string;  // Mother name

  @Column({ nullable: true })
  mother_phone_number: string;  // Mother phone number


  @Column({ nullable: true })
  distance_from_household_to_company: number;  // Khoảng cách từ nơi đăng ký hộ khẩu đến công ty

  @Column({ nullable: true })
  highest_education_level: string;  // Highest level of education

  @Column({ nullable: true })
  school_name: string;  // School name

  @Column({ nullable: true })
  major: string;  // Major

  @Column({ nullable: true })
  company_name_1: string;  // Company name 1

  @Column({ type: 'date', nullable: true })
  entrance_day_1: Date;  // Entrance day 1

  @Column({ type: 'date', nullable: true })
  leaving_day_1: Date;  // Leaving day 1

  @Column({ nullable: true })
  work_department_1: string;  // Bộ phận làm việc

  @Column({ nullable: true })
  work_responsibility_1: string;  // Công việc phụ trách

  @Column({ nullable: true })
  company_name_2: string;  // Company name 2

  @Column({ type: 'date', nullable: true })
  entrance_day_2: Date;  // Entrance day 2

  @Column({ type: 'date', nullable: true })
  leaving_day_2: Date;  // Leaving day 2

  @Column({ nullable: true })
  work_department_2: string;  // Bộ phận làm việc

  @Column({ nullable: true })
  work_responsibility_2: string;  // Công việc phụ trách

  @Column({ nullable: true })
  company_name_3: string;  // Company name 3

  @Column({ type: 'date', nullable: true })
  leaving_day_3: Date;  // Leaving day 3

  @Column({ nullable: true })
  work_department_3: string;  // Bộ phận làm việc

  @Column({ nullable: true })
  work_responsibility_3: string;  // Công việc phụ trách

  @Column({ nullable: true })
  social_insurance: boolean;  // ĐÓNG BHXH





































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
