import { Button } from 'antd';
import { Link } from 'react-router-dom';

const SuccessNotification = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-white px-4">
            <div className="text-center">
                <div className="w-20 h-20 rounded-lg bg-slate-500 mx-auto"></div>
                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thông Tin Đã Được Gửi!</h1>
                <p className="mt-4 text-gray-500">Cảm ơn bạn đã hoàn thành việc khai báo thông tin cá nhân.</p>
            </div>
        </div>
    );
};

export default SuccessNotification;
