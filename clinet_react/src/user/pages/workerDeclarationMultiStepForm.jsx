import { useState, useCallback } from 'react'
import { Form, Button, message, Drawer, Spin } from 'antd'
import { useNavigate } from 'react-router-dom'

import FamilyInfoTable from '../components/workerDeclaration/familyInfoTable'
import EducationLanguageTable from '../components/workerDeclaration/educationLanguageTable'
import WorkExperienceTable from '../components/workerDeclaration/workExperienceTable'
import PersonalInformation from '../components/workerDeclaration/personalInformation'
import CandidateType from '../components/workerDeclaration/candidateType'
import { PostPublicHrRecryutment } from '../../features/hrRecruitment/postPublicHrRecruitment'

const WorkerDeclarationMultiStepForm = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [isSupplier, setIsSupplier] = useState(false)
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
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
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  const handleCheckboxChange = useCallback((event) => {
    setIsSupplier(event.target.value === 'Supplier')
  }, [])

  const validateCurrentStep = async () => {
    try {
      await form.validateFields()
      return true
    } catch (errorInfo) {
      message.error('Vui lòng điền vào tất cả các trường bắt buộc!')
      return false
    }
  }

  const filterEmptyFields = (data) => {
    return Object.fromEntries(
      Object.entries(data).filter(
        ([key, value]) => value !== '' && value !== undefined && value !== null,
      ),
    )
  }

  const formatSubmissionData = (finalData) => {
    const result = {
      full_name: finalData?.fullName,
      gender: finalData?.gender,
      interview_date: finalData?.interviewDate,
      birth_date: finalData?.dob,
      id_number: finalData?.idNumber,
      id_issue_date: finalData?.issuedDate,
      ethnicity: finalData?.ethnicity,
      phone_number: finalData?.phone,
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
      type: true,
      families:
        finalData?.familyMembers?.map((family) => ({
          relationship: family?.relationship,
          full_name: family?.name_family || null,
          birth_year: family?.birthYear,
          workplace: family?.workplace,
          job: family?.job,
          phone_number: family?.phoneNumber,
          living_together: family?.livingTogether,
        })) || [],
      educations:
        finalData?.educationData?.map((education) => ({
          school: education?.schoolName || null,
          major: education?.major,
          years: education?.endYear,
          start_year: education?.startYear,
          graduation_year: education?.endYear,
          grade: education?.grade,
        })) || [],
      languages:
        finalData?.languageData?.map((language) => ({
          language: language?.language,
          certificate_type: language?.certificateType,
          score: language?.score,
          level: language.level,
          start_date: language.startDate,
          end_date: language.endDate,
          has_bonus: language.note,
        })) || [],
      experiences:
        finalData?.workExperiences?.map((experience) =>
          filterEmptyFields({
            company_name: experience?.companyName || 'null',
            position: experience.position,
            start_date: experience.joinYear,
            end_date: experience.leaveYear,
            employee_scale: experience.employeeScale,
            tasks: experience.tasks,
            salary: experience.salary,
            description: experience.reasonForLeaving,
          }),
        ) || [],
    }

    // Loại bỏ các thuộc tính có giá trị rỗng trong toàn bộ kết quả
    return filterEmptyFields(result)
  }

  const handleSubmit = async () => {
    const isValid = await validateCurrentStep()
    if (isValid) {
      setIsDrawerVisible(true)
    }
  }

  const handleDrawerSubmit = async () => {
    setIsSubmitting(true)
    const finalData = { ...formData, ...form.getFieldsValue() }
    const submissionData = formatSubmissionData(finalData)

    try {
      const response = await PostPublicHrRecryutment(submissionData)
      if (response.success) {
        navigate('/public/apply/thong-bao')
      } else {
        message.error('Có lỗi xảy ra khi gửi thông tin!')
      }
    } catch (error) {
      message.error('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại!')
    } finally {
      setIsSubmitting(false)
      setIsDrawerVisible(false) // Đóng Drawer sau khi gửi xong
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
        <h1 className="text-2xl font-bold text-center p-4">
          MẪU KHAI ỨNG VIÊN
        </h1>
        <p className="text-center mb-4">Mẫu tờ khai thông tin cá nhân online</p>

        <Form form={form} layout="vertical" className="pb-10">
          {steps[currentStep].content}
          <Form.Item className="mt-4">
            <Button
              className=" w-full bg border py-6 border-indigo-600 bg-indigo-600 text-white"
              onClick={handleSubmit}
              size="large"
              loading={isSubmitting}
            >
              Gửi thông tin
            </Button>
          </Form.Item>
        </Form>

        {/* Drawer xác nhận */}
        <Drawer
          placement="bottom"
          onClose={() => setIsDrawerVisible(false)}
          visible={isDrawerVisible}
          height={600}
          closable={false}
        >
          {isSubmitting ? (
            <div className="flex justify-center items-center h-full">
              <Spin tip="Đang gửi thông tin..." />
            </div>
          ) : (
            <div className="flex flex-col  items-center justify-between h-full pt-32">
              <div className="text-center mb-6">
                <p className="text-base text-gray-500 mt-4">
                  Cảm ơn bạn đã cung cấp thông tin. Chúng tôi cam kết bảo mật dữ
                  liệu theo quy định.
                </p>
                <p className="text-xs text-gray-400 mt-2 italic">
                  Lưu ý: Nếu phát hiện thông tin không chính xác, đơn của bạn có
                  thể bị từ chối mà không cần thông báo trước.
                </p>
              </div>

              <div className="flex w-full  flex-col   gap-3 mt-10">
                <Button
                  onClick={handleDrawerSubmit}
                  loading={isSubmitting}
                  size="large"
                  className=" w-full bg border py-6 border-indigo-600 bg-indigo-600 text-white"
                >
                  Chấp nhận và gửi
                </Button>
                <Button
                  onClick={() => setIsDrawerVisible(false)}
                  size="large"
                  className="py-6 bg-white"
                >
                  Hủy
                </Button>
              </div>
            </div>
          )}
        </Drawer>
      </div>
    </div>
  )
}

export default WorkerDeclarationMultiStepForm
