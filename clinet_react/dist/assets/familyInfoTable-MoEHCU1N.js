import {
  r as g,
  j as e,
  T as S,
  B as x,
  D as z,
  F as l,
  I as r,
  a as Y,
  C as m,
  b as _,
} from './index-qpVH-Pqu.js'
const A = ({ isMobile: j, familyMembers: h, setFamilyMembers: p }) => {
  const [b, u] = g.useState(!1),
    [o, C] = g.useState(null),
    [a, i] = g.useState({
      relationship: 'Anh/Em/Con',
      name_family: '',
      birthYear: '',
      workplace: '',
      job: '',
      phoneNumber: '',
      livingTogether: !1,
    }),
    c = (n = null) => {
      C(n),
        i(
          n || {
            relationship: 'Anh/Em/Con',
            name_family: '',
            birthYear: '',
            workplace: '',
            job: '',
            phoneNumber: '',
            livingTogether: !1,
          },
        ),
        u(!0)
    },
    d = () => {
      u(!1)
    },
    t = (n) => {
      const { name: s, value: N, type: y, checked: I } = n.target
      i((T) => ({ ...T, [s]: y === 'checkbox' ? I : N }))
    },
    f = () => {
      p(
        o
          ? (n) => n.map((s) => (s.key === o.key ? { ...a } : s))
          : (n) => [...n, { key: n.length, ...a }],
      ),
        i({
          relationship: 'Anh/Em/Con',
          name_family: '',
          birthYear: '',
          workplace: '',
          job: '',
          phoneNumber: '',
          livingTogether: !1,
        }),
        d()
    },
    k = (n) =>
      e.jsxs(
        _,
        {
          title: n.relationship,
          style: { marginBottom: '16px' },
          onClick: () => c(n),
          children: [
            e.jsxs('p', {
              children: [
                e.jsx('strong', { children: 'Họ tên:' }),
                ' ',
                n.name_family,
              ],
            }),
            e.jsxs('p', {
              children: [
                e.jsx('strong', { children: 'Năm sinh:' }),
                ' ',
                n.birthYear,
              ],
            }),
            e.jsxs('p', {
              children: [
                e.jsx('strong', { children: 'Nơi làm việc:' }),
                ' ',
                n.workplace,
              ],
            }),
            e.jsxs('p', {
              children: [
                e.jsx('strong', { children: 'Công việc:' }),
                ' ',
                n.job,
              ],
            }),
            e.jsxs('p', {
              children: [
                e.jsx('strong', { children: 'Số điện thoại:' }),
                ' ',
                n.phoneNumber,
              ],
            }),
            e.jsxs('p', {
              children: [
                e.jsx('strong', { children: 'Sống chung:' }),
                ' ',
                e.jsxs(m, {
                  checked: n.livingTogether,
                  disabled: !0,
                  children: [' ', 'Đang sống chung', ' '],
                }),
              ],
            }),
          ],
        },
        n.key,
      ),
    v = [
      {
        title: 'Quan hệ',
        dataIndex: 'relationship',
        render: (n) => e.jsx('span', { children: n }),
      },
      {
        title: 'Họ tên',
        dataIndex: 'name_family',
        render: (n) => e.jsx('span', { children: n }),
      },
      {
        title: 'Năm sinh',
        dataIndex: 'birthYear',
        render: (n) => e.jsx('span', { children: n }),
      },
      {
        title: 'Nơi làm việc',
        dataIndex: 'workplace',
        render: (n) => e.jsx('span', { children: n }),
      },
      {
        title: 'Công việc',
        dataIndex: 'job',
        render: (n) => e.jsx('span', { children: n }),
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phoneNumber',
        render: (n) => e.jsx('span', { children: n }),
      },
      {
        title: 'Sống chung',
        dataIndex: 'livingTogether',
        render: (n) => e.jsx(m, { checked: n, disabled: !0 }),
      },
    ],
    w = (n) => {
      c(n)
    }
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('h2', {
        className: 'text-base font-semibold mb-4',
        children: 'Thông tin gia đình',
      }),
      !j &&
        e.jsx(S, {
          dataSource: h,
          columns: v,
          pagination: !1,
          rowKey: 'key',
          bordered: !0,
          scroll: { x: !0 },
          style: { margin: '0 auto' },
          rowClassName: 'custom-row',
          size: 'small',
          onRow: (n) => ({ onClick: () => w(n) }),
        }),
      j && e.jsx('div', { children: h.map(k) }),
      e.jsx(x, {
        onClick: () => c(),
        type: 'dashed',
        size: 'large',
        disabled: h.filter((n) => n.relationship === 'Anh/Em/Con').length >= 3,
        style: { marginTop: '16px' },
        className: 'w-full',
        children: 'Thêm hàng',
      }),
      e.jsx(z, {
        title: null,
        height: 750,
        onClose: d,
        visible: b,
        placement: 'bottom',
        closable: !1,
        footer: e.jsxs('div', {
          className: 'flex items-center justify-between',
          children: [
            e.jsx(
              x,
              { onClick: d, size: 'large', children: 'Thoát' },
              'cancel',
            ),
            e.jsx(
              x,
              {
                type: 'primary',
                size: 'large',
                className:
                  'ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm',
                onClick: f,
                children: o ? 'Cập nhật' : 'Thêm',
              },
              'submit',
            ),
          ],
        }),
        children: e.jsxs(l, {
          layout: 'vertical',
          children: [
            e.jsx(l.Item, {
              label: 'Họ tên',
              children: e.jsx(r, {
                name: 'name_family',
                size: 'large',
                value: a.name_family,
                onChange: t,
              }),
            }),
            e.jsx(l.Item, {
              label: 'Năm sinh',
              children: e.jsx(Y, {
                name: 'birthYear',
                size: 'large',
                inputMode: 'numeric',
                className: 'w-full',
                value: a.birthYear,
                onChange: (n) => i((s) => ({ ...s, birthYear: n })),
              }),
            }),
            e.jsx(l.Item, {
              label: 'Nơi làm việc',
              children: e.jsx(r, {
                size: 'large',
                name: 'workplace',
                value: a.workplace,
                onChange: t,
              }),
            }),
            e.jsx(l.Item, {
              label: 'Công việc',
              children: e.jsx(r, {
                size: 'large',
                name: 'job',
                value: a.job,
                onChange: t,
              }),
            }),
            e.jsx(l.Item, {
              label: 'Số điện thoại',
              children: e.jsx(r, {
                size: 'large',
                name: 'phoneNumber',
                value: a.phoneNumber,
                onChange: t,
              }),
            }),
            e.jsx(l.Item, {
              label: 'Sống chung',
              className: ' flex items-center gap-3',
              children: e.jsx(m, {
                name: 'livingTogether',
                checked: a.livingTogether,
                onChange: t,
                children: 'Đang sống chung',
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
export { A as default }
