import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ImportDataDto } from '../dto/import.dto';
import { CreatePersonnelDto } from '../dto/hr_personnel.dto';

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
            default:
                throw new NotFoundException(`Model ${model} không được hỗ trợ`);
        }
    }

    private async processHRPersonnelData(importData: any[], tableName: string): Promise<void> {
        const batchSize = 1000;
        const totalBatches = Math.ceil(importData.length / batchSize);

        for (let i = 0; i < totalBatches; i++) {
            const batch = importData.slice(i * batchSize, (i + 1) * batchSize);

            const validBatch = batch.map(record => {
                const {
                    full_name,
                    gender,
                    interview_date,
                    start_date,
                    birth_date,
                    id_number,
                    id_issue_date,
                    ethnicity,
                    id_issue_place,
                    insurance_number,
                    tax_number,
                    phone_number,
                    email,
                    alternate_phone_number,
                    alternate_name,
                    alternate_relationship,
                    birth_address,
                    birth_province,
                    birth_district,
                    birth_ward,
                    current_address,
                    current_province,
                    current_district,
                    current_ward,
                    type_personnel
                } = record;

                return {
                    full_name,
                    gender,
                    interview_date,
                    start_date,
                    birth_date,
                    id_number,
                    id_issue_date,
                    ethnicity,
                    id_issue_place,
                    insurance_number,
                    tax_number,
                    phone_number,
                    email,
                    alternate_phone_number,
                    alternate_name,
                    alternate_relationship,
                    birth_address,
                    birth_province,
                    birth_district,
                    birth_ward,
                    current_address,
                    current_province,
                    current_district,
                    current_ward,
                    type_personnel
                };
            }).filter(record => record.full_name !== undefined && record.gender !== undefined); 

            if (validBatch.length === 0) {
                this.logger.warn(`Không có bản ghi hợp lệ trong batch số ${i + 1}`);
                continue; 
            }

            await this.saveBatchToTable(validBatch, tableName);
        }
    }


    private async saveBatchToTable(batch: CreatePersonnelDto[], tableName: string): Promise<void> {
        try {
            await this.entityManager
                .createQueryBuilder()
                .insert()
                .into(tableName)
                .values(batch)
                .execute();

            this.logger.log(`Đã ghi ${batch.length} bản ghi vào bảng ${tableName}`);
        } catch (error) {
            this.logger.error(`Lỗi khi ghi dữ liệu vào bảng ${tableName}`, error);
            throw new NotFoundException(`Không thể ghi dữ liệu vào bảng ${tableName}`);
        }
    }






    
}