import { Calendar, Table, Drawer, Button, List, Typography, Dropdown, Menu } from 'antd';
import { useState } from 'react';
import { CheckCircleOutlined, ExclamationCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useTranslation } from 'react-i18next';

import { Helmet } from 'react-helmet';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TimeTracking() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  const userNameLogin = userFromLocalStorage?.login || 'none';
  const userId = userFromLocalStorage.id;
  const { t } = useTranslation();

  // Lấy ngày hiện tại theo múi giờ Việt Nam
  const now = dayjs().tz('Asia/Ho_Chi_Minh');

  // Khai báo state
  const [value, setValue] = useState(() => now);
  const [selectedValue, setSelectedValue] = useState(() => now);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [checkInOutHistory, setCheckInOutHistory] = useState([]); // Dữ liệu chấm công cho ngày đã chọn
  const [miniCalendarVisible, setMiniCalendarVisible] = useState(false);
  const [viewMode, setViewMode] = useState('calendar'); // Thay đổi chế độ hiển thị

  // Dữ liệu mẫu cho chấm công (check-in, check-out)
  const sampleData = [
    {
      date: '2024-09-09',
      records: [
        { key: 1, timeIn: '08:00', timeOut: '12:00', status: 'On Time' },
        { key: 2, timeIn: '13:00', timeOut: '17:00', status: 'On Time' },
      ],
    },
    {
      date: '2024-09-10',
      records: [
        { key: 1, timeIn: '08:15', timeOut: '12:00', status: 'Late' },
        { key: 2, timeIn: '13:00', timeOut: '17:00', status: 'On Time' },
      ],
    },
    {
      date: '2024-09-11',
      records: [
        { key: 1, timeIn: '08:00', timeOut: '12:00', status: 'On Time' },
        { key: 2, timeIn: '13:00', timeOut: '17:00', status: 'On Time' },
      ],
    },
    {
      date: '2024-09-12',
      records: [
        { key: 1, timeIn: '09:00', timeOut: '12:00', status: 'Late' },
        { key: 2, timeIn: '13:00', timeOut: '17:00', status: 'On Time' },
      ],
    },
    {
      date: '2024-09-21',
      records: [
        { key: 1, timeIn: '08:00', timeOut: '12:00', status: 'On Time' },
        { key: 2, timeIn: '13:00', timeOut: '17:00', status: 'On Time' },
      ],
    },
  ];

  // Hàm xử lý khi người dùng chọn ngày trên lịch
  const onSelect = (newValue) => {
    const selectedDate = newValue.tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD');
    setValue(newValue);
    setSelectedValue(newValue);
    const data =
      sampleData.find((item) => item.date === selectedDate)?.records || [];
    setCheckInOutHistory(data);
    setDrawerVisible(true); // Mở Drawer khi chọn ngày
  };

  // Hàm tùy chỉnh ô lịch để hiển thị icon màu sắc dưới số ngày
  const dateCellRender = (date) => {
    const selectedDate = date.tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD');
    const record = sampleData.find((item) => item.date === selectedDate);

    if (!record) return <div>{date.date()}</div>; // Hiển thị ngày nếu không có dữ liệu

    // Kiểm tra trạng thái của ngày để hiển thị màu và icon phù hợp
    const icons = record.records.map((r, index) => {
      let icon = null;
      if (r.status === 'Absent') {
        icon = <CloseCircleOutlined style={{ color: 'red', fontSize: '16px' }} />;
      } else if (r.status === 'Late') {
        icon = <ExclamationCircleOutlined style={{ color: 'yellow', fontSize: '16px' }} />;
      } else {
        icon = <CheckCircleOutlined style={{ color: 'green', fontSize: '16px' }} />;
      }
      return <div key={index}>{icon}</div>;
    });

    return (
      <div className="flex flex-col items-center">
        <div>{date.date()}</div>
        {icons}
      </div>
    );
  };

  // Cột cho bảng chấm công
  const columns = [
    {
      title: t('Date'),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: t('Time In'),
      dataIndex: 'timeIn',
      key: 'timeIn',
    },
    {
      title: t('Time Out'),
      dataIndex: 'timeOut',
      key: 'timeOut',
    },
    {
      title: t('Status'),
      dataIndex: 'status',
      key: 'status',
    },
  ];

  // Dữ liệu bảng lương
  const salaryData = sampleData.flatMap(day =>
    day.records.map(record => ({
      date: day.date,
      timeIn: record.timeIn,
      timeOut: record.timeOut,
      status: record.status,
    }))
  );

  // Dữ liệu danh sách
  const listData = sampleData.flatMap(day =>
    day.records.map(record => ({
      date: day.date,
      timeIn: record.timeIn,
      timeOut: record.timeOut,
      status: record.status,
    }))
  );

  // Xử lý khi người dùng chọn một chế độ hiển thị từ menu
  const handleMenuClick = (e) => {
    setViewMode(e.key);
  };

  // Tạo menu cho Dropdown
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="calendar">
        {t('View Calendar')}
      </Menu.Item>
      <Menu.Item key="table">
        {t('View Table')}
      </Menu.Item>
      <Menu.Item key="list">
        {t('View List')}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Default')}</title>
      </Helmet>
      <div className="h-full">
        <div className="w-full p-3">
          <Dropdown overlay={menu} trigger={['click']}>
            <Button className="mb-2">
              {viewMode === 'calendar'
                ? t('View Calendar')
                : viewMode === 'table'
                ? t('View Table')
                : t('View List')}
            </Button>
          </Dropdown>
          <button onClick={() => setMiniCalendarVisible(!miniCalendarVisible)} className="mb-2">
            Icon
          </button>
        </div>
        <div className="flex border-t">
          {viewMode === 'calendar' && (
            <>
              {miniCalendarVisible && (
                <div className="w-1/4 h-screen bg-white border-r shadow-md">
                  <Calendar
                    className="min-w-[260px] p-2"
                    headerRender={() => null}
                    fullscreen={false}
                    mode="month"
                    onSelect={onSelect}
                    value={value}
                    dateCellRender={dateCellRender}
                  />
                </div>
              )}
              <Calendar
                className="p-1"
                value={value}
                onSelect={onSelect}
                dateCellRender={dateCellRender}
              />
            </>
          )}
          {viewMode === 'table' && (
            <Table
              columns={columns}
              dataSource={salaryData}
              pagination={false}
              locale={{ emptyText: t('No Data') }}
              scroll={{ x: true }}
            />
          )}
          {viewMode === 'list' && (
            <div className="flex flex-col">
              <List
                dataSource={listData}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{item.date} - {item.timeIn} - {item.timeOut} - {item.status}</Typography.Text>
                  </List.Item>
                )}
                bordered
              />
           
            </div>
          )}
        </div>

        <Drawer
          title={t('Check-in Details')}
          visible={drawerVisible}
          onClose={() => setDrawerVisible(false)}
          width={800}
        >
          <Table
            columns={columns}
            dataSource={checkInOutHistory}
            pagination={false}
            locale={{ emptyText: t('No Data') }}
          />
        </Drawer>
      </div>
    </div>
  );
}
