import { useState } from 'react'
import { Typography } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
const { Text } = Typography

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

const ListWorkflow = ({ openShowListWorkFlow }) => {
  const nodesData = useSelector((state) => state.nodes.data)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = nodesData.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div>
      <div className="h-9 border-b p-1 flex items-center justify-between px-2">
        <Text type="secondary" strong>
          List workflow
        </Text>
        <button onClick={openShowListWorkFlow}>
          <CloseIcon />
        </button>
      </div>

      <div className="p-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded w-full p-1 mb-2"
        />
        {filteredData.map((item) => (
          <div key={item.id} className="item-container">
            {item.type === 'loop' && (
              <div className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <h4>{item?.data?.label}</h4>
              </div>
            )}
            {item.type === 'branch' && (
              <div className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <h4>{item?.data?.label}</h4>
              </div>
            )}
            {item.type === 'trigger' && (
              <div className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <h4>{item?.data?.label}</h4>
              </div>
            )}
            {item.type === 'filter' && (
              <div className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <h4>{item?.data?.label}</h4>
              </div>
            )}
            {item.type === 'function' && (
              <div className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <h4>{item?.data?.label}</h4>
              </div>
            )}
            {item.type === 'query' && (
              <div className="flex items-center text-sm mb-2 gap-2 rounded-lg p-2 px-2 cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <h4>{item?.data?.label}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListWorkflow
