import {
  j as e,
  R as r,
  c as s,
  F as l,
  I as n,
  S as a,
  d as h,
} from './index-mZ42_QcL.js'
const { Option: i } = a,
  t = ({ form: m }) =>
    e.jsxs('div', {
      children: [
        e.jsxs(r, {
          gutter: 16,
          children: [
            e.jsx(s, {
              xs: 24,
              sm: 20,
              md: 20,
              children: e.jsx(l.Item, {
                label: 'Họ tên ứng viên:',
                name: 'fullName',
                rules: [{ required: !0, message: 'Vui lòng nhập họ tên!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập họ tên',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 4,
              md: 4,
              children: e.jsx(l.Item, {
                label: 'Giới tính:',
                name: 'gender',
                rules: [{ required: !0, message: 'Vui lòng chọn giới tính!' }],
                children: e.jsxs(a, {
                  size: 'large',
                  placeholder: 'Chọn giới tính',
                  children: [
                    e.jsx(i, { value: 'Male', children: 'Nam' }),
                    e.jsx(i, { value: 'Female', children: 'Nữ' }),
                    e.jsx(i, { value: 'Other', children: 'Khác' }),
                  ],
                }),
              }),
            }),
            e.jsx(s, {
              xs: 12,
              sm: 12,
              md: 12,
              children: e.jsx(l.Item, {
                label: 'Ngày phỏng vấn:',
                name: 'interviewDate',
                rules: [
                  { required: !0, message: 'Vui lòng nhập ngày phỏng vấn!' },
                ],
                children: e.jsx(h, {
                  size: 'large',
                  style: { width: '100%' },
                  placeholder: 'Chọn ngày phỏng vấn',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 12,
              sm: 12,
              md: 12,
              children: e.jsx(l.Item, {
                label: 'Ngày vào:',
                name: 'startDate',
                children: e.jsx(h, {
                  size: 'large',
                  style: { width: '100%' },
                  placeholder: 'Chọn ngày vào',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 24,
              md: 24,
              children: e.jsx(l.Item, {
                label: 'Ngày tháng năm sinh:',
                name: 'dob',
                rules: [{ required: !0, message: 'Vui lòng nhập ngày sinh!' }],
                children: e.jsx(h, {
                  size: 'large',
                  style: { width: '100%' },
                  placeholder: 'Chọn ngày sinh',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Số CMND:',
                name: 'idNumber',
                rules: [{ required: !0, message: 'Vui lòng nhập số CMND!' }],
                children: e.jsx(n, {
                  size: 'large',
                  style: { width: '100%' },
                  placeholder: 'Nhập số CMND',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 14,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Ngày cấp:',
                name: 'issuedDate',
                children: e.jsx(h, {
                  size: 'large',
                  style: { width: '100%' },
                  placeholder: 'Chọn ngày cấp',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 10,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Dân tộc:',
                name: 'ethnicity',
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập dân tộc',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 24,
              md: 24,
              children: e.jsx(l.Item, {
                label: 'Nơi cấp:',
                name: 'issuedPlace',
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập nơi cấp',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 12,
              children: e.jsx(l.Item, {
                label: 'Số sổ bảo hiểm (nếu có):',
                name: 'insuranceNumber',
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập số bảo hiểm',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 12,
              children: e.jsx(l.Item, {
                label: 'Mã số thuế cá nhân:',
                name: 'taxCode',
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập mã số thuế',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 12,
              children: e.jsx(l.Item, {
                label: 'Số điện thoại liên hệ:',
                name: 'phone',
                rules: [
                  { required: !0, message: 'Vui lòng nhập số điện thoại!' },
                ],
                children: e.jsx(n, {
                  style: { width: '100%' },
                  size: 'large',
                  placeholder: 'Nhập số điện thoại',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 12,
              children: e.jsx(l.Item, {
                label: 'E-mail:',
                name: 'email',
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập email',
                }),
              }),
            }),
          ],
        }),
        e.jsx('h2', {
          className: 'text-xl font-semibold mb-4',
          children: 'Thông tin liên hệ khẩn cấp',
        }),
        e.jsxs(r, {
          gutter: 16,
          children: [
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Số điện thoại liên hệ khi cần thiết:',
                name: 'emergencyPhone',
                rules: [
                  {
                    required: !0,
                    message: 'Vui lòng nhập số điện thoại khẩn cấp!',
                  },
                ],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập số điện thoại khẩn cấp',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Tên:',
                name: 'emergencyContactName',
                rules: [{ required: !0, message: 'Vui lòng nhập tên!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập tên người liên hệ',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Quan hệ:',
                name: 'emergencyContactRelation',
                rules: [{ required: !0, message: 'Vui lòng nhập quan hệ!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập quan hệ',
                }),
              }),
            }),
          ],
        }),
        e.jsx('h2', {
          className: 'text-xl font-semibold mb-4',
          children: 'Địa chỉ',
        }),
        e.jsx('h3', {
          className: ' italic mb-2',
          children:
            'Địa chỉ đăng ký giấy khai sinh (hoặc nguyên quán hoặc HKTT hoặc tạm trú)',
        }),
        e.jsxs(r, {
          gutter: 16,
          children: [
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Tỉnh:',
                name: 'birthProvince',
                rules: [{ required: !0, message: 'Vui lòng nhập tỉnh!' }],
                children: e.jsx(n, { size: 'large', placeholder: 'Nhập tỉnh' }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Quận/Huyện:',
                name: 'birthDistrict',
                rules: [{ required: !0, message: 'Vui lòng nhập quận/huyện!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập quận/huyện',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Xã/Phường:',
                name: 'birthCommune',
                rules: [{ required: !0, message: 'Vui lòng nhập xã/phường!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập xã/phường',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 24,
              md: 24,
              children: e.jsx(l.Item, {
                label: 'Địa chỉ:',
                name: 'birthAddress',
                rules: [{ required: !0, message: 'Vui lòng nhập địa chỉ!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập địa chỉ',
                }),
              }),
            }),
          ],
        }),
        e.jsx('h3', {
          className: ' italic mb-2',
          children: 'Địa chỉ nơi ở hiện tại',
        }),
        e.jsxs(r, {
          gutter: 16,
          children: [
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Tỉnh:',
                name: 'currentProvince',
                rules: [{ required: !0, message: 'Vui lòng nhập tỉnh!' }],
                children: e.jsx(n, { size: 'large', placeholder: 'Nhập tỉnh' }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Quận/Huyện:',
                name: 'currentDistrict',
                rules: [{ required: !0, message: 'Vui lòng nhập quận/huyện!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập quận/huyện',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 12,
              md: 8,
              children: e.jsx(l.Item, {
                label: 'Xã/Phường:',
                name: 'currentCommune',
                rules: [{ required: !0, message: 'Vui lòng nhập xã/phường!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập xã/phường',
                }),
              }),
            }),
            e.jsx(s, {
              xs: 24,
              sm: 24,
              md: 24,
              children: e.jsx(l.Item, {
                label: 'Số nhà/Đường/Thôn/Xóm:',
                name: 'currentAddress',
                rules: [{ required: !0, message: 'Vui lòng nhập địa chỉ!' }],
                children: e.jsx(n, {
                  size: 'large',
                  placeholder: 'Nhập địa chỉ',
                }),
              }),
            }),
          ],
        }),
      ],
    })
export { t as default }
