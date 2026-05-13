# 👟 SOLEKING - Web Bán Giày Thể Thao Cơ Bản

Dự án website tĩnh phục vụ môn học thiết kế Web cơ bản. 
Sử dụng thuần HTML, CSS, và Vanilla JS. KHÔNG sử dụng framework (React/Vue/Angular), KHÔNG sử dụng thư viện CSS (Bootstrap/Tailwind), KHÔNG có backend.

## 📋 Cấu Trúc Dự Án

```
SOLEKING_WebProject/
├── assets/
│   ├── images/              # Ảnh sản phẩm, banner, logo
├── css/
│   ├── style.css            # CSS cấu trúc chung (Header, Footer, Typography)
│   ├── home.css             # Style riêng trang chủ
│   ├── product.css          # Style danh sách sản phẩm và chi tiết
│   ├── contact.css          # Style trang liên hệ, giới thiệu
│   ├── payment.css          # Style trang thanh toán
│   ├── order.css            # Style trang đơn hàng
│   └── auth.css             # Style trang đăng nhập, đăng ký
├── js/
│   ├── main.css             # Logic UI chung (menu mobile, tìm kiếm)
│   ├── products.js          # Dữ liệu sản phẩm (Mock data)
│   ├── auth.js              # Logic kiểm tra đăng nhập/đăng xuất (localStorage)
│   ├── account.js           # Logic form đăng nhập/đăng ký
│   ├── cart.js              # Logic giỏ hàng (thêm, xóa, tính tổng)
│   ├── product-detail.js    # Logic trang chi tiết (chọn size, ảnh)
│   └── checkout.js          # Logic đặt hàng
├── index.html               # Trang chủ
├── san-pham.html            # Danh sách sản phẩm
├── chi-tiet.html            # Chi tiết sản phẩm
├── gioi-thieu.html          # Trang giới thiệu
├── lien-he.html             # Trang liên hệ
├── thanh-toan.html          # Trang thanh toán
├── don-hang.html            # Lịch sử mua hàng
├── tai-khoan.html           # Đăng nhập / Đăng ký
├── quen-mat-khau.html       # Quên mật khẩu
└── README.md                # Tài liệu dự án
```

---

## ⚙️ Tính Năng Chính
- Giao diện đáp ứng (Responsive) trên Mobile, Tablet, Desktop.
- Quản lý trạng thái bằng `localStorage` và `sessionStorage` (để demo luồng người dùng mà không cần DB).
- Chức năng đăng nhập, đăng ký, đăng xuất giả lập.
- Thêm sản phẩm vào giỏ hàng, mua ngay.
- Đặt hàng và lưu lịch sử đơn hàng.
- Hủy đơn hàng và ghi nhận lý do hủy đơn.

## 🚀 Hướng Dẫn Triển Khai (Deploy) Lên Netlify
1. Truy cập [Netlify Drop](https://app.netlify.com/drop).
2. Kéo thả toàn bộ thư mục `SOLEKING_WebProject` vào khu vực yêu cầu.
3. Chờ Netlify upload và khởi tạo link.
4. Có thể đổi tên miền miễn phí dạng `*.netlify.app` trong phần Site Settings.

## 💡 Lưu Ý Khi Bảo Vệ Đồ Án
- Mọi dữ liệu (tài khoản, giỏ hàng, lịch sử đơn) chỉ lưu trữ tại bộ nhớ trình duyệt `localStorage`.
- Nếu chuyển sang máy khác, dữ liệu sẽ bị trống. Có thể dùng sẵn tài khoản ảo hoặc đăng ký mới để demo.
- CSS được chia nhỏ theo mô-đun để dễ giải thích cấu trúc cho Giảng viên.

**Last Updated:** 2026
