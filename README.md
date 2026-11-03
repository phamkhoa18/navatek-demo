# Navatek B2B Enterprise Portal — Hạ tầng Mini PC, Máy trạm Mô-đun & AI Nội bộ (On-Premise AI)

Giao diện Web Portal B2B chính thức của **Navatek** — chuyên cung ứng đồng bộ hạ tầng **Mini PC Doanh nghiệp chính ngạch (CO/CQ 100%)**, **Cụm Máy trạm AI & Đồ họa Mô-đun (OCuLink 64Gbps)**, **Máy chủ Chi nhánh & Công nghiệp Fanless**, dịch vụ **Cho thuê Phần cứng HaaS (100% OPEX)** và **Hệ thống AI Nội bộ (Local LLM / Private RAG / OCR / Edge Vision)** vận hành 100% trong mạng LAN.

---

## 🌟 Điểm nổi bật về Thiết kế & Kiến trúc (UX/UI)

1. **Hệ màu Doanh nghiệp Tối giản (`#003366` Corporate Navy):**
   - Đồng bộ chuẩn nhận diện thương hiệu Navatek với tông **Navy chủ đạo `#003366`** (`--navy-brand`), **Royal Blue `#00468C`** (`--royal-blue`) cho điểm nhấn phụ và **Charcoal `#111827`** (`--ink-primary`) cho tiêu đề sắc nét.
   - Thiết kế **Zero Hard Borders** (không dùng viền cứng, sử dụng độ nổi khối ánh sáng và đường phân tách mảnh tinh tế).
   - Font chữ **Inter** tự host (`woff2`) hiển thị chuẩn xác 100% dấu tiếng Việt ở mọi kích thước.

2. **3 Trang Chức năng Hoàn chỉnh & Đồng bộ:**
   - **[`index.html`](index.html) — Trang chủ Giải pháp Hạ tầng & AI B2B:**
     - **Hero Stage 3D** với cụm trình diễn tự động 4 dòng Mini PC / AI Workstation chủ lực.
     - **Mega-Menu 3 cột phân cấp (`#megaInfra`)** hỗ trợ mở mượt bằng cả rê chuột (Hover) lẫn Click, kèm thanh trạng thái CO/CQ & PoC.
     - **4 Tab Hệ sinh thái Hạ tầng** (Máy trạm & Văn phòng, Máy chủ & Công nghiệp, Linh kiện & Tản nhiệt PTM7950, Cho thuê HaaS & Bảo trì SLA < 4h).
     - **Khối Hiệu năng 3D & Quy trình 4 bước triển khai PoC**.
     - **Lưới Bento 2×2 Giải pháp AI Nội bộ** (Private RAG, OCR Hóa đơn/Hợp đồng, Edge AI Vision, Tinh chỉnh LLM Tiếng Việt).
     - **Hồ sơ Dự án B2B tiêu biểu, Góc nhìn Công nghệ & Hệ sinh thái 24 Đối tác công nghệ toàn cầu**.
   - **[`blog.html`](blog.html) — Cổng Tin tức & Góc nhìn Công nghệ (Chuẩn bố cục FPT IS):**
     - **Banner Kiến trúc Sáng** kèm điều hướng phân cấp Breadcrumb.
     - **Khối `Tổng hợp` đưa lên đầu trang** với bộ lọc danh mục, thanh tìm kiếm thời gian thực (real-time search), dải `#Hashtag` gọn đẹp và lưới bài viết 3 cột kèm phân trang `Xem thêm`.
     - **Khối `Tin mới nhất` & `Tiêu điểm Giải pháp & Dự án`** theo bố cục **1 Bài tâm điểm lớn bên trái + 4 Bài ngang bên phải**.
     - **Banner toàn cảnh giữa trang** & **Form Đăng ký nhận bản tin / Tư vấn cấu hình** ở cuối trang.
   - **[`blog-detail.html`](blog-detail.html) — Trang Chi tiết Bài viết & Hồ sơ Kỹ thuật (8/4 Split Layout):**
     - Tự động nạp nội dung động qua tham số URL `?id=...` cho toàn bộ 12 bài phân tích kỹ thuật & hồ sơ dự án.
     - **Cột trái (Nội dung chuyên sâu):** Nhãn chuyên mục, tiêu đề H1, thanh Ngày đăng + Chia sẻ mạng xã hội / Sao chép liên kết, **Khung Mục lục bài viết (Table of Contents) đóng/mở thu gọn**, chỉ số KPI thực tế, các mục phân tích đánh số, **Bảng đối chiếu thông số kỹ thuật** và **Thẻ thiết bị phần cứng liên quan**.
     - **Cột phải ghim cố định (Sticky Sidebar):** Thông tin chuyên gia/bộ phận phụ trách + Danh sách 6 bài viết **`Tin liên quan`**.

