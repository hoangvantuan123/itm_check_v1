import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Row,
  Col,
  Typography,
  Button,
  Form,
  Input,
  Radio,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './static/css/scroll_container.css';
import ViewDetailUserHrRecruitment from '../components/candidateForm/viewDetailUserHrRecruitment';
import { GetHrInfoId } from '../../features/hrRecruitment/getPersonnelId';
import NoData from './noData';
import Spinner from './load';

const { Text } = Typography;

export default function DetailUserHrRecruitment() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form] = Form.useForm()
  const fetchDataUserId = async () => {
    setLoading(true);
    try {
      const response = await GetHrInfoId(id);
      if (response.success) {
        if (response.data.status) {
          setFormData(response.data.data);
          setError(null);
        } else {
          setError("Không có dữ liệu cho ID này."); 
          setFormData({});
        }
      } else {
        setError("Dữ liệu không khả dụng."); 
        setFormData({});
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi');
      setFormData({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataUserId();
    }
  }, [id]);

  const handleNavigateToBack = () => {
    navigate(`/u/action=18/worker-recruitment-data`);
  };

  const handleFormChange = (changedValues) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...changedValues,
    }));
  };

  const handleSubmit = () => {
    console.log('Data Saved', formData);
  };

  const toggleEdit = () => {
    setIsEditing(true);
  };

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return (
      <NoData/>
    );
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
        <ol className="flex items-center gap-4 text-sm text-gray-700">
          <li onClick={handleNavigateToBack} className="cursor-pointer">
            <span className="text-blue-600 ">Trở lại</span>
          </li>
        </ol>
        <ol className=" flex items-center gap-2">
          <Button className="bg-white">Export PDF</Button>
          <Button className="bg-white">Xóa</Button>
          <Button className="bg-white" onClick={toggleEdit}>
            Chỉnh sửa
          </Button>
          <Button className="bg-white" onClick={handleSubmit}>
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
            />
          </div>
        </Col>

        <Col xs={24} sm={24} md={10}>
          <div className="border bg-white rounded-lg p-6 mb-3 h-screen overflow-auto scroll-container cursor-pointer">
            <h1 className="text-xl font-bold text-center mb-4">Kết quả phỏng vấn</h1>
            <Form
              layout="vertical"
              initialValues={formData}
              onValuesChange={handleFormChange}
              className=""
            >
              <Row gutter={16}>
                <Col span={24}>
                  <h3 className="font-semibold">Kết quả phỏng vấn</h3>
                  <Form.Item name="interviewResult">
                    <Radio.Group>
                      <Radio value="ĐẠT">ĐẠT</Radio>
                      <Radio value="KHÔNG ĐẠT">KHÔNG ĐẠT</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Bộ phận ứng tuyển" name="recruitmentDepartment">
                    <Input size="large" placeholder="Bộ phận ứng tuyển" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Chức vụ" name="position">
                    <Input size="large" placeholder="Chức vụ" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Tên người phỏng vấn" name="interviewerName">
                    <Input  size="large" placeholder="Tên người phỏng vấn" />
                  </Form.Item>
                </Col>
              </Row>
              <h3 className="font-semibold">Tiêu chuẩn lao động</h3>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label="Ngoại hình" name="appearanceCriteria">
                    <Input  size="large"/>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item  label="Chiều cao" name="height">
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Tiền án" name="criminalRecord">
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <h3 className="font-semibold">Học vấn</h3>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label="Trình độ" name="educationLevel">
                    <Input  size="large"/>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Biết đọc, biết viết" name="readingWriting">
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Khả năng tính toán" name="calculationAbility">
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
