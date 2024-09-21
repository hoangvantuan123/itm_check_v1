import { Table } from 'antd'
import { useTranslation } from 'react-i18next'

export default function TableView({ salaryData }) {
  const { t } = useTranslation()

  const columns = [
    {
      title: t('Date'),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: t('Time In'),
      dataIndex: 'timeIn',
      key: 'timeIn',
    },
    {
      title: t('Time Out'),
      dataIndex: 'timeOut',
      key: 'timeOut',
    },
    {
      title: t('Status'),
      dataIndex: 'status',
      key: 'status',
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={salaryData}
      pagination={false}
      locale={{ emptyText: t('No Data') }}
      scroll={{ x: true }}
    />
  )
}
