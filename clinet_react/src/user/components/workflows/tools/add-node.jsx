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
import SlackLogo from '../../../../assets/slack.png'
import VnuaLogo from '../../../../assets/vnua.jpg'
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

const ActionAppIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69995 9.26001L12 12.33L17.2599 9.28003"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.7701V12.3201"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.76 6.29006L7.55998 8.07009C6.83998 8.47009 6.23999 9.48008 6.23999 10.3101V13.7001C6.23999 14.5301 6.82998 15.5401 7.55998 15.9401L10.76 17.7201C11.44 18.1001 12.56 18.1001 13.25 17.7201L16.45 15.9401C17.17 15.5401 17.77 14.5301 17.77 13.7001V10.3101C17.77 9.48008 17.18 8.47009 16.45 8.07009L13.25 6.29006C12.56 5.90006 11.44 5.90006 10.76 6.29006Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const DriverIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.32 10H4.69002C3.21002 10 2.01001 8.79002 2.01001 7.32002V4.69002C2.01001 3.21002 3.22002 2.01001 4.69002 2.01001H19.32C20.8 2.01001 22 3.22002 22 4.69002V7.32002C22 8.79002 20.79 10 19.32 10Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.32 22H4.69002C3.21002 22 2.01001 20.79 2.01001 19.32V16.69C2.01001 15.21 3.22002 14.01 4.69002 14.01H19.32C20.8 14.01 22 15.22 22 16.69V19.32C22 20.79 20.79 22 19.32 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5V7"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5V7"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17V19"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17V19"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6H18"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18H18"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const FunctionIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13L8 15L10 17"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 13L16 15L14 17"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const WorkFlowIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4501 14.4V8.5C16.4501 7.95 16.0001 7.5 15.4501 7.5H12.55"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.05 6L12.25 7.5L14.05 9"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.55005 10.2V14.3999"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.54999 17.9999C8.5441 17.9999 9.34998 17.194 9.34998 16.1999C9.34998 15.2058 8.5441 14.3999 7.54999 14.3999C6.55588 14.3999 5.75 15.2058 5.75 16.1999C5.75 17.194 6.55588 17.9999 7.54999 17.9999Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.45 17.9999C17.4441 17.9999 18.25 17.194 18.25 16.1999C18.25 15.2058 17.4441 14.3999 16.45 14.3999C15.4559 14.3999 14.65 15.2058 14.65 16.1999C14.65 17.194 15.4559 17.9999 16.45 17.9999Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const FilterIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.63 14.75C21.63 15.64 21.38 16.48 20.94 17.2C20.12 18.58 18.61 19.5 16.88 19.5C15.15 19.5 13.64 18.57 12.82 17.2C12.38 16.49 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C19.5 10 21.63 12.13 21.63 14.75Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.66 14.73H15.11"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.88 13V16.55"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6901 4.02002V6.23999C20.6901 7.04999 20.1801 8.06001 19.6801 8.57001L17.9201 10.12C17.5901 10.04 17.2401 10 16.8801 10C14.2601 10 12.1301 12.13 12.1301 14.75C12.1301 15.64 12.3801 16.48 12.8201 17.2C13.1901 17.82 13.7001 18.35 14.3201 18.73V19.07C14.3201 19.68 13.9201 20.49 13.4101 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.46006 13.01 8.06006 12.51L4.22006 8.46997C3.72006 7.95997 3.31006 7.05001 3.31006 6.45001V4.12C3.31006 2.91 4.22006 2 5.33006 2H18.6701C19.7801 2 20.6901 2.91002 20.6901 4.02002Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const TriggerIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75"
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
const BranchIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22V20"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V16"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14V11C12 7.13 15.13 4 19 4H22"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 2L2 4L4 6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 2L22 4L20 6"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const RefreshIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 17.52 6.48 22 12 22"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 3"
      />
    </svg>
  )
}
const ChartIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.32 11.9999C20.92 11.9999 22 10.9999 21.04 7.71994C20.39 5.50994 18.49 3.60994 16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9999 14.7C19.0699 19.33 14.6299 22.69 9.57993 21.87C5.78993 21.26 2.73993 18.21 2.11993 14.42C1.30993 9.39001 4.64993 4.95001 9.25993 4.01001"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const EmailsIcon = () => {
  return (
    <svg
      className="w-6 h-6 opacity-75 "
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2602_19)">
        <path
          d="M32 23.8795C32 24.0548 31.9945 24.4329 31.9836 24.7288C31.9562 25.4466 31.9014 26.3726 31.8137 26.7945C31.6822 27.4301 31.4904 28.0274 31.2329 28.526C30.9315 29.1178 30.5479 29.6438 30.0877 30.0986C29.6329 30.5534 29.1068 30.937 28.5151 31.2384C28.0164 31.4959 27.4137 31.6877 26.7726 31.8192C26.3562 31.9014 25.4356 31.9616 24.7233 31.9836C24.4274 31.9945 24.0493 32 23.874 32H8.11507C7.93973 32 7.56164 31.9945 7.26575 31.9836C6.54795 31.9562 5.62192 31.9014 5.2 31.8137C4.56438 31.6822 3.96712 31.4904 3.46849 31.2329C2.87671 30.9315 2.35068 30.5479 1.89589 30.0877C1.4411 29.6329 1.05753 29.1068 0.756164 28.5151C0.49863 28.0164 0.306849 27.4137 0.175342 26.7726C0.0931507 26.3562 0.0328767 25.4356 0.0109589 24.7233C0.00547945 24.4329 0 24.0548 0 23.8795V8.12055C0 7.94521 0.00547945 7.56712 0.0164384 7.27123C0.0438356 6.55342 0.0986301 5.6274 0.186301 5.20548C0.317808 4.56986 0.509589 3.9726 0.767123 3.47397C1.06849 2.88219 1.45205 2.35616 1.90685 1.90137C2.36164 1.44658 2.88767 1.06301 3.47945 0.761644C3.97808 0.50411 4.58082 0.312329 5.22192 0.180822C5.63836 0.0986301 6.5589 0.0383562 7.27123 0.0164384C7.56712 0.00547945 7.94521 0 8.12055 0H23.8795C24.0548 0 24.4329 0.00547945 24.7288 0.0164384C25.4466 0.0438356 26.3726 0.0986301 26.7945 0.186301C27.4301 0.317808 28.0274 0.509589 28.526 0.767123C29.1178 1.06849 29.6438 1.45205 30.0986 1.91233C30.5534 2.36712 30.937 2.89315 31.2384 3.48493C31.4959 3.98356 31.6877 4.5863 31.8192 5.2274C31.9014 5.64384 31.9616 6.56438 31.9836 7.27671C31.9945 7.5726 32 7.95069 32 8.12603V23.8795Z"
          fill="#F8F8F8"
        />
        <rect width="32" height="32" fill="#F8F8F8" />
        <g clip-path="url(#clip1_2602_19)">
          <path
            d="M5.39798 25.2444H9.28216V15.8114L3.73334 11.6498V23.5798C3.73334 24.5009 4.47965 25.2444 5.39798 25.2444Z"
            fill="#4285F4"
          />
          <path
            d="M22.5993 25.2444H26.4835C27.4046 25.2444 28.1481 24.4981 28.1481 23.5798V11.6498L22.5993 15.8114"
            fill="#34A853"
          />
          <path
            d="M22.5993 8.59794V15.8114L28.1481 11.6498V9.43027C28.1481 7.37165 25.7982 6.19808 24.153 7.43269"
            fill="#FBBC04"
          />
          <path
            d="M9.28217 15.8114V8.59797L15.9408 13.5919L22.5993 8.59797V15.8114L15.9408 20.8054"
            fill="#EA4335"
          />
          <path
            d="M3.73334 9.43027V11.6498L9.28216 15.8114V8.59794L7.72849 7.43269C6.08049 6.19808 3.73334 7.37165 3.73334 9.43027Z"
            fill="#C5221F"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2602_19">
          <rect width="32" height="32" fill="white" />
        </clipPath>
        <clipPath id="clip1_2602_19">
          <rect
            width="24.4148"
            height="18.3111"
            fill="white"
            transform="translate(3.73334 6.93333)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
