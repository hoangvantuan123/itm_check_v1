// src/import/services/import.service.ts
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ImportDataDto } from '../dto/import.dto';
import { CreatePersonnelDto } from '../dto/hr_personnel.dto';
import { CreateEducationDto } from '../dto/hr_education.dto';
import { HrInterviewCandidateDTO } from '../dto/hr_interview_candidates.dto';

@Injectable()
export class ImportServices {
    private readonly logger = new Logger(ImportServices.name);

    constructor(private entityManager: EntityManager) { }

    async processImportData(data: ImportDataDto): Promise<void> {
        const { method, model, data: importData } = data;

        if (method !== 'execute_import') {
            throw new Error('Phương thức không hợp lệ');
        }

        switch (model) {
            case 'hr_personnel':
                await this.processHRPersonnelData(importData, 'hr_personnel');
                break;
            case 'hr_personnel,hr_language,hr_family,hr_experience,hr_education':
                await this.processHRPersonnelDatas(importData, 'hr_personnel,hr_language,hr_family,hr_experience,hr_education');
                break;
            case 'hr_interview_candidates':
                await this.processHRInterviewCandidates(importData, 'hr_interview_candidates');
                break;
            default:
                throw new NotFoundException(`Model ${model} không được hỗ trợ`);
        }
    }

    private async processHRPersonnelData(importData: any[], tableName: string): Promise<void> {
        const batchSize = 1000;
        const totalBatches = Math.ceil(importData.length / batchSize);

        for (let i = 0; i < totalBatches; i++) {
            const batch = importData.slice(i * batchSize, (i + 1) * batchSize);

            const validBatch: CreatePersonnelDto[] = batch.map(record => {
                return {
                    full_name: record.full_name,
                    gender: record.gender,
                    interview_date: record.interview_date,
                    start_date: record.start_date,
                    birth_date: record.birth_date,
                    id_number: record.id_number,
                    id_issue_date: record.id_issue_date,
                    ethnicity: record.ethnicity,
                    id_issue_place: record.id_issue_place,
                    insurance_number: record.insurance_number,
                    tax_number: record.tax_number,
                    phone_number: record.phone_number,
                    email: record.email,
                    alternate_phone_number: record.alternate_phone_number,
                    alternate_name: record.alternate_name,
                    alternate_relationship: record.alternate_relationship,
                    birth_address: record.birth_address,
                    birth_province: record.birth_province,
                    birth_district: record.birth_district,
                    birth_ward: record.birth_ward,
                    current_address: record.current_address,
                    current_province: record.current_province,
                    current_district: record.current_district,
                    current_ward: record.current_ward,
                    type_personnel: record.type_personnel || true,
                } as CreatePersonnelDto;
            }).filter(record => record.full_name !== undefined && record.gender !== undefined);

            if (validBatch.length === 0) {
                continue;
            }

            await this.saveBatchToTable(validBatch, tableName);
        }
    }

    private async saveBatchToTable(batch: Record<string, any>[], tableName: string): Promise<number[]> {
        const insertQuery = `INSERT INTO ${tableName} (full_name, gender, interview_date, start_date, birth_date, id_number, id_issue_date, ethnicity, id_issue_place, insurance_number, tax_number, phone_number, email, alternate_phone_number, alternate_name, alternate_relationship, birth_address, birth_province, birth_district, birth_ward, current_address, current_province, current_district, current_ward, type_personnel) VALUES `;

        const values: string[] = batch.map((record) => {
            return `(
                '${record.full_name ?? ''}', 
                '${record.gender ?? ''}', 
                ${record.interview_date ? `'${record.interview_date}'` : 'DEFAULT'}, 
                ${record.start_date ? `'${record.start_date}'` : 'DEFAULT'}, 
                ${record.birth_date ? `'${record.birth_date}'` : 'DEFAULT'}, 
                '${record.id_number ?? ''}', 
                ${record.id_issue_date ? `'${record.id_issue_date}'` : 'DEFAULT'}, 
                '${record.ethnicity ?? ''}', 
                '${record.id_issue_place ?? ''}', 
                '${record.insurance_number ?? ''}', 
                '${record.tax_number ?? ''}', 
                '${record.phone_number ?? ''}', 
                '${record.email ?? ''}', 
                '${record.alternate_phone_number ?? ''}', 
                '${record.alternate_name ?? ''}', 
                '${record.alternate_relationship ?? ''}', 
                '${record.birth_address ?? ''}', 
                '${record.birth_province ?? ''}', 
                '${record.birth_district ?? ''}', 
                '${record.birth_ward ?? ''}', 
                '${record.current_address ?? ''}', 
                '${record.current_province ?? ''}', 
                '${record.current_district ?? ''}', 
                '${record.current_ward ?? ''}', 
                ${record.type_personnel ?? 'TRUE'}
            )`;
        });
        const finalQuery = insertQuery + values.join(', ') + ' RETURNING id';
        try {
            const result = await this.entityManager.query(finalQuery);

            const personnelIds = result.map((row: { id: number }) => row.id);
            await this.saveInterviewResults(personnelIds); // Cập nhật ở đây
            return personnelIds; // Trả về ID personnel
        } catch (error) {
            this.logger.error(`Lỗi khi ghi dữ liệu vào bảng ${tableName}`, error);
            throw new NotFoundException(`Không thể ghi dữ liệu vào bảng ${tableName}`);
        }
    }

    private async saveInterviewResults(personnelIds: number[]): Promise<void> {
        const interviewEntities = personnelIds.map(personnelId => ({
            interview_result: false,
            recruitment_department: 'Default Department',
            position: 'Default Position',
            interviewer_name: 'Default Interviewer',
            appearance_criteria: 'Default Appearance',
            height: 'N/A',
            criminal_record: 'No',
            education_level: 'High School',
            reading_writing: 'Yes',
            calculation_ability: 'Yes',
            personnel_id: { id: personnelId },
        }));

        const insertQuery = `INSERT INTO hr_interview_results (personnel_id, interview_result, recruitment_department, position, interviewer_name, appearance_criteria, height, criminal_record, education_level, reading_writing, calculation_ability) VALUES `;

        const values: string[] = interviewEntities.map(entity => {
            return `(
                ${entity.personnel_id.id},
                ${entity.interview_result ? 'TRUE' : 'FALSE'},
                '${entity.recruitment_department ?? ''}',
                '${entity.position ?? ''}',
                '${entity.interviewer_name ?? ''}',
                '${entity.appearance_criteria ?? ''}',
                '${entity.height ?? ''}',
                '${entity.criminal_record ?? ''}',
                '${entity.education_level ?? ''}',
                '${entity.reading_writing ?? ''}',
                '${entity.calculation_ability ?? ''}'
            )`;
        });

        const finalQuery = insertQuery + values.join(', ');
        try {
            await this.entityManager.query(finalQuery);
            this.logger.log(`Đã ghi ${interviewEntities.length} bản ghi vào bảng hr_interview_results`);
        } catch (error) {
            this.logger.error(`Lỗi khi ghi dữ liệu vào bảng hr_interview_results`, error);
            throw new NotFoundException(`Không thể ghi dữ liệu vào bảng hr_interview_results`);
        }
    }

    private async processHRPersonnelDatas(importData: Array<{ [key: string]: any }>, tableNames: string): Promise<void> {
        const batchSize = 1000;
        const totalBatches = Math.ceil(importData.length / batchSize);
        const tables = tableNames.split(',');

        for (let i = 0; i < totalBatches; i++) {
            const batch = importData.slice(i * batchSize, (i + 1) * batchSize);
            const dataToSave: { [key: string]: Array<any> } = {};

            batch.forEach(record => {
                tables.forEach(table => {
                    if (!dataToSave[table]) {
                        dataToSave[table] = [];
                    }

                    switch (table) {
                        case 'hr_personnel':
                            if (record.full_name !== undefined && record.gender !== undefined) {
                                dataToSave[table].push({
                                    full_name: record.full_name,
                                    gender: record.gender,
                                    interview_date: record.interview_date,
                                    start_date: record.start_date,
                                    birth_date: record.birth_date,
                                    id_number: record.id_number,
                                    id_issue_date: record.id_issue_date,
                                    ethnicity: record.ethnicity,
                                    id_issue_place: record.id_issue_place,
                                    insurance_number: record.insurance_number,
                                    tax_number: record.tax_number,
                                    phone_number: record.phone_number,
                                    email: record.email,
                                    alternate_phone_number: record.alternate_phone_number,
                                    alternate_name: record.alternate_name,
                                    alternate_relationship: record.alternate_relationship,
                                    birth_address: record.birth_address,
                                    birth_province: record.birth_province,
                                    birth_district: record.birth_district,
                                    birth_ward: record.birth_ward,
                                    current_address: record.current_address,
                                    current_province: record.current_province,
                                    current_district: record.current_district,
                                    current_ward: record.current_ward,
                                    type_personnel: record.type_personnel ?? true,
                                } as CreatePersonnelDto);
                            }
                            break;

                        case 'hr_language':
                            // Handle hr_language data processing here
                            break;

                        case 'hr_family':
                            // Handle hr_family data processing here
                            break;

                        case 'hr_experience':
                            // Handle hr_experience data processing here
                            break;

                        case 'hr_education':
                            if (record.school || record.major || record.years || record.start_year || record.graduation_year || record.grade) {
                                dataToSave[table].push({
                                    school: record.school,
                                    major: record.major,
                                    years: record.years,
                                    start_year: record.start_year,
                                    graduation_year: record.graduation_year,
                                    grade: record.grade,
                                } as CreateEducationDto);
                            }
                            break;

                    }
                });
            });

            // Save data for each table
            for (const table of tables) {
                const validBatch = dataToSave[table];
                if (validBatch && validBatch.length > 0) {
                    console.log("Table:", table);
                    console.log("Data to save:", validBatch);
                    // Call your save function here, e.g., await saveData(table, validBatch);
                }
            }
        }
    }





