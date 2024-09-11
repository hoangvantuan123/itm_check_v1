import { useState } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
} from 'antd'
const { Title, Text } = Typography
const Tabs = ({ handleButtonClick, selectedButton }) => {
  return (
    <div className=" flex items-center gap-4 ml-3">
      <button
        className={`${
          selectedButton === 'button1' ? 'opacity-100' : 'opacity-70'
        } `}
        onClick={() => handleButtonClick('button1')}
      >
        <Text strong>Inputs</Text>
      </button>
      <button
        className={`${
          selectedButton === 'button2' ? 'opacity-100' : 'opacity-70'
        } `}
        onClick={() => handleButtonClick('button2')}
      >
        <Text strong>Data</Text>
      </button>
      <button
        className={`${
          selectedButton === 'button3' ? 'opacity-100' : 'opacity-70'
        } `}
        onClick={() => handleButtonClick('button3')}
      >
        <Text strong>JSON</Text>
      </button>
      <button
        className={`${
          selectedButton === 'button4' ? 'opacity-100' : 'opacity-70'
        } `}
        onClick={() => handleButtonClick('button4')}
      >
        <Text strong>Logs</Text>
      </button>
    </div>
  )
}

export default Tabs