const templates = [
  {
    id: '2',
    type: 'trigger',
    project_id: 1,
    data: { value: 123, label: 'Trigger', timeout: 5000 },
    details: {
      schedule: {
        minute: '*',
        hour: '*',
        day: '*',
        week: '*',
        month: '*',
        dayOfWeek: '*',
        label: 'schedule',
        loop: true,
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
        code: `function createArray() {
          return ["apple", "banana", "orange"];
        }
        const resultArray = createArray();
        resultArray;`,
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
        code: `
          // Gọi dữ liệu từ Google Sheet
          // Sử dụng axios hoặc fetch để gửi yêu cầu HTTP
          // Ví dụ:
          const axios = require("axios");
          const sheetId = "YOUR_GOOGLE_SHEET_ID";
          const sheetName = "YOUR_SHEET_NAME"; // Tên của bảng Google Sheet
          
          async function fetchDataFromGoogleSheet() {
            const url = \`https://docs.google.com/spreadsheets/d/\${sheetId}/gviz/tq?tqx=out:json&sheet=\${sheetName}\`;
            try {
              const response = await axios.get(url);
              // Xử lý dữ liệu JSON từ Google Sheet và trả về dưới dạng mảng các dòng
              // Ví dụ: const data = response.data;
              return processedData;
            } catch (error) {
              console.error("Error fetching data from Google Sheet:", error);
              return null;
            }
          }
          
          const sheetData = await fetchDataFromGoogleSheet();
          sheetData;
        `,
        label: 'query Node 1',
        type: 'GoogleSheet',
        language: 'javascript',
        link_url: '', // Đường dẫn URL của Google Sheet (nếu cần)
        name_resources: '*', // Tên tài nguyên (nếu cần)
        type_resources: '*', // Loại tài nguyên (nếu cần)
        sheet_id: '1ONdmxtYUpQOtTyrHuoa8VPOrXfOL70DA', // ID của Google Sheet
        sheet_name: 'Tầng 1', // Tên của bảng Google Sheet
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
        url: 'https://example.com/webhook', // URL endpoint của webhook
        method: 'POST', // Phương thức HTTP
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
    data: {
      value: 123,
      label: 'Chart',
      timeout: 5000,
    },
    details: {
      database_connection: 'bdff40aa-9114-4b67-b69e-80a204077689',
      chart_data: {},
    },
  },

  {
    id: '10',
    type: 'slack',
    project_id: 1,
    data: {
      value: 123,
      label: 'slack',
      timeout: 5000,
    },
    details: {
      type: 'Channel',
      slack_url: 'API của Slack',
      userIDs: ['userID1', 'userID2', 'userID3'],
      token: 'new token',
      content: 'new',
    },
  },
  {
    id: '11',
    type: 'emails',
    project_id: 1,
    data: {
      value: 123,
      label: 'email',
      timeout: 5000,
    },
    details: {
      type: 'emails',
      to: ['userID1', 'userID2', 'userID3'],
    },
  },
  {
    id: '12',
    type: 'vnua',
    project_id: 1,
    data: {
      value: 123,
      label: 'vnua',
      timeout: 5000,
    },
    details: {
      type: 'Import File',
      slack : "slack_vnua",
      data: ['scsv'],
      sheet_url: '',
      dateField: "ngay"
    },
  },
  {
    id: '13',
    type: 'slack_vnua',
    project_id: 1,
    data: {
      value: 123,
      label: 'slack_vnua',
      timeout: 5000,
    },
    details: {
      database_connection: "",
      type: "Direct Message",
      content: `Mã môn học: \${maMH}
Tên môn học: \${tenMH}
Thứ: \${thu}
Ngày: \${ngay}
Thời gian: \${thoiGian}
Tiết bắt đầu: \${tietBD}
Phòng học: \${phong}`,
token: 'new token',
userIDs: ['userID1', 'userID2', 'userID3'],

    },
    data: ['scsv'],
    dateField: "2024-06-17"
  },
]

export default function AddNode({
  openAddNode,
  openShowActionApp,
  onDragStart,
}) {
  const handleDragStart = (event, template) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(template),
    )
    onDragStart()
  }
  return (
    <div>
      <div className=" h-9 border-b p-1 flex items-center justify-between px-2">
        <Text type="secondary" strong>
          Blocks
        </Text>
        <button onClick={openAddNode}>
          <CloseIcon />
        </button>
      </div>

      <div className="p-2  h-[650px] overflow-hidden">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-1 lg:gap-3  pb-20   h-full  overflow-auto scrollable-content scroll-container ">
          <div
            onClick={openShowActionApp}
            className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50   hover:shadow-sm border cursor-pointer flex  items-center "
          >
            <div className=" p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
              <ActionAppIcon />
            </div>
            <div className="flex flex-col">
              <Text>Action in an app</Text>
              <Text type="secondary" italic className=" text-[10px]">
                Customization in an app or service like google sheets, Telegram
                or Notion, Slack.
              </Text>
            </div>
          </div>
          {templates.map((template) => (
            <div
              key={template.id}
              draggable
              onDragStart={(event) => handleDragStart(event, template)}
              className="grid grid-cols-1 gap-2 lg:grid-cols-1 lg:gap-3"
            >
              {template.type === 'query' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50   hover:shadow-sm border cursor-pointer flex items-center ">
                  <div className="  p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
                    <DriverIcon />
                  </div>

                  <div className=" flex flex-col">
                    <Text>Resource query</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Use resources to interactively connect to databases and
                      APIs.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'function' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50   hover:shadow-sm border cursor-pointer flex items-center ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
                    <FunctionIcon />
                  </div>
                  <div className="flex flex-col">
                    <Text>Function code</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Manipulate data, run javascript code và python, etc.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'trigger' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm  border cursor-pointer flex items-center ">
                  {' '}
                  <div className=" p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
                    <TriggerIcon />
                  </div>
                  <div className="flex flex-col">
                    <Text>Trigger</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Schedules and webhook endpoints that can start a workflow.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'webhook' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50   hover:shadow-sm border cursor-pointer flex items-center ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
                    <FunctionIcon />
                  </div>
                  <div className="flex flex-col">
                    <Text>Webhook </Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Start the workflow when the webhook is called
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'filter' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm  border cursor-pointer flex items-center ">
                  {' '}
                  <div className=" p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
                    <FilterIcon />
                  </div>
                  <div className=" flex flex-col">
                    <Text>Filter</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Filter data with the Filter block.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'branch' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50 flex items-center justify-center">
                    <BranchIcon />
                  </div>
                  <div className=" flex flex-col">
                    <Text>Branch</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Perform conditional logic with the Branch block.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'loop' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center  ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50  flex items-center justify-center">
                    <RefreshIcon />
                  </div>
                  <div className=" flex flex-col">
                    <Text className="">Loop</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Iterate through data with the Loop block.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'chart' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center  ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50  flex items-center justify-center">
                    <ChartIcon />
                  </div>
                  <div className=" flex flex-col">
                    <Text className="">Chart</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Use the Chart node to automate work in Chart, and
                      integrate Chart with other applications.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'slack' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center  ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50  flex items-center justify-center">
                    <Image src={SlackLogo} className="w-10 h-10" />
                  </div>
                  <div className=" flex flex-col">
                    <Text className="">Slack</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Send notifications via slack.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'emails' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center  ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50  flex items-center justify-center">
                    <EmailsIcon />
                  </div>
                  <div className=" flex flex-col">
                    <Text className="">Emails</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Send email messages to one or more people.
                    </Text>
                  </div>
                </div>
              )}
              {template.type === 'vnua' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center  ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50  flex items-center justify-center">
                    <Image
                      src={VnuaLogo}
                      style={{ width: '20px', height: '20px' }}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <Text className="">Vnua</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                      Send daily schedule notifications.
                    </Text>
                  </div>
                </div>
              )}
                {template.type === 'slack_vnua' && (
                <div className="h-auto p-2 gap-2 rounded-lg  bg-white hover:bg-slate-50  hover:shadow-sm border cursor-pointer flex items-center  ">
                  {' '}
                  <div className="p-2 border rounded-lg bg-slate-50  flex items-center justify-center">
                    <Image src={SlackLogo} className="w-10 h-10" />
                  </div>
                  <div className=" flex flex-col">
                    <Text className="">Slack Vnua</Text>
                    <Text type="secondary" italic className=" text-[10px]">
                    Send Vnua class schedule notifications via Slack.
                    </Text>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
