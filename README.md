


# API Documentation for `res_groups`

| HTTP Method | Endpoint              | Description                         | Query Params            | Body Params                                                                                                                       |
|-------------|-----------------------|-------------------------------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **POST**    | `api/p/res_groups`          | Tạo một nhóm mới                   |                         | - `name` (string): Tên nhóm<br>- `category_id` (number): ID danh mục<br>- `color` (string): Màu sắc<br>- `create_uid` (number): ID người tạo<br>- `write_uid` (number): ID người sửa<br>- `comment` (string): Ghi chú<br>- `share` (boolean): Chia sẻ<br>- `create_date` (Date): Ngày tạo<br>- `write_date` (Date): Ngày sửa cuối cùng |
| **GET**     | `api/p/res_groups`          | Lấy danh sách nhóm có phân trang    | `page` (number): Trang hiện tại<br>`limit` (number): Số lượng bản ghi trên một trang |                                                                                                                                   |
| **GET**     | `api/p/res_groups/:id`      | Lấy thông tin nhóm theo `id`        |                         |                                                                                                                                   |
| **PUT**     | `api/p/res_groups/:id`      | Cập nhật thông tin nhóm theo `id`   |                         | - Các trường giống như POST                                                                                                       |
| **DELETE**  | `api/p/res_groups/:id`      | Xóa nhóm theo `id`                  |                         |                                                                                                                                   |

## Cách sử dụng API

### 1. Tạo nhóm mới (POST)
- **Endpoint**: `/res_groups`
- **Body**:
  ```json
  {
    "name": "Group Name",
    "category_id": 1,
    "color": "blue",
    "create_uid": 1,
    "write_uid": 1,
    "comment": "This is a comment",
    "share": true,
    "create_date": "2024-09-15T09:33:19.000Z",
    "write_date": "2024-09-15T09:33:19.000Z"
  }
