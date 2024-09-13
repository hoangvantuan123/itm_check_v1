import {
  Button,
  Avatar,
  Form,
  Input,
  Typography,
  Select,
  DatePicker,
} from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DefaultAvatar from '../../../../assets/default-avatar.png'
import '../static/css/scroll_container.css'
const { Title } = Typography
const { Option } = Select

export default function KeyMenu01() {
  const { t } = useTranslation()
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const [firstName, setFirstName] = useState(
    userFromLocalStorage?.firstName || '',
  )
  const [lastName, setLastName] = useState(userFromLocalStorage?.lastName || '')
  const [email, setEmail] = useState(userFromLocalStorage?.email || '')
  const [mobile, setMobile] = useState(userFromLocalStorage?.mobile || '')
  const [companyPhone, setCompanyPhone] = useState(
    userFromLocalStorage?.companyPhone || '',
  )
  const [workEmail, setWorkEmail] = useState(
    userFromLocalStorage?.workEmail || '',
  )
  const [workLocation, setWorkLocation] = useState(
    userFromLocalStorage?.workLocation || '',
  )
  const [address1, setAddress1] = useState(userFromLocalStorage?.address1 || '')
  const [address2, setAddress2] = useState(userFromLocalStorage?.address2 || '')
  const [city, setCity] = useState(userFromLocalStorage?.city || '')
  const [postalCode, setPostalCode] = useState(
    userFromLocalStorage?.postalCode || '',
  )
  const [country, setCountry] = useState(userFromLocalStorage?.country || '')
  const [bankAccount, setBankAccount] = useState(
    userFromLocalStorage?.bankAccount || '',
  )
  const [homeDistance, setHomeDistance] = useState(
    userFromLocalStorage?.homeDistance || '',
  )
  const [citizenshipCountry, setCitizenshipCountry] = useState(
    userFromLocalStorage?.citizenshipCountry || '',
  )
  const [idNumber, setIdNumber] = useState(userFromLocalStorage?.idNumber || '')
  const [socialSecurity, setSocialSecurity] = useState(
    userFromLocalStorage?.socialSecurity || '',
  )
  const [passportNumber, setPassportNumber] = useState(
    userFromLocalStorage?.passportNumber || '',
  )
  const [gender, setGender] = useState(userFromLocalStorage?.gender || '')
  const [birthDate, setBirthDate] = useState(
    userFromLocalStorage?.birthDate
      ? moment(userFromLocalStorage?.birthDate)
      : null,
  )
  const [birthPlace, setBirthPlace] = useState(
    userFromLocalStorage?.birthPlace || '',
  )
  const [maritalStatus, setMaritalStatus] = useState(
    userFromLocalStorage?.maritalStatus || '',
  )
  const [education, setEducation] = useState(
    userFromLocalStorage?.education || '',
  )
  const [certification, setCertification] = useState(
    userFromLocalStorage?.certification || '',
  )
  const [researchField, setResearchField] = useState(
    userFromLocalStorage?.researchField || '',
  )
  const [school, setSchool] = useState(userFromLocalStorage?.school || '')
  const [dependents, setDependents] = useState(
    userFromLocalStorage?.dependents || '',
  )
  const [emergencyContactName, setEmergencyContactName] = useState(
    userFromLocalStorage?.emergencyContactName || '',
  )
  const [emergencyContactPhone, setEmergencyContactPhone] = useState(
    userFromLocalStorage?.emergencyContactPhone || '',
  )
  const [visaNumber, setVisaNumber] = useState(
    userFromLocalStorage?.visaNumber || '',
  )
  const [workPermitNumber, setWorkPermitNumber] = useState(
    userFromLocalStorage?.workPermitNumber || '',
  )
  const [visaExpiryDate, setVisaExpiryDate] = useState(
    userFromLocalStorage?.visaExpiryDate
      ? moment(userFromLocalStorage?.visaExpiryDate)
      : null,
  )
  const avatar = userFromLocalStorage?.avatar || DefaultAvatar // Đặt ảnh đại diện mặc định

  const onFinish = (values) => {
    setEmail(values.email)
    // Xử lý lưu dữ liệu ở đây
  }

  const handleLogout = () => {
    window.location.href = `/u/login`
  }

  return (
    <div className="h-full overflow-auto scrollable-content  overflow-y-auto scroll-container">
      <Title level={4}>
        {t('personal_settings_key_menu_01.personal_settings')}
      </Title>

      <div className="flex items-center gap-4 mb-4">
        {/* Khung ảnh cá nhân */}
        <Avatar
          size={64}
          src={avatar}
          icon={<img src={DefaultAvatar} alt="Default Avatar" />}
          className="mr-4"
        />
        <div>
          <Title level={5}>{userFromLocalStorage?.login || 'none'}</Title>
          <span className="">
            {' '}
            {t('personal_settings_key_menu_01.your_personal_account')}
          </span>
        </div>
      </div>

      <Form
        name="personal_settings"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        {/* Thông tin cá nhân */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.personal_information')}
        </Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.first_name')}
          name="first_name"
        >
          <Input
            size="large"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.last_name')}
          name="last_name"
        >
          <Input
            size="large"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Item>
        {/* Thông tin liên hệ */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.contact_information')}
        </Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.mobile')}
          name="mobile"
        >
          <Input
            size="large"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.work_email')}
          name="work_email"
        >
          <Input
            size="large"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.work_location')}
          name="work_location"
        >
          <Input
            size="large"
            value={workLocation}
            onChange={(e) => setWorkLocation(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.address_1')}
          name="address_1"
        >
          <Input
            size="large"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.bank_account')}
          name="bank_account"
        >
          <Input
            size="large"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
        </Form.Item>

        {/* Thông tin bổ sung */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.additional_information')}
        </Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.citizenship_country')}
          name="citizenship_country"
        >
          <Input
            size="large"
            value={citizenshipCountry}
            onChange={(e) => setCitizenshipCountry(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.id_number')}
          name="id_number"
        >
          <Input
            size="large"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.gender')}
          name="gender"
        >
          <Select
            size="large"
            value={gender}
            onChange={(value) => setGender(value)}
          >
            <Option value="male">
              {t('personal_settings_key_menu_01.male')}
            </Option>
            <Option value="female">
              {t('personal_settings_key_menu_01.female')}
            </Option>
            <Option value="other">
              {t('personal_settings_key_menu_01.other')}
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.birth_date')}
          name="birth_date"
        >
          <DatePicker
            size="large"
            value={birthDate}
            onChange={(date) => setBirthDate(date)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.birth_place')}
          name="birth_place"
        >
          <Input
            size="large"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
          />
        </Form.Item>

        {/* Tình trạng hôn nhân */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.marital_status')}
        </Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.marital_status')}
          name="marital_status"
        >
          <Select
            size="large"
            value={maritalStatus}
            onChange={(value) => setMaritalStatus(value)}
          >
            <Option value="single">
              {t('personal_settings_key_menu_01.single')}
            </Option>
            <Option value="married">
              {t('personal_settings_key_menu_01.married')}
            </Option>
            <Option value="divorced">
              {t('personal_settings_key_menu_01.divorced')}
            </Option>
            <Option value="widowed">
              {t('personal_settings_key_menu_01.widowed')}
            </Option>
          </Select>
        </Form.Item>

        {/* Giáo dục */}
        <Title level={5}>{t('personal_settings_key_menu_01.education')}</Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.education_level')}
          name="education_level"
        >
          <Input
            size="large"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.certification')}
          name="certification"
        >
          <Input
            size="large"
            value={certification}
            onChange={(e) => setCertification(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.research_field')}
          name="research_field"
        >
          <Input
            size="large"
            value={researchField}
            onChange={(e) => setResearchField(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.school')}
          name="school"
        >
          <Input
            size="large"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.dependents')}
          name="dependents"
        >
          <Input
            size="large"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
          />
        </Form.Item>

        {/* Liên hệ khẩn cấp */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.emergency_contact')}
        </Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.emergency_contact_name')}
          name="emergency_contact_name"
        >
          <Input
            size="large"
            value={emergencyContactName}
            onChange={(e) => setEmergencyContactName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.emergency_contact_phone')}
          name="emergency_contact_phone"
        >
          <Input
            size="large"
            value={emergencyContactPhone}
            onChange={(e) => setEmergencyContactPhone(e.target.value)}
          />
        </Form.Item>

        {/* Giấy phép lao động */}
        <Title level={5}>
          {t('personal_settings_key_menu_01.work_permit')}
        </Title>
        <Form.Item
          label={t('personal_settings_key_menu_01.visa_number')}
          name="visa_number"
        >
          <Input
            size="large"
            value={visaNumber}
            onChange={(e) => setVisaNumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.work_permit_number')}
          name="work_permit_number"
        >
          <Input
            size="large"
            value={workPermitNumber}
            onChange={(e) => setWorkPermitNumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={t('personal_settings_key_menu_01.visa_expiry_date')}
          name="visa_expiry_date"
        >
          <DatePicker
            size="large"
            value={visaExpiryDate}
            onChange={(date) => setVisaExpiryDate(date)}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="px-7" size="default">
            {t('personal_settings_key_menu_01.save')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
