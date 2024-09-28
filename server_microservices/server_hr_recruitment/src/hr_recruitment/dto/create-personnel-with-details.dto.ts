import { IsString, IsOptional, IsEnum, IsDateString, ValidateNested, IsArray, IsInt, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

class CreateFamilyDto {
  @IsString()
  relationship: 'Father' | 'Mother' | 'Spouse' | 'Sibling' | 'Child';

  @IsString()
  @IsOptional()
  full_name?: string;

  @IsInt()
  @IsOptional()
  birth_year?: number;

  @IsString()
  @IsOptional()
  workplace?: string;

  @IsString()
  @IsOptional()
  job?: string;

  @IsString()
  @IsOptional()
  phone_number?: string; // Có thể là tùy chọn

  @IsBoolean()
  @IsOptional()
  living_together?: boolean;
}

class CreateEducationDto {
  @IsString()
  @IsOptional()
  school?: string;

  @IsString()
  @IsOptional()
  major?: string;

  @IsInt()
  @IsOptional()
  years?: number;

  @IsInt()
  @IsOptional()
  start_year?: number;

  @IsInt()
  @IsOptional()
  graduation_year?: number;

  @IsString()
  @IsOptional()
  grade?: 'Excellent' | 'Good' | 'Average' | 'Poor';
}

class CreateLanguageDto {
  @IsString()
  language: string;

  @IsString()
  @IsOptional()
  certificate_type?: string;

  @IsOptional()
  score?: number;

  @IsString()
  @IsOptional()
  level?: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';

  @IsDateString()
  @IsOptional()
  start_date?: string;

  @IsDateString()
  @IsOptional()
  end_date?: string;

  @IsString()
  @IsOptional()
  has_bonus?: string;
}

class CreateExperienceDto {
  @IsString()
  company_name: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsOptional()
  start_date?: number;

  @IsOptional()
  end_date?: number;

  @IsString()
  @IsOptional()
  employee_scale?: string;

  @IsString()
  @IsOptional()
  tasks?: string;

  @IsString()
  @IsOptional()
  salary?: string; // Hoặc kiểu khác, tùy thuộc vào cách lưu trữ

  @IsString()
  @IsOptional()
  description?: string;
}

export class CreatePersonnelWithDetailsDto {
  @IsString()
  full_name: string;

  @IsEnum(['Male', 'Female', 'Other'])
  gender: 'Male' | 'Female' | 'Other';

  @IsDateString()
  @IsOptional()
  interview_date?: string;

  @IsDateString()
  @IsOptional()
  start_date?: string;

  @IsDateString()
  @IsOptional()
  birth_date?: string;

  @IsString()
  @IsOptional()
  id_number?: string;

  @IsDateString()
  @IsOptional()
  id_issue_date?: string; // Mới thêm

  @IsString()
  @IsOptional()
  ethnicity?: string;

  @IsString()
  @IsOptional()
  id_issue_place?: string;

  @IsString()
  @IsOptional()
  insurance_number?: string;

  @IsString()
  @IsOptional()
  tax_number?: string;

  @IsString()
  @IsOptional()
  phone_number?: string; // Đã thêm

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  alternate_phone_number?: string; // Đã thêm

  @IsString()
  @IsOptional()
  alternate_name?: string; // Đã thêm

  @IsString()
  @IsOptional()
  alternate_relationship?: string; // Đã thêm

  @IsString()
  @IsOptional()
  birth_address?: string; // Đã thêm

  @IsString()
  @IsOptional()
  birth_province?: string; // Đã thêm

  @IsString()
  @IsOptional()
  birth_district?: string; // Đã thêm

  @IsString()
  @IsOptional()
  birth_ward?: string; // Đã thêm

  @IsString()
  @IsOptional()
  current_address?: string; // Đã thêm

  @IsString()
  @IsOptional()
  current_province?: string; // Đã thêm

  @IsString()
  @IsOptional()
  current_district?: string; // Đã thêm

  @IsString()
  @IsOptional()
  current_ward?: string; // Đã thêm

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateFamilyDto)
  families?: CreateFamilyDto[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateEducationDto)
  educations?: CreateEducationDto[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateLanguageDto)
  languages?: CreateLanguageDto[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateExperienceDto)
  experiences?: CreateExperienceDto[];
}
