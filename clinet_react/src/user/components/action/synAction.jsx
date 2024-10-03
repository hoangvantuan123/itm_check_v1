import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Modal, Typography, Button } from 'antd';
import { PostSyncData } from '../../../features/hrAllData/postSyncData';

const { Title } = Typography;

const SynIcon = () => {
    return (
        <svg className='w-4 h-4 opacity-65' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default function SynAction({ fetchData, isOpen, selectedRowKeys }) {
    const [isModalVisible, setIsModalVisible] = useState(false); // State để quản lý Modal
    const [loading, setLoading] = useState(false); // State để quản lý trạng thái loading
    const { t } = useTranslation(); // Khởi tạo i18n

    // Hàm mở Modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Hàm đóng Modal
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Hàm xử lý khi xác nhận
    const handleConfirm = async () => {
        setLoading(true); // Bắt đầu trạng thái loading
        const ids = [1, 2, 3]; // Thay đổi ids cho phù hợp với yêu cầu của bạn
        const result = await PostSyncData(selectedRowKeys);
        setLoading(false); // Kết thúc trạng thái loading

        // Xử lý kết quả trả về từ PostSyncData
        if (result.success) {
            // Có thể thêm thông báo thành công ở đây
            console.log(result.message);
            setIsModalVisible(false); // Đóng Modal
        } else {
            // Thông báo lỗi
            console.error(result.message);
            // Có thể thêm thông báo hiển thị lỗi cho người dùng
        }
    };

    return (
        <>
            <Button size="large" className="bg-white" onClick={showModal}>
                <SynIcon /> 
            </Button>
            <Modal
                title={t('confirmation')} // Thay đổi tiêu đề theo ngôn ngữ
                visible={isModalVisible}
                onOk={handleConfirm}
                confirmLoading={loading} // Trạng thái loading
                onCancel={handleCancel}
            >
                <p>{t('are_you_sure_you_want_to_sync_data')}?</p> {/* Thay đổi nội dung theo ngôn ngữ */}
            </Modal>
        </>
    );
}
