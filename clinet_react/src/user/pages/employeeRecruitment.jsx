import { useState, useEffect } from 'react';
import { Layout, Table, Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import AddUserGroups from '../components/add/addUserGroups';
import Search from '../components/search';
import { checkActionPermission } from '../../permissions';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const { Content } = Layout;

export default function EmployeeRecruitment({ permissions }) {
  const { t } = useTranslation();
  
  // Data example
  const data = [
    {
      applicantId: 'UV001',
      fullName: 'Nguyễn Văn A',
      email: 'vana@example.com',
      phoneNumber: '0912345678',
      gender: 'Nam',
      dob: '1995-05-15',
      address: '123 Đường ABC, Quận 1, TP. HCM',
      positionApplied: 'Chuyên viên IT',
      education: {
        degree: 'Cử nhân Công nghệ Thông tin',
        university: 'Đại học Bách Khoa TP. HCM',
        graduationYear: 2018
      },
      workExperience: [
        {
          company: 'Công ty ABC',
          position: 'Lập trình viên',
          yearsOfExperience: 3,
          description: 'Phát triển các ứng dụng web bằng React và Node.js'
        }
      ],
      skills: ['JavaScript', 'React', 'Node.js', 'MySQL'],
      applicationDate: '2024-09-01',
      applicationStatus: 'Đã phỏng vấn',
      interviewDate: '2024-09-10',
      interviewResult: 'Đạt',
      interviewer: 'Trần Thị B',
      notes: 'Mang CV và portfolio',
    },
    {
      applicantId: 'UV002',
      fullName: 'Trần Thị C',
      email: 'thic@example.com',
      phoneNumber: '0987654321',
      gender: 'Nữ',
      dob: '1993-08-22',
      address: '456 Đường XYZ, Quận 3, TP. HCM',
      positionApplied: 'Nhân viên Marketing',
      education: {
        degree: 'Cử nhân Marketing',
        university: 'Đại học Kinh tế TP. HCM',
        graduationYear: 2015
      },
      workExperience: [
        {
          company: 'Công ty XYZ',
          position: 'Chuyên viên Marketing',
          yearsOfExperience: 4,
          description: 'Quản lý chiến lược Marketing trực tuyến và offline.'
        }
      ],
      skills: ['SEO', 'Content Marketing', 'Google Analytics'],
      applicationDate: '2024-09-15',
      applicationStatus: 'Đang chờ phỏng vấn',
      interviewDate: '2024-09-20',
      interviewResult: 'Chờ kết quả',
      interviewer: 'Phạm Quang D',
      notes: 'Chuẩn bị portfolio và dự án thực tế',
    }
  ];

  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Permissions
  const canCreate = checkActionPermission(permissions, 'hr-recruitment-1-1', 'create');

  // Handle table change
  const handleTableChange = (pagination) => {
    setPage(pagination.current);
    setLimit(pagination.pageSize);
  };

  // Show detail modal
  const showDetailModal = (applicant) => {
    setSelectedApplicant(applicant);
    setIsDetailModalOpen(true);
  };

  // Close detail modal
  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedApplicant(null);
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const { fullName, email, phoneNumber, interviewResult, notes } = selectedApplicant;

    doc.text(`Thông tin ứng viên: ${fullName}`, 14, 16);
    autoTable(doc, {
      head: [['Thông tin', 'Giá trị']],
      body: [
        ['Email', email],
        ['Số điện thoại', phoneNumber],
        ['Kết quả phỏng vấn', interviewResult],
        ['Ghi chú', notes],
      ],
    });
    doc.save(`${fullName}_thong_tin_ung_vien.pdf`);
  };

  // Table columns
  const columns = [
    {
      title: t('Tên ứng viên'),
      dataIndex: 'fullName',
      key: 'fullName',
      onCell: (record) => ({
        onClick: () => showDetailModal(record), // Show detail on row click
      }),
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: t('Email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('Số điện thoại'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: t('Trạng thái hồ sơ'),
      dataIndex: 'applicationStatus',
      key: 'applicationStatus',
    },
    {
      title: t('Ngày phỏng vấn'),
      dataIndex: 'interviewDate',
      key: 'interviewDate',
    },
    {
      title: t('Kết quả phỏng vấn'),
      dataIndex: 'interviewResult',
      key: 'interviewResult',
    },
  ];

  // Render detail modal
  const renderDetailModal = () => (
    <Modal
      title={selectedApplicant?.fullName}
      visible={isDetailModalOpen}
      onCancel={closeDetailModal}
      footer={[
        <Button key="back" onClick={closeDetailModal}>
          Đóng
        </Button>,
        <Button key="download" type="primary" onClick={exportToPDF}>
          Tải xuống PDF
        </Button>,
      ]}
    >
      {selectedApplicant && (
        <div>
          <p><strong>Email:</strong> {selectedApplicant.email}</p>
          <p><strong>Số điện thoại:</strong> {selectedApplicant.phoneNumber}</p>
          <p><strong>Kết quả phỏng vấn:</strong> {selectedApplicant.interviewResult}</p>
          <p><strong>Ghi chú:</strong> {selectedApplicant.notes}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </Modal>
  );

  // Render table
  const renderTable = () => (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="applicantId"
      bordered
      pagination={{
        current: page,
        pageSize: limit,
        onChange: handleTableChange,
      }}
    />
  );

  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Phỏng vấn')}</title>
      </Helmet>
      <div className="p-2 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">{t('Danh sách phỏng vấn')}</h1>
        {canCreate && (
          <Button
            onClick={() => setIsModalOpen(true)}
            className=" w-20 rounded-lg h-full border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
            icon={<PlusOutlined />}
               size="large"
          >
            {t('Thêm')}
          </Button>
        )}
        <AddUserGroups isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      <Layout className="h-screen">
        <Content>
          {renderTable()}
          {renderDetailModal()}
        </Content>
      </Layout>
    </div>
  );
}
