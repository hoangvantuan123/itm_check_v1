import { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const IntroducedRelativeTable = () => {
    const [introducer, setIntroducer] = useState({
        introducerName: '',
        department: '',
        phoneNumber: '',
    });

    const handleIntroducerChange = (field, value) => {
        setIntroducer({ ...introducer, [field]: value });
    };

    return (
        <div >
            <h3 className="text-xl font-semibold mb-4">Có hay không người quen giới thiệu</h3>
            <Row gutter={16} style={{ marginBottom: '10px' }}>
                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        label="Họ tên người giới thiệu (Tên người giới thiệu)"
                        name="introducerName"
                    >
                        <Input
                            value={introducer.introducerName}
                            onChange={(e) => handleIntroducerChange('introducerName', e.target.value)}
                            placeholder="Nhập họ tên"
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        label="Bộ phận (Phòng ban)"
                        name="department"
                    >
                        <Input
                            value={introducer.department}
                            onChange={(e) => handleIntroducerChange('department', e.target.value)}
                            placeholder="Nhập bộ phận"
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={8}>
                    <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                    >
                        <Input
                            value={introducer.phoneNumber}
                            onChange={(e) => handleIntroducerChange('phoneNumber', e.target.value)}
                            placeholder="Nhập số điện thoại"
                        />
                    </Form.Item>
                </Col>
            </Row>

        </div>
    );
};

export default IntroducedRelativeTable;
