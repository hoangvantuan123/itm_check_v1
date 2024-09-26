import { useState } from 'react';
import {
    Layout,
    Table,
    Button,
    Select,
    Modal,
    Typography,
    Checkbox,
    Drawer,
    Row,
    Col,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { PlusOutlined } from '@ant-design/icons';
import AddUserGroups from '../components/add/addUserGroups';
import { checkActionPermission } from '../../permissions';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import ImportAction from '../components/action/importAction';
import FieldAction from '../components/action/fieldsAction';

const { Content } = Layout;
const { Option } = Select;

export default function WorkerRecruitmentPage({ permissions }) {
    const { t } = useTranslation();

    const data = [ { applicantId: 'UV001', fullName: 'Nguyễn Văn A', email: 'vana@example.com', phoneNumber: '0912345678', gender: 'Nam', dob: '1995-05-15', address: '123 Đường ABC, Quận 1, TP. HCM', positionApplied: 'Chuyên viên IT', education: { degree: 'Cử nhân Công nghệ Thông tin', university: 'Đại học Bách Khoa TP. HCM', graduationYear: 2018 }, workExperience: [ { company: 'Công ty ABC', position: 'Lập trình viên', yearsOfExperience: 3, description: 'Phát triển các ứng dụng web bằng React và Node.js' } ], skills: ['JavaScript', 'React', 'Node.js', 'MySQL'], applicationDate: '2024-09-01', applicationStatus: 'Đã phỏng vấn', interviewDate: '2024-09-10', interviewResult: 'Đạt', interviewer: 'Trần Thị B', notes: 'Mang CV và portfolio', }, { applicantId: 'UV002', fullName: 'Trần Thị C', email: 'thic@example.com', phoneNumber: '0987654321', gender: 'Nữ', dob: '1993-08-22', address: '456 Đường XYZ, Quận 3, TP. HCM', positionApplied: 'Nhân viên Marketing', education: { degree: 'Cử nhân Marketing', university: 'Đại học Kinh tế TP. HCM', graduationYear: 2015 }, workExperience: [ { company: 'Công ty XYZ', position: 'Chuyên viên Marketing', yearsOfExperience: 4, description: 'Quản lý chiến lược Marketing trực tuyến và offline.' } ], skills: ['SEO', 'Content Marketing', 'Google Analytics'], applicationDate: '2024-09-15', applicationStatus: 'Đang chờ phỏng vấn', interviewDate: '2024-09-20', interviewResult: 'Chờ kết quả', interviewer: 'Phạm Quang D', notes: 'Chuẩn bị portfolio và dự án thực tế', } ];
    // States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false); // State to control drawer visibility

    // Column visibility state
    const [visibleColumns, setVisibleColumns] = useState({
        fullName: true,
        email: true,
        phoneNumber: true,
        applicationStatus: true,
        interviewDate: true,
        interviewResult: true,
    });

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
            render: (text) => (visibleColumns.fullName ? text : null),
            onCell: (record) => ({
                onClick: () => showDetailModal(record), // Show detail on row click
            }),
            sorter: (a, b) => a.fullName.localeCompare(b.fullName),
        },
        {
            title: t('Email'),
            dataIndex: 'email',
            key: 'email',
            render: (text) => (visibleColumns.email ? text : null),
        },
        {
            title: t('Số điện thoại'),
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            render: (text) => (visibleColumns.phoneNumber ? text : null),
        },
        {
            title: t('Trạng thái hồ sơ'),
            dataIndex: 'applicationStatus',
            key: 'applicationStatus',
            render: (text) => (visibleColumns.applicationStatus ? text : null),
        },
        {
            title: t('Ngày phỏng vấn'),
            dataIndex: 'interviewDate',
            key: 'interviewDate',
            render: (text) => (visibleColumns.interviewDate ? text : null),
        },
        {
            title: t('Kết quả phỏng vấn'),
            dataIndex: 'interviewResult',
            key: 'interviewResult',
            render: (text) => (visibleColumns.interviewResult ? text : null),
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
                </div>
            )}
        </Modal>
    );

    // Render drawer for column visibility
    const renderColumnVisibilityDrawer = () => (
        <Drawer
            title={t('Chọn cột hiển thị')}
            placement="right"
            closable={true}
            onClose={() => setIsDrawerVisible(false)}
            visible={isDrawerVisible}
        >
            <Row gutter={16}>
                {Object.keys(visibleColumns).map((key) => (
                    <Col span={24} key={key}>
                        <Checkbox
                            checked={visibleColumns[key]}
                            onChange={(e) => setVisibleColumns({
                                ...visibleColumns,
                                [key]: e.target.checked,
                            })}
                        >
                            {t(key)}
                        </Checkbox>
                    </Col>
                ))}
            </Row>
        </Drawer>
    );

    // Render table
    const renderTable = () => (
        <Table
            columns={columns.filter(column => column.render() !== null)} // Only show visible columns
            dataSource={data}
            rowKey="applicantId"
            size="small"
            bordered
            className="cursor-pointer"
            pagination={{
                current: page,
                pageSize: limit,
                onChange: handleTableChange,
            }}
        />
    );

    return (
        <div className="w-full h-screen bg-white">
            <Helmet>
                <title>ITM - {t('Phỏng vấn')}</title>
            </Helmet>
            <div className="p-2 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900">{t('Danh sách phỏng vấn')}</h1>
                {canCreate && (
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="w-20 rounded-lg h-full border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
                        icon={<PlusOutlined />}
                        size="large"
                    >
                        {t('Thêm')}
                    </Button>
                )}
                <AddUserGroups isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
            <div className="p-2 mb flex items-center justify-between">
                <span className="inline-flex overflow-hidden">
                    <div className="flex items-center gap-2">
                        <Select
                            defaultValue="Tùy chọn"
                            className="w-28"
                            size="large"
                        >
                            <Option value="1">{t('Table')}</Option>
                            <Option value="2">{t('Grid')}</Option>
                            <Option value="3">{t('List')}</Option>
                        </Select>
                        {canCreate && <ImportAction />}
                        <FieldAction />
                        <Button
                        size='large'
                        className=' bg-white'
                            onClick={() => setIsDrawerVisible(true)}
                        >
                            {t('Cột hiển thị')}
                        </Button>
                    </div>
                </span>
            </div>
            <Layout className="h-screen bg-white p-2">
                    {renderTable()}
                    {renderDetailModal()}
                    {renderColumnVisibilityDrawer()} 
            </Layout>
        </div>
    );
}
