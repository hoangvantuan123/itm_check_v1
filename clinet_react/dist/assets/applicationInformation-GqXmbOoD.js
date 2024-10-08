import { j as n, R as a, c as e, F as l, I as s } from './index-qpVH-Pqu.js'
const t = ({ form: i }) =>
  n.jsxs('div', {
    className: 'mb-4',
    children: [
      n.jsx('h2', {
        className: 'text-base font-semibold mb-4',
        children: 'Thông tin ứng tuyển',
      }),
      n.jsxs(a, {
        gutter: 16,
        children: [
          n.jsx(e, {
            xs: 24,
            sm: 12,
            md: 12,
            children: n.jsx(l.Item, {
              label: 'Bộ phận ứng tuyển:',
              name: ['applicationInformation', 'applicationDepartment'],
              rules: [
                { required: !0, message: 'Vui lòng nhập bộ phận ứng tuyển!' },
              ],
              children: n.jsx(s, {
                size: 'large',
                placeholder: 'Nhập bộ phận ứng tuyển',
              }),
            }),
          }),
          n.jsx(e, {
            xs: 24,
            sm: 12,
            md: 12,
            children: n.jsx(l.Item, {
              label: 'Vị trí ứng tuyển:',
              name: ['applicationInformation', 'positionApplied'],
              rules: [
                { required: !0, message: 'Vui lòng nhập vị trí ứng tuyển!' },
              ],
              children: n.jsx(s, {
                size: 'large',
                placeholder: 'Nhập vị trí ứng tuyển',
              }),
            }),
          }),
        ],
      }),
      n.jsxs(a, {
        gutter: 16,
        children: [
          n.jsx(e, {
            xs: 24,
            sm: 12,
            md: 12,
            children: n.jsx(l.Item, {
              label: 'Chức vụ:',
              name: ['applicationInformation', 'jobTitle'],
              children: n.jsx(s, {
                size: 'large',
                placeholder: 'Nhập chức vụ',
              }),
            }),
          }),
          n.jsx(e, {
            xs: 24,
            sm: 12,
            md: 12,
            children: n.jsx(l.Item, {
              label: 'Phân loại nhân viên:',
              name: ['applicationInformation', 'userClassification'],
              children: n.jsx(s, {
                size: 'large',
                placeholder: 'Nhập phân loại',
              }),
            }),
          }),
        ],
      }),
      n.jsxs(a, {
        gutter: 16,
        children: [
          n.jsx(e, {
            xs: 24,
            sm: 12,
            md: 12,
            children: n.jsx(l.Item, {
              label: 'Mức lương CB mong muốn:',
              name: ['applicationInformation', 'desiredSalaryBasic'],
              children: n.jsx(s, {
                size: 'large',
                placeholder: 'Nhập mức lương CB mong muốn',
              }),
            }),
          }),
          n.jsx(e, {
            xs: 24,
            sm: 12,
            md: 12,
            children: n.jsx(l.Item, {
              label: 'Mức lương tổng mong muốn:',
              name: ['applicationInformation', 'desiredSalaryTotal'],
              children: n.jsx(s, {
                size: 'large',
                placeholder: 'Nhập mức lương tổng mong muốn',
              }),
            }),
          }),
        ],
      }),
    ],
  })
export { t as default }
