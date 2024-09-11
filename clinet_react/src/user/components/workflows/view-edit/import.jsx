import { Button, Modal, Menu, Input, Form, notification, Upload , message} from 'antd'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createImportNodes } from '../../../../features/import/creates-nodes'
import { createImportEdges } from '../../../../features/import/creates-edges'
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { fetchNodesAsync , setNodesData} from '../../../../features/workflow/slice/nodesSlice'
import { fetchEdgesAsync, setEdgesData } from '../../../../features/workflow/slice/edgesSlice'
const AddNode = () => {
  return (
    <svg
      className="w-5 h-5 opacity-65 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V8"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const UploadIcon =() =>{
    return (
        <svg className="w-4 h-4 "   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 16.0001C11 16.5524 11.4477 17.0001 12 17.0001C12.5523 17.0001 13 16.5524 13 16.0001H11ZM13 5.00009C13 4.44781 12.5523 4.00009 12 4.00009C11.4477 4.00009 11 4.44781 11 5.00009L13 5.00009ZM15.2929 7.7072C15.6834 8.09772 16.3166 8.09772 16.7071 7.7072C17.0976 7.31668 17.0976 6.68351 16.7071 6.29299L15.2929 7.7072ZM12.7071 3.7072L12 4.41431L12.7071 3.7072ZM11.2929 3.7072L12 4.41431L12 4.41431L11.2929 3.7072ZM7.29289 6.29299C6.90237 6.68351 6.90237 7.31668 7.29289 7.7072C7.68342 8.09772 8.31658 8.09772 8.70711 7.7072L7.29289 6.29299ZM4 16.0001C4 15.4478 3.55228 15.0001 3 15.0001C2.44772 15.0001 2 15.4478 2 16.0001H4ZM22 16.0001C22 15.4478 21.5523 15.0001 21 15.0001C20.4477 15.0001 20 15.4478 20 16.0001H22ZM19.362 20.6731L18.908 19.7821H18.908L19.362 20.6731ZM20.673 19.3621L21.564 19.8161V19.8161L20.673 19.3621ZM3.32698 19.3621L2.43597 19.8161L3.32698 19.3621ZM4.63803 20.6731L4.18404 21.5641H4.18404L4.63803 20.6731ZM13 16.0001L13 5.00009L11 5.00009L11 16.0001H13ZM16.7071 6.29299L13.4142 3.00009L12 4.41431L15.2929 7.7072L16.7071 6.29299ZM10.5858 3.00009L7.29289 6.29299L8.70711 7.7072L12 4.41431L10.5858 3.00009ZM13.4142 3.00009C12.6332 2.21904 11.3668 2.21905 10.5858 3.00009L12 4.41431L12 4.41431L13.4142 3.00009ZM2 16.0001V16.2001H4V16.0001H2ZM7.8 22.0001H16.2V20.0001H7.8V22.0001ZM22 16.2001V16.0001H20V16.2001H22ZM16.2 22.0001C17.0236 22.0001 17.7014 22.0009 18.2518 21.9559C18.8139 21.91 19.3306 21.8114 19.816 21.5641L18.908 19.7821C18.7516 19.8618 18.5274 19.9267 18.089 19.9625C17.6389 19.9993 17.0566 20.0001 16.2 20.0001V22.0001ZM20 16.2001C20 17.0567 19.9992 17.639 19.9624 18.0891C19.9266 18.5275 19.8617 18.7517 19.782 18.9081L21.564 19.8161C21.8113 19.3307 21.9099 18.814 21.9558 18.2519C22.0008 17.7015 22 17.0237 22 16.2001H20ZM19.816 21.5641C20.5686 21.1806 21.1805 20.5687 21.564 19.8161L19.782 18.9081C19.5903 19.2844 19.2843 19.5904 18.908 19.7821L19.816 21.5641ZM2 16.2001C2 17.0237 1.99922 17.7015 2.04419 18.2519C2.09012 18.814 2.18868 19.3307 2.43597 19.8161L4.21799 18.9081C4.1383 18.7517 4.07337 18.5275 4.03755 18.0891C4.00078 17.639 4 17.0567 4 16.2001H2ZM7.8 20.0001C6.94342 20.0001 6.36113 19.9993 5.91104 19.9625C5.47262 19.9267 5.24842 19.8618 5.09202 19.7821L4.18404 21.5641C4.66937 21.8114 5.18608 21.91 5.74817 21.9559C6.2986 22.0009 6.97642 22.0001 7.8 22.0001V20.0001ZM2.43597 19.8161C2.81947 20.5687 3.43139 21.1806 4.18404 21.5641L5.09202 19.7821C4.71569 19.5904 4.40973 19.2844 4.21799 18.9081L2.43597 19.8161Z" fill="black"/>
</svg>

    )
}
export default function Import({ handleOkMoreIO }) {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  const userId = userFromLocalStorage.id;
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const workflowData = useSelector((state) => state.workflow.data);
  const dataDeployWorkflow = useSelector((state) => state.deployWorkflow.userData);
  const [isLoading, setIsLoading] = useState(false);
  const [importedFileName, setImportedFileName] = useState('');
  const [importedData, setImportedData] = useState(null); 
  localStorage.removeItem('workflowId');
  
  const fetchNodesData = async () => {
    try {
      const response = await dispatch(fetchNodesAsync(id))
      dispatch(setNodesData(response.payload))
    } catch (error) {
      console.error('Error fetching nodes:', error)
    }
  }
  const fetchEdgesData = async () => {
    try {
      const response = await dispatch(fetchEdgesAsync(id))
      dispatch(setEdgesData(response.payload))
    } catch (error) {
      console.error('Error fetching nodes:', error)
    }
  }
  const handleImportJSON = (info) => {
    setIsLoading(true);

    // Simulate upload process (remove this setTimeout in actual implementation)
    setTimeout(() => {
      setIsLoading(false);
      const file = info.fileList[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const jsonContent = e.target.result;
          setImportedFileName(file.name);
          setImportedData(JSON.parse(jsonContent));
          message.success(`${file.name} imported successfully.`);
        };
        reader.readAsText(file.originFileObj);
      }
    }, 2000);
  };

 const handleImport = () => {
  if (importedData && importedData.length > 1 && importedData[0]?.nodes && importedData[1]?.edges) {
    const nodesData = importedData[0].nodes;
    const edgesData = importedData[1].edges;
    const updatedNodesData = nodesData.map(node => {
      if (node.workflow !== undefined) {
        return node;
      } else {
        return {
          ...node,
          workflow: {
            id:id,
          }
        };
      }
    });
    const updatedEdgesData = edgesData.map(edge => {
      if (edge.workflow !== undefined) {
        return edge; 
      } else {
        return {
          id: uuidv4(),  
          sourceNode: {
            id: edge.source, 
          },     
          targetNode: {
            id:edge.target, 
          },     
          workflow: {
            id: id, 
          }
        };
      }
    });

    const allNodesHaveWorkflowId = updatedNodesData.every(node => node.workflow !== undefined);
    const allEdgesHaveWorkflowId = updatedEdgesData.every(edge => edge.workflow !== undefined);

   if (allNodesHaveWorkflowId) {
      createImportNodes(updatedNodesData)
        .then(nodesResponse => {
          fetchNodesData()
          message.success(`Success importing nodes`);
        })
        .catch(error => {
          message.success(`Error importing nodes:`);
        });
    } else {
      console.error('Not all nodes have workflow. Aborting import.');
    }
     
   if (allEdgesHaveWorkflowId) {
    createImportEdges(updatedEdgesData)
        .then(edgesResponse => {
          fetchEdgesData()
          message.success(`Success importing Edges`);
          
        })
        .catch(error => {
          message.success(`Error importing Edges:`);
        });
    } else {
      console.error('Not all Edges have workflow. Aborting import.');
    }
    handleOk()
    
  } else {
    console.log('No nodes data to import.');
  }
};

  
  const handleUpdateDataImport =() =>{

  }
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <a
        onClick={showModal}
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <UploadOutlined />
        <span className="text-sm font-medium">Import from JSON</span>
      </a>
      <Modal
        title="Import workflow from JSON"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={[
          <div className="flex gap-3 items-center justify-end" key="modal-footer">
            <Button key="cancel" onClick={handleCancel} className="py-1 px-5 border rounded-lg">
              Cancel
            </Button>
            <Button
              key="ok"
              type="primary"
              onClick={handleImport}
              className="py-1 px-5 border rounded-lg text-white bg-cyan-800 hover:bg-cyan-900"
              disabled={isLoading}
            >
              {isLoading ? 'Importing...' : 'Import Workflow'}
            </Button>
          </div>,
        ]}
      >
        <Form layout="vertical">
          {importedFileName && (
            <Form.Item label="Imported File Name">
              <p>{importedFileName}</p>
            </Form.Item>
          )}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Form.Item label="Only .json types are supported">
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                accept=".json"
                onChange={handleImportJSON}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
}
