const templates = [
  {
    id: '2',
    type: 'trigger',
    project_id: 1,
    data: { value: 123, label: 'Trigger', timeout: 5000 },
    details: {
      schedule: {
        label: 'schedule',
        minute: 0,
        hour: 0,
        day: 0,
        week: 0,
        month: 0,
      },
    },
  },
  {
    id: '3',
    type: 'function',
    project_id: 1,
    data: { value: 123, label: 'Function', timeout: 5000 },
    details: {
      code_function: {
        label: 'Code Node 1',
        description: 'Custom code node',
        code: "console.log('Hello, World!');",
        language: 'javascript',
      },
    },
  },
  {
    id: '4',
    type: 'filter',
    project_id: 1,
    data: { value: 123, label: 'Filter', timeout: 5000 },
    details: {
      filter: {
        label: 'filter Node 1',
        input: '',
        expression: 'id node',
      },
    },
  },
  {
    id: '5',
    type: 'query',
    project_id: 1,
    data: { value: 123, label: 'Query', timeout: 5000 },
    details: {
      query: {
        label: 'query Node 1',
        name_resources: '*',
        type_resources: '*',
        link_url: '',
        code: "console.log('Hello, World!');",
        language: 'javascript',
      },
    },
  },
  {
    id: '6',
    type: 'branch',
    project_id: 1,
    data: { value: 123, label: 'Branch', timeout: 5000 },
    details: {
      branch: {
        label: 'branch Node 1',
        code: "console.log('Hello, World!');",
        language: 'javascript',
      },
    },
  },
  {
    id: '7',
    type: 'loop',
    project_id: 1,
    data: { value: 123, label: 'Loop', timeout: 5000 },
    details: {
      loop: {
        label: 'loop Node 1',
        type_mode: 'code',
        code: "console.log('Hello, World!');",
        language: 'javascript',
        loop_lambda: 'id',
      },
    },
  },
  {
    id: '8',
    type: 'webhook',
    project_id: 1,
    data: { value: 123, label: 'Webhook', timeout: 5000 },
    details: {
      webhook: {
        label: 'Webhook Node 1',
        url: 'https://example.com/webhook',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer your-token-here',
        },
        body: JSON.stringify({
          event: 'example_event',
          data: {
            id: 123,
            message: 'Hello, Webhook!',
          },
        }),
      },
    },
  },
  {
    id: '9',
    type: 'chart',
    project_id: 1,
    data: { value: 123, label: 'Chart', timeout: 5000 },
    details: {
      chart_type: 'bar', // Loại biểu đồ
      chart_data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [
          {
            label: 'Example Dataset',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      chart_config: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    },
  },
]
const TemplatePanel = ({ onDragStart }) => {
  const handleDragStart = (event, template) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(template),
    )
    onDragStart()
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-2">Templates </h2>
      <div className="templates">
        {templates.map((template) => (
          <div
            key={template.id}
            draggable
            onDragStart={(event) => handleDragStart(event, template)}
            className="template-item"
          >
            {template.type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplatePanel
