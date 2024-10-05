import { Tag } from 'antd'

const CustomTagForm = ({ status }) => {
  console.log('status')
  let color
  let text

  switch (status) {
    case 'Submitted':
      color = 'green'
      text = 'Submitted'
      break
    case 'Not Send Yet':
      color = 'volcano'
      text = 'Not Send Yet'
      break
    default:
      color = 'default'
      text = 'Chưa đánh giá'
      break
  }

  return <Tag color={color}>{text}</Tag>
}

export default CustomTagForm
