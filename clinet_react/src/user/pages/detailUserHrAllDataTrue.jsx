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
} from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './static/css/scroll_container.css'
import ViewDetailUserHrRecruitment from '../components/candidateForm/viewDetailUserHrRecruitment'
import { GetHrInfoId } from '../../features/hrRecruitment/getPersonnelId'
import NoData from './noData'
import Spinner from './load'
import { PutHrInfoId } from '../../features/hrRecruitment/updateHrInfoId'
import { PutUserInterview } from '../../features/hrRecruitment/putUserInterview'
const { Text } = Typography

export default function DetailUserHrAllDataTrue() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [interviewData, setInterviewData] = useState({})
  console.log("interviewData", interviewData)
  const [form] = Form.useForm()
  const [formInterview] = Form.useForm()
  const [formMore] = Form.useForm()

  const fetchDataUserId = async () => {
    setLoading(true)
    try {
      const response = await GetHrInfoId(id)
      if (response.success) {
        if (response.data.status) {
          setFormData(response.data.data)
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
    if (id) {
      fetchDataUserId()
    }
  }, [id])

  const handleNavigateToBack = () => {
    navigate(`/u/action=20/data-employee`)
  }

  const toggleEdit = () => {
    setIsEditing(true)
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
  const handleFormInterViewChange = (changedValues) => {
    setInterviewData((prev) => ({
      ...prev,
      ...changedValues,
    }))
  }


  const handleSubmit = async (values) => {
    try {
      const response = await PutUserInterview(interviewData?.key, values)
      if (response.success) {
        message.success('Cập nhật thành công!')
      } else {
        message.error(`Cập nhật thất bại: ${response.message}`)
      }
    } catch (error) {
      message.error('Đã xảy ra lỗi trong quá trình cập nhật.')
    }
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

      /*  */
      /*   fac: finalData?.fac,
        department: finalData?.department,
        team: finalData?.team,
        jop_position: finalData?.jop_position,
        type_personnel: finalData?.type_personnel,
        contract_term: finalData?.contract_term,
        type_classify: finalData?.type_classify,
        line_model: finalData?.line_model,
        part: finalData?.part,
        type_of_degree: finalData?.type_of_degree,
        type_of_degree: finalData?.type_of_degree,
        employee_code: finalData?.employee_code, */

      families:
        finalData?.families?.map((family) => ({
          id: family.key,
          relationship: family?.relationship,
          full_name: family?.full_name || null,
          birth_year: family?.birth_year,
          workplace: family?.workplace,
          job: family?.job,
          phone_number: family?.phone_number,
          living_together: family?.living_together,
        })) || [],
      educations:
        finalData?.education?.map((education) => ({
          id: education.key,
          school: education?.school || null,
          major: education?.major,
          years: education?.years,
          start_year: education?.start_year,
          graduation_year: education?.graduation_year,
          grade: education?.grade,
        })) || [],
      languages:
        finalData?.languages?.map((language) => ({
          id: language.key,
          language: language?.language,
          certificate_type: language?.certificate_type,
          score: language?.score,
          level: language.level,
          start_date: language.start_date,
          end_date: language.end_date,
          has_bonus: language.has_bonus,
        })) || [],
      experiences:
        finalData?.workExperiences?.map((experience) =>
          filterEmptyFields({
            id: experience.key,
            company_name: experience?.company_name || 'null',
            position: experience.position,
            start_date: experience.start_date,
            end_date: experience.end_date,
            employee_scale: experience.employee_scale,
            tasks: experience.tasks,
            salary: experience.salary,
            description: experience.description,
          }),
        ) || [],
      projects: [],
      office_skills: [],
    }

    return filterEmptyFields(result)
  }

  const handleFinish = async (values) => {
    const submissionData = formatSubmissionData(values)
    try {
      const response = await PutHrInfoId(id, submissionData)
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
    console.log('values', values)
  }
  const handleSave = () => {
    form.submit()
    formInterview.submit()
    formMore.submit()
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
          <Button className="bg-white">Mở Form</Button>
          <Button className="bg-white">Xóa</Button>
          <Button className="bg-white" onClick={toggleEdit}>
            Chỉnh sửa
          </Button>
          <Button className="bg-white" onClick={handleSave}>
            Lưu
          </Button>
        </ol>
      </nav>

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
          <div className="divide-y h-screen overflow-auto border  scroll-container cursor-pointer pb-20 divide-gray-100 rounded-xl   bg-white">
            <details
              className="group p-3 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-base font-medium">Kết quả phỏng vấn</h2>

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
              <div className=" ">
                {isEditing ? (
                  <>
                    {' '}
                    <Form
                      form={formInterview}
                      layout="vertical"
                      initialValues={interviewData}
                      onFinish={handleSubmit}
                      onValuesChange={handleFormInterViewChange}
                    >
                      <Row gutter={16}>
                        <Col span={24}>
                          <Form.Item name="interview_result">
                            <Radio.Group>
                              <Radio value={true}>ĐẠT</Radio>
                              <Radio value={false}>KHÔNG ĐẠT</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item
                            label="Bộ phận ứng tuyển"
                            name="recruitment_department"
                          >
                            <Input
                              size="large"
                              placeholder="Bộ phận ứng tuyển"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Chức vụ" name="position">
                            <Input size="large" placeholder="Chức vụ" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Tên người phỏng vấn"
                            name="interviewer_name"
                          >
                            <Input
                              size="large"
                              placeholder="Tên người phỏng vấn"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <h3 className="font-semibold">Tiêu chuẩn lao động</h3>
                      <Row gutter={16}>
                        <Col span={16}>
                          <Form.Item
                            label="Ngoại hình"
                            name="appearance_criteria"
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item label="Chiều cao" name="height">
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item label="Tiền án" name="criminal_record">
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                      </Row>
                      <h3 className="font-semibold">Học vấn</h3>
                      <Row gutter={16}>
                        <Col span={16}>
                          <Form.Item label="Trình độ" name="education_level">
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            label="Biết đọc, biết viết"
                            name="reading_writing"
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Khả năng tính toán"
                            name="calculation_ability"
                          >
                            <Input size="large" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </>
                ) : (
                  <>

                    {/*  <Row gutter={16}>
                      <Col span={16}>
                        <div>
                          <strong>Họ tên ứng viên:</strong>
                          <Text className="ml-2">{interviewData.height}</Text>
                        </div>
                      </Col>
                     
                    </Row> */}


                    <Row gutter={16}>
                      <Col span={24}>
                        <Radio.Group value={interviewData.interview_result}>
                          <Radio value={true}>ĐẠT</Radio>
                          <Radio value={false}>KHÔNG ĐẠT</Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <div className="mt-2">
                          <strong>Bộ phận ứng tuyển</strong>
                          <Text className="ml-2">{interviewData.recruitment_department}</Text>
                        </div>

                      </Col>
                      <Col span={12}>
                        <div className="mt-2">
                          <strong>Chức vụ</strong>
                          <Text className="ml-2">{interviewData.position}</Text>
                        </div>

                      </Col>
                      <Col span={24}>
                        <div className="mt-2">
                          <strong>Tên người phỏng vấn</strong>
                          <Text className="ml-2">{interviewData.interviewer_name}</Text>
                        </div>
                      </Col>
                    </Row>
                    <h3 className="font-semibold">Tiêu chuẩn lao động</h3>
                    <Row gutter={16}>
                      <Col span={16}>
                        <div className="mt-2">
                          <strong>Ngoại hình</strong>
                          <Text className="ml-2">{interviewData.appearance_criteria}</Text>
                        </div>

                      </Col>
                      <Col span={8}>
                        <div className="mt-2">
                          <strong>Chiều cao</strong>
                          <Text className="ml-2">{interviewData.height}</Text>
                        </div>

                      </Col>
                      <Col span={24}>
                        <div className="mt-2">
                          <strong>Tiền án</strong>
                          <Text className="ml-2">{interviewData.criminal_record}</Text>
                        </div>

                      </Col>
                    </Row>
                    <h3 className="font-semibold">Học vấn</h3>
                    <Row gutter={16}>
                      <Col span={16}>
                        <div className="mt-2">
                          <strong>Trình độ</strong>
                          <Text className="ml-2">{interviewData.education_level}</Text>
                        </div>

                      </Col>
                      <Col span={8}>
                        <div className="mt-2">
                          <strong>Biết đọc, biết viết</strong>
                          <Text className="ml-2">{interviewData.reading_writing}</Text>
                        </div>

                      </Col>
                      <Col span={24}>
                        <div className="mt-2">
                          <strong>Khả năng tính toán</strong>
                          <Text className="ml-2">{interviewData.calculation_ability}</Text>
                        </div>
                      
                      </Col>
                    </Row>

                  </>
                )}
              </div>
            </details>

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
                      initialValues={formData}
                    >
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item label="Nhà máy" name="fac">
                            <Input size="large" placeholder="Nhà máy" />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Phòng ban" name="department">
                            <Input size="large" placeholder="Department" />
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
                          <Form.Item label="Chức vụ" name="jop_position">
                            <Input size="large" placeholder="Chức vụ" />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            label="Loại nhân viên"
                            name="type_personnel"
                          >
                            <Select size="large">
                              <Select.Option value={false}>
                                Nhân viên
                              </Select.Option>
                              <Select.Option value={true}>
                                Công nhân
                              </Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>

                        <Col span={24}>
                          <Form.Item label="Loại hợp đồng" name="contract_term">
                            <Input
                              size="large"
                              placeholder="Thời hạn hợp đồng"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Form.Item label="Phân loại" name="type_classify">
                            <Input size="large" placeholder="Phân loại" />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item label="Line/Model" name="line_model">
                            <Input size="large" placeholder="Line/Model" />
                          </Form.Item>
                        </Col>

                        <Col span={8}>
                          <Form.Item label="Part" name="part">
                            <Input size="large" placeholder="Part" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>{' '}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </details>
          </div>
        </Col>
      </Row>
    </div>
  )
}
