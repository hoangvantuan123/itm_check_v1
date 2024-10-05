import {
  r as g,
  j as s,
  R as c,
  c as n,
  b as k,
  B as i,
  D as F,
  F as r,
  S as I,
  I as h,
  a as j,
  d as Y,
} from './index-mZ42_QcL.js'
const { Option: o } = I,
  B = ({
    isMobile: N,
    educationData: u,
    setEducationData: b,
    languageData: p,
    setLanguageData: v,
  }) => {
    const [z, f] = g.useState(!1),
      [D, C] = g.useState(!1),
      [y, T] = g.useState(null),
      [x, w] = g.useState('education'),
      [l, a] = g.useState({
        schoolName: '',
        major: '',
        years: '',
        startYear: '',
        endYear: '',
        grade: '',
        language: '',
        certificateType: '',
        score: '',
        level: '',
        startDate: null,
        endDate: null,
        note: '',
      }),
      d = (e, t) => {
        f(!0),
          C(!!e),
          T(e),
          w(t),
          a({
            schoolName: (e == null ? void 0 : e.schoolName) || '',
            major: (e == null ? void 0 : e.major) || '',
            years: (e == null ? void 0 : e.years) || '',
            startYear: (e == null ? void 0 : e.startYear) || '',
            endYear: (e == null ? void 0 : e.endYear) || '',
            grade: (e == null ? void 0 : e.grade) || '',
            language: (e == null ? void 0 : e.language) || '',
            certificateType: (e == null ? void 0 : e.certificateType) || '',
            score: (e == null ? void 0 : e.score) || '',
            level: (e == null ? void 0 : e.level) || '',
            startDate: (e == null ? void 0 : e.startDate) || null,
            endDate: (e == null ? void 0 : e.endDate) || null,
            note: (e == null ? void 0 : e.note) || '',
          })
      },
      m = () => {
        f(!1), C(!1), T(null)
      },
      S = () => {
        if (y)
          x === 'language'
            ? v((e) => e.map((t) => (t.key === y.key ? { ...l } : t)))
            : b((e) => e.map((t) => (t.key === y.key ? { ...l } : t)))
        else {
          const e = x === 'language' ? p.length : u.length
          x === 'language'
            ? v([...p, { key: e, ...l }])
            : b([...u, { key: e, ...l }])
        }
        m()
      }
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx('h2', {
          className: 'text-base font-semibold mb-4 mt-4',
          children: 'Tình trạng học vấn',
        }),
        s.jsx(c, {
          gutter: 16,
          children: u.map((e) =>
            s.jsx(
              n,
              {
                span: 24,
                children: s.jsxs(k, {
                  size: 'small',
                  onClick: () => d(e, 'education'),
                  title: e.schoolName || 'Trường học',
                  style: { marginBottom: 16 },
                  children: [
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Chuyên ngành:' }),
                        ' ',
                        e.major || 'Chuyên ngành',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Số năm:' }),
                        ' ',
                        e.years || 'Số năm',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Năm nhập học:' }),
                        ' ',
                        e.startYear || 'Năm nhập học',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Năm tốt nghiệp:' }),
                        ' ',
                        e.endYear || 'Năm tốt nghiệp',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Xếp loại:' }),
                        ' ',
                        e.grade || 'Xếp loại',
                      ],
                    }),
                  ],
                }),
              },
              e.key,
            ),
          ),
        }),
        s.jsx(i, {
          type: 'dashed',
          onClick: () => d(null, 'education'),
          style: { marginTop: 5 },
          children: 'Thêm hàng giáo dục',
        }),
        s.jsx('h2', {
          className: 'text-xl font-semibold mb-4 mt-5',
          children: 'Ngoại ngữ',
        }),
        s.jsx(c, {
          gutter: 16,
          children: p.map((e) =>
            s.jsx(
              n,
              {
                span: 24,
                children: s.jsxs(k, {
                  size: 'small',
                  onClick: () => d(e, 'language'),
                  title: e.language || 'Ngôn ngữ',
                  style: { marginBottom: 16 },
                  children: [
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Loại chứng nhận:' }),
                        ' ',
                        e.certificateType || 'Loại chứng nhận',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Điểm số:' }),
                        ' ',
                        e.score || 'Điểm số',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Cấp bậc:' }),
                        ' ',
                        e.level || 'Cấp bậc',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Ngày bắt đầu:' }),
                        ' ',
                        e.startDate
                          ? e.startDate.format('YYYY-MM-DD')
                          : 'Ngày bắt đầu',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Ngày kết thúc:' }),
                        ' ',
                        e.endDate
                          ? e.endDate.format('YYYY-MM-DD')
                          : 'Ngày kết thúc',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Ghi chú:' }),
                        ' ',
                        e.note || 'Ghi chú',
                      ],
                    }),
                  ],
                }),
              },
              e.key,
            ),
          ),
        }),
        s.jsx(i, {
          type: 'dashed',
          onClick: () => d(null, 'language'),
          style: { marginTop: 5 },
          children: 'Thêm ngoại ngữ',
        }),
        s.jsx(F, {
          title: null,
          height: 750,
          onClose: m,
          visible: z,
          placement: 'bottom',
          closable: !1,
          footer: s.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              s.jsx(
                i,
                { onClick: m, size: 'large', children: 'Thoát' },
                'cancel',
              ),
              s.jsx(
                i,
                {
                  type: 'primary',
                  size: 'large',
                  className:
                    'ml-2 border-gray-200 bg-indigo-600 text-white shadow-sm text-sm',
                  onClick: S,
                  children: D ? 'Cập nhật' : 'Thêm',
                },
                'submit',
              ),
            ],
          }),
          children: s.jsx(r, {
            layout: 'vertical',
            children:
              x === 'language'
                ? s.jsxs(s.Fragment, {
                    children: [
                      s.jsxs(c, {
                        gutter: 16,
                        children: [
                          s.jsx(n, {
                            xs: 24,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Ngôn ngữ',
                              children: s.jsxs(I, {
                                value: l.language,
                                size: 'large',
                                onChange: (e) => a({ ...l, language: e }),
                                placeholder: 'Chọn ngôn ngữ',
                                children: [
                                  s.jsx(o, {
                                    value: 'Tiếng Hàn',
                                    children: 'Tiếng Hàn',
                                  }),
                                  s.jsx(o, {
                                    value: 'Tiếng Anh',
                                    children: 'Tiếng Anh',
                                  }),
                                  s.jsx(o, {
                                    value: 'Tiếng Nhật',
                                    children: 'Tiếng Nhật',
                                  }),
                                  s.jsx(o, {
                                    value: 'Tiếng Trung',
                                    children: 'Tiếng Trung',
                                  }),
                                  s.jsx(o, {
                                    value: 'Ngôn ngữ khác',
                                    children: 'Ngôn ngữ khác',
                                  }),
                                ],
                              }),
                            }),
                          }),
                          s.jsx(n, {
                            xs: 24,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Loại chứng nhận',
                              children: s.jsx(h, {
                                size: 'large',
                                value: l.certificateType,
                                onChange: (e) =>
                                  a({ ...l, certificateType: e.target.value }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs(c, {
                        gutter: 16,
                        children: [
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Điểm số',
                              children: s.jsx(j, {
                                className: 'w-full',
                                size: 'large',
                                value: l.score,
                                onChange: (e) =>
                                  a({ ...l, score: e.target.value }),
                              }),
                            }),
                          }),
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Cấp bậc',
                              children: s.jsx(h, {
                                className: 'w-full',
                                size: 'large',
                                value: l.level,
                                onChange: (e) =>
                                  a({ ...l, level: e.target.value }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs(c, {
                        gutter: 16,
                        children: [
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Ngày bắt đầu',
                              children: s.jsx(Y, {
                                className: 'w-full',
                                size: 'large',
                                value: l.startDate,
                                onChange: (e) => a({ ...l, startDate: e }),
                              }),
                            }),
                          }),
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Ngày kết thúc',
                              children: s.jsx(Y, {
                                className: 'w-full',
                                size: 'large',
                                value: l.endDate,
                                onChange: (e) => a({ ...l, endDate: e }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.jsx(c, {
                        gutter: 16,
                        children: s.jsx(n, {
                          xs: 24,
                          children: s.jsx(r.Item, {
                            label: 'Ghi chú',
                            children: s.jsx(h.TextArea, {
                              size: 'large',
                              value: l.note,
                              onChange: (e) =>
                                a({ ...l, note: e.target.value }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  })
                : s.jsxs(s.Fragment, {
                    children: [
                      s.jsxs(c, {
                        gutter: 16,
                        children: [
                          s.jsx(n, {
                            xs: 24,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Trường học',
                              children: s.jsx(h, {
                                size: 'large',
                                value: l.schoolName,
                                onChange: (e) =>
                                  a({ ...l, schoolName: e.target.value }),
                              }),
                            }),
                          }),
                          s.jsx(n, {
                            xs: 24,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Chuyên ngành',
                              children: s.jsx(h, {
                                size: 'large',
                                value: l.major,
                                onChange: (e) =>
                                  a({ ...l, major: e.target.value }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs(c, {
                        gutter: 16,
                        children: [
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Số năm',
                              children: s.jsx(j, {
                                size: 'large',
                                className: 'w-full',
                                value: l.years,
                                onChange: (e) => a({ ...l, years: e }),
                              }),
                            }),
                          }),
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Năm nhập học',
                              children: s.jsx(j, {
                                size: 'large',
                                className: 'w-full',
                                value: l.startYear,
                                onChange: (e) => a({ ...l, startYear: e }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs(c, {
                        gutter: 16,
                        children: [
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Năm tốt nghiệp',
                              children: s.jsx(j, {
                                className: 'w-full',
                                size: 'large',
                                value: l.endYear,
                                onChange: (e) => a({ ...l, endYear: e }),
                              }),
                            }),
                          }),
                          s.jsx(n, {
                            xs: 12,
                            sm: 12,
                            children: s.jsx(r.Item, {
                              label: 'Xếp loại',
                              children: s.jsx(h, {
                                size: 'large',
                                value: l.grade,
                                onChange: (e) =>
                                  a({ ...l, grade: e.target.value }),
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
export { B as default }
