import {
  r as j,
  j as e,
  b as k,
  B as r,
  h as o,
  D as W,
  F as n,
  R as h,
  c as t,
  I as d,
  d as Y,
  a as D,
} from './index-mZ42_QcL.js'
const K = ({
  isMobile: C,
  setWorkExperiences: m,
  workExperiences: x,
  setProjects: u,
  projects: c,
  initialWorkExperience: z,
  initialProject: w,
}) => {
  const [T, g] = j.useState(!1),
    [s, l] = j.useState(null),
    [F, v] = j.useState(!1),
    [y, p] = j.useState(!1),
    A = () => {
      l(z), v(!1), p(!1), g(!0)
    },
    M = () => {
      l(w), v(!1), p(!0), g(!0)
    },
    S = (a) => {
      const i = x.filter((f) => f.key !== a)
      m(i)
    },
    L = (a) => {
      const i = c.filter((f) => f.key !== a)
      u(i)
    },
    N = (a, i = !1) => {
      l(a), v(!0), p(i), g(!0)
    },
    b = () => {
      g(!1), l(null)
    },
    P = () => {
      if (F) {
        if (s)
          if (y) {
            const a = c.map((i) => (i.key === s.key ? s : i))
            u(a)
          } else {
            const a = x.map((i) => (i.key === s.key ? s : i))
            m(a)
          }
      } else {
        const a = { ...s, key: Date.now() }
        y ? u([...c, a]) : m([...x, a])
      }
      b()
    }
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('h3', {
        className: 'text-base font-semibold mb-4',
        children: 'Kinh nghiệm làm việc',
      }),
      e.jsx('div', {
        style: { display: 'flex', flexWrap: 'wrap', gap: '16px' },
        children: x.map((a) =>
          e.jsxs(
            k,
            {
              size: 'small',
              title: a.companyName || 'Công ty chưa có tên',
              style: { width: '100%' },
              onClick: () => N(a),
              extra: [
                e.jsx(r, {
                  type: 'link',
                  onClick: () => S(a.key),
                  children: 'Xóa',
                }),
              ],
              children: [
                e.jsxs('p', {
                  children: [
                    e.jsx('strong', { children: 'Chức vụ:' }),
                    ' ',
                    a.position || 'N/A',
                  ],
                }),
                e.jsxs('p', {
                  children: [
                    e.jsx('strong', { children: 'Năm vào:' }),
                    ' ',
                    a.joinYear ? o(a.joinYear).format('YYYY') : 'N/A',
                  ],
                }),
                e.jsxs('p', {
                  children: [
                    e.jsx('strong', { children: 'Năm thôi việc:' }),
                    ' ',
                    a.leaveYear ? o(a.leaveYear).format('YYYY') : 'N/A',
                  ],
                }),
              ],
            },
            a.key,
          ),
        ),
      }),
      e.jsx(r, {
        type: 'dashed',
        onClick: A,
        className: 'mt-5 mb-5',
        children: 'Thêm công ty',
      }),
      e.jsx('h3', {
        className: 'text-base font-semibold mb-4',
        children: 'Dự án',
      }),
      e.jsx('div', {
        style: { display: 'flex', flexWrap: 'wrap', gap: '16px' },
        children: c.map((a) =>
          e.jsxs(
            k,
            {
              size: 'small',
              onClick: () => N(a, !0),
              title: a.projectName || 'Dự án chưa có tên',
              style: { width: '100%' },
              extra: [
                e.jsx(r, {
                  type: 'link',
                  onClick: () => L(a.key),
                  children: 'Xóa',
                }),
              ],
              children: [
                e.jsxs('p', {
                  children: [
                    e.jsx('strong', { children: 'Ngày bắt đầu:' }),
                    ' ',
                    a.startDate ? o(a.startDate).format('YYYY-MM-DD') : 'N/A',
                  ],
                }),
                e.jsxs('p', {
                  children: [
                    e.jsx('strong', { children: 'Ngày kết thúc:' }),
                    ' ',
                    a.endDate ? o(a.endDate).format('YYYY-MM-DD') : 'N/A',
                  ],
                }),
              ],
            },
            a.key,
          ),
        ),
      }),
      e.jsx(r, {
        type: 'dashed',
        onClick: M,
        className: 'mt-5 mb-5',
        children: 'Thêm dự án',
      }),
      e.jsx(W, {
        title: null,
        height: 750,
        onClose: b,
        visible: T,
        placement: 'bottom',
        closable: !1,
        footer: e.jsxs('div', {
          className: 'flex items-center justify-between',
          children: [
            e.jsx(
              r,
              { onClick: b, size: 'large', children: 'Thoát' },
              'cancel',
            ),
            e.jsx(
              r,
              {
                type: 'primary',
                size: 'large',
                className:
                  'ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm',
                onClick: P,
                children: 'Lưu',
              },
              'submit',
            ),
          ],
        }),
        children: e.jsx(n, {
          layout: 'vertical',
          children: y
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(h, {
                    gutter: 16,
                    children: e.jsx(t, {
                      xs: 24,
                      sm: 12,
                      children: e.jsx(n.Item, {
                        label: 'Tên dự án',
                        children: e.jsx(d, {
                          size: 'large',
                          placeholder: 'Tên dự án',
                          value: s == null ? void 0 : s.projectName,
                          onChange: (a) =>
                            l({ ...s, projectName: a.target.value }),
                        }),
                      }),
                    }),
                  }),
                  e.jsxs(h, {
                    gutter: 16,
                    children: [
                      e.jsx(t, {
                        xs: 12,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Ngày bắt đầu',
                          children: e.jsx(Y, {
                            size: 'large',
                            className: 'w-full',
                            placeholder: 'Ngày bắt đầu',
                            value:
                              s != null && s.startDate ? o(s.startDate) : null,
                            onChange: (a) => l({ ...s, startDate: a }),
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        xs: 12,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Ngày kết thúc',
                          children: e.jsx(Y, {
                            size: 'large',
                            className: 'w-full',
                            placeholder: 'Ngày kết thúc',
                            value: s != null && s.endDate ? o(s.endDate) : null,
                            onChange: (a) => l({ ...s, endDate: a }),
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Công việc phụ trách',
                          children: e.jsx(d, {
                            size: 'large',
                            placeholder: 'Công việc phụ trách',
                            value: s == null ? void 0 : s.task,
                            onChange: (a) => l({ ...s, task: a.target.value }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(h, {
                    gutter: 16,
                    children: [
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Số năm',
                          children: e.jsx(d, {
                            size: 'large',
                            placeholder: 'Số năm',
                            value: s == null ? void 0 : s.duration,
                            onChange: (a) =>
                              l({ ...s, duration: a.target.value }),
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Khái quát dự án',
                          children: e.jsx(d.TextArea, {
                            size: 'large',
                            placeholder: 'Khái quát dự án',
                            value: s == null ? void 0 : s.summary,
                            onChange: (a) =>
                              l({ ...s, summary: a.target.value }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsxs(h, {
                    gutter: 16,
                    children: [
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Tên công ty',
                          children: e.jsx(d, {
                            size: 'large',
                            value: s == null ? void 0 : s.companyName,
                            onChange: (a) =>
                              l({ ...s, companyName: a.target.value }),
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Chức vụ',
                          children: e.jsx(d, {
                            size: 'large',
                            value: s == null ? void 0 : s.position,
                            onChange: (a) =>
                              l({ ...s, position: a.target.value }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsx(h, {
                    gutter: 16,
                    children: e.jsx(t, {
                      xs: 24,
                      sm: 12,
                      children: e.jsx(n.Item, {
                        label: 'Quy mô LĐ',
                        children: e.jsx(d, {
                          size: 'large',
                          value: s == null ? void 0 : s.employeeScale,
                          onChange: (a) =>
                            l({ ...s, employeeScale: a.target.value }),
                        }),
                      }),
                    }),
                  }),
                  e.jsxs(h, {
                    gutter: 16,
                    children: [
                      e.jsx(t, {
                        xs: 12,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Năm vào công ty',
                          children: e.jsx(D, {
                            size: 'large',
                            className: 'w-full',
                            min: 1900,
                            max: new Date().getFullYear(),
                            value: (s == null ? void 0 : s.joinYear) || null,
                            onChange: (a) => l({ ...s, joinYear: a }),
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        xs: 12,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Năm thôi việc',
                          children: e.jsx(D, {
                            size: 'large',
                            className: 'w-full',
                            min: (s == null ? void 0 : s.joinYear) || 1900,
                            max: new Date().getFullYear(),
                            value: (s == null ? void 0 : s.leaveYear) || null,
                            onChange: (a) => l({ ...s, leaveYear: a }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  e.jsx(h, {
                    gutter: 16,
                    children: e.jsx(t, {
                      xs: 24,
                      sm: 12,
                      children: e.jsx(n.Item, {
                        label: 'Công việc phụ trách',
                        children: e.jsx(d.TextArea, {
                          size: 'large',
                          value: s == null ? void 0 : s.tasks,
                          onChange: (a) => l({ ...s, tasks: a.target.value }),
                        }),
                      }),
                    }),
                  }),
                  e.jsxs(h, {
                    gutter: 16,
                    children: [
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Mức lương',
                          children: e.jsx(d, {
                            size: 'large',
                            value: s == null ? void 0 : s.salary,
                            onChange: (a) =>
                              l({ ...s, salary: a.target.value }),
                          }),
                        }),
                      }),
                      e.jsx(t, {
                        xs: 24,
                        sm: 12,
                        children: e.jsx(n.Item, {
                          label: 'Lý do xin nghỉ',
                          children: e.jsx(d.TextArea, {
                            size: 'large',
                            value: s == null ? void 0 : s.reasonForLeaving,
                            onChange: (a) =>
                              l({ ...s, reasonForLeaving: a.target.value }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
        }),
      }),
    ],
  })
}
export { K as default }
