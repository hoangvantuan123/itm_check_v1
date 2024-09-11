# Sử dụng phiên bản nhẹ của Node.js
FROM node:20-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép package.json và yarn.lock trước để tận dụng Docker cache
COPY package.json yarn.lock ./

# Cài đặt dependencies
RUN yarn install --frozen-lockfile && yarn cache clean

# Sao chép phần còn lại của mã nguồn
COPY . .

# Expose port 3000 để ứng dụng có thể được truy cập từ ngoài
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["yarn", "dev"]
