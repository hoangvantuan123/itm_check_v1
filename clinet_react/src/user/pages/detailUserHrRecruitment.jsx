import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {
  Row,
  Col,
  Typography,
  Button,
  Form,
  Input,
  Radio,
  message,
  Pagination,
  Select,
  DatePicker,
  Space,
} from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './static/css/scroll_container.css'
import ViewDetailUserHrRecruitment from '../components/candidateForm/viewDetailUserHrRecruitment'
import { GetHrInterId } from '../../features/hrInter/getInterId'
import NoData from './noData'
import Spinner from './load'
import { PutUserInter } from '../../features/hrInter/putUserInter'
import {
  UserAddOutlined,
  HourglassOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  CloseCircleOutlined,
  UserOutlined,
  ToolOutlined,
} from '@ant-design/icons'

const { Text } = Typography
import moment from 'moment'
export default function DetailUserHrRecruitment() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dataMore, setDataMore] = useState([])
  const [interviewData, setInterviewData] = useState({})
  const [form] = Form.useForm()
  const [formMore] = Form.useForm()
  const [formFilled, setFormFilled] = useState(false)
  const [status, setStatus] = useState(null)
  const [type, setType] = useState(null)

  const fetchDataUserId = async () => {
    setLoading(true)
    try {
      const response = await GetHrInterId(id)
      if (response.success) {
        if (response.data.status) {
          setFormData(response.data.data)
          setStatus(response.data.data?.applicant_status)
          setType(response.data.data?.applicant_type)
          setError(null)
          if (
            response.data.data.interviews &&
            response.data.data.interviews.length > 0
          ) {
            setInterviewData(response.data.data.interviews[0])
          } else {
            setInterviewData({})
          }
        } else {
          setError('Không có dữ liệu cho ID này.')
          setFormData({})
        }
      } else {
        setError('Dữ liệu không khả dụng.')
        setFormData({})
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setFormData({})
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!id || !formData) return
    fetchDataUserId()
    const currentFields = form.getFieldsValue([
      'official_date_first',
      'official_date_second',
    ])

    if (
      currentFields.official_date_first !==
      (formData.official_date_first
        ? moment(formData.official_date_first)
        : null) ||
      currentFields.official_date_second !==
      (formData.official_date_second
        ? moment(formData.official_date_second)
        : null)
    ) {
      form.setFieldsValue({
        official_date_first: formData.official_date_first
          ? moment(formData.official_date_first)
          : null,
        official_date_second: formData.official_date_second
          ? moment(formData.official_date_second)
          : null,
      })
    }
  }, [id])

  const handleNavigateToBack = () => {
    navigate(`/u/action=17/employee-interview-data`)
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <NoData />
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
      full_name: finalData?.full_name,
      gender: finalData?.gender,
      interview_date: finalData?.interview_date,
      birth_date: finalData?.birth_date,
      id_number: finalData?.id_number,
      id_issue_date: finalData?.id_issue_date,
      ethnicity: finalData?.ethnicity,
      phone_number: finalData?.phone_number,
      alternate_phone_number: finalData?.alternate_phone_number,
      alternate_name: finalData?.alternate_name,
      alternate_relationship: finalData?.alternate_relationship,
      birth_address: finalData?.birth_address,
      birth_province: finalData?.birth_province,
      birth_district: finalData?.birth_district,
      birth_ward: finalData?.birth_ward,
      current_address: finalData?.current_address,
      current_province: finalData?.current_province,
      current_district: finalData?.current_district,
      current_ward: finalData?.current_ward,
      supplier_details: finalData?.supplierDetails,
      candidate_type: finalData?.candidateType,
      entering_day: finalData?.entering_day,
      email: finalData?.email,
      insurance_number: finalData?.insurance_number,
      tax_number: finalData?.tax_number,
      /* Gia đình cha mẹ vợ */
      father_name: finalData?.families[0].full_name,
      father_phone_number: finalData?.families[0].phone_number,
      mother_name: finalData?.families[1].full_name,
      mother_phone_number: finalData?.families[1].phone_number,
      partner_name: finalData?.families[2].full_name,
      partner_phone_number: finalData?.families[2].phone_number,
      /* Con cais */
      children_name_1: finalData?.children[0].children_name,
      children_birth_date_1: finalData?.children[0].children_birth_date,
      children_gender_1: finalData?.children[0].children_gender,
      /*  */
      children_name_2: finalData?.children[1].children_name,
      children_birth_date_2: finalData?.children[1].children_birth_date,
      children_gender_2: finalData?.children[1].children_gender,
      /*  */
      children_name_3: finalData?.children[2].children_name,
      children_birth_date_3: finalData?.children[2].children_birth_date,
      children_gender_3: finalData?.children[2].children_gender,

      /* CÔng việc */

      work_department_1: finalData?.experiences[0].tasks,
      work_responsibility_1: finalData?.experiences[0].position,
      company_name_1: finalData?.experiences[0].company_name,
      entrance_day_1: finalData?.experiences[0].start_date,
      leaving_day_1: finalData?.experiences[0].end_date,
      salary_1: finalData?.experiences[0].salary,

      work_department_2: finalData?.experiences[1].tasks,
      work_responsibility_2: finalData?.experiences[1].position,
      company_name_2: finalData?.experiences[1].company_name,
      entrance_day_2: finalData?.experiences[1].start_date,
      leaving_day_2: finalData?.experiences[1].end_date,
      salary_2: finalData?.experiences[1].salary,

      /*  */
      highest_education_level: finalData?.educations[0].highest_education_level,
      school_name: finalData?.educations[0].school,
      major: finalData?.educations[0].major,
      school_year: finalData?.educations[0].school_year,
      year_ended: finalData?.educations[0].year_ended,
      year_of_graduation: finalData?.educations[0].year_of_graduation,
      classification: finalData?.educations[0].classification,

      /* languages */
      language_1: finalData?.languages[0].language,
      certificate_type_1: finalData?.languages[0].certificate_type,
      score_1: finalData?.languages[0].score,
      level_1: finalData?.languages[0].level,

      language_2: finalData?.languages[1].language,
      certificate_type_2: finalData?.languages[1].certificate_type,
      score_2: finalData?.languages[1].score,
      level_2: finalData?.languages[1].level,

      language_3: finalData?.languages[2].language,
      certificate_type_3: finalData?.languages[2].certificate_type,
      score_3: finalData?.languages[2].score,
      level_3: finalData?.languages[2].level /*  */,
    }

    return filterEmptyFields(result)
  }

  const handleFinish = async (values) => {
    setDataMore(values)
    const formattedData = formatSubmissionData(values)

    const submissionData = dataMore
      ? { ...formattedData, ...dataMore }
      : formattedData
    try {
      const response = await PutUserInter(id, submissionData)
      if (response.success) {
        message.success('Cập nhật thành công!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
  }
  const handleFinishFormMore = async (values) => {
    try {
      const response = await PutUserInter(id, values)
      if (response.success) {
        message.success('Cập nhật thành công!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
  }
  const handleSave = () => {
    form.submit()
    formMore.submit()
  }

  const handleChange = async (value) => {
    const submissionData = {
      applicant_status: value,
    }
    try {
      const response = await PutUserInter(id, submissionData)
      if (response.success) {
        setStatus(value)
        message.success('Cập nhật thành công!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
  }
  const handleChangeSatusFormTrue = async (value) => {
    const submissionData = {
      status_form: false,
    }
    try {
      const response = await PutUserInter(id, submissionData)
      if (response.success) {
        setStatus(value)
        message.success('Form nhập đã được mở!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
  }
  const handleChangeSatusFormFalse = async (value) => {
    const submissionData = {
      status_form: true,
    }
    try {
      const response = await PutUserInter(id, submissionData)
      if (response.success) {
        setStatus(value)
        message.success('Form nhập đã được đóng!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
  }

  const handleChangeType = async (value) => {
    const submissionData = {
      applicant_type: value,
    }
    try {
      const response = await PutUserInter(id, submissionData)
      if (response.success) {
        setType(value)
        message.success('Cập nhật thành công!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
  }
  return (
    <div className="w-full h-screen bg-gray-50 p-3">
      <Helmet>
        <title>ITM - {t('Công nhân')}</title>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className="flex justify-between items-center mb-6"
      >
        <ol className="flex items-center gap-1 text-sm text-gray-700">
          <li onClick={handleNavigateToBack} className="cursor-pointer">
            <span className=" text-black hover:text-indigo-950 opacity-80">
              Trở lại
            </span>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <span className=" text-black opacity-80">#{id}</span>
          </li>
        </ol>

        <ol className=" flex items-center gap-2">
          <Button className="bg-white">Export PDF</Button>
          {formData?.status_form ? (
            <>
              <Button className="bg-white" onClick={handleChangeSatusFormTrue}>Mở Form</Button>
            </>
          ) : (
            <>
              {' '}
              <Button className="bg-white" onClick={handleChangeSatusFormFalse}>Đóng Form</Button>
            </>
          )}
          <Button className="bg-white">Xóa</Button>
          <Button className="bg-white" onClick={toggleEdit}>
            {isEditing ? <> Thoát</> : <> Chỉnh sửa</>}
          </Button>
          <Button className="bg-white" onClick={handleSave}>
            Lưu
          </Button>
        </ol>
      </nav>
      <Space direction="vertical" className="mb-3">
        <Row gutter={16}>
          <Col>
            <Select
              value={status}
              onChange={handleChange}
              style={{ width: 300 }}
              placeholder="Trạng thái"
            >
              <Option value="waiting_interview" key="waiting_interview">
                <UserAddOutlined style={{ marginRight: 8 }} />
                Lên lịch phỏng vấn
              </Option>
              <Option value="interviewed" key="interviewed">
                <HourglassOutlined style={{ marginRight: 8 }} />
                Đã phỏng vấn
              </Option>
              <Option value="waiting_result" key="waiting_result">
                <CheckCircleOutlined style={{ marginRight: 8 }} />
                Đang đợi kết quả
              </Option>
              <Option value="accepted" key="accepted">
                <CheckOutlined style={{ marginRight: 8, color: 'green' }} />
                Đã nhận
              </Option>
              <Option value="rejected" key="rejected">
                <CloseCircleOutlined style={{ marginRight: 8, color: 'red' }} />
                Không đạt
              </Option>
            </Select>
          </Col>
          <Col>
            <Select
              value={type}
              onChange={handleChangeType}
              placeholder="Chọn loại ứng viên"
              style={{ width: 300 }}
            >
              <Option value="worker">
                <ToolOutlined style={{ marginRight: 8 }} /> Công nhân
              </Option>
              <Option value="staff">
                <UserOutlined style={{ marginRight: 8 }} /> Nhân viên
              </Option>
            </Select>
          </Col>
          <Col>
            {' '}
            {formData?.status_form ? (
              <>
                <Button danger>Đã nhập</Button>
              </>
            ) : (
              <>
                {' '}
                <Button danger>Chưa nhập</Button>
              </>
            )}
          </Col>
        </Row>
      </Space>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={14}>
          <div className="border background bg-white rounded-lg p-6 h-screen overflow-auto scroll-container cursor-pointer">
            <ViewDetailUserHrRecruitment
              setIsEditing={setIsEditing}
              setFormData={setFormData}
              formData={formData}
              isEditing={isEditing}
              toggleEdit={toggleEdit}
              form={form}
              handleFinish={handleFinish}
            />
          </div>
        </Col>

        <Col xs={24} sm={24} md={10}>
          <div className="divide-y h-screen overflow-auto border  scroll-container cursor-pointer pb-24 divide-gray-100 rounded-xl   bg-white">
            <details
              className="group p-3 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-base font-medium">Thông tin khác</h2>

                <span className="relative size-5 shrink-0">
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="">
                {isEditing ? (
                  <>
                    {' '}
                    <Form
                      layout="vertical"
                      form={formMore}
                      onFinish={handleFinishFormMore}
                      initialValues={{
                        ...formData,
                        official_date_first: formData.official_date_first
                          ? moment(formData.official_date_first)
                          : null,
                        official_date_second: formData.official_date_second
                          ? moment(formData.official_date_second)
                          : null,
                      }}
                    >
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Mã nhân viên" name="employee_code">
                            <Input size="large" placeholder="Nhà máy" />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            label="Đăng ký trên ERP"
                            name="erp_department_registration"
                          >
                            <Input size="large" placeholder="ERP" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item label="Team" name="team">
                            <Input size="large" placeholder="Team" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={16}>
                          <Form.Item label="Part" name="part">
                            <Input size="large" placeholder="Part" />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item label="Production" name="production">
                            <Input size="large" placeholder="Production" />
                          </Form.Item>
                        </Col>

                        <Col span={24}>
                          <Form.Item label="Section" name="section">
                            <Input size="large" placeholder="Section" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Job field" name="job_field">
                            <Input size="large" placeholder="Job field" />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Position" name="position">
                            <Input size="large" placeholder="Positionl" />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item
                            label="Ngày ký HĐ lần 1"
                            name="official_date_first"
                          >
                            <DatePicker
                              size="large"
                              style={{ width: '100%' }}
                              placeholder="Chọn ngày vào"
                              format="YYYY-MM-DD"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            label="Ngày ký HĐ lần 2"
                            name="official_date_second"
                          >
                            <DatePicker
                              size="large"
                              style={{ width: '100%' }}
                              placeholder="Chọn ngày vào"
                              format="YYYY-MM-DD"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </>
                ) : (
                  <>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className="mt-3">
                          <strong>Mã nhân viên:</strong>
                          <Text className="ml-2">{formData.employee_code}</Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="mt-3">
                          <strong>Đăng ký trên ERP:</strong>
                          <Text className="ml-2">
                            {formData.erp_department_registration}
                          </Text>
                        </div>
                      </Col>
                      <Col span={24}>
                        <div className="mt-3">
                          <strong>Team:</strong>
                          <Text className="ml-2">{formData.team}</Text>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={16}>
                        <div className="mt-3">
                          <strong>Part:</strong>
                          <Text className="ml-2">{formData.part}</Text>
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className="mt-3">
                          <strong>Production:</strong>
                          <Text className="ml-2">{formData.production}</Text>
                        </div>
                      </Col>

                      <Col span={24}>
                        <div className="mt-3">
                          <strong>Section:</strong>
                          <Text className="ml-2">{formData.section}</Text>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className="mt-3">
                          <strong>Job field:</strong>
                          <Text className="ml-2">{formData.job_field}</Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="mt-3">
                          <strong>Position:</strong>
                          <Text className="ml-2">{formData.position}</Text>
                        </div>
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        <div className="mt-3">
                          <strong>Ngày ký HĐ lần 1:</strong>
                          <Text className="ml-2">
                            {formData.official_date_firstF}
                          </Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="mt-3">
                          <strong>Ngày ký HĐ lần 2:</strong>
                          <Text className="ml-2">
                            {formData.official_date_second}
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            </details>
          </div>
        </Col>
      </Row>
    </div>
  )
}
