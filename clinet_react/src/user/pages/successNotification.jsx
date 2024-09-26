import { Button } from 'antd';
import { Link } from 'react-router-dom'
const SuccessNotification = () => {
    return (
        <div className="w-full h-screen bg-slate-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Gửi Thành Công</h1>
                <p className="mt-2 text-lg">Bạn đã gửi thông tin thành công!</p>
            </div>
        </div>
    );
};

export default SuccessNotification;
