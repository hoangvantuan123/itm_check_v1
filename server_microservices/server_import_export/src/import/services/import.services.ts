import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImportDataDto } from '../dto/import.dto';
import { BaseImportEntity } from '../entity/base_import.entity';

@Injectable()
export class ImportServices {
    private readonly logger = new Logger(ImportServices.name);

    constructor(
        @InjectRepository(BaseImportEntity) private baseImportRepository: Repository<BaseImportEntity>,
    ) { }

    async processImportData(data: ImportDataDto): Promise<void> {
        const { method, model, data: importData } = data;

        if (method !== 'execute_import') {
            throw new Error('Phương thức không hợp lệ');
        }

        switch (model) {
            case 'base_import.import':
                await this.processBaseImportData(importData);
                break;
            default:
                throw new NotFoundException(`Model ${model} không được hỗ trợ`);
        }
    }
    private async processBaseImportData(importData: any[]): Promise<void> {
        const batchSize = 1000;
        const totalBatches = Math.ceil(importData.length / batchSize);

        for (let i = 0; i < totalBatches; i++) {
            const batch = importData.slice(i * batchSize, (i + 1) * batchSize);
            await this.baseImportRepository.save(batch);
        }
    }

}
