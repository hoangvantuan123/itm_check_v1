import { useState } from 'react'
import { Form, Button, Steps, message } from 'antd'
import { useNavigate } from 'react-router-dom';

import FamilyInfoTable from '../components/workerDeclaration/familyInfoTable'
import EducationLanguageTable from '../components/workerDeclaration/educationLanguageTable'
import WorkExperienceTable from '../components/workerDeclaration/workExperienceTable'
import PersonalInformation from '../components/workerDeclaration/personalInformation'
import CandidateType from '../components/workerDeclaration/candidateType'
import { PostPublicHrRecryutment } from '../../features/hrRecruitment/postPublicHrRecruitment'

const { Step } = Steps

const WorkerDeclarationMultiStepForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0)
  const [isSupplier, setIsSupplier] = useState(false)
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    familyData: {},
    educationData: {},
    officeSkillsData: {
      officeSkills: [],
      softwareSkills: [],
    },
    workExperienceData: {},
    applicationData: {},
  })

  const handleCheckboxChange = (event) => {
    const selectedValue = event.target.value
    setIsSupplier(selectedValue === 'Supplier')
  }

  const validateCurrentStep = async () => {
    try {
      await form.validateFields()
      return true
    } catch (errorInfo) {
      message.error('Vui lòng điền vào tất cả các trường bắt buộc!')
      return false
    }
  }

  const nextStep = async () => {
    const isValid = await validateCurrentStep()
    if (isValid) {
      const currentValues = form.getFieldsValue()

      const updatedData = { ...formData }
      if (currentStep === 0) {
        updatedData.familyData = currentValues
      } else if (currentStep === 1) {
        updatedData.educationData = currentValues
        updatedData.officeSkillsData = {
          officeSkills: currentValues.officeSkills,
          softwareSkills: currentValues.softwareSkills,
        } // Lưu dữ liệu kỹ năng vào formData
      } else if (currentStep === 2) {
        updatedData.applicationData = currentValues
      }

      setFormData(updatedData)


      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
        if (isSubmitting) return;

        setIsSubmitting(true);

        const finalData = { ...formData, ...form.getFieldsValue() };

        const data = {
            full_name: finalData?.fullName,
            gender: finalData?.gender,
            interview_date: finalData?.interviewDate,
            start_date: finalData.startDate,
            birth_date: finalData?.dob,
            id_number: finalData?.idNumber,
            id_issue_date: finalData?.issuedDate,
            ethnicity: finalData?.ethnicity,
            id_issue_place: finalData?.issuedPlace,
            insurance_number: finalData?.insuranceNumber,
            tax_number: finalData?.taxCode,
            phone_number: finalData?.phone,
            email: finalData?.email,
            alternate_phone_number: finalData?.emergencyPhone,
            alternate_name: finalData?.emergencyContactName,
            alternate_relationship: finalData?.emergencyContactRelation,
            birth_address: finalData?.birthAddress,
            birth_province: finalData?.birthProvince,
            birth_district: finalData?.birthDistrict,
            birth_ward: finalData?.birthCommune,
            current_address: finalData?.currentAddress,
            current_province: finalData?.currentProvince,
            current_district: finalData?.currentDistrict,
            current_ward: finalData?.currentCommune,

            families: finalData?.familyMembers?.map(family => ({
                relationship: family?.relationship,
                full_name: family?.name_family,
                birth_year: family?.birthYear,
                workplace: family?.workplace,
                job: family?.job,
                phone_number: family?.phoneNumber,
                living_together: family?.livingTogether,
            })) || [],
            educations: finalData.educationData?.map(education => ({
                school: education?.schoolName,
                major: education?.major,
                years: education?.endYear,
                start_year: education?.startYear,
                graduation_year: education?.endYear,
                grade: education?.grade,
            })) || [],
            languages: finalData.languageData?.map(language => ({
                language: language?.language,
                certificate_type: language?.certificateType,
                score: language?.score,
                level: language.level,
                start_date: language.startDate,
                end_date: language.endDate,
                has_bonus: language.note,
            })) || [],
            experiences: finalData.workExperiences?.map(experience => ({
                company_name: experience.companyName,
                position: experience.position,
                start_date: experience.joinYear,
                end_date: experience.leaveYear,
                employee_scale: experience.employeeScale,
                tasks: experience.tasks,
                salary: experience.salary,
                description: experience.reasonForLeaving,
            })) || [],
        };

        try {
            await PostPublicHrRecryutment(data);
            navigate('/apply/thong-bao');
        } catch (error) {
            alert('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.');
        } finally {
            setIsSubmitting(false);
        }
    }
}

  const steps = [
    {
      title: 'Thông Tin Cá Nhân',
      content: (
        <>
          <CandidateType
            isSupplier={isSupplier}
            handleCheckboxChange={handleCheckboxChange}
          />
          <PersonalInformation form={form} />
          <FamilyInfoTable form={form} />
          <EducationLanguageTable form={form} />
          <WorkExperienceTable form={form} />
        </>
      ),
    },
  ]

  return (
    <div className="flex items-center justify-center h-screen overflow-auto p-3">
      <div className="lg:max-w-5xl w-full h-screen">
        <h1 className="text-2xl font-bold text-center p-4">TỜ KHAI ỨNG VIÊN</h1>
        <p className="text-center mb-4">Mẫu tờ khai thông tin cá nhân online</p>

        <Steps current={currentStep} className="mb-4">
          {steps.map((step) => (
            <Step
              key={step.title}
              title={step.title}
              className="flex items-center"
            />
          ))}
        </Steps>

        <Form form={form} layout="vertical" className="pb-10">
          {steps[currentStep].content}
          <Form.Item className="mt-4">
            <Button
              type="default"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Quay Lại
            </Button>
            <Button
              className="ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
              onClick={
                handleSubmit
              }
            >
              Gửi thông tin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default WorkerDeclarationMultiStepForm
