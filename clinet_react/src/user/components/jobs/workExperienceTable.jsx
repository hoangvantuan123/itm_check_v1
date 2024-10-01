import { useState, useEffect } from 'react';
import { Table, Input, Button, Form, DatePicker, Card, Drawer, Row, Col } from 'antd';
import moment from 'moment';

const WorkExperienceTable = ({ form, isMobile }) => {
  const initialWorkExperience = {
    key: 0,
    companyName: '',
    position: '',
    employeeScale: '',
    joinYear: '',
    leaveYear: '',
    tasks: '',
    salary: '',
    reasonForLeaving: '',
  };

  const initialProject = {
    key: 0,
    projectName: '',
    startDate: '',
    endDate: '',
    task: '',
    duration: '',
    summary: '',
  };

  const [workExperiences, setWorkExperiences] = useState([initialWorkExperience]);
  const [projects, setProjects] = useState([initialProject]);
  const [visible, setVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // Thêm state để xác định chế độ chỉnh sửa hay thêm mới
  const [isProjectMode, setIsProjectMode] = useState(false); // Trạng thái cho dự án

  useEffect(() => {
    const workExperienceData = form.getFieldValue('workExperiences') || [];
    const projectData = form.getFieldValue('projects') || [];

    if (JSON.stringify(workExperienceData) !== JSON.stringify(workExperiences)) {
      setWorkExperiences(workExperienceData);
    }

    if (JSON.stringify(projectData) !== JSON.stringify(projects)) {
      setProjects(projectData);
    }
  }, [form, workExperiences, projects]);

  const handleWorkExperienceChange = (key, field, value) => {
    const updatedWorkExperiences = workExperiences.map((experience) =>
      experience.key === key ? { ...experience, [field]: value } : experience,
    );
    setWorkExperiences(updatedWorkExperiences);
    form.setFieldsValue({ workExperiences: updatedWorkExperiences });
  };

  const handleProjectChange = (key, field, value) => {
    const updatedProjects = projects.map((project) =>
      project.key === key ? { ...project, [field]: value } : project,
    );
    setProjects(updatedProjects);
    form.setFieldsValue({ projects: updatedProjects });
  };

  const addWorkExperience = () => {
    setCurrentItem(initialWorkExperience);
    setIsEditMode(false); // Chế độ thêm mới
    setIsProjectMode(false); // Đặt chế độ không phải dự án
    setVisible(true);
  };

  const addProject = () => {
    setCurrentItem(initialProject);
    setIsEditMode(false); // Chế độ thêm mới
    setIsProjectMode(true); // Đặt chế độ dự án
    setVisible(true);
  };

  const removeWorkExperience = (key) => {
    const updatedWorkExperiences = workExperiences.filter(
      (experience) => experience.key !== key,
    );
    setWorkExperiences(updatedWorkExperiences);
    form.setFieldsValue({ workExperiences: updatedWorkExperiences });
  };

  const removeProject = (key) => {
    const updatedProjects = projects.filter((project) => project.key !== key);
    setProjects(updatedProjects);
    form.setFieldsValue({ projects: updatedProjects });
  };

  const showDrawer = (item, isProject = false) => {
    setCurrentItem(item);
    setIsEditMode(true); // Chế độ chỉnh sửa
    setIsProjectMode(isProject); // Xác định chế độ
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setCurrentItem(null);
  };

  const saveItem = () => {
    if (isEditMode) {
      // Cập nhật item
      if (currentItem) {
        if (isProjectMode) {
          const updatedProjects = projects.map((project) =>
            project.key === currentItem.key ? currentItem : project,
          );
          setProjects(updatedProjects);
          form.setFieldsValue({ projects: updatedProjects });
        } else {
          const updatedWorkExperiences = workExperiences.map((experience) =>
            experience.key === currentItem.key ? currentItem : experience,
          );
          setWorkExperiences(updatedWorkExperiences);
          form.setFieldsValue({ workExperiences: updatedWorkExperiences });
        }
      }
    } else {
      // Thêm mới item
      const newItem = { ...currentItem, key: isProjectMode ? projects.length : workExperiences.length };
      if (isProjectMode) {
        const updatedProjects = [...projects, newItem];
        setProjects(updatedProjects);
        form.setFieldsValue({ projects: updatedProjects });
      } else {
        const updatedWorkExperiences = [...workExperiences, newItem];
        setWorkExperiences(updatedWorkExperiences);
        form.setFieldsValue({ workExperiences: updatedWorkExperiences });
      }
    }
    onClose(); // Đóng Drawer
  };

  const workExperienceColumns = [
    {
      title: 'Tên công ty',
      dataIndex: 'companyName',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
    },
    {
      title: 'Quy mô LĐ',
      dataIndex: 'employeeScale',
    },
    {
      title: 'Năm vào công ty',
      dataIndex: 'joinYear',
      render: (text) => (text ? moment(text, 'YYYY').format('YYYY') : ''),
    },
    {
      title: 'Năm thôi việc',
      dataIndex: 'leaveYear',
      render: (text) => (text ? moment(text, 'YYYY').format('YYYY') : ''),
    },
    {
      title: 'Công việc phụ trách',
      dataIndex: 'tasks',
    },
    {
      title: 'Mức lương',
      dataIndex: 'salary',
    },
    {
      title: 'Lý do xin nghỉ',
      dataIndex: 'reasonForLeaving',
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => showDrawer(record)}>
            Chi tiết
          </Button>
          <Button type="link" onClick={() => removeWorkExperience(record.key)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  const projectColumns = [
    {
      title: 'Tên dự án',
      dataIndex: 'projectName',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startDate',
      render: (text) => (text ? moment(text).format('YYYY-MM-DD') : ''),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'endDate',
      render: (text) => (text ? moment(text).format('YYYY-MM-DD') : ''),
    },
    {
      title: 'Công việc phụ trách',
      dataIndex: 'task',
    },
    {
      title: 'Số năm',
      dataIndex: 'duration',
    },
    {
      title: 'Khái quát dự án',
      dataIndex: 'summary',
    },
    {
      title: 'Hành động',
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => showDrawer(record, true)}>
            Chi tiết
          </Button>
          <Button type="link" onClick={() => removeProject(record.key)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 mt-5">
        Tình trạng kinh nghiệm làm việc
      </h2>

      <h3 className="text-xl font-semibold mb-4">Kinh nghiệm làm việc</h3>
      <Form.Item name="workExperiences">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {workExperiences.map((experience) => (
            <Card
              key={experience.key}
              title={experience.companyName || 'Công ty chưa có tên'}
              style={{
                width: isMobile ? '100%' : '100%', 
              }}
              onClick={() => showDrawer(experience)}
              actions={[
                
                <Button type="link" onClick={() => removeWorkExperience(experience.key)}>
                  Xóa
                </Button>,
              ]}
            >
              <p><strong>Chức vụ:</strong> {experience.position || 'N/A'}</p>
              <p><strong>Năm vào:</strong> {experience.joinYear || 'N/A'}</p>
              <p><strong>Năm thôi việc:</strong> {experience.leaveYear || 'N/A'}</p>
            </Card>
          ))}
        </div>
      </Form.Item>
      <Button type="dashed"  onClick={addWorkExperience} >
        Thêm công ty
      </Button>

      <h3 className="text-xl font-semibold mb-4 mt-6">Dự án</h3>
      <Form.Item name="projects">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {projects.map((project) => (
            <Card
              key={project.key}
              title={project.projectName || 'Dự án chưa có tên'}
              style={{
                width: isMobile ? '100%' : '100%', 
              }}
              actions={[
                <Button type="link" onClick={() => showDrawer(project, true)}>
                  Chi tiết
                </Button>,
                <Button type="link" onClick={() => removeProject(project.key)}>
                  Xóa
                </Button>,
              ]}
            >
              <p><strong>Ngày bắt đầu:</strong> {moment(project.startDate).format('YYYY-MM-DD') || 'N/A'}</p>
              <p><strong>Ngày kết thúc:</strong> {moment(project.endDate).format('YYYY-MM-DD') || 'N/A'}</p>
            </Card>
          ))}
        </div>
      </Form.Item>
      <Button type="dashed"  onClick={addProject} >
        Thêm dự án
      </Button>

      <Drawer
        title={null}
        height={750}
        onClose={onClose}
        visible={visible}
        placement="bottom"
        closable={false}
        footer={
          <div className="flex items-center justify-between">
            <Button key="cancel" onClick={onClose} size="large">
              Thoát
            </Button>
            <Button
              key="submit"
              type="primary"
              size="large"
              className="ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
              onClick={saveItem}
            >
            Lưu
            </Button>
          </div>
        }
      >
        <Form layout="vertical">
          {isProjectMode ? (
            <>
             <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Tên dự án">
              <Input
                size="large"
                value={currentItem?.projectName}
                onChange={(e) => setCurrentItem({ ...currentItem, projectName: e.target.value })}
              />
            </Form.Item>
          </Col>

        </Row>
        <Row gutter={16}>
        <Col xs={12} sm={12}>
            <Form.Item label="Ngày bắt đầu">
              <DatePicker
                size="large"
                className="w-full"
                value={currentItem?.startDate ? moment(currentItem.startDate) : null}
                onChange={(date) => setCurrentItem({ ...currentItem, startDate: date })}
              />
            </Form.Item>
          </Col>
          <Col xs={12} sm={12}>
            <Form.Item label="Ngày kết thúc">
              <DatePicker
                size="large"
                 className="w-full"
                value={currentItem?.endDate ? moment(currentItem.endDate) : null}
                onChange={(date) => setCurrentItem({ ...currentItem, endDate: date })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Công việc phụ trách">
              <Input
                size="large"
                value={currentItem?.task}
                onChange={(e) => setCurrentItem({ ...currentItem, task: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Số năm">
              <Input
                size="large"
                value={currentItem?.duration}
                onChange={(e) => setCurrentItem({ ...currentItem, duration: e.target.value })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Khái quát dự án">
              <Input.TextArea
                size="large"
                value={currentItem?.summary}
                onChange={(e) => setCurrentItem({ ...currentItem, summary: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
            </>
          ) : (
            <>
              <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Tên công ty">
              <Input
                size="large"
                value={currentItem?.companyName}
                onChange={(e) => setCurrentItem({ ...currentItem, companyName: e.target.value })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Chức vụ">
              <Input
                size="large"
                value={currentItem?.position}
                onChange={(e) => setCurrentItem({ ...currentItem, position: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Quy mô LĐ">
              <Input
                size="large"
                value={currentItem?.employeeScale}
                onChange={(e) => setCurrentItem({ ...currentItem, employeeScale: e.target.value })}
              />
            </Form.Item>
          </Col>
        
        </Row>
        <Row gutter={16}>

          <Col xs={12} sm={12}>
            <Form.Item label="Năm vào công ty">
              <DatePicker
                size="large"
                className="w-full"
                picker="year"
                value={currentItem?.joinYear ? moment(currentItem.joinYear) : null}
                onChange={(date) => setCurrentItem({ ...currentItem, joinYear: date })}
              />
            </Form.Item>
          </Col>
          <Col xs={12} sm={12}>
            <Form.Item label="Năm thôi việc">
              <DatePicker
                size="large"
                picker="year"
                 className="w-full"
                value={currentItem?.leaveYear ? moment(currentItem.leaveYear) : null}
                onChange={(date) => setCurrentItem({ ...currentItem, leaveYear: date })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>

          <Col xs={24} sm={12}>
            <Form.Item label="Công việc phụ trách">
              <Input.TextArea
                size="large"
                value={currentItem?.tasks}
                onChange={(e) => setCurrentItem({ ...currentItem, tasks: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Mức lương">
              <Input
                size="large"
                value={currentItem?.salary}
                onChange={(e) => setCurrentItem({ ...currentItem, salary: e.target.value })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Lý do xin nghỉ">
              <Input.TextArea
                size="large"
                value={currentItem?.reasonForLeaving}
                onChange={(e) => setCurrentItem({ ...currentItem, reasonForLeaving: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
            </>
          )}
          
        </Form>
      </Drawer>
    </>
  );
};

export default WorkExperienceTable;
