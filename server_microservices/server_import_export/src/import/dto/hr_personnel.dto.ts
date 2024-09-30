export class CreatePersonnelDto {
  full_name: string;
  gender: 'Male' | 'Female' | 'Other';
  interview_date?: Date;
  start_date?: Date;
  birth_date?: Date;
  id_number?: string;
  id_issue_date?: Date;
  ethnicity?: string;
  id_issue_place?: string;
  insurance_number?: string;
  tax_number?: string;
  phone_number?: string;
  email?: string;
  alternate_phone_number?: string;
  alternate_name?: string;
  alternate_relationship?: string;
  birth_address?: string;
  birth_province?: string;
  birth_district?: string;
  birth_ward?: string;
  current_address?: string;
  current_province?: string;
  current_district?: string;
  current_ward?: string;
  house_street_village?: string;
}
