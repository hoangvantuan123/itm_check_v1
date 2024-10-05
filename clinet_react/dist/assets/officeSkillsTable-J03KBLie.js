import { r as c, j as l, F as E, T as I, e as o } from './index-mZ42_QcL.js'
const O = ({ form: f, formData: e }) => {
  var d, u, S, x, v, h, m, j, p, g, w, y, b, K
  const T = [
      {
        key: 0,
        skill: 'Excel',
        level:
          ((u =
            (d = e.officeSkillsData.officeSkills) == null ? void 0 : d[0]) ==
          null
            ? void 0
            : u.level) || null,
      },
      {
        key: 1,
        skill: 'Word',
        level:
          ((x =
            (S = e.officeSkillsData.officeSkills) == null ? void 0 : S[1]) ==
          null
            ? void 0
            : x.level) || null,
      },
      {
        key: 2,
        skill: 'PowerPoint',
        level:
          ((h =
            (v = e.officeSkillsData.officeSkills) == null ? void 0 : v[2]) ==
          null
            ? void 0
            : h.level) || null,
      },
    ],
    R = [
      {
        key: 0,
        skill: 'AutoCAD',
        level:
          ((j =
            (m = e.officeSkillsData.softwareSkills) == null ? void 0 : m[0]) ==
          null
            ? void 0
            : j.level) || null,
      },
      {
        key: 1,
        skill: 'SolidWorks',
        level:
          ((g =
            (p = e.officeSkillsData.softwareSkills) == null ? void 0 : p[1]) ==
          null
            ? void 0
            : g.level) || null,
      },
      {
        key: 2,
        skill: 'ERP',
        level:
          ((y =
            (w = e.officeSkillsData.softwareSkills) == null ? void 0 : w[2]) ==
          null
            ? void 0
            : y.level) || null,
      },
      {
        key: 3,
        skill: 'MES',
        level:
          ((K =
            (b = e.officeSkillsData.softwareSkills) == null ? void 0 : b[3]) ==
          null
            ? void 0
            : K.level) || null,
      },
    ],
    [t, F] = c.useState(T),
    [a, N] = c.useState(R)
  c.useEffect(() => {
    f.setFieldsValue({ officeSkills: t, softwareSkills: a })
  }, [t, a, f])
  const P = (s, C, n = !0) => {
      const i = (n ? t : a).map((r) => (r.key === s ? { ...r, level: C } : r))
      n
        ? (F(i), (e.officeSkillsData.officeSkills = i))
        : (N(i), (e.officeSkillsData.softwareSkills = i))
    },
    k = (s = !0) => [
      {
        title: 'Đánh giá',
        dataIndex: 'level',
        render: (C, n) =>
          l.jsxs(o.Group, {
            value: n.level,
            onChange: (i) => P(n.key, i.target.value, s),
            children: [
              l.jsx(o, { value: 'good', children: 'Tốt' }),
              l.jsx(o, { value: 'average', children: 'TB' }),
              l.jsx(o, { value: 'poor', children: 'Kém' }),
            ],
          }),
      },
    ],
    z = [
      {
        title: 'Kỹ năng văn phòng',
        dataIndex: 'skill',
        render: (s) => l.jsx('span', { children: s }),
      },
      ...k(!0),
    ],
    A = [
      {
        title: 'Kỹ năng phần mềm',
        dataIndex: 'skill',
        render: (s) => l.jsx('span', { children: s }),
      },
      ...k(!1),
    ]
  return l.jsxs('div', {
    children: [
      l.jsx('h2', {
        className: 'text-2xl font-semibold mb-6 mt-5',
        children: 'Kỹ năngn',
      }),
      l.jsx('h3', {
        className: 'text-base font-semibold mb-4',
        children: 'Kỹ năng văn phòng',
      }),
      l.jsx(E.Item, {
        name: 'officeSkills',
        children: l.jsx(I, {
          dataSource: t,
          columns: z,
          pagination: !1,
          rowKey: 'key',
          scroll: { x: !0 },
          bordered: !0,
          size: 'small',
        }),
      }),
      l.jsx('h3', {
        className: 'text-xl font-semibold mb-4 mt-5',
        children: 'Kỹ năng phần mềm',
      }),
      l.jsx(E.Item, {
        name: 'softwareSkills',
        children: l.jsx(I, {
          dataSource: a,
          columns: A,
          pagination: !1,
          rowKey: 'key',
          scroll: { x: !0 },
          bordered: !0,
          size: 'small',
        }),
      }),
    ],
  })
}
export { O as default }
