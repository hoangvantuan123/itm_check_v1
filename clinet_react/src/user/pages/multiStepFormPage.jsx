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
  const [showIsSupplier, setShowIsSupplier] = useState(null);
  const [form] = Form.useForm();
  const handleCheckboxChange = (event) => {
    const selectedValue = event.target.value; 
    setShowIsSupplier(selectedValue);

    if (selectedValue === 'Supplier') {
      setIsSupplier(true);
    } else {
      setIsSupplier(false);
    }
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
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
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
          <EducationLanguageTable form={form} /> {/* Pass form instance */}
          <OfficeSkillsTable form={form} /> {/* Pass form instance */}
          <WorkExperienceTable form={form} /> {/* Pass form instance */}
        </>
      ),
    },
    {
      title: 'Vị trí ứng tuyển',
      content: (
        <>
          <ApplicationInformation form={form} /> {/* Pass form instance */}
          <IntroducedRelativeTable form={form} /> {/* Pass form instance */}
        </>
      ),
    },
  ];
  const handleSubmit = (values) => {
    console.log('Submitted values:', values); // Log all form values
  };

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

        <Form form={form} onFinish={handleSubmit} layout="vertical" className="pb-10">
          {steps[currentStep].content}
          <Form.Item className="mt-4">
            <Button type="default" onClick={prevStep} disabled={currentStep === 0}>
              Quay Lại
            </Button>
            <Button
              className="ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
              /*   onClick={nextStep} */
              onClick={() => form.submit()}
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
