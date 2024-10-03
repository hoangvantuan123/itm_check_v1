import { Tag } from 'antd'

const CustomTagSyn = ({ status }) => {
  let color
  let text

  switch (status) {
    case true:
      color = 'green'
      text = 'Đã đồng bộ'
      break
    case false:
      color = 'volcano'
      text = 'Chưa đồng bộ'
      break
    default:
      color = 'default'
      text = 'Default '
      break
  }

  return <Tag color={color}>{text}</Tag>
}

export default CustomTagSyn
