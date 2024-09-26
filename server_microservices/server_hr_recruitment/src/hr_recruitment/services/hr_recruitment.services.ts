import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personnel } from '../entity/personnel.entity';
import { Family } from '../entity/family.entity';
import { Education } from '../entity/education.entity';
import { Language } from '../entity/language.entity';
import { Experience } from '../entity/experience.entity';
import { CreatePersonnelWithDetailsDto } from '../dto/create-personnel-with-details.dto';

@Injectable()
export class HrRecruitmentServices {
    private readonly logger = new Logger(HrRecruitmentServices.name);

    constructor(
        @InjectRepository(Personnel)
        private readonly personnelRepository: Repository<Personnel>,
        @InjectRepository(Family)
        private readonly familyRepository: Repository<Family>,
        @InjectRepository(Education)
        private readonly educationRepository: Repository<Education>,
        @InjectRepository(Language)
        private readonly languageRepository: Repository<Language>,
        @InjectRepository(Experience)
        private readonly experienceRepository: Repository<Experience>,
    ) { }

    async create(
        createPersonnelWithDetailsDto: CreatePersonnelWithDetailsDto,
    ): Promise<{ success: boolean; message: string; data?: Personnel }> {
        try {
            const { families, educations, languages, experiences, ...personnelData } = createPersonnelWithDetailsDto;

            const personnel = this.personnelRepository.create(personnelData);
            const savedPersonnel = await this.personnelRepository.save(personnel);

            if (families) {
                const familyEntities = families.map(family => ({
                    ...family,
                    personnel: savedPersonnel,
                }));
                await this.familyRepository.save(familyEntities);
            }

            if (educations) {
                const educationEntities = educations.map(education => ({
                    ...education,
                    personnel: savedPersonnel,
                }));
                await this.educationRepository.save(educationEntities);
            }

            if (languages) {
                const languageEntities = languages.map(language => ({
                    ...language,
                    personnel: savedPersonnel,
                }));
                await this.languageRepository.save(languageEntities);
            }

            if (experiences) {
                const experienceEntities = experiences.map(experience => ({
                    ...experience,
                    personnel: savedPersonnel,
                }));
                await this.experienceRepository.save(experienceEntities);
            }

            return {
                success: true,
                message: 'Personnel and related details created successfully',
                data: savedPersonnel,
            };
        } catch (error) {
            this.logger.error('Error creating personnel with details', error.stack);

            return {
                success: false,
                message: 'Failed to create personnel with details',
            };
        }
    }
}