    private async processHRInterviewCandidates(importData: any[], tableName: string): Promise<void> {
        const batchSize = 1000;
        const totalBatches = Math.ceil(importData.length / batchSize);
    
        // Truy vấn để lấy danh sách số điện thoại đã tồn tại trong bảng
        const existingPhoneNumbers = await this.getExistingPhoneNumbers(tableName);
    
        for (let i = 0; i < totalBatches; i++) {
            const batch = importData.slice(i * batchSize, (i + 1) * batchSize);
    
            const validBatch: HrInterviewCandidateDTO[] = batch.map(record => {
                return {
                    full_name: record.full_name,
                    gender: record.gender,
                    phone_number: record.phone_number,
                    current_residence: record.current_residence,
                    birth_year: record.birth_year,
                    hometown: record.hometown,
                    contractor: record.contractor,
                    job_position: record.job_position,
                    email: record.email,
                    id_card_number: record.id_card_number,
                    interview_date: record.interview_date,
                } as HrInterviewCandidateDTO;
            }).filter(record => record.full_name !== undefined && record.gender !== undefined);
    
            // Kiểm tra tính duy nhất của số điện thoại
            const filteredBatch = validBatch.filter(record => {
                return record.phone_number && !existingPhoneNumbers.has(record.phone_number);
            });
    
            if (filteredBatch.length === 0) {
                continue; // Nếu không có bản ghi hợp lệ sau khi lọc, bỏ qua
            }
    
            await this.saveBatchToTableHrInterviewCandidates(filteredBatch, tableName);
        }
    }
    
    // Hàm để lấy danh sách số điện thoại đã tồn tại trong bảng
    private async getExistingPhoneNumbers(tableName: string): Promise<Set<string>> {
        const query = `SELECT phone_number FROM ${tableName}`;
        const results = await this.entityManager.query(query);
        const phoneNumbers = new Set<string>();
    
        results.forEach((row: { phone_number: string }) => {
            if (row.phone_number) {
                phoneNumbers.add(row.phone_number);
            }
        });
    
        return phoneNumbers;
    }
    

    private async saveBatchToTableHrInterviewCandidates(batch: HrInterviewCandidateDTO[], tableName: string): Promise<number[]> {
        const insertQuery = `INSERT INTO ${tableName} (full_name, gender, phone_number, current_residence, birth_year, hometown, contractor, job_position, email, id_card_number, interview_date) VALUES `;

        const values: string[] = batch.map((record) => {
            return `(
                '${record.full_name ?? ''}', 
                '${record.gender ?? ''}', 
                '${record.phone_number ?? ''}', 
                '${record.current_residence ?? ''}', 
                ${record.birth_year ?? 'NULL'}, 
                '${record.hometown ?? ''}', 
                '${record.contractor ?? ''}', 
                '${record.job_position ?? ''}', 
                '${record.email ?? ''}', 
                '${record.id_card_number ?? ''}', 
                ${record.interview_date ? `'${record.interview_date}'` : 'DEFAULT'}
            )`;
        });

        const finalQuery = insertQuery + values.join(', ') + ' RETURNING id';

        try {
            const result = await this.entityManager.query(finalQuery);

            const ids = result.map((row: { id: number }) => row.id);
            return ids;
        } catch (error) {
            throw new NotFoundException(`Không thể ghi dữ liệu vào bảng ${tableName}`);
        }
    }




}    
