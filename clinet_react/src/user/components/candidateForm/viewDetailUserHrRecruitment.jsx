import { useState, useEffect } from 'react'
import {
  Col,
  Row,
  Form,
  Input,
  Divider,
  Button,
  Table,
  DatePicker,
  Typography,
  Select,
} from 'antd'
import EditLanguageTable from './editLanguageTable'
import EditWorkExperienceTable from './editWorkExperienceTable'
import EditEducationTable from './editEducationTable'
import EditFamilyInfoTable from './editFamilyInfoTable'
const { Text } = Typography
const { Option } = Select
import moment from 'moment'
const ViewDetailUserHrRecruitment = ({
  form,
  isEditing,
  handleFinish,
  setFormData,
  formData,
  setIsEditing,
  toggleEdit,
}) => {
  const handleFormChange = (changedValues) => {
    setFormData({ ...formData, ...changedValues })
  }

  useEffect(() => {
    const formattedData = {
      ...formData,
      interview_date: formData.interview_date
        ? moment(formData.interview_date)
        : null,
      start_date: formData.start_date ? moment(formData.start_date) : null,
      birth_date: formData.birth_date ? moment(formData.birth_date) : null,
      id_issue_date: formData.id_issue_date
        ? moment(formData.id_issue_date)
        : null,
    }
    form.setFieldsValue(formattedData)
  }, [formData, form])

  // Columns for the tables
  const familyColumns = [
    { title: 'Quan hệ', dataIndex: 'relationship', key: 'relationship' },
    { title: 'Họ tên', dataIndex: 'full_name', key: 'full_name' },
    { title: 'Năm sinh', dataIndex: 'birth_year', key: 'birth_year' },
    { title: 'Nơi làm việc', dataIndex: 'workplace', key: 'workplace' },
    { title: 'Công việc', dataIndex: 'job', key: 'job' },
    { title: 'Số điện thoại', dataIndex: 'phone_number', key: 'phone_number' },
    {
      title: 'Sống cùng',
      dataIndex: 'living_together',
      key: 'living_together',
      render: (text) => (text ? 'Có' : 'Không'),
    },
  ]

  const educationColumns = [
    { title: 'Trường', dataIndex: 'school', key: 'school' },
    { title: 'Chuyên ngành', dataIndex: 'major', key: 'major' },
    { title: 'Năm học', dataIndex: 'years', key: 'years' },
    { title: 'Năm bắt đầu', dataIndex: 'start_year', key: 'start_year' },
    {
      title: 'Năm tốt nghiệp',
      dataIndex: 'graduation_year',
      key: 'graduation_year',
    },
    { title: 'Xếp loại', dataIndex: 'grade', key: 'grade' },
  ]

  const languageColumns = [
    { title: 'Ngôn ngữ', dataIndex: 'language', key: 'language' },
    {
      title: 'Loại chứng chỉ',
      dataIndex: 'certificate_type',
      key: 'certificate_type',
    },
    { title: 'Điểm số', dataIndex: 'score', key: 'score' },
    { title: 'Trình độ', dataIndex: 'level', key: 'level' },
    { title: 'Ngày bắt đầu', dataIndex: 'start_date', key: 'start_date' },
    { title: 'Ngày kết thúc', dataIndex: 'end_date', key: 'end_date' },
    {
      title: 'Ghi chú',
      dataIndex: 'has_bonus',
      key: 'has_bonus',
      render: (text) => (text ? 'Có' : 'Không'),
    },
  ]

  const experienceColumns = [
    { title: 'Công ty', dataIndex: 'company_name', key: 'company_name' },
    { title: 'Chức vụ', dataIndex: 'position', key: 'position' },
    { title: 'Năm bắt đầu', dataIndex: 'start_date', key: 'start_date' },
    { title: 'Năm kết thúc', dataIndex: 'end_date', key: 'end_date' },
    {
      title: 'Quy mô nhân sự',
      dataIndex: 'employee_scale',
      key: 'employee_scale',
    },
    { title: 'Công việc', dataIndex: 'tasks', key: 'tasks' },
    { title: 'Mức lương', dataIndex: 'salary', key: 'salary' },
    { title: 'Mô tả', dataIndex: 'description', key: 'description' },
  ]

  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-4">THÔNG TIN KHAI BÁO</h1>
      <Divider orientation="left italic">Thông tin nhân sự</Divider>
      {isEditing ? (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          className="pb-20"
        >
          <Row gutter={16}>
            <Col span={16}>
              <Form.Item
                label="Họ tên ứng viên:"
                name="full_name"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
              >
                <Input size="large" placeholder="Nhập họ tên" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Giới tính:"
                name="gender"
                rules={[
                  { required: true, message: 'Vui lòng chọn giới tính!' },
                ]}
              >
                <Select size="large" placeholder="Chọn giới tính">
                  <Option value="Male">Nam</Option>
                  <Option value="Female">Nữ</Option>
                  <Option value="Other">Khác</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Ngày phỏng vấn:"
                name="interview_date"
                rules={[
                  { required: true, message: 'Vui lòng nhập ngày phỏng vấn!' },
                ]}
              >
                <DatePicker
                  size="large"
                  style={{ width: '100%' }}
                  placeholder="Chọn ngày phỏng vấn"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ngày vào:" name="start_date">
                <DatePicker
                  size="large"
                  style={{ width: '100%' }}
                  placeholder="Chọn ngày vào"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Ngày tháng năm sinh:"
                name="birth_date"
                rules={[
                  { required: true, message: 'Vui lòng nhập ngày sinh!' },
                ]}
              >
                <DatePicker
                  size="large"
                  style={{ width: '100%' }}
                  placeholder="Chọn ngày sinh"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Số CCCD:"
                name="id_number"
                rules={[{ required: true, message: 'Vui lòng nhập số CMND!' }]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Ngày cấp:" name="id_issue_date">
                <DatePicker
                  size="large"
                  style={{ width: '100%' }}
                  placeholder="Chọn ngày cấp"
                  format="YYYY-MM-DD"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Dân tộc:" name="ethnicity">
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Nơi cấp:" name="id_issue_place">
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Số bảo hiểm (nếu có):" name="insurance_number">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mã số thuế cá nhân:" name="tax_number">
                <Input size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại liên hệ:"
                name="phone_number"
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại!' },
                ]}
              >
                <Input size="large" placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email:" name="email">
                <Input size="large" placeholder="Nhập email" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại khi cần thiết:"
                name="alternate_phone_number"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại khẩn cấp!',
                  },
                ]}
              >
                <Input size="large" placeholder="Nhập số điện thoại khẩn cấp" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Tên:"
                name="alternate_name"
                rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
              >
                <Input size="large" placeholder="Nhập tên người liên hệ" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Quan hệ:" name="alternate_relationship">
                <Input size="large" placeholder="Nhập quan hệ" />
              </Form.Item>
            </Col>
          </Row>

          <h3 className="mb-2 mt-2 italic">
            Địa chỉ đăng ký giấy khai sinh (hoặc nguyên quán hoặc HKTT hoặc tạm
            trú)
          </h3>
          <Row gutter={16} className="mt-2">
            <Col span={8}>
              <Form.Item
                label="Tỉnh:"
                name="birth_province"
                rules={[{ required: true, message: 'Vui lòng nhập tỉnh!' }]}
              >
                <Input size="large" placeholder="Nhập tỉnh" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Quận/Huyện:"
                name="birth_district"
                rules={[
                  { required: true, message: 'Vui lòng nhập quận/huyện!' },
                ]}
              >
                <Input size="large" placeholder="Nhập quận/huyện" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Xã/Phường:"
                name="birth_ward"
                rules={[
                  { required: true, message: 'Vui lòng nhập xã/phường!' },
                ]}
              >
                <Input size="large" placeholder="Nhập xã/phường" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Địa chỉ:"
                name="birth_address"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
              >
                <Input size="large" placeholder="Nhập địa chỉ" />
              </Form.Item>
            </Col>
          </Row>

          <h3 className="mb-2 mt-2 italic">Địa chỉ nơi ở hiện tại</h3>
          <Row gutter={16} className="mt-2">
            <Col span={8}>
              <Form.Item
                label="Tỉnh:"
                name="current_province"
                rules={[{ required: true, message: 'Vui lòng nhập tỉnh!' }]}
              >
                <Input size="large" placeholder="Nhập tỉnh" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Quận/Huyện:"
                name="current_district"
                rules={[
                  { required: true, message: 'Vui lòng nhập quận/huyện!' },
                ]}
              >
                <Input size="large" placeholder="Nhập quận/huyện" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Xã/Phường:"
                name="current_ward"
                rules={[
                  { required: true, message: 'Vui lòng nhập xã/phường!' },
                ]}
              >
                <Input size="large" placeholder="Nhập xã/phường" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Số nhà/Đường:"
                name="current_address"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
              >
                <Input size="large" placeholder="Nhập địa chỉ" />
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="left italic">Thông tin gia đình</Divider>
          <EditFamilyInfoTable form={form} dataSource={formData.families} />

          <Divider orientation="left italic">Tình trạng học vấn</Divider>
          <h2 className="mt-4 mb-2 font-semibold">Học vấn</h2>
          <EditEducationTable form={form} dataSource={formData.educations} />

          <h2 className="mt-4 mb-2 font-semibold">Ngôn ngữ</h2>
          <EditLanguageTable form={form} dataSource={formData.languages} />

          <Divider orientation="left italic">Kinh nghiệm làm việc</Divider>
          <EditWorkExperienceTable
            form={form}
            dataSource={formData.experiences}
          />
        </Form>
      ) : (
        <div className="pb-20">
          <Row gutter={16}>
            <Col span={16}>
              <div>
                <strong>Họ tên ứng viên:</strong>
                <Text className="ml-2">{formData.full_name}</Text>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <strong>Giới tính:</strong>
                <Text className="ml-2">{formData.gender}</Text>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="mt-2">
            <Col span={12}>
              <div>
                <strong>Ngày phỏng vấn:</strong>
                <Text className="ml-2">{formData.interview_date}</Text>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <strong>Ngày vào:</strong>
                <Text className="ml-2">{formData.start_date}</Text>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="mt-2">
            <Col span={24}>
              <div>
                <strong>Ngày tháng năm sinh:</strong>
                <Text className="ml-2">{formData.birth_date}</Text>
              </div>
            </Col>
          </Row>

          <Row gutter={16} className="mt-2">
            <Col span={12}>
              <div>
                <strong>Số CCCD:</strong>
                <Text className="ml-2">{formData.id_number}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <strong>Ngày cấp:</strong>
                <Text className="ml-2">{formData.id_issue_date}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <strong>Dân tộc:</strong>
                <Text className="ml-2">{formData.ethnicity}</Text>
              </div>
            </Col>
          </Row>

          <Row gutter={16} className="mt-2">
            <Col span={24}>
              <div>
                <strong>Nơi cấp:</strong>
                <Text className="ml-2">{formData.id_issue_place}</Text>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="mt-2">
            <Col span={12}>
              <div>
                <strong>Số bảo hiểm (nếu có):</strong>
                <Text className="ml-2">{formData.insurance_number}</Text>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <strong>Mã số thuế cá nhân:</strong>
                <Text className="ml-2">{formData.tax_number}</Text>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="mt-2">
            <Col span={12}>
              <div>
                <strong>Số điện thoại liên hệ:</strong>
                <Text className="ml-2">{formData.phone_number}</Text>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <strong>Email:</strong>
                <Text className="ml-2">{formData.email}</Text>
              </div>
            </Col>
          </Row>

          <Row gutter={16} className="mt-2">
            <Col span={12}>
              <div>
                <strong>Số điện thoại khi cần thiết:</strong>
                <Text className="ml-2">{formData.alternate_phone_number}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <strong>Tên:</strong>
                <Text className="ml-2">{formData.alternate_name}</Text>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <strong>Quan hệ:</strong>
                <Text className="ml-2">{formData.alternate_relationship}</Text>
              </div>
            </Col>
          </Row>

          <h3 className=" mb-2 mt-2 italic">
            Địa chỉ đăng ký giấy khai sinh(hoặc nguyên quán hoặc HKTT hoặc tạm
            trú)
          </h3>
          <Row gutter={16} className="mt-2">
            <Col span={8}>
              <div>
                <strong>Tỉnh:</strong>
                <Text className="ml-2">{formData.birth_province}</Text>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <strong>Quận/Huyện:</strong>
                <Text className="ml-2">{formData.birth_district}</Text>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <strong>Xã/Phường:</strong>
                <Text className="ml-2">{formData.birth_ward}</Text>
              </div>
            </Col>
            <Col span={24}>
              <div>
                <strong>Địa chỉ:</strong>
                <Text className="ml-2">{formData.birth_address}</Text>
              </div>
            </Col>
          </Row>

          <h3 className=" mb-2 mt-2 italic">Địa chỉ nơi ở hiện tại</h3>
          <Row gutter={16} className="mt-2">
            <Col span={8}>
              <div>
                <strong>Tỉnh:</strong>
                <Text className="ml-2">{formData.current_province}</Text>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <strong>Quận/Huyện:</strong>
                <Text className="ml-2">{formData.current_district}</Text>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <strong>Xã/Phường:</strong>
                <Text className="ml-2">{formData.current_ward}</Text>
              </div>
            </Col>
            <Col span={24}>
              <div>
                <strong>Số nhà/Đường:</strong>
                <Text className="ml-2">{formData.current_address}</Text>
              </div>
            </Col>
          </Row>

          <Divider orientation="left italic">Thông tin gia đình</Divider>

          <Table
            dataSource={formData.families}
            columns={familyColumns}
            pagination={false}
            rowKey="phone_number"
            size="small"
            bordered
          />
          <Divider orientation="left italic">Tình trạng học vấn</Divider>

          <h2 className="mt-4 mb-2 font-semibold">Học vấn</h2>
          <Table
            dataSource={formData.educations}
            columns={educationColumns}
            pagination={false}
            rowKey="school"
            size="small"
            bordered
          />

          <h2 className="mt-4 mb-2 font-semibold">Ngôn ngữ</h2>
          <Table
            dataSource={formData.languages}
            columns={languageColumns}
            pagination={false}
            rowKey="language"
            size="small"
            bordered
          />
          <Divider orientation="left italic">Kinh nghiệm làm việc</Divider>

          <Table
            dataSource={formData.experiences}
            columns={experienceColumns}
            pagination={false}
            rowKey="company_name"
            size="small"
            bordered
          />
        </div>
      )}
    </div>
  )
}

export default ViewDetailUserHrRecruitment