3. **Tương tác B2B & Giỏ Yêu cầu Báo giá (RFQ Cart):**
   - Cho phép chọn từng thiết bị/giải pháp vào **Danh sách Yêu cầu Báo giá**, chọn mức số lượng (Tier 1–5 máy, 10–50 máy, >50 máy/Dự án) và gửi yêu cầu tư vấn / mượn thiết bị PoC ngay trên Popup Modal mà không cần tải lại trang.

4. **Responsive Đa thiết bị Chuẩn xác:**
   - Tối ưu hóa chi tiết qua các mốc `1180px`, `1080px`, `1024px`, `960px`, `860px`, `640px`, `540px` và `480px` cho Desktop, Laptop, iPad/Tablet và Smartphone.

---

## 📁 Cấu trúc Thư mục

```text
navatek-demo/
├── index.html          # Trang chủ Giải pháp Hạ tầng Mini PC & AI Nội bộ B2B
├── blog.html           # Trang Tin tức, Góc nhìn Công nghệ & Hồ sơ Dự án
├── blog-detail.html    # Trang Chi tiết Bài viết (Bố cục 2 cột 8/4 + Mục lục tự động)
├── css/
│   └── style.css       # Hệ thống CSS thiết kế, Animation & Responsive toàn diện
├── js/
│   └── main.js         # Dữ liệu Catalog, 12 Bài viết chi tiết, Bộ lọc Blog, Mega-Menu & RFQ Modal
├── fonts/              # Font Inter & Helvetica Neue tự host (.woff2)
├── images/             # Hình ảnh 3D Hardware, AI Bento, Blog Illustrations & Backgrounds
└── logos/              # Logo thương hiệu Navatek, Khách hàng Doanh nghiệp & Đối tác Công nghệ
```

---

## 🚀 Hướng dẫn Chạy Dự án (Local Development)

Dự án được xây dựng bằng **HTML5 / CSS3 / Vanilla JavaScript (ES6+)** thuần, không phụ thuộc vào framework nặng hay bước build phức tạp.

### Cách 1: Chạy bằng Python HTTP Server (Khuyên dùng)
```bash
python3 -m http.server 8080
```
Sau đó mở trình duyệt tại:
- **Trang chủ:** `http://localhost:8080/index.html`
- **Trang Tin tức & Blog:** `http://localhost:8080/blog.html`
- **Trang Chi tiết Bài viết:** `http://localhost:8080/blog-detail.html?id=article-onprem-ai`

### Cách 2: Chạy bằng VS Code Live Server hoặc Node `serve`
```bash
npx serve -l 8080 .
```

---

## 📞 Thông tin Liên hệ Dự án
- **Đơn vị:** Công ty TNHH Công nghệ Navatek (Navatek Enterprise B2B Division)
- **Lĩnh vực:** Hạ tầng Mini PC Doanh nghiệp, Máy trạm AI Mô-đun OCuLink 64Gbps & Giải pháp AI Nội bộ On-Premise.
