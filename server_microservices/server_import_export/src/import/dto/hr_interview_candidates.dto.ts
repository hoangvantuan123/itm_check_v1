export class HrInterviewCandidateDTO {
    full_name: string;
    gender: 'Male' | 'Female' | 'Other';
    phone_number: string;
    current_residence?: string;
    birth_year?: number;
    hometown?: string;
    contractor?: string;
    job_position?: string;
    email?: string;
    id_card_number?: string;
    interview_date?: Date;
}
