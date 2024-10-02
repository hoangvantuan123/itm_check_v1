import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database.module';
import { Family } from './entity/family.entity';
import { Personnel } from './entity/personnel.entity';
import { Language } from './entity/language.entity';
import { Experience } from './entity/experience.entity';
import { Education } from './entity/education.entity';
import { HrRecruitmentController } from './controller/hr_recruitment.controller';
import { HrRecruitmentServices } from './services/hr_recruitment.services';
import { InterviewResult } from './entity/interview_results.entity';
import { HrInterviewServices } from './services/hr_interview.services';
import { HrInterviewController } from './controller/hr_interview.controller';
import { HrInterviewCandidate } from './entity/hr_interview_candidates.entity';
import { HrInterviewCandidatesController } from './controller/hr_interview_candidate.controller';
import { HrInterviewCandidatesService } from './services/hr_interview_candidate.services';
@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Family, Personnel, Language,Experience,Education , InterviewResult , HrInterviewCandidate]),
   
  ],
  providers: [HrRecruitmentServices, HrInterviewServices, HrInterviewCandidatesService],
  controllers: [HrRecruitmentController, HrInterviewController, HrInterviewCandidatesController],
  exports: [],
})
export class HrRecruitment { }
