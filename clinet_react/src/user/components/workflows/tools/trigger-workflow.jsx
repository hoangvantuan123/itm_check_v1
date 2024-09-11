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
const { Title, Text } = Typography
import { useDispatch, useSelector } from 'react-redux'
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
const TriggerIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-65   "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default function TriggerWorkflow({ openShowTriggersWorkFlow }) {
  const dispatch = useDispatch()
  const nodesData = useSelector((state) => state.nodes.data)
  const triggerNodes = nodesData.filter((node) => node.type === 'trigger')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = triggerNodes.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div>
      {' '}
      <div className=" h-9 border-b p-1 flex items-center justify-between px-2">
        <Text type="secondary" strong>
          Trigger
        </Text>
        <button onClick={openShowTriggersWorkFlow}>
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
              <TriggerIcon />
              {node?.data?.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
