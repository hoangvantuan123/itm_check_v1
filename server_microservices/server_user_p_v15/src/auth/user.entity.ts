import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column({ default: '' })
  firstName: string;

  @Column({ default: '' })
  lastName: string;

  @Column({ default: '' })
  picture: string;

  @Column({ default: '' })
  accessToken: string;
  
  @Column({ default: '' })
  refreshToken: string;

  @Column({ default: '' })
  password: string;

  beforeInsert() {
    this.id = uuidv4();
    this.hashPassword();
  }

  private hashPassword() {
    const saltRounds = 10;
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }
}