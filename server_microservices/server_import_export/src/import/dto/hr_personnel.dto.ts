export class CreatePersonnelDto {
  full_name?: string;
  gender?: string;
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
  type_personnel?: boolean;
  candidate_type?: string;
  supplier_details?: string;

  // Fields not previously defined in CreatePersonnelDto
  introducer_department?: string;
  introducer_introducer_name?: string;
  introducer_phone_number?: string;
  fac?: string;
  department?: string;
  team?: string;
  jop_position?: string;
  type_of_degree?: string;
  type_classify?: string;
  employee_code?: string;
  contract_term?: string;
  line_model?: string;
  part?: string;
}
