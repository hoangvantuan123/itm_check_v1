import { useState, useEffect,lazy, Suspense } from 'react';
import { Form, Button, Steps, message, Spin } from 'antd';

const FamilyInfoTable = lazy(() => import('../components/jobs/familyInfoTable'));
const EducationLanguageTable = lazy(() => import('../components/jobs/educationLanguageTable'));
const OfficeSkillsTable = lazy(() => import('../components/jobs/officeSkillsTable'));
const WorkExperienceTable = lazy(() => import('../components/jobs/workExperienceTable'));
const IntroducedRelativeTable = lazy(() => import('../components/jobs/introducedRelativeTable'));
const ApplicationInformation = lazy(() => import('../components/jobs/applicationInformation'));
const PersonalInformation = lazy(() => import('../components/jobs/personalInformation'));
const CandidateType = lazy(() => import('../components/jobs/candidateType'));

const { Step } = Steps;

const MultiStepFormPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSupplier, setIsSupplier] = useState(false);
  const [form] = Form.useForm();

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };

   
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        };
      } else if (currentStep === 2) {
        updatedData.applicationData = currentValues;
      }

      setFormData(updatedData);
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
      console.log('Dữ liệu cuối cùng gửi đi:', finalData);
    }
  };

  const steps = [
    {
      title: 'Thông Tin Cá Nhân',
      content: (
        <Suspense fallback={<Spin />}>
          <CandidateType isSupplier={isSupplier} handleCheckboxChange={handleCheckboxChange} />
          <PersonalInformation form={form} />
        </Suspense>
      ),
    },
    {
      title: 'Vị trí ứng tuyển',
      content: (
        <Suspense fallback={<Spin />}>
          <ApplicationInformation form={form} />
        </Suspense>
      ),
    },
    {
      title: 'Thông tin gia đình',
      content: (
        <Suspense fallback={<Spin />}>
          <FamilyInfoTable form={form} isMobile={isMobile} />
        </Suspense>
      ),
    },
    {
      title: 'Học vấn và Kỹ năng',
      content: (
        <Suspense fallback={<Spin />}>
          <EducationLanguageTable form={form} />
          <OfficeSkillsTable form={form} formData={formData} />
          <WorkExperienceTable form={form} />
        </Suspense>
      ),
    },
    {
      title: 'Vị trí ứng tuyển',
      content: (
        <Suspense fallback={<Spin />}>
          <ApplicationInformation form={form} />
          <IntroducedRelativeTable form={form} />
        </Suspense>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen overflow-auto p-3">
      <div className="lg:max-w-5xl w-full h-screen">
        <h1 className="text-2xl font-bold text-center p-4">TỜ KHAI ỨNG VIÊN</h1>
        <p className="text-center mb-4">Mẫu tờ khai thông tin cá nhân online</p>

        <Form form={form} layout="vertical" className="pb-10">
          {steps[currentStep].content}
          <Form.Item className="mt-4 w-full flex relative gap-4 justify-between">
  <Button className="flex-1" type="default" size="large" onClick={prevStep} disabled={currentStep === 0}>
    Quay Lại
  </Button>

  <Button size="large" className=" ml-3 flex-1 border-gray-200 bg-indigo-600 text-white text-sm" onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}>
    {currentStep === steps.length - 1 ? 'Gửi thông tin' : 'Tiếp Theo'}
  </Button>
</Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MultiStepFormPage;
