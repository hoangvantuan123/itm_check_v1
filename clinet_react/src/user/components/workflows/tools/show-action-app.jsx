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

export default function ShowActionApp({ openShowActionApp }) {
  return (
    <div>
      {' '}
      <div className=" h-9 border-b p-1 flex items-center justify-between px-2">
        <Text type="secondary" strong>
          Action in an app
        </Text>
        <button onClick={openShowActionApp}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
