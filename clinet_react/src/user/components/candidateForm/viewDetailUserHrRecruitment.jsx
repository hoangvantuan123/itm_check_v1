import { useState } from 'react'
import { Col, Row, Form, Input, Divider, Button, Table, Typography } from 'antd'
import EditLanguageTable from './editLanguageTable'
import EditWorkExperienceTable from './editWorkExperienceTable'
import EditEducationTable from './editEducationTable'
import EditFamilyInfoTable from './editFamilyInfoTable'
const { Text } = Typography

const ViewDetailUserHrRecruitment = ({form,isEditing, setFormData,formData, setIsEditing, toggleEdit  }) => {

  const handleFormChange = (changedValues) => {
    setFormData({ ...formData, ...changedValues })
  }



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
      title: 'Có thưởng',
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
      <h1 className="text-xl font-bold text-center mb-4">
        THÔNG TIN NHÂN SỰ (CÔNG NHÂN)
      </h1>
      <Divider orientation="left italic">Thông tin nhân sự</Divider>

      {isEditing ? (
       <Form layout="vertical" className="pb-20">
       <Row gutter={16}>
         <Col span={16}>
           <Form.Item label="Họ tên ứng viên:">
             <Input value={formData.full_name} readOnly />
           </Form.Item>
         </Col>
         <Col span={8}>
           <Form.Item label="Giới tính:">
             <Input value={formData.gender} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16}>
         <Col span={12}>
           <Form.Item label="Ngày phỏng vấn:">
             <Input value={formData.interview_date} readOnly />
           </Form.Item>
         </Col>
         <Col span={12}>
           <Form.Item label="Ngày vào:">
             <Input value={formData.start_date} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16} >
         <Col span={24}>
           <Form.Item label="Ngày tháng năm sinh:">
             <Input value={formData.birth_date} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16}>
         <Col span={12}>
           <Form.Item label="Số CCCD:">
             <Input value={formData.id_number} readOnly />
           </Form.Item>
         </Col>
         <Col span={6}>
           <Form.Item label="Ngày cấp:">
             <Input value={formData.id_issue_date} readOnly />
           </Form.Item>
         </Col>
         <Col span={6}>
           <Form.Item label="Dân tộc:">
             <Input value={formData.ethnicity} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16} >
         <Col span={24}>
           <Form.Item label="Nơi cấp:">
             <Input value={formData.id_issue_place} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16}>
         <Col span={12}>
           <Form.Item label="Số bảo hiểm (nếu có):">
             <Input value={formData.insurance_number} readOnly />
           </Form.Item>
         </Col>
         <Col span={12}>
           <Form.Item label="Mã số thuế cá nhân:">
             <Input value={formData.tax_number} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16} >
         <Col span={12}>
           <Form.Item label="Số điện thoại liên hệ:">
             <Input value={formData.phone_number} readOnly />
           </Form.Item>
         </Col>
         <Col span={12}>
           <Form.Item label="Email:">
             <Input value={formData.email} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Row gutter={16} >
         <Col span={12}>
           <Form.Item label="Số điện thoại khi cần thiết:">
             <Input value={formData.alternate_phone_number} readOnly />
           </Form.Item>
         </Col>
         <Col span={6}>
           <Form.Item label="Tên:">
             <Input value={formData.alternate_name} readOnly />
           </Form.Item>
         </Col>
         <Col span={6}>
           <Form.Item label="Quan hệ:">
             <Input value={formData.alternate_relationship} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <h3 className="mb-2 mt-2 italic">
         Địa chỉ đăng ký giấy khai sinh (hoặc nguyên quán hoặc HKTT hoặc tạm trú)
       </h3>
       <Row gutter={16} className="mt-2">
         <Col span={8}>
           <Form.Item label="Tỉnh:">
             <Input value={formData.birth_province} readOnly />
           </Form.Item>
         </Col>
         <Col span={8}>
           <Form.Item label="Quận/Huyện:">
             <Input value={formData.birth_district} readOnly />
           </Form.Item>
         </Col>
         <Col span={8}>
           <Form.Item label="Xã/Phường:">
             <Input value={formData.birth_ward} readOnly />
           </Form.Item>
         </Col>
         <Col span={24}>
           <Form.Item label="Địa chỉ:">
             <Input value={formData.birth_address} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <h3 className="mb-2 mt-2 italic">Địa chỉ nơi ở hiện tại</h3>
       <Row gutter={16} className="mt-2">
         <Col span={8}>
           <Form.Item label="Tỉnh:">
             <Input value={formData.current_province} readOnly />
           </Form.Item>
         </Col>
         <Col span={8}>
           <Form.Item label="Quận/Huyện:">
             <Input value={formData.current_district} readOnly />
           </Form.Item>
         </Col>
         <Col span={8}>
           <Form.Item label="Xã/Phường:">
             <Input value={formData.current_ward} readOnly />
           </Form.Item>
         </Col>
         <Col span={24}>
           <Form.Item label="Số nhà/Đường:">
             <Input value={formData.current_address} readOnly />
           </Form.Item>
         </Col>
       </Row>
 
       <Divider orientation="left italic">Thông tin gia đình</Divider>
       <EditFamilyInfoTable form={form} dataSource={formData.families}/>
       
       <Divider orientation="left italic">Tình trạng học vấn</Divider>
       <h2 className="mt-4 mb-2 font-semibold">Học vấn</h2>
       <EditEducationTable form={form} dataSource={formData.educations}/>
 
       <h2 className="mt-4 mb-2 font-semibold">Ngôn ngữ</h2>
       <EditLanguageTable form={form} dataSource={formData.languages}/>

       <Divider orientation="left italic">Kinh nghiệm làm việc</Divider>
       <EditWorkExperienceTable form={form} dataSource={formData.experiences}/>
      
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
          <Row gutter={16} className='mt-2'>
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
          <Row gutter={16} className='mt-2'>
            <Col span={24}>
              <div>
                <strong>Ngày tháng năm sinh:</strong>
                <Text className="ml-2">{formData.birth_date}</Text>
              </div>
            </Col>
          </Row>

          <Row gutter={16} className='mt-2'>
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

          <Row gutter={16} className='mt-2'>
            <Col span={24}>
              <div>
                <strong>Nơi cấp:</strong>
                <Text className="ml-2">{formData.id_issue_place}</Text>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className='mt-2'>
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
          <Row gutter={16} className='mt-2'>
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

          <Row gutter={16} className='mt-2'>
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
          <Row gutter={16} className='mt-2'>
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

          <h3  className=" mb-2 mt-2 italic">Địa chỉ nơi ở hiện tại</h3>
          <Row gutter={16} className='mt-2'>
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
