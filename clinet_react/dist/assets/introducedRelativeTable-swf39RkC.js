import { j as e, R as r, c as n, F as i, I as s } from './index-mZ42_QcL.js'
const a = ({ form: t }) =>
  e.jsxs('div', {
    children: [
      e.jsx('h3', {
        className: 'text-base font-semibold mb-4',
        children: 'Có hay không người quen giới thiệu',
      }),
      e.jsxs(r, {
        gutter: 16,
        style: { marginBottom: '10px' },
        children: [
          e.jsx(n, {
            xs: 24,
            sm: 12,
            md: 8,
            children: e.jsx(i.Item, {
              label: 'Họ tên người giới thiệu (Tên người giới thiệu)',
              name: ['introducer', 'introducerName'],
              children: e.jsx(s, { size: 'large', placeholder: 'Nhập họ tên' }),
            }),
          }),
          e.jsx(n, {
            xs: 24,
            sm: 12,
            md: 8,
            children: e.jsx(i.Item, {
              label: 'Bộ phận (Phòng ban)',
              name: ['introducer', 'department'],
              children: e.jsx(s, {
                size: 'large',
                placeholder: 'Nhập bộ phận',
              }),
            }),
          }),
          e.jsx(n, {
            xs: 24,
            sm: 12,
            md: 8,
            children: e.jsx(i.Item, {
              label: 'Số điện thoại',
              name: ['introducer', 'phoneNumber'],
              children: e.jsx(s, {
                size: 'large',
                placeholder: 'Nhập số điện thoại',
              }),
            }),
          }),
        ],
      }),
    ],
  })
export { a as default }
