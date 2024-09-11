import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
} from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const { Title, Text } = Typography
const CloseIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L19 19M5.00003 19L12 12L19 5"
        stroke="#2D264B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const FunctionIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 13L8 15L10 17"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 13L16 15L14 17"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
export default function FunctionWorkflow({ openShowFunctionsWorkFlow }) {
  const dispatch = useDispatch()
  const nodesData = useSelector((state) => state.nodes.data)
  const functionNodes = nodesData.filter((node) => node.type === 'function')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = functionNodes.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="">
      <div className="  h-9 border-b p-1 flex items-center justify-between px-2">
        <Text type="secondary" strong>
          Function
        </Text>
        <button onClick={openShowFunctionsWorkFlow}>
          <CloseIcon />
        </button>
      </div>

      <div>
        <ul className="p-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded w-full p-1 mb-2"
          />
          {filteredData.map((node) => (
            <li
              className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              key={node.id}
            >
              <FunctionIcon />
              {node?.data?.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
