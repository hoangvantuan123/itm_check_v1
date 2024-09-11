import {
    Button,
    Modal,
    Menu,
    Input,
    Form,
    notification,
    message,
    Upload,
    Select,
  } from 'antd'
  import { Link } from 'react-router-dom'
  import { useParams } from 'react-router-dom'
  import { useState, useEffect } from 'react'
  import { InboxOutlined } from '@ant-design/icons'
  import { useDispatch, useSelector } from 'react-redux'
  import { fetchWorkflowUserDeploy } from '../../../../features/deploy-workflow/fetch-user-workflow-deploy'
  import { createTemplatesWorkflowAsync } from '../../../../features/templates/create-deploy'
  import { v4 as uuidv4 } from 'uuid';
import Import from './import'
  const { Dragger } = Upload
  const { Option } = Select


  const More = () =>{
    return (
      <svg  className="w-4 h-4 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_218_4466)">
  <rect x="9" width="6" height="6" rx="3" fill="#52536D"/>
  <rect x="9" y="9" width="6" height="6" rx="3" fill="#52536D"/>
  <rect x="9" y="18" width="6" height="6" rx="3" fill="#52536D"/>
  </g>
  <defs>
  <clipPath id="clip0_218_4466">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
    )
  }


const DownloadIcon = () =>{
    return (
        <svg  className="w-4 h-4 "  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3L13 3ZM11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14H11ZM16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L16.7071 12.7071ZM12.7071 15.2929L12 14.5858L12.7071 15.2929ZM11.2929 15.2929L12 14.5858H12L11.2929 15.2929ZM8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L8.70711 11.2929ZM4 16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16H4ZM22 16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16H22ZM19.362 20.673L18.908 19.782H18.908L19.362 20.673ZM20.673 19.362L21.564 19.816L20.673 19.362ZM3.32698 19.362L2.43597 19.816L3.32698 19.362ZM4.63803 20.673L4.18404 21.564H4.18404L4.63803 20.673ZM11 3L11 14H13L13 3L11 3ZM15.2929 11.2929L12 14.5858L13.4142 16L16.7071 12.7071L15.2929 11.2929ZM12 14.5858L8.70711 11.2929L7.29289 12.7071L10.5858 16L12 14.5858ZM12 14.5858H12L10.5858 16C11.3668 16.781 12.6332 16.781 13.4142 16L12 14.5858ZM2 16V16.2H4V16H2ZM7.8 22H16.2V20H7.8V22ZM22 16.2V16H20V16.2H22ZM16.2 22C17.0236 22 17.7014 22.0008 18.2518 21.9558C18.8139 21.9099 19.3306 21.8113 19.816 21.564L18.908 19.782C18.7516 19.8617 18.5274 19.9266 18.089 19.9624C17.6389 19.9992 17.0566 20 16.2 20V22ZM20 16.2C20 17.0566 19.9992 17.6389 19.9624 18.089C19.9266 18.5274 19.8617 18.7516 19.782 18.908L21.564 19.816C21.8113 19.3306 21.9099 18.8139 21.9558 18.2518C22.0008 17.7014 22 17.0236 22 16.2H20ZM19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816L19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782L19.816 21.564ZM2 16.2C2 17.0236 1.99922 17.7014 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43597 19.816L4.21799 18.908C4.1383 18.7516 4.07337 18.5274 4.03755 18.089C4.00078 17.6389 4 17.0566 4 16.2H2ZM7.8 20C6.94342 20 6.36113 19.9992 5.91104 19.9624C5.47262 19.9266 5.24842 19.8617 5.09202 19.782L4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74817 21.9558C6.2986 22.0008 6.97642 22 7.8 22V20ZM2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564L5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908L2.43597 19.816Z" fill="black"/>
</svg>

    )
}



  export default function IO() {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
    const userId = userFromLocalStorage.id
    const userName =userFromLocalStorage.firstName + ' ' + userFromLocalStorage.lastName
    const dispatch = useDispatch()
    const { id } = useParams()
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const workflowData = useSelector((state) => state.workflow.data)
    const nodesData = useSelector((state) => state.nodes.data)
    const edgesData = useSelector((state) => state.edges.data)
    const [downloadWorkflow , setDownloadWorkflow] = useState(null)
    const dataDeployWorkflow = useSelector(
      (state) => state.deployWorkflow.userData,
    )  
  
    useEffect(() => {
      const combinedData = [
        { "nodes": [...nodesData] }, 
        { "edges": [...edgesData] }, 
    ];
    setDownloadWorkflow(combinedData)
  }, [nodesData, nodesData]); 

    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
      dispatch(fetchWorkflowUserDeploy(userId))
    }, [userId])
  
    const handleGoogleLogin = () => {
      window.location.href = 'http://localhost:3000/api/google/login'
    }
    const handlePageAccuracy = () => {
      window.location.href = '/u/accuracy/google'
    }
  
    localStorage.removeItem('workflowId')
    //localStorage.setItem('workflowId', workflowData?.data?.id);
  
    const showModal = () => {
      setIsModalOpen(!isModalOpen)
    }
    const handleOkMoreIO = () => {
      setIsModalOpen(false)
    }
   
    const transformData = (currentData) => {
        const newData = JSON.parse(JSON.stringify(currentData)); 
        const idMap = {};
    
        // Biến đổi các nodes
        newData[0].nodes.forEach(node => {
          const newId = uuidv4();
          idMap[node.id] = newId;
          node.id = newId;
        });
    
        // Biến đổi các edges
        newData[1].edges.forEach(edge => {
          edge.source = idMap[edge.source];
          edge.target = idMap[edge.target];
          edge.id = uuidv4();
        });
    
        return newData;
      };
    
      const handleDownload = () => {
        const transformedData = transformData(downloadWorkflow);
       
        const jsonString = JSON.stringify(transformedData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const link = document.createElement('a');
        link.download = 'workflow.json';
        link.href = window.URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
      <div>
        <a
          onClick={showModal}
          className="flex items-center  justify-center gap-2 rounded-lg px-4 py-1 border cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
            <More/>
        </a>
        {isModalOpen && <>
        <div className="absolute   right-6 z-50 w-50 h-50 mt-1  bg-white  border rounded-lg ">
        <div className=" h-auto p-1">
        <ul className="space-y-1 cursor-pointer" >
          <li>
            <Import handleOkMoreIO={handleOkMoreIO}/>
            
          </li>
          <li>
            <a
            onClick={handleDownload}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <DownloadIcon />
              <span className="text-sm font-medium"> Export to JSON</span>
            </a>
          </li>
          
        </ul>
      </div>
        </div>
        </>}
      </div>
    )
  }
  