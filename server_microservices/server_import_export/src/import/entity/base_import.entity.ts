import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';


@Entity('base_import')
export class BaseImportEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    job_title: string;

    @Column({ nullable: true })
    work_phone: string;

    @Column({ nullable: true })
    mobile_phone: string;

    @Column({ nullable: true })
    work_email: string;

    @Column({ nullable: true })
    private_street: string;

    @Column({ nullable: true })
    private_street2: string;

    @Column({ nullable: true })
    private_city: string;

    @Column({ nullable: true })
    private_zip: string;

    @Column({ nullable: true })
    private_phone: string;

    @Column({ nullable: true })
    private_email: string;

    @Column({ nullable: true })
    lang: string;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    marital: string;

    @Column({ nullable: true })
    spouse_complete_name: string;

    @Column({ nullable: true })
    place_of_birth: string;

    @Column({ nullable: true })
    ssnid: string;

    @Column({ nullable: true })
    sinid: string;

    @Column({ nullable: true })
    identification_id: string;

    @Column({ nullable: true })
    passport_id: string;

    @Column({ nullable: true })
    permit_no: string;

    @Column({ nullable: true })
    visa_no: string;

    @Column({ nullable: true })
    certificate: string;

    @Column({ nullable: true })
    study_field: string;

    @Column({ nullable: true })
    study_school: string;

    @Column({ nullable: true })
    emergency_contact: string;

    @Column({ nullable: true })
    emergency_phone: string;

    @Column({ nullable: true })
    employee_type: string;

    @Column()
    employee_id: string;

    @Column({ nullable: true })
    pin: string;

    @Column({ nullable: true })
    private_car_plate: string;

    @Column({ nullable: true })
    spouse_birthdate: Date;

    @Column({ nullable: true })
    birthday: Date;

    @Column({ nullable: true })
    visa_expire: Date;
}
