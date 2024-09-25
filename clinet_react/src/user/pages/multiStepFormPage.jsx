import { useState } from 'react';
import { Form, Button, Steps, message } from 'antd';

import FamilyInfoTable from '../components/jobs/familyInfoTable';
import EducationLanguageTable from '../components/jobs/educationLanguageTable';
import OfficeSkillsTable from '../components/jobs/officeSkillsTable';
import WorkExperienceTable from '../components/jobs/workExperienceTable';
import IntroducedRelativeTable from '../components/jobs/introducedRelativeTable';
import ApplicationInformation from '../components/jobs/applicationInformation';
import PersonalInformation from '../components/jobs/personalInformation';
import CandidateType from '../components/jobs/candidateType';

const { Step } = Steps;

const MultiStepFormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSupplier, setIsSupplier] = useState(false);
  const [form] = Form.useForm();

  // State để lưu dữ liệu của tất cả các bước
  const [formData, setFormData] = useState({
    familyData: {},
    educationData: {},
    officeSkillsData: {
      officeSkills: [],
      softwareSkills: [],
    },
    workExperienceData: {},
    applicationData: {},
  });

  const handleCheckboxChange = (event) => {
    const selectedValue = event.target.value; 
    setIsSupplier(selectedValue === 'Supplier');
  };

  const validateCurrentStep = async () => {
    try {
      await form.validateFields();
      return true;
    } catch (errorInfo) {
      message.error('Vui lòng điền vào tất cả các trường bắt buộc!');
      return false;
    }
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      const currentValues = form.getFieldsValue(); 

      // Lưu dữ liệu của bước hiện tại vào state tương ứng
      const updatedData = { ...formData };
      if (currentStep === 0) {
        updatedData.familyData = currentValues; 
      } else if (currentStep === 1) {
        updatedData.educationData = currentValues; 
        updatedData.officeSkillsData = {
          officeSkills: currentValues.officeSkills,
          softwareSkills: currentValues.softwareSkills,
        }; // Lưu dữ liệu kỹ năng vào formData
      } else if (currentStep === 2) {
        updatedData.applicationData = currentValues; 
      }

      setFormData(updatedData); 

      console.log('Tổng hợp dữ liệu các trang trước:', updatedData);

      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1)); 
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      const finalData = { ...formData, ...form.getFieldsValue() };
      console.log("Dữ liệu cuối cùng gửi đi:", finalData);
    }
  };

  const steps = [
    {
      title: 'Thông Tin Cá Nhân',
      content: (
        <>
          <CandidateType isSupplier={isSupplier} handleCheckboxChange={handleCheckboxChange} />
          <PersonalInformation form={form} />
          <FamilyInfoTable form={form} />
        </>
      ),
    },
    {
      title: 'Học vấn và Kỹ năng',
      content: (
        <>
          <EducationLanguageTable form={form} />
          <OfficeSkillsTable form={form} formData={formData} /> 
          <WorkExperienceTable form={form} />
        </>
      ),
    },
    {
      title: 'Vị trí ứng tuyển',
      content: (
        <>
          <ApplicationInformation form={form} />
          <IntroducedRelativeTable form={form} />
        </>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen overflow-auto p-3">
      <div className="lg:max-w-5xl w-full h-screen">
        <h1 className="text-2xl font-bold text-center p-4">TỜ KHAI ỨNG VIÊN</h1>
        <p className="text-center mb-4">Mẫu tờ khai thông tin cá nhân online</p>

        <Steps current={currentStep} className="mb-4">
          {steps.map((step) => (
            <Step key={step.title} title={step.title} className="flex items-center" />
          ))}
        </Steps>

        <Form form={form} layout="vertical" className="pb-10">
          {steps[currentStep].content}
          <Form.Item className="mt-4">
            <Button type="default" onClick={prevStep} disabled={currentStep === 0}>
              Quay Lại
            </Button>
            <Button
              className="ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
              onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
            >
              {currentStep === steps.length - 1 ? 'Gửi thông tin' : 'Tiếp Theo'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MultiStepFormPage;
