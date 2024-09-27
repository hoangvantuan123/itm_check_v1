import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Row, Col, Typography, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'moment/locale/vi';
import './static/css/scroll_container.css';
import FamilyInfoTable from '../components/workerDeclaration/familyInfoTable';
import EducationLanguageTable from '../components/workerDeclaration/educationLanguageTable';

const { Text } = Typography;

export default function DetailUserHrRecruitment() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn A',
    gender: 'Nam',
    interviewDate: '2024-09-30',
    startDate: '2024-10-01',
    dob: '1990-01-01',
    idNumber: '123456789',
    issuedDate: '2010-01-01',
    ethnicity: 'Kinh',
    issuedPlace: 'Hà Nội',
    insuranceNumber: '987654321',
    taxCode: '1234567890',
    phone: '0987654321',
    email: 'nguyenvana@example.com',
    emergencyPhone: '0987654322',
    emergencyContactName: 'Nguyễn Văn B',
    emergencyContactRelation: 'Bố',
    birthProvince: 'Hà Nội',
    birthDistrict: 'Hoàn Kiếm',
    birthCommune: 'Phường Hàng Bạc',
    birthAddress: 'Số 1, Đường A',
    currentProvince: 'Hà Nội',
    currentDistrict: 'Ba Đình',
    currentCommune: 'Phường Trúc Bạch',
    currentAddress: 'Số 10, Đường B',
  });

  const handleNavigateToBack = () => {
    navigate(`/u/action=18/worker-recruitment-data`);
  };

  return (
    <div className="w-full h-screen bg-gray-50 p-6  overflow-auto">
      <Helmet>
        <title>ITM - {t('Công nhân')}</title>
      </Helmet>

      <nav aria-label="Breadcrumb" className="flex justify-between items-center mb-6">
        <ol className="flex items-center gap-4 text-sm text-gray-700">
          <li onClick={handleNavigateToBack} className="cursor-pointer">
            <span className="text-blue-600 hover:underline">Trở lại</span>
          </li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto border bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">TỜ KHAI ỨNG VIÊN</h1>
        <Divider orientation="left">Thông tin nhân sự</Divider>

        <Row gutter={16}>
          <Col span={16}>
            <div>
              <strong>Họ tên ứng viên:</strong>
              <Text className="ml-2">{formData.fullName}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Giới tính:</strong>
              <Text className="ml-2">{formData.gender}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <strong>Ngày phỏng vấn:</strong>
              <Text className="ml-2">{formData.interviewDate}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <strong>Ngày vào:</strong>
              <Text className="ml-2">{formData.startDate}</Text>
            </div>
          </Col>
          <Col span={24}>
            <div>
              <strong>Ngày tháng năm sinh:</strong>
              <Text className="ml-2">{formData.dob}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Số CMND:</strong>
              <Text className="ml-2">{formData.idNumber}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Ngày cấp:</strong>
              <Text className="ml-2">{formData.issuedDate}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Dân tộc:</strong>
              <Text className="ml-2">{formData.ethnicity}</Text>
            </div>
          </Col>
          <Col span={24}>
            <div>
              <strong>Nơi cấp:</strong>
              <Text className="ml-2">{formData.issuedPlace}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <strong>Số sổ bảo hiểm:</strong>
              <Text className="ml-2">{formData.insuranceNumber}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <strong>Mã số thuế:</strong>
              <Text className="ml-2">{formData.taxCode}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <strong>Số điện thoại:</strong>
              <Text className="ml-2">{formData.phone}</Text>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <strong>E-mail:</strong>
              <Text className="ml-2">{formData.email}</Text>
            </div>
          </Col>
        </Row>

        <Divider orientation="left">Thông tin liên hệ khẩn cấp</Divider>
        <Row gutter={16}>
          <Col span={8}>
            <div>
              <strong>Số điện thoại khẩn cấp:</strong>
              <Text className="ml-2">{formData.emergencyPhone}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Tên liên hệ:</strong>
              <Text className="ml-2">{formData.emergencyContactName}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Quan hệ:</strong>
              <Text className="ml-2">{formData.emergencyContactRelation}</Text>
            </div>
          </Col>
        </Row>

        <Divider orientation="left">Địa chỉ</Divider>
        <h3 className="font-semibold mb-2">Địa chỉ đăng ký</h3>
        <Row gutter={16}>
          <Col span={8}>
            <div>
              <strong>Tỉnh:</strong>
              <Text className="ml-2">{formData.birthProvince}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Quận/Huyện:</strong>
              <Text className="ml-2">{formData.birthDistrict}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Xã/Phường:</strong>
              <Text className="ml-2">{formData.birthCommune}</Text>
            </div>
          </Col>
          <Col span={24}>
            <div>
              <strong>Địa chỉ:</strong>
              <Text className="ml-2">{formData.birthAddress}</Text>
            </div>
          </Col>
        </Row>

        <h3 className="font-semibold mb-2">Địa chỉ nơi ở hiện tại</h3>
        <Row gutter={16}>
          <Col span={8}>
            <div>
              <strong>Tỉnh:</strong>
              <Text className="ml-2">{formData.currentProvince}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Quận/Huyện:</strong>
              <Text className="ml-2">{formData.currentDistrict}</Text>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <strong>Xã/Phường:</strong>
              <Text className="ml-2">{formData.currentCommune}</Text>
            </div>
          </Col>
          <Col span={24}>
            <div>
              <strong>Số nhà/Đường:</strong>
              <Text className="ml-2">{formData.currentAddress}</Text>
            </div>
          </Col>
        </Row>

        <FamilyInfoTable/>
        <EducationLanguageTable/>
      </div>
    </div>
  );
}
