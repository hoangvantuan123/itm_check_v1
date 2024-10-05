import {
  j as e,
  F as a,
  e as n,
  R as t,
  c as l,
  I as c,
} from './index-mZ42_QcL.js'
const h = ({ handleCheckboxChange: i, isSupplier: s }) => (
  console.log(s),
  e.jsxs('div', {
    children: [
      e.jsx('h2', {
        className: 'text-base font-semibold mb-4',
        children: 'Đối tượng ứng viên',
      }),
      e.jsx(a.Item, {
        name: 'candidateType',
        children: e.jsx(n.Group, {
          onChange: i,
          className: 'w-full',
          children: e.jsxs(t, {
            gutter: 16,
            children: [
              e.jsx(l, {
                span: 12,
                children: e.jsx(n, { value: 'ITM', children: 'ITM liên hệ' }),
              }),
              e.jsx(l, {
                span: 12,
                children: e.jsx(n, {
                  value: 'Supplier',
                  children: 'Nhà cung cấp',
                }),
              }),
            ],
          }),
        }),
      }),
      s &&
        e.jsx(a.Item, {
          label: 'Vui lòng cung cấp thông tin chi tiết:',
          name: 'supplierDetails',
          children: e.jsx(c.TextArea, {
            placeholder: 'Nhập thông tin chi tiết về Nhà cung cấp',
            rows: 4,
          }),
        }),
    ],
  })
)
export { h as default }
