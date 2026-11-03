/* ==========================================================================
   NAVATEK B2B v7.0 — Scientific Enterprise IT Infrastructure & AI Portal
   100% Pure Vanilla JavaScript (ES6+) • Zero Frameworks • Popup-First RFQ UX
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. Complete Enterprise Solutions Catalog (10 Hardware/Service + 4 AI)
     ------------------------------------------------------------------------ */
  const CATALOG_ITEMS = {
    "modular-ai-workstation": {
      badge: "Hạ tầng Máy trạm AI & Kỹ thuật B2B",
      title: "Cụm Máy trạm AI & Đồ họa Mô-đun (Mini PC + Dock eGPU)",
      shortName: "Cụm Máy trạm AI & eGPU",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-workstation.jpg",
      desc: "Kiến trúc máy trạm thế hệ mới kết hợp Mini PC Core Ultra / Ryzen AI cùng trạm eGPU chuẩn OCuLink 64Gbps và GPU RTX 24GB–48GB VRAM. Tiết kiệm diện tích, giảm điện năng và linh hoạt nâng cấp độc lập cho khối R&D, Kỹ thuật 3D và AI.",
      tiers: [
        { qty: "1 – 2 cụm (PoC / Nhóm)", policy: "Hỗ trợ PoC • Pháp lý CO/CQ" },
        { qty: "3 – 9 cụm (Phòng ban)", policy: "Chiết khấu dự án • Đồng bộ OS" },
        { qty: "10+ cụm / Thuê HaaS", policy: "Chính sách SI • Bảo trì SLA < 4h" }
      ],
      highlights: [
        "Giao tiếp PCIe 4.0 x4 thực (OCuLink 64Gbps) phát huy tối đa hiệu năng GPU rời cho tác vụ AI & Render.",
        "Tách rời vòng đời nâng cấp giữa thân máy tính và card đồ họa, tối ưu đến 40% ngân sách đầu tư.",
        "Kiểm thử tải nặng Burn-in 24 giờ và chuẩn hóa tản nhiệt Honeywell PTM7950 trước khi bàn giao."
      ],
      specs: ["OCuLink 64Gbps", "RTX 24GB–48GB VRAM", "64–96GB DDR5", "CO/CQ & VAT 100%"]
    },

    "office-nuc-fleet": {
      badge: "Chuẩn hóa Thiết bị Đầu cuối Văn phòng",
      title: "Hệ thống Mini PC Văn phòng Chính ngạch ASUS NUC",
      shortName: "Hệ thống Mini PC ASUS NUC",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-office-nuc.jpg",
      desc: "Triển khai đồng bộ hệ thống Mini PC ASUS NUC gắn ngàm VESA gọn phía sau màn hình USB-C Power Delivery. Giải pháp hiện đại hóa không gian làm việc và cắt giảm đến 70% điện năng tiêu thụ khối văn phòng.",
      tiers: [
        { qty: "5 – 19 bộ (Chi nhánh)", policy: "Giá doanh nghiệp • BH 36 Tháng" },
        { qty: "20 – 99 bộ (Khối văn phòng)", policy: "Chiết khấu dự án • Nạp sẵn Image" },
        { qty: "100+ bộ (Tập đoàn / Hội sở)", policy: "Hồ sơ thầu trọn gói • SLA tận nơi" }
      ],
      highlights: [
        "Đầy đủ bộ hồ sơ thầu, chứng nhận xuất xứ CO/CQ, biên bản Serial và bảo hành chính hãng 36 tháng.",
        "Hỗ trợ nạp sẵn Image Windows Pro, cấu hình Domain/AD và phần mềm bảo mật theo chuẩn phòng CNTT.",
        "Kết nối tinh gọn qua cáp USB-C cấp đồng thời nguồn điện và tín hiệu hình ảnh 4K."
      ],
      specs: ["ASUS NUC Chính ngạch", "Ngàm VESA + USB-C PD", "TDP 15W–35W", "Bảo hành 36 Tháng"]
    },

    "turnkey-ai-box": {
      badge: "Thiết bị Phần cứng AI Nội bộ Đóng gói",
      title: "Thiết bị AI Nội bộ Đóng gói sẵn — Turnkey AI Box",
      shortName: "Thiết bị Turnkey AI Box",
      chip: "Giải pháp AI Nội bộ",
      image: "images/hw-v6-turnkey-aibox.jpg",
      desc: "Thiết bị phần cứng tích hợp NPU/GPU hiệu năng cao được cài đặt sẵn mô hình Local LLM Tiếng Việt và cổng tra cứu nội bộ. Kết nối trực tiếp vào mạng LAN doanh nghiệp để vận hành ngay, đảm bảo an toàn dữ liệu 100%.",
      tiers: [
        { qty: "Gói Phòng ban (15–40 user)", policy: "1 Thiết bị tiêu chuẩn • Cắm chạy ngay" },
        { qty: "Gói Khối nghiệp vụ (50–150 user)", policy: "Cụm AI Box + eGPU tăng tốc" },
        { qty: "Hệ thống Đa chi nhánh", policy: "Tích hợp SSO/AD & Bảo trì SLA" }
      ],
      highlights: [
        "Vận hành 100% độc lập trong mạng LAN nội bộ, tuyệt đối không truyền dữ liệu nhạy cảm ra bên ngoài.",
        "Không giới hạn số tài khoản nhân sự truy cập và không phát sinh phí thuê bao hàng tháng.",
        "Bàn giao hoàn chỉnh cả phần cứng lẫn nền tảng quản trị tri thức chỉ trong 1–3 ngày làm việc."
      ],
      specs: ["100% Offline LAN", "Local LLM Tiếng Việt", "Không phí thuê bao", "Phân quyền Phòng ban"]
    },

    "microserver-nas-gateway": {
      badge: "Hạ tầng Máy chủ Chi nhánh, Mạng & Lưu trữ",
      title: "Micro-Server, Lưu trữ NAS All-Flash & Gateway 10G",
      shortName: "Micro-Server & NAS 10G",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-microserver-nas.jpg",
      desc: "Thiết bị máy chủ thu gọn trang bị 4–6 cổng mạng 2.5GbE / 10GbE SFP+ và lưu trữ All-Flash NVMe. Tối ưu cho tường lửa biên pfSense/OPNsense, nền tảng ảo hóa Proxmox và lưu trữ dữ liệu chi nhánh 24/7.",
      tiers: [
        { qty: "1 – 2 thiết bị (Văn phòng)", policy: "Cấu hình sẵn RAID & Tường lửa" },
        { qty: "3 – 10 điểm (Chuỗi chi nhánh)", policy: "Đồng bộ VPN Site-to-Site" },
        { qty: "10+ điểm / Dự án SI", policy: "Chiết khấu dự án • Hỗ trợ SLA" }
      ],
      highlights: [
        "Trang bị chip điều khiển mạng Intel 2.5GbE và cổng quang 10GbE SFP+ chịu tải định tuyến liên tục.",
        "Cài đặt sẵn Proxmox VE, Docker, tường lửa OPNsense và cơ chế sao lưu RAID tự động theo yêu cầu.",
        "Vận hành êm ái, công suất tiêu thụ thấp, không đòi hỏi phòng máy chủ chuyên biệt tại chi nhánh."
      ],
      specs: ["4–6 cổng 2.5G/10G", "All-Flash NVMe RAID", "Proxmox • OPNsense", "Vận hành 24/7"]
    },

    "fanless-industrial-kiosk": {
      badge: "Hạ tầng Máy tính Công nghiệp & Trạm Điều độ",
      title: "Máy tính Công nghiệp Không quạt (Fanless) & Kiosk",
      shortName: "Máy tính Công nghiệp Fanless",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-fanless-kiosk.jpg",
      desc: "Máy tính công nghiệp khung nhôm đúc nguyên khối tản nhiệt tĩnh không quạt, kháng bụi mịn và độ ẩm nhà xưởng. Tích hợp cổng COM RS232/485 và xuất đồng thời 4 màn hình 4K cho phòng điều độ, dây chuyền sản xuất và Kiosk.",
      tiers: [
        { qty: "2 – 9 thiết bị", policy: "Kèm ngàm DIN-Rail / VESA" },
        { qty: "10 – 49 thiết bị (Nhà máy)", policy: "Chiết khấu dự án • Cài sẵn OS" },
        { qty: "50+ thiết bị (Chuỗi toàn quốc)", policy: "Đặt chuẩn cấu hình riêng • SLA" }
      ],
      highlights: [
        "Thiết kế Fanless khép kín loại bỏ hoàn toàn rủi ro kẹt quạt do bụi công nghiệp trong vận hành 24/7.",
        "Tích hợp đầy đủ giao tiếp công nghiệp RS232/RS485, Dual LAN và xuất độc lập 4 màn hình giám sát 4K.",
        "Hỗ trợ Auto Power-On và Hardware Watchdog tự động khôi phục hệ thống ngay khi có điện trở lại."
      ],
      specs: ["Fanless Kháng bụi", "COM RS232/485", "4× HDMI/DP 4K", "Watchdog 24/7"]
    },

    "oculink-egpu-dock": {
      badge: "Hạ tầng Mở rộng Băng thông PCIe & GPU",
      title: "Trạm Mở rộng eGPU & Kết nối Băng thông cao OCuLink",
      shortName: "Trạm Mở rộng eGPU OCuLink",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-oculink-dock.jpg",
      desc: "Cung ứng đồng bộ eGPU Enclosure khung nhôm CNC, trạm gắn GPU rời chuẩn OCuLink 64Gbps / Thunderbolt 4 và phụ kiện truyền dẫn chống nhiễu cho phòng R&D doanh nghiệp và đối tác tích hợp hệ thống (SI).",
      tiers: [
        { qty: "1 – 4 bộ (Phòng Lab)", policy: "Đo kiểm tín hiệu • VAT 100%" },
        { qty: "5 – 19 bộ (Dự án R&D)", policy: "Chiết khấu theo quy mô dự án" },
        { qty: "20+ bộ (Đối tác SI)", policy: "Chính sách đối tác phân phối" }
      ],
      highlights: [
        "Khung nhôm CNC đối lưu khí tối ưu, tích hợp nguồn ATX/SFX công suất thực cho GPU tải nặng liên tục.",
        "Tương thích hoàn toàn với Mini PC doanh nghiệp có cổng OCuLink hoặc mở rộng qua giao tiếp PCIe 4.0.",
        "Cáp truyền dẫn bọc lưới chống nhiễu EMI được kiểm định độ ổn định băng thông trước khi bàn giao."
      ],
      specs: ["OCuLink 64Gbps", "Thunderbolt 4 / USB4", "Khung nhôm CNC", "Đo kiểm EMI"]
    },

    "wholesale-components-thermal": {
      badge: "Nâng cấp Hạ tầng Đồng bộ & Vật tư Phòng Lab",
      title: "Linh kiện Nâng cấp Đồng bộ & Vật tư Tản nhiệt PTM7950",
      shortName: "Linh kiện DDR5, NVMe & PTM7950",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-wholesale-parts.jpg",
      desc: "Cung ứng đồng bộ cùng mã Part-Number cho các đợt nâng cấp RAM DDR5, SSD NVMe Gen4/Gen5 toàn doanh nghiệp, kết hợp vật tư chuyển pha Honeywell PTM7950 chính hãng giúp tối ưu nhiệt độ dàn máy.",
      tiers: [
        { qty: "Đợt nâng cấp 10–29 máy", policy: "Đồng nhất mã Part • VAT 100%" },
        { qty: "Dự án 30–99 máy", policy: "Hỗ trợ kỹ thuật lắp đặt tận nơi" },
        { qty: "Hợp đồng 100+ đơn vị", policy: "Chính sách khung cho Tập đoàn / SI" }
      ],
      highlights: [
        "Đảm bảo 100% linh kiện RAM và SSD đồng nhất thông số kỹ thuật, tương thích tuyệt đối khi nâng cấp hàng loạt.",
        "Pad chuyển pha Honeywell PTM7950 giúp hạ 8°C–14°C nhiệt độ CPU/GPU trên Mini PC và máy trạm.",
        "Đầy đủ chứng từ xuất xứ và bảo hành chính ngạch theo tiêu chuẩn kiểm toán tài sản CNTT."
      ],
      specs: ["RAM DDR5 Đồng bộ", "SSD NVMe Gen4/Gen5", "Honeywell PTM7950", "UPSIREN U6 PRO"]
    },

    "industrial-power-adapters": {
      badge: "Hạ tầng Nguồn Dự phòng & Công nghiệp 24/7",
      title: "Bộ nguồn Công nghiệp & Adapter Công suất thực 65W–330W",
      shortName: "Bộ nguồn & Adapter 65W–330W",
      chip: "Báo giá Thiết bị theo Dự án",
      image: "images/hw-v6-power-adapters.jpg",
      desc: "Cung cấp hệ thống Adapter GaN/DC công suất thực 65W, 130W, 240W, 330W và bộ nguồn công nghiệp ổn áp liên tục 24/7, giúp phòng CNTT chuẩn hóa nguồn dự phòng an toàn cho hệ thống Mini PC, Kiosk và máy trạm.",
      tiers: [
        { qty: "5 – 19 bộ nguồn", policy: "Bảo hành 1 đổi 1 tức thì" },
        { qty: "20 – 99 bộ nguồn", policy: "Chiết khấu dự án • Đủ chuẩn đầu DC" },
        { qty: "100+ bộ (Chuỗi / Nhà máy)", policy: "Dự phòng kho SLA theo hợp đồng" }
      ],
      highlights: [
        "Trang bị mạch bảo vệ quá áp (OVP), quá dòng (OCP), ngắn mạch (SCP) và kiểm thử 100% tải thực.",
        "Đáp ứng đầy đủ chuẩn giao tiếp DC chuyên dụng và USB-C PD 100W–140W cho thiết bị doanh nghiệp.",
        "Chính sách bảo hành đổi mới ngay lập tức đảm bảo vận hành liên tục cho đơn vị."
      ],
      specs: ["65W • 130W • 330W", "Mạch OVP/OCP/SCP", "Độ gợn nhiễu thấp", "Bảo hành 1 đổi 1"]
    },

    "haas-hardware-rental": {
      badge: "Giải pháp Tài chính Hạ tầng Linh hoạt (OPEX)",
      title: "Dịch vụ Cho thuê Hạ tầng Phần cứng Doanh nghiệp (HaaS)",
      shortName: "Thuê Hạ tầng Phần cứng HaaS",
      chip: "Thuê Hạ tầng HaaS / Bảo trì SLA",
      image: "images/hw-v6-haas-fleet.jpg",
      desc: "Cung cấp gói thuê trọn bộ hệ thống Mini PC văn phòng, Micro-Server và cụm máy trạm AI eGPU theo Quý hoặc Năm. Giúp doanh nghiệp triển khai dự án thần tốc và chuyển đổi vốn đầu tư (CAPEX) sang chi phí vận hành (OPEX).",
      tiers: [
        { qty: "Ngắn hạn 1 – 3 tháng", policy: "Phục vụ Đào tạo, Sự kiện, Dự án PoC" },
        { qty: "Hợp đồng 6 – 12 tháng", policy: "Tối ưu dòng tiền • Kèm SLA < 4h" },
        { qty: "Hợp đồng 24 – 36 tháng", policy: "Tùy chọn nâng cấp hoặc mua lại" }
      ],
      highlights: [
        "Hạch toán 100% vào chi phí vận hành OPEX với hợp đồng pháp lý và hóa đơn VAT định kỳ minh bạch.",
        "Đã bao gồm trọn gói bảo dưỡng định kỳ và cam kết ứng cứu đổi thiết bị trong 4 giờ suốt kỳ thuê.",
        "Linh hoạt mở rộng quy mô máy hoặc nâng cấp RAM, SSD, GPU theo đà tăng trưởng nhân sự."
      ],
      specs: ["Quy mô 5 – 200+ máy", "Hợp đồng Quý / Năm", "Trọn gói bảo trì SLA", "100% Chi phí OPEX"]
    },

    "sla-maintenance-loaner": {
      badge: "Dịch vụ Quản trị Vòng đời Phần cứng & SLA 24/7",
      title: "Bảo trì Chuyên sâu ESD, Xử lý RMA & Kho Máy mượn SLA",
      shortName: "Hợp đồng Bảo trì & Máy mượn SLA",
      chip: "Thuê Hạ tầng HaaS / Bảo trì SLA",
      image: "images/hw-v6-sla-loaner.jpg",
      desc: "Dịch vụ kỹ thuật hậu mãi B2B chuẩn phòng Lab chống tĩnh điện ESD: bảo dưỡng hệ thống tản nhiệt PTM7950 định kỳ, đại diện làm việc RMA chính hãng và cấp máy thay thế tức thời từ kho Loaner Pool.",
      tiers: [
        { qty: "Bảo dưỡng Theo Đợt", policy: "Vệ sinh ESD & Chuẩn hóa nhiệt tận nơi" },
        { qty: "SLA Tiêu chuẩn (Năm)", policy: "Bảo trì 6 tháng/lần • Máy mượn < 8h" },
        { qty: "SLA Cao cấp 24/7/365", policy: "Ứng cứu đổi thiết bị mượn < 4 giờ" }
      ],
      highlights: [
        "Loại bỏ triệt để tình trạng quá nhiệt, giảm hiệu năng và gián đoạn đột ngột trên hệ thống máy chạy liên tục.",
        "Kho dự phòng Loaner Pool luôn sẵn sàng Mini PC, bộ nguồn và trạm eGPU tương đương để ứng cứu.",
        "Cung cấp biên bản đo kiểm nhiệt độ và sức khỏe phần cứng minh bạch cho bộ phận quản trị CNTT."
      ],
      specs: ["Ứng cứu < 4 giờ", "Kho máy Loaner Pool", "Quy trình chuẩn ESD", "Báo cáo sức khỏe IT"]
    },

    "ai-rag-appliance": {
      badge: "Giải pháp AI Nội bộ + Phần cứng Turnkey",
      title: "Trợ lý AI Tra cứu Quy trình & Tài liệu Nội bộ (RAG)",
      shortName: "AI Tra cứu Tài liệu (RAG)",
      chip: "Giải pháp AI Nội bộ",
      image: "images/bento-v9-rag-blue.jpg",
      desc: "Trọn bộ thiết bị Turnkey AI Box tích hợp sẵn Trợ lý NavaBot AI Tiếng Việt, hỗ trợ nhân sự hỏi đáp tức thì quy trình SOP, hợp đồng, văn bản pháp quy kèm trích dẫn chính xác trang tài liệu gốc.",
      tiers: [
        { qty: "Đăng ký PoC 14 ngày", policy: "Kiểm thử trực tiếp trên tài liệu mẫu" },
        { qty: "Bộ AI Box Phòng ban", policy: "Trọn gói Phần cứng + Trợ lý RAG" },
        { qty: "Cụm AI Server Tập đoàn", policy: "Phân quyền AD/SSO & Bảo trì 24/7" }
      ],
      highlights: [
        "Đọc hiểu sâu tài liệu PDF, Word, Excel tiếng Việt, rút ngắn 75%–80% thời gian tra cứu nghiệp vụ.",
        "Toàn bộ cơ sở dữ liệu vector và mô hình LLM nằm tại máy chủ nội bộ của doanh nghiệp.",
        "Phân quyền truy cập chặt chẽ theo từng phòng ban: Kỹ thuật, Pháp chế, Tài chính, Nhân sự."
      ],
      specs: ["Turnkey AI Box", "Phản hồi < 1.2 giây", "Trích dẫn số trang", "100% Mạng LAN"]
    },

    "ai-ocr-appliance": {
      badge: "Giải pháp AI Tự động hóa Chứng từ",
      title: "Trợ lý AI Bóc tách Hóa đơn & Chứng từ Kế toán (OCR)",
      shortName: "AI Bóc tách Chứng từ (OCR)",
      chip: "Giải pháp AI Nội bộ",
      image: "images/bento-v9-ocr-dark.jpg",
      desc: "Thiết bị Micro-Server LAN cài đặt sẵn động cơ AI OCR chuyên sâu tiếng Việt, tự động nhận diện, bóc tách hàng nghìn hóa đơn, phiếu kho, hợp đồng scan mỗi ngày và đối soát trực tiếp với hệ thống ERP.",
      tiers: [
        { qty: "Kiểm thử PoC Chứng từ", policy: "Đánh giá độ chính xác thực tế 99.4%" },
        { qty: "Bộ Micro-Server OCR", policy: "Công suất 1.200+ trang/giờ nội bộ" },
        { qty: "Tích hợp ERP / Core", policy: "Kết nối API hai chiều & SLA năm" }
      ],
      highlights: [
        "Bóc tách chính xác bảng kê nhiều dòng, con dấu đè chữ và bản scan nghiêng trên chứng từ thực tế.",
        "Tự động đối chiếu mã số thuế, tổng giá trị thanh toán và cảnh báo chứng từ bất thường.",
        "Bảo vệ tuyệt đối bí mật chứng từ tài chính trong hạ tầng mạng riêng của tổ chức."
      ],
      specs: ["Micro-Server LAN", "Độ chính xác 99.4%", "1.200+ trang / giờ", "Kết nối API ERP"]
    },

    "ai-vision-appliance": {
      badge: "Giải pháp AI Thị giác Máy tính tại Biên",
      title: "AI Thị giác Máy tính Kiểm soát Kho vận & Nhà xưởng",
      shortName: "AI Thị giác Kho & Xưởng",
      chip: "Giải pháp AI Nội bộ",
      image: "images/bento-v9-vision-dark.jpg",
      desc: "Trạm Mini PC Công nghiệp Fanless tích hợp mô hình Edge Vision AI kết nối trực tiếp hệ thống Camera IP RTSP hiện hữu để tự động kiểm đếm kiện hàng, phát hiện lỗi ngoại quan và giám sát an toàn lao động 24/7.",
      tiers: [
        { qty: "Trạm PoC (2–4 luồng Cam)", policy: "Thử nghiệm trực tiếp tại hiện trường" },
        { qty: "Trạm Edge Nhà xưởng", policy: "Xử lý 8–16 luồng Camera thời gian thực" },
        { qty: "Hệ thống Đa kho bãi", policy: "Dashboard tập trung & Bảo trì SLA" }
      ],
      highlights: [
        "Xử lý suy luận hình ảnh ngay tại biên với độ trễ chỉ 18ms, không phụ thuộc đường truyền Internet.",
        "Phần cứng không quạt chống bụi bẩn công nghiệp, vận hành bền bỉ ngay tại dây chuyền sản xuất.",
        "Gửi cảnh báo tức thời kèm hình ảnh khoanh vùng sự kiện về hệ thống quản lý vận hành."
      ],
      specs: ["Mini PC Fanless Edge", "Độ trễ biên 18ms", "Luồng Camera RTSP", "Hoạt động 24/7"]
    },

    "ai-custom-llm-cluster": {
      badge: "Giải pháp Tinh chỉnh Mô hình AI & Tích hợp Chuyên sâu",
      title: "Huấn luyện LLM Nghiệp vụ & Tích hợp Hệ thống ERP / CRM",
      shortName: "Cụm Multi-GPU & Custom LLM",
      chip: "Giải pháp AI Nội bộ",
      image: "images/bento-v9-llm-blue.jpg",
      desc: "Thiết kế cụm máy chủ / máy trạm Multi-GPU (48GB–96GB+ VRAM) kết hợp dịch vụ tinh chỉnh mô hình ngôn ngữ theo dữ liệu chuyên ngành và tích hợp API sâu vào quy trình CRM, ERP, HRM của tập đoàn.",
      tiers: [
        { qty: "Tư vấn Kiến trúc & PoC", policy: "Đánh giá dữ liệu & Xây dựng Prototype" },
        { qty: "Triển khai Cụm Multi-GPU", policy: "Mua đứt CAPEX hoặc Thuê HaaS" },
        { qty: "Đồng hành Tối ưu Mô hình", policy: "Cập nhật tri thức & Hỗ trợ SLA 24/7" }
      ],
      highlights: [
        "Tinh chỉnh chuyên biệt theo thuật ngữ ngành Điện lực, Tài chính – Ngân hàng, Y tế và Sản xuất.",
        "Cung cấp chuẩn RESTful API nội bộ để các phần mềm hiện hữu của doanh nghiệp gọi tác vụ AI dễ dàng.",
        "Linh hoạt lựa chọn đầu tư tài sản cố định hoặc thuê trọn gói hạ tầng GPU theo tiến độ dự án."
      ],
      specs: ["Cụm Multi-GPU RTX/Ada", "48GB–96GB+ VRAM", "Chuẩn RESTful API", "CAPEX hoặc HaaS"]
    }
  };

  /* ------------------------------------------------------------------------
     2. Case Studies & Editorial Tech Insights Data (#detailModal Reader)
     ------------------------------------------------------------------------ */
  const DETAIL_ENTRIES = {
    "case-evn-power": {
      category: "Hồ sơ Dự án • Điện lực & Năng lượng",
      meta: "Triển khai Mạng LAN Nội bộ • Vận hành 24/7",
      title: "Hệ thống Trạm Điều hành Đa màn hình & AI Tra cứu Quy trình An toàn Điện",
      image: "images/case-v7-evn-power.jpg",
      consultChip: "Giải pháp AI Nội bộ",
      consultNote: "Tư vấn mô hình Trạm điều hành Fanless đa màn hình & Turnkey AI Box tra cứu SOP nội bộ tương tự dự án ngành Điện lực.",
      kpis: [
        { num: "-75%", lbl: "Thời gian tra cứu quy trình SOP" },
        { num: "99.98%", lbl: "Độ ổn định trực vận hành 24/7" },
        { num: "100% LAN", lbl: "An toàn dữ liệu kỹ thuật nội bộ" }
      ],
      sections: [
        {
          heading: "1. Bài toán & Yêu cầu Vận hành Thực tế",
          body: "Phòng điều độ và đội ngũ kỹ thuật vận hành cần hệ thống máy tính trực ca 24/7 xuất đồng thời 4 màn hình sơ đồ lưới, hoạt động bền bỉ không gây ồn, đồng thời phải tra cứu nhanh hàng nghìn trang quy trình vận hành – an toàn điện mà tuyệt đối không đưa tài liệu nội bộ lên Internet."
        },
        {
          heading: "2. Kiến trúc Giải pháp Navatek Triển khai",
          body: "Navatek cung ứng đồng bộ cụm Mini PC Công nghiệp Fanless vỏ nhôm tản nhiệt tĩnh (4 cổng xuất hình 4K độc lập, Watchdog tự phục hồi) kết hợp thiết bị Turnkey AI Box cài sẵn Trợ lý AI RAG Tiếng Việt đặt ngay trong mạng LAN nội bộ của đơn vị."
        },
        {
          heading: "3. Hiệu quả Đo lường Sau Nghiệm thu",
          body: "Kỹ sư trực ca tra cứu tức thì điều khoản quy trình kèm số trang trích dẫn chính xác trong dưới 1.5 giây (rút ngắn 75% thời gian so với tìm kiếm thủ công), hệ thống phần cứng đạt độ sẵn sàng 99.98% cùng cam kết kho máy mượn SLA dưới 4 giờ."
        }
      ]
    },

    "case-bank-finance": {
      category: "Hồ sơ Dự án • Tài chính – Ngân hàng",
      meta: "Quy mô 350+ Điểm Giao dịch & Back-Office",
      title: "Chuẩn hóa 350+ Máy trạm Giao dịch & Máy chủ AI OCR Bóc tách Chứng từ",
      image: "images/case-v7-bank-finance.jpg",
      consultChip: "Báo giá Thiết bị theo Dự án",
      consultNote: "Tư vấn chuẩn hóa hệ thống Mini PC ASUS NUC doanh nghiệp & máy chủ AI OCR bóc tách chứng từ nội bộ.",
      kpis: [
        { num: "-64%", lbl: "Điện năng tiêu thụ khối máy trạm" },
        { num: "99.4%", lbl: "Độ chính xác bóc tách AI OCR" },
        { num: "36 Tháng", lbl: "Bảo hành chính ngạch & CO/CQ" }
      ],
      sections: [
        {
          heading: "1. Bài toán Chuẩn hóa Quầy Giao dịch & Xử lý Hồ sơ",
          body: "Hệ thống PC thùng truyền thống tại các quầy giao dịch chiếm nhiều diện tích, tỏa nhiệt lớn và tiêu tốn điện năng tòa nhà. Song song đó, bộ phận vận hành back-office phải nhập liệu thủ công khối lượng lớn chứng từ, hóa đơn và hồ sơ scan mỗi ngày."
        },
        {
          heading: "2. Kiến trúc Giải pháp Navatek Triển khai",
          body: "Thay thế đồng bộ bằng 350+ bộ Mini PC ASUS NUC chính ngạch gắn ngàm VESA ẩn gọn sau màn hình, nạp sẵn Image bảo mật chuẩn ngân hàng; đồng thời lắp đặt cụm Micro-Server All-Flash chạy động cơ AI OCR tự động bóc tách và đối soát chứng từ qua API nội bộ."
        },
        {
          heading: "3. Hiệu quả Vận hành & Tối ưu Chi phí",
          body: "Giảm 64% chi phí điện năng và làm mát khu vực giao dịch, giải phóng hoàn toàn không gian bàn quầy; tốc độ xử lý hồ sơ chứng từ đạt trên 1.200 trang/giờ với độ chính xác trường dữ liệu 99.4%."
        }
      ]
    },

    "case-factory-vision": {
      category: "Hồ sơ Dự án • Sản xuất Công nghiệp & Công nghệ",
      meta: "Kết hợp Edge AI Vision & Mô hình Thuê HaaS",
      title: "Hạ tầng Trạm Edge AI Vision Kiểm soát Chất lượng & Cụm Máy trạm R&D",
      image: "images/case-v7-factory-vision.jpg",
      consultChip: "Thuê Hạ tầng HaaS / Bảo trì SLA",
      consultNote: "Tư vấn triển khai trạm Edge AI Vision nhà máy và phương án thuê cụm máy trạm eGPU theo mô hình HaaS.",
      kpis: [
        { num: "-40%", lbl: "Vốn đầu tư ban đầu nhờ HaaS" },
        { num: "18ms", lbl: "Độ trễ nhận diện hình ảnh tại biên" },
        { num: "< 3.5 Giờ", lbl: "Thời gian ứng cứu SLA thực tế" }
      ],
      sections: [
        {
          heading: "1. Bài toán Môi trường Nhà xưởng & Mở rộng Nhanh Đội ngũ R&D",
          body: "Khu vực băng chuyền đóng gói có nhiều bụi mịn khiến máy tính có quạt thường xuyên hỏng hóc; đồng thời trung tâm R&D cần bổ sung gấp cụm máy trạm GPU cấu hình cao cho dự án 18 tháng mà không muốn dồn ngân sách CAPEX đầu kỳ."
        },
        {
          heading: "2. Kiến trúc Giải pháp Navatek Triển khai",
          body: "Triển khai các trạm Edge Mini PC Fanless kết nối camera công nghiệp chạy AI Vision kiểm đếm và phát hiện lỗi bao bì ngay tại biên; đồng thời cung cấp gói thuê HaaS cụm Máy trạm AI + Dock eGPU OCuLink 64Gbps kèm bảo trì tận nơi."
        },
        {
          heading: "3. Hiệu quả Tài chính & Vận hành Thực tế",
          body: "Chuyển đổi 100% chi phí cụm máy trạm R&D sang OPEX giúp tiết kiệm 40% dòng tiền đầu kỳ; hệ thống Edge Vision hoạt động liên tục 24/7 với độ trễ 18ms và thời gian kỹ sư Navatek ứng cứu thiết bị dự phòng trung bình dưới 3.5 giờ."
        }
      ]
    },

    "article-onprem-ai": {
      category: "Góc nhìn Chuyên gia • AI Doanh nghiệp",
      meta: "Bản tin Kiến trúc CNTT • 6 phút đọc",
      title: "Triển khai AI Nội bộ (On-Premise LLM): Lời giải Bảo mật Dữ liệu cho Tập đoàn & Ngân hàng",
      image: "images/blog-v7-onprem-ai.jpg",
      consultChip: "Giải pháp AI Nội bộ",
      relatedHw: "turnkey-ai-box",
      consultNote: "Đăng ký trao đổi cùng chuyên gia về lộ trình PoC thiết bị Turnkey AI Box (On-Premise LLM) trong mạng LAN doanh nghiệp.",
      kpis: [
        { num: "100% LAN", lbl: "Vận hành độc lập không ra Internet" },
        { num: "0đ / User", lbl: "Không phí thuê bao tài khoản tháng" },
        { num: "14 Ngày", lbl: "Kiểm thử PoC thực tế tại đơn vị" }
      ],
      sections: [
        {
          heading: "1. Rào cản Bảo mật khi Doanh nghiệp Sử dụng Public Cloud AI",
          body: "Khi nhân sự tải hợp đồng kinh tế, báo cáo tài chính, quy trình kỹ thuật hay hồ sơ khách hàng lên các công cụ AI đám mây công cộng, doanh nghiệp đối mặt trực tiếp với rủi ro rò rỉ bí mật kinh doanh và vi phạm quy định an toàn thông tin (ISO/IEC 27001, Nghị định bảo vệ dữ liệu)."
        },
        {
          heading: "2. Sự Trỗi dậy của Thiết bị Turnkey AI Box Vận hành 100% Mạng LAN",
          body: "Với thế hệ vi xử lý tích hợp NPU/GPU kiến trúc mới và các mô hình ngôn ngữ Tiếng Việt tối ưu hóa lượng tử (Quantized Local LLM), doanh nghiệp hiện nay không cần đầu tư phòng máy chủ hàng tỷ đồng vẫn có thể đặt một thiết bị AI Box nhỏ gọn ngay tại văn phòng để phục vụ 30–150 nhân sự đồng thời."
        },
        {
          heading: "3. Khuyến nghị Lộ trình 3 Bước cho Giám đốc CNTT",
          body: "Thay vì triển khai dàn trải, doanh nghiệp nên bắt đầu bằng đợt PoC 14 ngày trên 1 bài toán có ROI rõ nét nhất — điển hình là Trợ lý RAG tra cứu SOP quy trình nội bộ hoặc AI OCR bóc tách chứng từ kế toán — để đo lường chính xác tốc độ phản hồi và độ chính xác trước khi nhân rộng toàn hệ thống."
        }
      ]
    },

    "article-capex-haas": {
      category: "Quản trị Ngân sách IT • Phân tích TCO",
      meta: "Cẩm nang Mua sắm B2B • 5 phút đọc",
      title: "Mua đứt (CAPEX) hay Thuê Hạ tầng Phần cứng (HaaS): Bài toán Tối ưu Dòng tiền cho CIO",
      image: "images/blog-v7-capex-haas.jpg",
      consultChip: "Thuê Hạ tầng HaaS / Bảo trì SLA",
      relatedHw: "haas-hardware-rental",
      consultNote: "Nhận bảng so sánh chi phí tổng sở hữu (TCO) giữa phương án Mua đứt CAPEX và Thuê HaaS cho quy mô doanh nghiệp.",
      kpis: [
        { num: "100% OPEX", lbl: "Khấu trừ chi phí vận hành kỳ" },
        { num: "-40%", lbl: "Áp lực ngân sách đầu tư ban đầu" },
        { num: "< 4 Giờ", lbl: "Ứng cứu máy mượn Loaner Pool" }
      ],
      sections: [
        {
          heading: "1. Khi nào Phương án Mua đứt Chính ngạch (CAPEX) Tối ưu Nhất?",
          body: "Đối với hạ tầng thiết bị đầu cuối ổn định dài hạn từ 3–5 năm như hệ thống Mini PC văn phòng chuẩn hóa hoặc máy chủ lưu trữ cốt lõi tại chi nhánh, hình thức mua đứt chính ngạch (kèm bảo hành 36 tháng và gói bảo dưỡng ESD định kỳ) mang lại tổng chi phí sở hữu thấp nhất."
        },
        {
          heading: "2. Khi nào Mô hình Thuê Phần cứng (Hardware-as-a-Service) Phát huy Lợi thế?",
          body: "Với các dự án R&D AI, đồ họa 3D, trung tâm đào tạo hoặc chiến dịch mở rộng nhân sự theo giai đoạn 6–24 tháng, mô hình HaaS giúp doanh nghiệp không phải chi vốn lớn ban đầu, hạch toán 100% vào chi phí vận hành OPEX và luôn được nâng cấp thế hệ GPU mới nhất."
        },
        {
          heading: "3. Mô hình Kết hợp (Hybrid Procurement) Đang Được Ưa chuộng",
          body: "Nhiều tập đoàn hiện áp dụng chiến lược kết hợp: đầu tư CAPEX cho dàn Mini PC nền tảng và thuê HaaS linh hoạt đối với các trạm eGPU tăng tốc AI cùng cam kết ứng cứu máy mượn Loaner Pool dưới 4 giờ từ nhà cung cấp."
        }
      ]
    },

    "article-modular-pc": {
      category: "Kiến trúc Phần cứng • Hiện đại hóa Điểm cuối",
      meta: "Phân tích Kỹ thuật • 5 phút đọc",
      title: "Xu hướng Thay thế PC Thùng Lớn bằng Mini PC Doanh nghiệp & Máy trạm Mô-đun 64Gbps",
      image: "images/blog-v7-modular-pc.jpg",
      consultChip: "Báo giá Thiết bị theo Dự án",
      relatedHw: "modular-ai-workstation",
      consultNote: "Tư vấn lộ trình nâng cấp dàn PC truyền thống sang hệ sinh thái Mini PC doanh nghiệp & máy trạm eGPU OCuLink 64Gbps.",
      kpis: [
        { num: "-70%", lbl: "Điện năng & tải nhiệt điều hòa" },
        { num: "64Gbps", lbl: "Băng thông PCIe 4.0 x4 OCuLink" },
        { num: "36 Tháng", lbl: "Bảo hành chính ngạch CO/CQ" }
      ],
      sections: [
        {
          heading: "1. Tiết kiệm Đến 70% Điện năng & Chuẩn hóa Không gian Làm việc",
          body: "Một hệ thống 200 máy PC thùng truyền thống tiêu thụ lượng điện năng và tải nhiệt điều hòa khổng lồ mỗi năm. Việc chuyển sang dòng Mini PC doanh nghiệp gắn ngàm VESA sau màn hình giúp giảm 60%–70% công suất tiêu thụ điện mà vẫn đáp ứng vượt trội hiệu năng đa nhiệm văn phòng."
        },
        {
          heading: "2. Đột phá Băng thông OCuLink PCIe 4.0 x4 (64Gbps) cho Khối Kỹ thuật",
          body: "Khác với chuẩn Thunderbolt cũ bị giới hạn băng thông dữ liệu, kết nối OCuLink 64Gbps truyền dẫn trực tiếp luồng PCIe giúp Mini PC kết hợp hoàn hảo với Dock GPU rời RTX 24GB–48GB VRAM, tạo nên cụm máy trạm mô-đun mạnh mẽ tương đương máy trạm full-tower."
        },
        {
          heading: "3. Tầm quan trọng của Vật tư Chuyển pha Honeywell PTM7950 trong Vận hành B2B",
          body: "Để thiết bị nhỏ gọn duy trì xung nhịp tối đa suốt nhiều năm, quy trình chuẩn hóa tản nhiệt bằng vật liệu chuyển pha công nghiệp PTM7950 giúp ngăn ngừa hiện tượng khô keo truyền thống, giữ nhiệt độ tải nặng thấp hơn 8°C–14°C và kéo dài tuổi thọ linh kiện."
        }
      ]
    },

    "article-rag-ocr-erp": {
      category: "AI Doanh nghiệp • Tự động hóa Nghiệp vụ",
      meta: "Kiến trúc AI Nội bộ • 6 phút đọc",
      title: "Kiến trúc AI RAG & OCR Tiếng Việt: Tự động hóa Tra cứu SOP & Bóc tách Chứng từ Kế toán",
      image: "images/blog-v9-rag-ocr.jpg",
      consultChip: "Giải pháp AI Nội bộ",
      relatedHw: "ai-ocr-appliance",
      consultNote: "Tư vấn tích hợp thiết bị AI RAG tra cứu quy trình & AI OCR bóc tách hóa đơn kết nối ERP nội bộ.",
      kpis: [
        { num: "< 1.2 Giây", lbl: "Tốc độ truy xuất & trích dẫn trang gốc" },
        { num: "99.4%", lbl: "Độ chính xác bóc tách OCR Tiếng Việt" },
        { num: "1.200+", lbl: "Trang chứng từ xử lý tự động / giờ" }
      ],
      sections: [
        {
          heading: "1. Giải quyết Nỗi đau 'Ảo giác AI' bằng Kiến trúc RAG Trích dẫn Nguồn Gốc",
          body: "Trong môi trường pháp chế, tài chính và kỹ thuật vận hành, mọi câu trả lời của AI đều phải đối chiếu được văn bản gốc. Kiến trúc Retrieval-Augmented Generation (RAG) nội bộ của Navatek phân mảnh thông minh tài liệu PDF/Word/Excel, cấp quyền theo phòng ban AD/SSO và luôn đính kèm chính xác số trang quy định."
        },
        {
          heading: "2. Tự động Hóa Nhập liệu Back-Office với Động cơ AI OCR Chuyên biệt",
          body: "Thay vì nhập tay hàng nghìn hóa đơn, hợp đồng và phiếu xuất kho scan mỗi ngày, thiết bị Micro-Server AI OCR tự động nhận diện bảng biểu phức tạp, chữ ký, con dấu và đẩy thẳng dữ liệu JSON chuẩn hóa vào SAP, Oracle hoặc ERP nội bộ qua RESTful API."
        },
        {
          heading: "3. Triển khai Đóng gói Phần cứng — Vận hành Ngay trong 72 Giờ",
          body: "Toàn bộ mô hình RAG và OCR đã được tối ưu hóa sẵn trên phần cứng Turnkey AI Box của Navatek, giúp phòng CNTT rút ngắn thời gian tích hợp từ hàng tháng xuống chỉ còn 1–3 ngày làm việc."
        }
      ]
    },

    "article-edge-vision-factory": {
      category: "AI Doanh nghiệp • Công nghiệp & Kho vận",
      meta: "Giải pháp Edge AI • 5 phút đọc",
      title: "Edge AI Vision 18ms tại Nhà xưởng: Giám sát Dây chuyền & An toàn Lao động Không Cần Internet",
      image: "images/blog-v9-edge-vision.jpg",
      consultChip: "Giải pháp AI Nội bộ",
      relatedHw: "ai-vision-appliance",
      consultNote: "Tư vấn triển khai trạm Edge AI Vision Fanless kết nối hệ thống Camera RTSP hiện hữu tại nhà máy và kho vận.",
      kpis: [
        { num: "18ms", lbl: "Độ trễ suy luận hình ảnh tại biên" },
        { num: "8–16 Luồng", lbl: "Xử lý Camera IP RTSP thời gian thực" },
        { num: "24/7 Fanless", lbl: "Kháng bụi mịn & nhiệt độ nhà xưởng" }
      ],
      sections: [
        {
          heading: "1. Vì sao Cloud Vision Không Phù hợp cho Dây chuyền Sản xuất?",
          body: "Truyền tải hàng chục luồng video Full HD/4K từ nhà xưởng lên đám mây gây nghẽn băng thông mạng, độ trễ cao và dừng hoạt động ngay khi đứt cáp quang. Xử lý Edge AI trực tiếp tại hiện trường giúp phản hồi tức thì trong 18ms."
        },
        {
          heading: "2. Tận dụng 100% Hệ thống Camera IP Hiện hữu qua Luồng RTSP",
          body: "Doanh nghiệp không cần thay thế dàn camera sẵn có. Chỉ cần bổ sung trạm Mini PC Fanless tích hợp NPU/GPU của Navatek vào mạng nội bộ để tự động kiểm đếm kiện hàng, phát hiện lỗi ngoại quan bao bì và cảnh báo nhân sự thiếu đồ bảo hộ PPE."
        },
        {
          heading: "3. Phần cứng Không Quạt (Fanless) Chống Bụi Mịn & Rung Động",
          body: "Khung máy nhôm đúc nguyên khối đóng vai trò lá tản nhiệt thụ động giúp thiết bị hoạt động bền bỉ 24/7 ngay tại tủ điện phân xưởng mà không lo kẹt quạt hay chập mạch do bụi công nghiệp."
        }
      ]
    },

    "article-fanless-industrial": {
      category: "Kiến trúc Phần cứng • Máy tính Công nghiệp",
      meta: "Tiêu chuẩn Vận hành 24/7 • 5 phút đọc",
      title: "Thiết kế PC Công nghiệp Fanless 24/7: Giải pháp Chống Bụi Mịn & Sốc Nhiệt cho Trạm Điều độ",
      image: "images/blog-v9-fanless-ipc.jpg",
      consultChip: "Báo giá Thiết bị theo Dự án",
      relatedHw: "fanless-industrial-kiosk",
      consultNote: "Tư vấn cấu hình Máy tính Công nghiệp Fanless xuất 4 màn hình 4K và cổng COM RS232/485 cho trạm điều độ, nhà máy.",
      kpis: [
        { num: "0 Quạt", lbl: "Loại bỏ hoàn toàn điểm lỗi cơ học" },
        { num: "4× 4K", lbl: "Xuất độc lập 4 màn hình giám sát" },
        { num: "Watchdog", lbl: "Tự động khôi phục khi có điện lại" }
      ],
      sections: [
        {
          heading: "1. Quạt Tản Nhiệt — Nguyên nhân Hỏng hóc Số 1 trong Môi trường Công nghiệp",
          body: "Tại các trạm biến áp, trạm thu phí, kho bãi và phòng điều độ sản xuất, quạt làm mát truyền thống hút bụi mịn và hơi ẩm vào bo mạch chủ, gây quá nhiệt và ngừng máy đột ngột sau 6–12 tháng vận hành liên tục."
        },
        {
          heading: "2. Kiến trúc Khung Nhôm CNC Tản Nhiệt Tĩnh & Cổng Giao tiếp Chuyên dụng",
          body: "Dòng PC Công nghiệp Fanless do Navatek cung ứng dẫn nhiệt trực tiếp từ CPU qua tấm chuyển pha xuống vỏ nhôm rãnh sâu. Máy tích hợp sẵn cổng COM RS232/RS485 kết nối PLC/SCADA, Dual LAN và hỗ trợ xuất đồng thời 4 màn hình 4K cho trung tâm chỉ huy."
        },
        {
          heading: "3. Cơ chế Auto Power-On & Hardware Watchdog Bất tử",
          body: "Tích hợp mạch giám sát phần cứng Watchdog Timer tự động khởi động lại khi hệ điều hành treo và tính năng Auto Power-On tự bật máy ngay khi nguồn điện lưới khôi phục."
        }
      ]
    },

    "article-microserver-branch": {
      category: "Kiến trúc Phần cứng • Hạ tầng Chi nhánh",
      meta: "Mạng & Lưu trữ 10GbE • 6 phút đọc",
      title: "Chuẩn hóa CNTT Chi nhánh với Micro-Server 10GbE, Proxmox VE & Tường lửa OPNsense",
      image: "images/blog-v9-branch-server.jpg",
      consultChip: "Báo giá Thiết bị theo Dự án",
      relatedHw: "microserver-nas-gateway",
      consultNote: "Tư vấn giải pháp Micro-Server All-Flash 10GbE tích hợp ảo hóa Proxmox và tường lửa OPNsense cho chuỗi chi nhánh.",
      kpis: [
        { num: "10GbE SFP+", lbl: "Định tuyến & truyền tải nội bộ tốc độ cao" },
        { num: "All-Flash", lbl: "Lưu trữ NVMe RAID siêu êm, tiết kiệm điện" },
        { num: "3-Trong-1", lbl: "Hợp nhất Firewall + NAS + Ảo hóa" }
      ],
      sections: [
        {
          heading: "1. Bài toán Cồng kềnh khi Triển khai Phòng Server tại Văn phòng Chi nhánh",
          body: "Các chi nhánh ngân hàng, chuỗi bán lẻ hoặc văn phòng đại diện từ 20–80 nhân sự thường không có phòng máy chủ cách âm riêng. Việc đặt máy chủ Rack truyền thống gây tiếng ồn lớn, tốn điện và phức tạp trong quản trị từ xa."
        },
        {
          heading: "2. Hợp nhất Tường lửa, Ảo hóa & Lưu trữ trên 1 Thiết bị Micro-Server",
          body: "Sử dụng nền tảng Proxmox VE trên phần cứng Micro-Server 4–6 cổng 2.5GbE/10GbE SFP+, đội ngũ IT Hội sở có thể chạy đồng thời tường lửa OPNsense/pfSense, VPN Site-to-Site, bộ điều khiển Domain và máy chủ file NAS All-Flash RAID trên cùng một thiết bị nhỏ gọn."
        },
        {
          heading: "3. Cấu hình Sẵn Mẫu (Pre-Staged) — Cắm Chạy Tại Chi nhánh Toàn Quốc",
          body: "Navatek hỗ trợ nạp sẵn cấu hình mạng, phân vùng RAID và kiểm thử Burn-in 24h tại Lab trước khi giao tới từng chi nhánh, giúp phòng IT triển khai đồng loạt hàng chục điểm mà không cần cử kỹ sư đi tỉnh."
        }
      ]
    },

    "article-ptm7950-esd": {
      category: "Vận hành Kỹ thuật • Tiêu chuẩn Phòng Lab",
      meta: "Kỹ thuật Nhiệt & Độ bền • 5 phút đọc",
      title: "Tiêu chuẩn Phòng Lab ESD & Vật liệu Chuyển pha PTM7950: Bí quyết Hạ 12°C Nhiệt tải Máy trạm",
      image: "images/blog-v9-ptm7950-lab.jpg",
      consultChip: "Thuê Hạ tầng HaaS / Bảo trì SLA",
      relatedHw: "wholesale-components-thermal",
      consultNote: "Tư vấn nâng cấp đồng bộ linh kiện RAM DDR5 / NVMe cùng Part-Number và bảo dưỡng tản nhiệt Honeywell PTM7950.",
      kpis: [
        { num: "-12°C", lbl: "Nhiệt độ CPU/GPU khi chạy tải nặng" },
        { num: "100% ESD", lbl: "Quy trình thao tác chống tĩnh điện" },
        { num: "Cùng Mã Part", lbl: "Đồng nhất tuyệt đối lô RAM & SSD" }
      ],
      sections: [
        {
          heading: "1. Hiện tượng 'Pump-Out' Làm Giảm Hiệu năng Máy trạm Sau 6 Tháng",
          body: "Trên các dòng Mini PC hiệu năng cao và GPU máy trạm có mật độ nhiệt lớn, kem tản nhiệt silicon thông thường dễ bị đẩy dạt ra rìa (pump-out) và khô cứng sau vài tháng, khiến máy bị tụt xung (thermal throttling) và quạt kêu to."
        },
        {
          heading: "2. Ưu thế Vượt trội của Vật liệu Chuyển pha Công nghiệp Honeywell PTM7950",
          body: "Ở nhiệt độ trên 45°C, tấm PTM7950 chuyển sang trạng thái bán lỏng lấp đầy vi khe hở bề mặt chip và tự cô đặc lại khi máy nghỉ. Chuẩn hóa PTM7950 tại Lab Navatek giúp hạ 8°C–14°C nhiệt độ đỉnh và duy trì hiệu suất ổn định suốt 3–5 năm."
        },
        {
          heading: "3. Kỷ luật Chống tĩnh điện (ESD) & Đồng bộ Mã Linh kiện (Same Part-Number)",
          body: "Mọi đợt nâng cấp RAM DDR5 và ổ cứng NVMe số lượng lớn đều được kỹ sư Navatek thực hiện trên bàn thảm tiếp địa ESD, đi kèm cam kết cung ứng linh kiện trùng khớp 100% Part-Number để hệ thống vận hành ổn định tuyệt đối."
        }
      ]
    },

    "article-cocq-sla-loaner": {
      category: "Ngân sách CIO & Pháp lý • Đấu thầu B2B",
      meta: "Quản trị Mua sắm CNTT • 5 phút đọc",
      title: "Quản trị Rủi ro Mua sắm CNTT B2B: Hồ sơ Thầu CO/CQ Chính ngạch & Cơ chế Máy mượn SLA < 4 Giờ",
      image: "images/blog-v9-cocq-sla.jpg",
      consultChip: "Báo giá Thiết bị theo Dự án",
      relatedHw: "sla-maintenance-loaner",
      consultNote: "Nhận bộ hồ sơ năng lực, mẫu chứng từ CO/CQ chính ngạch và quy trình cam kết máy mượn SLA < 4 giờ của Navatek.",
      kpis: [
        { num: "100% CO/CQ", lbl: "Chứng nhận xuất xứ & chất lượng chính ngạch" },
        { num: "< 4 Giờ", lbl: "Đổi máy nóng từ kho Loaner Pool" },
        { num: "VAT 100%", lbl: "Minh bạch pháp lý & kiểm toán nội bộ" }
      ],
      sections: [
        {
          heading: "1. Rủi ro Pháp lý & Bảo hành Khi Mua Thiết bị Trôi nổi Không Đủ CO/CQ",
          body: "Trong kiểm toán nội bộ và đấu thầu doanh nghiệp, việc thiếu chứng nhận xuất xứ (CO), chứng nhận chất lượng (CQ) hoặc hóa đơn VAT chuẩn mã hàng có thể khiến toàn bộ lô thiết bị không thể nghiệm thu và quyết toán tài sản cố định."
        },
        {
          heading: "2. Kho Máy Dự phòng (Loaner Pool) — Giải pháp Cho Thời gian Chờ Bảo hành Hãng",
          body: "Dù bảo hành chính hãng 36 tháng, quy trình gửi RMA thông thường vẫn mất từ 7–15 ngày làm việc. Với cơ chế Loaner Pool của Navatek, ngay khi thiết bị gặp sự cố phần cứng, kỹ sư sẽ mang máy dự phòng cấu hình tương đương tới thay thế nóng trong dưới 4 giờ."
        },
        {
          heading: "3. Quy trình Nghiệm thu Chuẩn B2B: Burn-in 24h & Biên bản Serial Chi tiết",
          body: "Mỗi lô hàng bàn giao từ Navatek đều đi kèm báo cáo kiểm thử tải nặng Burn-in 24 giờ, danh sách đối chiếu Serial Number từng linh kiện và bộ chứng từ pháp lý hoàn chỉnh cho Phòng Mua hàng."
        }
      ]
    }
  };

  /* ------------------------------------------------------------------------
     3. Live B2B Quote Cart State & UI Synchronizer
     ------------------------------------------------------------------------ */
  const quoteCart = new Map();

  const headerCartCount = document.getElementById("headerCartCount");
  const quoteCartBox = document.getElementById("quoteCartBox");
  const quoteCartInlineCount = document.getElementById("quoteCartInlineCount");
  const quoteCartItems = document.getElementById("quoteCartItems");
  const quoteCartClear = document.getElementById("quoteCartClear");

  function selectMatchingChip(chipName) {
    if (!chipName) return;
    const chipBtn = document.querySelector(`.chip-btn[data-chip="${chipName}"]`);
    if (chipBtn) chipBtn.classList.add("is-selected");
  }

  function syncQuoteCartUI() {
    const count = quoteCart.size;
    if (headerCartCount) {
      headerCartCount.textContent = String(count);
      headerCartCount.classList.toggle("has-count", count > 0);
    }
    if (quoteCartInlineCount) quoteCartInlineCount.textContent = String(count);

    document.querySelectorAll("[data-add-quote]").forEach((btn) => {
      const id = btn.getAttribute("data-add-quote");
      const inCart = quoteCart.has(id);
      btn.classList.toggle("is-added", inCart);
      btn.textContent = inCart ? "✓ Đã chọn" : "+ Báo giá";
    });

    if (quoteCartBox && quoteCartItems) {
      quoteCartBox.classList.toggle("has-items", count > 0);
      quoteCartItems.innerHTML = "";

      quoteCart.forEach((entry, id) => {
        const item = CATALOG_ITEMS[id];
        if (!item) return;
        const tier = item.tiers[entry.tierIndex] || item.tiers[0];

        const tag = document.createElement("span");
        tag.className = "quote-cart-tag";

        const label = document.createElement("span");
        label.textContent = `${item.shortName} • ${tier.qty}`;

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "quote-cart-remove";
        removeBtn.setAttribute("data-remove-quote", id);
        removeBtn.setAttribute("aria-label", `Xóa ${item.shortName}`);
        removeBtn.textContent = "×";

        tag.appendChild(label);
        tag.appendChild(removeBtn);
        quoteCartItems.appendChild(tag);
      });
    }
  }

  function addOrUpdateCartItem(itemId, tierIndex) {
    const item = CATALOG_ITEMS[itemId];
    if (!item) return;
    const validTier =
      typeof tierIndex === "number" && item.tiers[tierIndex] ? tierIndex : 1;
    quoteCart.set(itemId, { itemId, tierIndex: validTier });
    selectMatchingChip(item.chip);
    syncQuoteCartUI();

    const cartBtn = document.getElementById("headerCartBtn");
    if (cartBtn) {
      cartBtn.classList.remove("is-bouncing");
      void cartBtn.offsetWidth;
      cartBtn.classList.add("is-bouncing");
    }
  }

  function toggleCartItem(itemId) {
    if (quoteCart.has(itemId)) {
      quoteCart.delete(itemId);
      syncQuoteCartUI();
    } else {
      addOrUpdateCartItem(itemId, 1);
    }
  }

  /* ------------------------------------------------------------------------
     4. Header Mega-Menu & Mobile Drawer (Desktop Hover + Click Support)
     ------------------------------------------------------------------------ */
  const navBackdrop = document.getElementById("navBackdrop");
  const dropdownButtons = document.querySelectorAll("[data-dropdown]");
  const megaPanels = document.querySelectorAll(".mega-dropdown");
  let megaCloseTimer = null;

  function cancelMegaClose() {
    if (megaCloseTimer) {
      clearTimeout(megaCloseTimer);
      megaCloseTimer = null;
    }
  }

  function scheduleMegaClose(delay = 170) {
    cancelMegaClose();
    megaCloseTimer = setTimeout(() => {
      closeAllDropdowns();
    }, delay);
  }

  function openDropdownPanel(btn) {
    cancelMegaClose();
    const targetId = btn.getAttribute("data-dropdown");
    const panel = document.getElementById(targetId);
    if (!panel) return;
    dropdownButtons.forEach((b) => {
      b.setAttribute("aria-expanded", b === btn ? "true" : "false");
    });
    megaPanels.forEach((p) => {
      p.classList.toggle("is-open", p === panel);
    });
    if (navBackdrop) navBackdrop.classList.add("is-active");
  }

  function closeAllDropdowns() {
    cancelMegaClose();
    dropdownButtons.forEach((b) => b.setAttribute("aria-expanded", "false"));
    megaPanels.forEach((p) => p.classList.remove("is-open"));
    if (navBackdrop) navBackdrop.classList.remove("is-active");
  }

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeAllDropdowns();
      } else {
        openDropdownPanel(btn);
      }
    });

    btn.addEventListener("mouseenter", () => {
      if (window.innerWidth > 960) openDropdownPanel(btn);
    });

    btn.addEventListener("mouseleave", () => {
      if (window.innerWidth > 960) scheduleMegaClose(170);
    });
  });

  megaPanels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth > 960) cancelMegaClose();
    });
    panel.addEventListener("mouseleave", () => {
      if (window.innerWidth > 960) scheduleMegaClose(170);
    });
    panel.querySelectorAll(".mega-foot-link").forEach((link) => {
      link.addEventListener("click", () => closeAllDropdowns());
    });
  });

  if (navBackdrop) navBackdrop.addEventListener("click", closeAllDropdowns);
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".site-header")) closeAllDropdowns();
  });

  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileMenuOpen = document.getElementById("mobileMenuOpen");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  function setMobileDrawer(open) {
    if (!mobileDrawer) return;
    mobileDrawer.classList.toggle("is-open", open);
    mobileDrawer.setAttribute("aria-hidden", open ? "false" : "true");
  }

  if (mobileMenuOpen) mobileMenuOpen.addEventListener("click", () => setMobileDrawer(true));
  if (mobileMenuClose) mobileMenuClose.addEventListener("click", () => setMobileDrawer(false));
  document.querySelectorAll("[data-close-drawer]").forEach((el) => {
    el.addEventListener("click", () => setMobileDrawer(false));
  });

  /* ------------------------------------------------------------------------
     5. Editorial Hero Dynamic Industry Rotator (geteasy.ai Style)
     ------------------------------------------------------------------------ */
  const HERO_VERTICALS = [
    {
      label: "Điện lực & Năng lượng",
      svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      label: "Tài chính & Ngân hàng",
      svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18M2 21h20" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      label: "Sản xuất & Nhà máy",
      svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 21V9l6 4V9l6 4V5h6v16H3z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      label: "Viễn thông & Trung tâm R&D",
      svg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2.5" stroke="currentColor" stroke-width="1.9"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>'
    }
  ];

  const heroIndustryRow = document.querySelector(".hero-industry-row");
  const heroIndustryText = document.getElementById("heroIndustryText");
  const heroIndustryIcon = document.getElementById("heroIndustryIcon");

  if (heroIndustryRow && heroIndustryText && heroIndustryIcon) {
    let verticalIdx = 0;
    setInterval(() => {
      heroIndustryRow.classList.add("is-fading");
      setTimeout(() => {
        verticalIdx = (verticalIdx + 1) % HERO_VERTICALS.length;
        heroIndustryText.textContent = HERO_VERTICALS[verticalIdx].label;
        heroIndustryIcon.innerHTML = HERO_VERTICALS[verticalIdx].svg;
        heroIndustryRow.classList.remove("is-fading");
      }, 170);
    }, 3600);
  }

  /* ------------------------------------------------------------------------
     6. Progressive 4-Tab Infrastructure Solution Explorer + Expandable Vendors
     ------------------------------------------------------------------------ */
  const solTabBtns = document.querySelectorAll("[data-sol-tab]");
  const hwTabPanels = document.querySelectorAll(".hw-tab-panel");

  hwTabPanels.forEach((panel) => {
    panel.querySelectorAll(".fpt-hw-tile").forEach((tile, idx) => {
      tile.style.setProperty("--tab-stagger", `${idx * 75}ms`);
    });
  });

  solTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-sol-tab");
      const targetPanel = document.getElementById(targetId);
      if (!targetPanel || btn.classList.contains("is-active")) return;

      solTabBtns.forEach((b) => b.classList.remove("is-active"));
      hwTabPanels.forEach((p) => p.classList.remove("is-active", "is-switching"));

      btn.classList.add("is-active");
      targetPanel.classList.add("is-active");
      void targetPanel.offsetWidth;
      targetPanel.classList.add("is-switching");
    });
  });

  const toggleVendorsBtn = document.getElementById("toggleVendorsBtn");
  const extraVendorsGrid = document.getElementById("extraVendorsGrid");

  if (extraVendorsGrid) {
    extraVendorsGrid.querySelectorAll(".obsidian-vendor-item").forEach((item, idx) => {
      item.style.setProperty("--vendor-delay", `${idx * 28}ms`);
    });
  }

  if (toggleVendorsBtn && extraVendorsGrid) {
    toggleVendorsBtn.addEventListener("click", () => {
      const expanded = extraVendorsGrid.classList.toggle("is-expanded");
      toggleVendorsBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggleVendorsBtn.innerHTML = expanded
        ? "<span>Thu gọn danh sách hãng</span> <span aria-hidden=\"true\">▴</span>"
        : "<span>Xem đầy đủ 24 hãng công nghệ</span> <span aria-hidden=\"true\">▾</span>";
    });
  }

  /* ------------------------------------------------------------------------
     7. Popup Modal Management (#rfqModal, #hwModal, #detailModal)
     ------------------------------------------------------------------------ */
  const rfqModal = document.getElementById("rfqModal");
  const rfqModalClose = document.getElementById("rfqModalClose");
  const rfqForm = document.getElementById("rfqForm");
  const rfqSuccess = document.getElementById("rfqSuccess");
  const rfqNote = document.getElementById("rfqNote");

  const hwModal = document.getElementById("hwModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalImg = document.getElementById("modalImg");
  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalTierGrid = document.getElementById("modalTierGrid");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalSpecs = document.getElementById("modalSpecs");
  const modalAddCartBtn = document.getElementById("modalAddCartBtn");
  const modalQuoteNowBtn = document.getElementById("modalQuoteNowBtn");

  const detailModal = document.getElementById("detailModal");
  const detailModalClose = document.getElementById("detailModalClose");
  const readerCoverImg = document.getElementById("readerCoverImg");
  const readerCategory = document.getElementById("readerCategory");
  const readerMeta = document.getElementById("readerMeta");
  const readerTitle = document.getElementById("readerTitle");
  const readerKpiStrip = document.getElementById("readerKpiStrip");
  const readerSections = document.getElementById("readerSections");
  const readerConsultBtn = document.getElementById("readerConsultBtn");

  let activeModalItemId = null;
  let activeModalTierIndex = 1;
  let activeDetailId = null;

  function syncBodyScrollLock() {
    const anyOpen =
      rfqModal?.classList.contains("is-open") ||
      hwModal?.classList.contains("is-open") ||
      detailModal?.classList.contains("is-open");
    document.body.classList.toggle("modal-open", Boolean(anyOpen));
  }

  function closeAllModals() {
    rfqModal?.classList.remove("is-open");
    hwModal?.classList.remove("is-open");
    detailModal?.classList.remove("is-open");
    syncBodyScrollLock();
  }

  /* A. Open / Close Popup #rfqModal */
  function openRfqModal(options = {}) {
    closeAllDropdowns();
    hwModal?.classList.remove("is-open");
    detailModal?.classList.remove("is-open");

    if (rfqForm && rfqSuccess) {
      rfqForm.classList.remove("is-hidden");
      rfqSuccess.classList.remove("is-visible");
    }

    if (options.chip) {
      selectMatchingChip(options.chip);
    }
    if (options.note && rfqNote && !rfqNote.value.trim()) {
      rfqNote.value = options.note;
    }

    rfqModal?.classList.add("is-open");
    syncBodyScrollLock();
    setTimeout(() => document.getElementById("rfqName")?.focus(), 120);
  }

  /* B. Open Popup #hwModal */
  function openHardwareModal(itemId) {
    const item = CATALOG_ITEMS[itemId];
    if (!item || !hwModal) return;

    closeAllDropdowns();
    rfqModal?.classList.remove("is-open");
    detailModal?.classList.remove("is-open");

    activeModalItemId = itemId;
    activeModalTierIndex = quoteCart.has(itemId) ? quoteCart.get(itemId).tierIndex : 1;

    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.title;
    }
    if (modalBadge) modalBadge.textContent = item.badge;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.desc;

    if (modalTierGrid) {
      modalTierGrid.innerHTML = "";
      item.tiers.forEach((tier, idx) => {
        const opt = document.createElement("button");
        opt.type = "button";
        opt.className = "modal-tier-option" + (idx === activeModalTierIndex ? " is-selected" : "");

        const q = document.createElement("span");
        q.className = "modal-tier-qty";
        q.textContent = tier.qty;

        const p = document.createElement("span");
        p.className = "modal-tier-policy";
        p.textContent = tier.policy;

        opt.appendChild(q);
        opt.appendChild(p);
        opt.addEventListener("click", () => {
          activeModalTierIndex = idx;
          modalTierGrid
            .querySelectorAll(".modal-tier-option")
            .forEach((el, i) => el.classList.toggle("is-selected", i === idx));
        });
        modalTierGrid.appendChild(opt);
      });
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = "";
      item.highlights.forEach((line) => {
        const li = document.createElement("li");
        const dot = document.createElement("span");
        dot.className = "check-dot-green";
        dot.textContent = "✓";
        const text = document.createElement("span");
        text.textContent = line;
        li.appendChild(dot);
        li.appendChild(text);
        modalHighlights.appendChild(li);
      });
    }

    if (modalSpecs) {
      modalSpecs.innerHTML = "";
      item.specs.forEach((sp) => {
        const pill = document.createElement("span");
        pill.className = "spec-pill";
        pill.textContent = sp;
        modalSpecs.appendChild(pill);
      });
    }

    if (modalAddCartBtn) {
      modalAddCartBtn.textContent = quoteCart.has(itemId)
        ? "✓ Cập nhật quy mô đã chọn"
        : "+ Lưu vào danh sách báo giá";
    }

    hwModal.classList.add("is-open");
    syncBodyScrollLock();
  }

  /* C. Open Popup #detailModal (Case Study Dossier & Editorial Article Reader) */
  function openDetailModal(detailId) {
    const entry = DETAIL_ENTRIES[detailId];
    if (!entry || !detailModal) return;

    closeAllDropdowns();
    rfqModal?.classList.remove("is-open");
    hwModal?.classList.remove("is-open");
    activeDetailId = detailId;

    if (readerCoverImg) {
      readerCoverImg.src = entry.image;
      readerCoverImg.alt = entry.title;
    }
    if (readerCategory) readerCategory.textContent = entry.category;
    if (readerMeta) readerMeta.textContent = entry.meta;
    if (readerTitle) readerTitle.textContent = entry.title;

    if (readerKpiStrip) {
      readerKpiStrip.innerHTML = "";
      if (entry.kpis && entry.kpis.length > 0) {
        readerKpiStrip.classList.add("is-visible");
        entry.kpis.forEach((k) => {
          const box = document.createElement("div");
          box.className = "reader-kpi-item";
          const n = document.createElement("div");
          n.className = "reader-kpi-num";
          n.textContent = k.num;
          const l = document.createElement("div");
          l.className = "reader-kpi-lbl";
          l.textContent = k.lbl;
          box.appendChild(n);
          box.appendChild(l);
          readerKpiStrip.appendChild(box);
        });
      } else {
        readerKpiStrip.classList.remove("is-visible");
      }
    }

    if (readerSections) {
      readerSections.innerHTML = "";
      entry.sections.forEach((sec) => {
        const block = document.createElement("div");
        block.className = "reader-sec-block";
        const h4 = document.createElement("h4");
        h4.textContent = sec.heading;
        const p = document.createElement("p");
        p.textContent = sec.body;
        block.appendChild(h4);
        block.appendChild(p);
        readerSections.appendChild(block);
      });

      if (entry.relatedHw && CATALOG_ITEMS[entry.relatedHw]) {
        const hw = CATALOG_ITEMS[entry.relatedHw];
        const hwBar = document.createElement("div");
        hwBar.className = "reader-related-hw";

        const hwCopy = document.createElement("div");
        hwCopy.className = "reader-related-copy";
        const hwEyebrow = document.createElement("span");
        hwEyebrow.className = "reader-related-eyebrow";
        hwEyebrow.textContent = "Hạ tầng & Giải pháp Liên quan";
        const hwName = document.createElement("strong");
        hwName.className = "reader-related-name";
        hwName.textContent = hw.title;
        hwCopy.appendChild(hwEyebrow);
        hwCopy.appendChild(hwName);

        const hwBtn = document.createElement("button");
        hwBtn.type = "button";
        hwBtn.className = "btn-tile-detail reader-related-btn";
        hwBtn.setAttribute("data-open-hw", entry.relatedHw);
        hwBtn.textContent = "Xem cấu hình →";

        hwBar.appendChild(hwCopy);
        hwBar.appendChild(hwBtn);
        readerSections.appendChild(hwBar);
      }
    }

    detailModal.classList.add("is-open");
    syncBodyScrollLock();
  }

  /* Global Delegated Click Handlers */
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add-quote]");
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleCartItem(addBtn.getAttribute("data-add-quote"));
      return;
    }

    const removeBtn = e.target.closest("[data-remove-quote]");
    if (removeBtn) {
      e.preventDefault();
      quoteCart.delete(removeBtn.getAttribute("data-remove-quote"));
      syncQuoteCartUI();
      return;
    }

    const rfqTrigger = e.target.closest("[data-open-rfq]");
    if (rfqTrigger) {
      e.preventDefault();
      const presetChip = rfqTrigger.getAttribute("data-rfq-chip");
      openRfqModal(presetChip ? { chip: presetChip } : {});
      return;
    }

    const hwTrigger = e.target.closest("[data-open-hw]");
    if (hwTrigger) {
      e.preventDefault();
      openHardwareModal(hwTrigger.getAttribute("data-open-hw"));
      return;
    }

    const detailTrigger = e.target.closest("[data-open-detail]");
    if (detailTrigger) {
      e.preventDefault();
      const targetDetailId = detailTrigger.getAttribute("data-open-detail");
      const isBlogPortal = window.location.pathname.endsWith("blog.html");
      if (isBlogPortal || (targetDetailId && targetDetailId.startsWith("article-"))) {
        window.location.href = `blog-detail.html?id=${encodeURIComponent(targetDetailId)}`;
        return;
      }
      openDetailModal(targetDetailId);
    }
  });

  if (quoteCartClear) {
    quoteCartClear.addEventListener("click", () => {
      quoteCart.clear();
      syncQuoteCartUI();
    });
  }

  if (rfqModalClose) rfqModalClose.addEventListener("click", closeAllModals);
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeAllModals);
  if (detailModalClose) detailModalClose.addEventListener("click", closeAllModals);

  [rfqModal, hwModal, detailModal].forEach((overlay) => {
    if (!overlay) return;
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  if (modalAddCartBtn) {
    modalAddCartBtn.addEventListener("click", () => {
      if (activeModalItemId) addOrUpdateCartItem(activeModalItemId, activeModalTierIndex);
      closeAllModals();
    });
  }

  if (modalQuoteNowBtn) {
    modalQuoteNowBtn.addEventListener("click", () => {
      if (activeModalItemId) addOrUpdateCartItem(activeModalItemId, activeModalTierIndex);
      openRfqModal();
    });
  }

  if (readerConsultBtn) {
    readerConsultBtn.addEventListener("click", () => {
      const entry = activeDetailId ? DETAIL_ENTRIES[activeDetailId] : null;
      openRfqModal({
        chip: entry?.consultChip,
        note: entry?.consultNote
      });
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDropdowns();
      closeAllModals();
      setMobileDrawer(false);
    }
  });

  /* ------------------------------------------------------------------------
     8. Popup RFQ Form Submission & Reset
     ------------------------------------------------------------------------ */
  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.addEventListener("click", () => chip.classList.toggle("is-selected"));
  });

  const rfqSelectedSummary = document.getElementById("rfqSelectedSummary");
  const rfqSuccessMsg = document.getElementById("rfqSuccessMsg");
  const rfqResetBtn = document.getElementById("rfqResetBtn");

  if (rfqForm && rfqSuccess) {
    rfqForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const companyVal = (document.getElementById("rfqCompany")?.value || "").trim();
      const summaryLabels = [];

      quoteCart.forEach((entry, id) => {
        const item = CATALOG_ITEMS[id];
        if (item) {
          const tier = item.tiers[entry.tierIndex] || item.tiers[0];
          summaryLabels.push(`${item.shortName} (${tier.qty})`);
        }
      });

      document.querySelectorAll(".chip-btn.is-selected").forEach((chip) => {
        const txt = chip.getAttribute("data-chip");
        if (txt && !summaryLabels.includes(txt)) summaryLabels.push(txt);
      });

      if (rfqSelectedSummary) {
        rfqSelectedSummary.innerHTML = "";
        summaryLabels.forEach((lbl) => {
          const span = document.createElement("span");
          span.className = "rfq-summary-pill";
          span.textContent = lbl;
          rfqSelectedSummary.appendChild(span);
        });
      }

      if (rfqSuccessMsg && companyVal) {
        rfqSuccessMsg.textContent = `Yêu cầu tư vấn & báo giá của ${companyVal} đã được chuyển tới Phòng Dự án B2B Navatek. Kỹ sư giải pháp sẽ phản hồi trong 30 phút làm việc.`;
      }

      rfqForm.classList.add("is-hidden");
      rfqSuccess.classList.add("is-visible");
    });
  }

  if (rfqResetBtn && rfqForm && rfqSuccess) {
    rfqResetBtn.addEventListener("click", () => {
      rfqForm.reset();
      quoteCart.clear();
      syncQuoteCartUI();
      rfqSuccess.classList.remove("is-visible");
      rfqForm.classList.remove("is-hidden");
      closeAllModals();
    });
  }

  /* ------------------------------------------------------------------------
     9. Hero Separated Multi-Model Mini PC Auto-Rotator (4.2s Smooth Cycle)
     ------------------------------------------------------------------------ */
  const heroShowcase = document.getElementById("heroMinipcShowcase");
  const heroSlides = Array.from(document.querySelectorAll(".hero-minipc-slide"));
  const heroDots = Array.from(document.querySelectorAll(".hero-dot"));
  const heroSlideCaption = document.getElementById("heroSlideCaption");
  const heroSlideLabelText = document.getElementById("heroSlideLabelText");

  if (heroShowcase && heroSlides.length > 1) {
    let currentHeroIdx = 0;
    let heroTimer = null;
    const HERO_INTERVAL_MS = 4200;
    const initSlideParam = new URLSearchParams(window.location.search).get("heroSlide");

    function activateHeroSlide(nextIdx) {
      const total = heroSlides.length;
      currentHeroIdx = ((nextIdx % total) + total) % total;

      heroSlides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === currentHeroIdx);
      });

      heroDots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === currentHeroIdx);
      });

      const activeSlide = heroSlides[currentHeroIdx];
      const label = activeSlide.getAttribute("data-slide-label") || "";
      const hwId = activeSlide.getAttribute("data-open-hw") || "office-nuc-fleet";

      if (heroSlideLabelText) {
        heroSlideLabelText.textContent = label;
      }
      if (heroSlideCaption) {
        heroSlideCaption.setAttribute("data-open-hw", hwId);
      }
    }

    function startHeroAutoRotate() {
      stopHeroAutoRotate();
      heroTimer = window.setInterval(() => {
        activateHeroSlide(currentHeroIdx + 1);
      }, HERO_INTERVAL_MS);
    }

    function stopHeroAutoRotate() {
      if (heroTimer !== null) {
        window.clearInterval(heroTimer);
        heroTimer = null;
      }
    }

    heroDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-hero-dot") || 0);
        activateHeroSlide(idx);
        startHeroAutoRotate();
      });
    });

    heroShowcase.addEventListener("mouseenter", stopHeroAutoRotate);
    heroShowcase.addEventListener("mouseleave", startHeroAutoRotate);
    heroShowcase.addEventListener("focusin", stopHeroAutoRotate);
    heroShowcase.addEventListener("focusout", startHeroAutoRotate);

    if (initSlideParam !== null && !Number.isNaN(Number(initSlideParam))) {
      activateHeroSlide(Number(initSlideParam));
    }

    startHeroAutoRotate();
  }

  /* ------------------------------------------------------------------------
     10. Luxury Enterprise Scroll & Motion Choreography Engine (60/120fps)
     ------------------------------------------------------------------------ */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion) {
    document.documentElement.classList.add("js-motion");
  }

  /* A. Auto-Wire Tailored Section Reveal Choreography & Stagger Groups */
  function registerRevealGroup(elements, mode = "up", stepMs = 70, baseMs = 0) {
    Array.from(elements).forEach((el, idx) => {
      if (!el || el.hasAttribute("data-reveal")) return;
      el.setAttribute("data-reveal", mode);
      const delay = Math.min(baseMs + idx * stepMs, 520);
      if (delay > 0) {
        el.style.setProperty("--reveal-delay", `${delay}ms`);
      }
      el.dataset.revealDelayMs = String(delay);
    });
  }

  // 1. Enterprise Client Logos Band
  registerRevealGroup(document.querySelectorAll(".clients-compact-label"), "up", 0);
  registerRevealGroup(document.querySelectorAll(".clients-frameless-grid .client-logo-item"), "scale", 38, 40);

  // 2. Section Headings Across All Sections
  registerRevealGroup(document.querySelectorAll(".fpt-section-head"), "up", 0);

  // 3. 3D Ice-Crystal Infrastructure Tabs (Initial Active Tab)
  registerRevealGroup(document.querySelectorAll(".fpt-tabs-bar"), "up", 0, 70);
  registerRevealGroup(document.querySelectorAll("#tab-workstation .fpt-tab-summary"), "left", 0, 110);
  registerRevealGroup(document.querySelectorAll("#tab-workstation .fpt-hw-tile"), "scale", 85, 130);

  // 4. Hardware Performance Spotlight, KPI Blocks & 4-Step Pipeline
  registerRevealGroup(document.querySelectorAll(".fpt-perf-visual"), "left", 0);
  registerRevealGroup(document.querySelectorAll(".fpt-perf-heading"), "up", 0, 50);
  registerRevealGroup(document.querySelectorAll(".fpt-kpi-blocks .fpt-kpi-box"), "scale", 95, 110);
  registerRevealGroup(document.querySelectorAll(".fpt-steps-strip .fpt-step-tile"), "up", 90, 60);

  // 5. 2x2 AI On-Premise Bento Grid
  registerRevealGroup(document.querySelectorAll(".fpt-bento-grid .fpt-bento-card"), "scale", 95, 60);

  // 6. Real Case Studies & Tech Insights Grids + FPT IS Style Blog Sections
  document.querySelectorAll(".visual-cards-grid").forEach((grid) => {
    registerRevealGroup(grid.querySelectorAll(".visual-story-card"), "scale", 95, 50);
  });
  registerRevealGroup(document.querySelectorAll(".fis-section-bar"), "up", 0);
  document.querySelectorAll(".fis-highlight-list").forEach((list) => {
    registerRevealGroup(list.querySelectorAll(".fis-highlight-item"), "up", 75, 40);
  });
  registerRevealGroup(document.querySelectorAll(".fis-filter-top-row"), "up", 0);
  registerRevealGroup(document.querySelectorAll(".fis-post-grid .fis-post-item"), "scale", 65, 40);
  registerRevealGroup(document.querySelectorAll(".fis-mid-banner-content"), "left", 0);
  registerRevealGroup(document.querySelectorAll(".fis-contact-grid > *"), "up", 90, 40);

  // 7. Royal-Sapphire CTA Band, Obsidian 24-Vendor Ecosystem & Footer
  registerRevealGroup(document.querySelectorAll(".fpt-cta-heading"), "up", 0);
  registerRevealGroup(document.querySelectorAll(".fpt-royal-cta-band .btn-royal-solid"), "scale", 0, 95);
  registerRevealGroup(document.querySelectorAll(".obsidian-head-row"), "up", 0);
  registerRevealGroup(
    document.querySelectorAll(".fpt-obsidian-partners .obsidian-vendors-grid:not(.vendors-extra-grid) .obsidian-vendor-item"),
    "scale",
    36,
    40
  );
  registerRevealGroup(document.querySelectorAll(".obsidian-cert-bar > div"), "up", 80, 60);
  registerRevealGroup(document.querySelectorAll(".footer-grid > div"), "up", 75, 0);

  function markElementRevealed(el) {
    if (!el || el.classList.contains("is-revealed")) return;
    el.classList.add("is-revealed");
    const delayMs = Number(el.dataset.revealDelayMs || 0);
    window.setTimeout(() => {
      el.classList.add("reveal-done");
    }, 820 + delayMs);
  }

  const allRevealTargets = Array.from(document.querySelectorAll("[data-reveal]"));
  let pendingRevealTargets = allRevealTargets.slice();

  function sweepVisibleReveals() {
    if (pendingRevealTargets.length === 0) return;
    const triggerY = window.innerHeight * 0.98;
    pendingRevealTargets = pendingRevealTargets.filter((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerY) {
        markElementRevealed(el);
        return false;
      }
      return true;
    });
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    allRevealTargets.forEach((el) => {
      el.classList.add("is-revealed", "reveal-done");
    });
    pendingRevealTargets = [];
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight) {
            markElementRevealed(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px -16px 0px"
      }
    );

    allRevealTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 1.01) {
        markElementRevealed(el);
      } else {
        revealObserver.observe(el);
      }
    });
    sweepVisibleReveals();
  }

  /* B. Smooth Live KPI Counter Animation (-70%, 64Gbps, < 4 Giờ) */
  const kpiCounters = Array.from(document.querySelectorAll("[data-kpi-counter]"));
  const kpiBlockContainer = document.querySelector(".fpt-kpi-blocks");
  let kpiAnimated = false;

  function runKpiCounters() {
    if (kpiAnimated || kpiCounters.length === 0) return;
    kpiAnimated = true;

    if (prefersReducedMotion) return;

    const duration = 1150;
    const startTime = performance.now();

    const specs = kpiCounters.map((el) => ({
      el,
      prefix: el.getAttribute("data-prefix") || "",
      suffix: el.getAttribute("data-suffix") || "",
      startVal: Number(el.getAttribute("data-start") || 0),
      targetVal: Number(el.getAttribute("data-target") || 0)
    }));

    function tickCounter(now) {
      const t = Math.min(1, (now - startTime) / duration);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);

      specs.forEach(({ el, prefix, suffix, startVal, targetVal }) => {
        const current = Math.round(startVal + (targetVal - startVal) * eased);
        el.textContent = `${prefix}${current}${suffix}`;
      });

      if (t < 1) {
        window.requestAnimationFrame(tickCounter);
      }
    }

    window.requestAnimationFrame(tickCounter);
  }

  if (kpiBlockContainer && "IntersectionObserver" in window && !prefersReducedMotion) {
    const kpiObserver = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          runKpiCounters();
          obs.disconnect();
        }
      },
      { threshold: 0.28 }
    );
    kpiObserver.observe(kpiBlockContainer);
  }

  /* C. Active Section Navigation Scroll-Spy */
  const navSpyLinks = Array.from(document.querySelectorAll('.main-nav a.nav-link[href^="#"]'));
  const spyMap = new Map();
  navSpyLinks.forEach((link) => {
    const id = link.getAttribute("href")?.slice(1);
    const sec = id ? document.getElementById(id) : null;
    if (sec) spyMap.set(sec, link);
  });

  if (spyMap.size > 0 && "IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = spyMap.get(entry.target);
            navSpyLinks.forEach((lnk) => lnk.classList.toggle("is-current", lnk === activeLink));
          }
        });
      },
      {
        rootMargin: "-26% 0px -58% 0px",
        threshold: 0
      }
    );
    spyMap.forEach((_, sec) => spyObserver.observe(sec));
  }

  /* D. Unified 60/120fps Scroll Loop: Header Morph, Progress Bar, Parallax & Top Ring */
  const siteHeader = document.querySelector(".site-header");
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const scrollTopFab = document.getElementById("scrollTopFab");
  const scrollTopRingProg = document.getElementById("scrollTopRingProg");
  const heroStageEl = document.querySelector(".fpt-hero-stage");
  const heroCopyEl = document.querySelector(".fpt-hero-copy");
  const heroViewportEl = document.querySelector(".hero-minipc-viewport");
  const perfSectionEl = document.getElementById("quy-trinh-hop-tac");
  const perfVisualImg = document.querySelector(".fpt-perf-visual img");

  const RING_CIRCUMFERENCE = 119.38; // 2 * PI * 19
  let scrollTicking = false;
  let cachedHeroHeight = heroStageEl ? heroStageEl.offsetHeight : 700;
  let cachedDocScrollable = 1;

  function refreshScrollMetrics() {
    cachedHeroHeight = heroStageEl ? heroStageEl.offsetHeight : 700;
    cachedDocScrollable = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
  }

  function applyScrollFrame() {
    scrollTicking = false;
    const sy = window.scrollY || window.pageYOffset || 0;

    if (!prefersReducedMotion) {
      sweepVisibleReveals();
    }

    // 1. Sticky Header Compact Morph
    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", sy > 28);
      if (sy < 140) {
        navSpyLinks.forEach((lnk) => lnk.classList.remove("is-current"));
      }
    }

    // 2. Top Royal-Sapphire Progress Ribbon & Circular Back-to-Top Ring
    const progress = Math.min(1, Math.max(0, sy / cachedDocScrollable));
    if (scrollProgressBar) {
      scrollProgressBar.style.setProperty("--scroll-progress", progress.toFixed(4));
    }
    if (scrollTopFab) {
      scrollTopFab.classList.toggle("is-visible", sy > 440);
    }
    if (scrollTopRingProg) {
      const offset = RING_CIRCUMFERENCE * (1 - progress);
      scrollTopRingProg.style.setProperty("--ring-offset", offset.toFixed(2));
    }

    if (prefersReducedMotion) return;

    // 3. Multi-Plane Hero Depth Parallax (Desktop/Tablet)
    if (sy <= cachedHeroHeight + 120 && window.innerWidth > 960) {
      const copyOffset = (sy * 0.095).toFixed(2);
      const prodOffset = (sy * -0.065).toFixed(2);
      if (heroCopyEl) heroCopyEl.style.setProperty("--hero-copy-y", `${copyOffset}px`);
      if (heroViewportEl) heroViewportEl.style.setProperty("--hero-prod-y", `${prodOffset}px`);
    }

    // 4. Subtle Counter-Parallax on 3D Cluster Hardware Visual
    if (perfSectionEl && perfVisualImg && window.innerWidth > 960) {
      const rect = perfSectionEl.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom > 0 && rect.top < vh) {
        const centerDelta = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        const shift = Math.max(-16, Math.min(16, centerDelta * -26));
        perfVisualImg.style.setProperty("--perf-parallax", `${shift.toFixed(2)}px`);
      }
    }
  }

  function requestScrollTick() {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(applyScrollFrame);
    }
  }

  solTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      refreshScrollMetrics();
      requestScrollTick();
    });
  });
  if (toggleVendorsBtn) {
    toggleVendorsBtn.addEventListener("click", () => {
      refreshScrollMetrics();
      requestScrollTick();
    });
  }

  refreshScrollMetrics();
  applyScrollFrame();

  if (!prefersReducedMotion) {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add("smooth-scroll-ready");
    });
  }

  window.addEventListener("scroll", requestScrollTick, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      refreshScrollMetrics();
      requestScrollTick();
    },
    { passive: true }
  );
  window.addEventListener("load", () => {
    refreshScrollMetrics();
    requestScrollTick();
  });

  if (scrollTopFab) {
    scrollTopFab.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    });
  }

  /* E. Interactive Damped 3D Studio Tilt on Hero Mini PC + Bento Cursor Spotlight */
  if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    const heroGlowEl = document.querySelector(".hero-minipc-glow");
    let targetRx = 0;
    let targetRy = 0;
    let currRx = 0;
    let currRy = 0;
    let tiltRaf = null;

    function stepHeroTilt() {
      currRx += (targetRx - currRx) * 0.11;
      currRy += (targetRy - currRy) * 0.11;

      if (heroViewportEl) {
        heroViewportEl.style.setProperty("--tilt-rx", `${currRx.toFixed(2)}deg`);
        heroViewportEl.style.setProperty("--tilt-ry", `${currRy.toFixed(2)}deg`);
      }
      if (heroGlowEl) {
        heroGlowEl.style.setProperty("--glow-dx", `${(currRy * 3.2).toFixed(1)}px`);
        heroGlowEl.style.setProperty("--glow-dy", `${(-currRx * 2.6).toFixed(1)}px`);
      }

      if (Math.abs(targetRx - currRx) > 0.02 || Math.abs(targetRy - currRy) > 0.02) {
        tiltRaf = window.requestAnimationFrame(stepHeroTilt);
      } else {
        tiltRaf = null;
      }
    }

    if (heroStageEl && heroViewportEl) {
      heroStageEl.addEventListener(
        "mousemove",
        (e) => {
          if (window.innerWidth <= 960) return;
          const rect = heroStageEl.getBoundingClientRect();
          const nx = (e.clientX - rect.left) / rect.width - 0.5;
          const ny = (e.clientY - rect.top) / rect.height - 0.5;
          targetRy = nx * 7.5;
          targetRx = -ny * 6.0;
          if (!tiltRaf) tiltRaf = window.requestAnimationFrame(stepHeroTilt);
        },
        { passive: true }
      );

      heroStageEl.addEventListener("mouseleave", () => {
        targetRx = 0;
        targetRy = 0;
        if (!tiltRaf) tiltRaf = window.requestAnimationFrame(stepHeroTilt);
      });
    }

    // Cursor-tracking radial light sheen on 2x2 Royal-Blue & Obsidian AI Bento Cards
    document.querySelectorAll(".fpt-bento-card").forEach((card) => {
      card.addEventListener(
        "mousemove",
        (e) => {
          const rect = card.getBoundingClientRect();
          const xPct = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
          const yPct = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
          card.style.setProperty("--spot-x", `${xPct}%`);
          card.style.setProperty("--spot-y", `${yPct}%`);
        },
        { passive: true }
      );
    });
  }

  /* ------------------------------------------------------------------------
     11. Blog Listing Category Filter, Instant Search & Sticky Sub-Nav Spy
     ------------------------------------------------------------------------ */
  const blogCatBtns = Array.from(document.querySelectorAll("[data-blog-cat]"));
  const blogCategorySelect = document.getElementById("blogCategorySelect");
  const blogCards = Array.from(document.querySelectorAll("[data-blog-card]"));
  const blogSearchInput = document.getElementById("blogSearchInput");
  const blogSearchBtn = document.getElementById("blogSearchBtn");
  const blogSearchClear = document.getElementById("blogSearchClear");
  const blogCountLabel = document.getElementById("blogCountLabel");
  const blogEmptyState = document.getElementById("blogEmptyState");
  const blogResetFilterBtn = document.getElementById("blogResetFilterBtn");
  const blogJumpCatLinks = Array.from(document.querySelectorAll("[data-jump-cat]"));
  const blogLoadMoreWrap = document.getElementById("blogLoadMoreWrap");
  const blogLoadMoreBtn = document.getElementById("blogLoadMoreBtn");
  const blogLoadMoreText = document.getElementById("blogLoadMoreText");
  const blogInlineForm = document.getElementById("blogInlineForm");
  const blogInlineSuccess = document.getElementById("blogInlineSuccess");
  const blogInlineSuccessMsg = document.getElementById("blogInlineSuccessMsg");

  if (blogCards.length > 0) {
    const INITIAL_PAGE_SIZE = 6;
    let activeBlogCat = "all";
    let activeBlogQuery = "";
    let blogExpandedAll = false;

    function normalizeVi(str) {
      return (str || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
    }

    function syncBlogCategoryControls(catValue) {
      activeBlogCat = catValue || "all";
      if (blogCategorySelect) {
        blogCategorySelect.value = activeBlogCat;
      }
      blogCatBtns.forEach((btn) => {
        btn.classList.toggle("is-active", btn.getAttribute("data-blog-cat") === activeBlogCat);
      });
    }

    function applyBlogFilters(animateCards = true) {
      const qNorm = normalizeVi(activeBlogQuery.trim());
      const isDefaultView = activeBlogCat === "all" && !qNorm;
      let matchedCount = 0;
      let shownCount = 0;

      blogCards.forEach((card) => {
        const cat = card.getAttribute("data-blog-card") || "";
        const searchText = normalizeVi(
          (card.getAttribute("data-blog-keywords") || "") + " " + card.textContent
        );

        const matchCat = activeBlogCat === "all" || cat === activeBlogCat;
        const matchQuery = !qNorm || searchText.includes(qNorm);
        const isMatched = matchCat && matchQuery;

        if (!isMatched) {
          card.classList.add("is-filtered-out");
          card.classList.remove("is-Collapsed-page");
          return;
        }

        matchedCount += 1;
        const hideByPagination =
          isDefaultView && !blogExpandedAll && matchedCount > INITIAL_PAGE_SIZE;

        card.classList.remove("is-filtered-out");
        card.classList.toggle("is-Collapsed-page", hideByPagination);

        if (!hideByPagination) {
          if (animateCards) {
            card.style.setProperty("--blog-stagger", `${shownCount * 45}ms`);
            card.classList.remove("is-filtering-in");
            void card.offsetWidth;
            card.classList.add("is-filtering-in");
          }
          shownCount += 1;
        }
      });

      if (blogCountLabel) {
        if (isDefaultView && !blogExpandedAll && matchedCount > shownCount) {
          blogCountLabel.textContent = `Hiển thị ${shownCount} / ${matchedCount} bài viết & hồ sơ`;
        } else {
          blogCountLabel.textContent = `Hiển thị ${shownCount} bài viết & hồ sơ`;
        }
      }

      if (blogLoadMoreWrap) {
        const remaining = matchedCount - shownCount;
        blogLoadMoreWrap.classList.toggle("is-hidden", remaining <= 0);
        if (blogLoadMoreText && remaining > 0) {
          blogLoadMoreText.textContent = `Xem thêm (${remaining} bài viết)`;
        }
      }

      if (blogSearchClear) {
        blogSearchClear.classList.toggle("is-visible", activeBlogQuery.trim().length > 0);
      }
      if (blogEmptyState) {
        blogEmptyState.classList.toggle("is-visible", matchedCount === 0);
      }

      refreshScrollMetrics();
      requestScrollTick();
    }

    // Initialize default 6-card paginated state without re-triggering cascade
    applyBlogFilters(false);

    if (blogLoadMoreBtn) {
      blogLoadMoreBtn.addEventListener("click", () => {
        blogExpandedAll = true;
        applyBlogFilters(true);
      });
    }

    blogCatBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextCat = btn.getAttribute("data-blog-cat") || "all";
        syncBlogCategoryControls(nextCat);
        applyBlogFilters(true);
      });
    });

    if (blogCategorySelect) {
      blogCategorySelect.addEventListener("change", () => {
        syncBlogCategoryControls(blogCategorySelect.value);
        applyBlogFilters(true);
      });
    }

    blogJumpCatLinks.forEach((lnk) => {
      lnk.addEventListener("click", () => {
        const targetCat = lnk.getAttribute("data-jump-cat") || "all";
        syncBlogCategoryControls(targetCat);
        applyBlogFilters(true);
      });
    });

    if (blogSearchInput) {
      blogSearchInput.addEventListener("input", () => {
        activeBlogQuery = blogSearchInput.value || "";
        applyBlogFilters(true);
      });
      blogSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          activeBlogQuery = blogSearchInput.value || "";
          applyBlogFilters(true);
        }
      });
    }

    if (blogSearchBtn && blogSearchInput) {
      blogSearchBtn.addEventListener("click", () => {
        activeBlogQuery = blogSearchInput.value || "";
        applyBlogFilters(true);
      });
    }

    if (blogSearchClear && blogSearchInput) {
      blogSearchClear.addEventListener("click", () => {
        blogSearchInput.value = "";
        activeBlogQuery = "";
        applyBlogFilters(true);
        blogSearchInput.focus();
      });
    }

    if (blogResetFilterBtn) {
      blogResetFilterBtn.addEventListener("click", () => {
        activeBlogQuery = "";
        if (blogSearchInput) blogSearchInput.value = "";
        syncBlogCategoryControls("all");
        applyBlogFilters(true);
      });
    }
  }

  // Inline Newsletter & Consultation Form Handler (#blogInlineForm)
  if (blogInlineForm) {
    blogInlineForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameVal = (document.getElementById("blogSubName")?.value || "").trim();
      const emailVal = (document.getElementById("blogSubEmail")?.value || "").trim();
      const topicVal = (document.getElementById("blogSubTopic")?.value || "").trim();

      blogInlineForm.style.display = "none";
      if (blogInlineSuccess) {
        blogInlineSuccess.classList.add("is-visible");
      }
      if (blogInlineSuccessMsg) {
        blogInlineSuccessMsg.textContent = `Cảm ơn ${nameVal || "Quý khách"}! Phòng Giải pháp B2B Navatek đã ghi nhận yêu cầu "${topicVal}" và sẽ gửi tài liệu qua email ${emailVal} trong 30 phút làm việc.`;
      }
    });
  }

  // Sticky Sub-Nav Scroll-Spy (.fis-page-nav-link[data-fis-spy])
  const fisSpyLinks = Array.from(document.querySelectorAll(".fis-page-nav-link[data-fis-spy]"));
  if (fisSpyLinks.length > 0 && "IntersectionObserver" in window) {
    const fisSpyMap = new Map();
    fisSpyLinks.forEach((lnk) => {
      const targetId = lnk.getAttribute("data-fis-spy");
      const sec = targetId ? document.getElementById(targetId) : null;
      if (sec) fisSpyMap.set(sec, lnk);
    });

    const fisSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLnk = fisSpyMap.get(entry.target);
            fisSpyLinks.forEach((l) => l.classList.toggle("is-active", l === activeLnk));
          }
        });
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: 0
      }
    );

    fisSpyMap.forEach((_, sec) => fisSpyObserver.observe(sec));
  }

  // Deep-link support: ?article=article-onprem-ai opens the reader modal automatically
  const articleParam = new URLSearchParams(window.location.search).get("article");
  if (articleParam && DETAIL_ENTRIES[articleParam]) {
    window.setTimeout(() => openDetailModal(articleParam), 160);
  }

  /* ------------------------------------------------------------------------
     12. FPT IS Style Blog Detail Page Dynamic Engine (blog-detail.html?id=...)
     ------------------------------------------------------------------------ */
  const detailArticleTitle = document.getElementById("detailArticleTitle");
  const detailCategoryTag = document.getElementById("detailCategoryTag");
  const detailBreadcrumbCurrent = document.getElementById("detailBreadcrumbCurrent");
  const detailArticleDate = document.getElementById("detailArticleDate");
  const detailArticleMeta = document.getElementById("detailArticleMeta");
  const detailLeadQuote = document.getElementById("detailLeadQuote");
  const detailCoverImg = document.getElementById("detailCoverImg");
  const detailKpiGrid = document.getElementById("detailKpiGrid");
  const detailTocList = document.getElementById("detailTocList");
  const detailSectionsContainer = document.getElementById("detailSectionsContainer");
  const detailRelatedHwCard = document.getElementById("detailRelatedHwCard");
  const detailRelatedHwTitle = document.getElementById("detailRelatedHwTitle");
  const detailInspectHwBtn = document.getElementById("detailInspectHwBtn");
  const detailConsultArticleBtn = document.getElementById("detailConsultArticleBtn");
  const detailRelatedList = document.getElementById("detailRelatedList");
  const fisTocBox = document.getElementById("fisTocBox");
  const fisTocToggleHeader = document.getElementById("fisTocToggleHeader");
  const fisTocToggleLabel = document.getElementById("fisTocToggleLabel");

  const ARTICLE_DATES = {
    "article-onprem-ai": "28/10/2026",
    "article-rag-ocr-erp": "24/10/2026",
    "article-modular-pc": "19/10/2026",
    "article-capex-haas": "15/10/2026",
    "article-edge-vision-factory": "11/10/2026",
    "article-fanless-industrial": "06/10/2026",
    "article-microserver-branch": "02/10/2026",
    "article-ptm7950-esd": "25/09/2026",
    "article-cocq-sla-loaner": "18/09/2026",
    "case-evn-power": "14/09/2026",
    "case-bank-finance": "09/09/2026",
    "case-factory-vision": "03/09/2026"
  };

  if (fisTocToggleHeader && fisTocBox) {
    const toggleToc = () => {
      const collapsed = fisTocBox.classList.toggle("is-collapsed");
      fisTocToggleHeader.setAttribute("aria-expanded", collapsed ? "false" : "true");
      if (fisTocToggleLabel) {
        fisTocToggleLabel.textContent = collapsed ? "Mở rộng ▾" : "Thu gọn ▴";
      }
    };
    fisTocToggleHeader.addEventListener("click", toggleToc);
    fisTocToggleHeader.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleToc();
      }
    });
  }

  document.querySelectorAll("[data-copy-blog-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
      btn.classList.add("is-copied");
      setTimeout(() => btn.classList.remove("is-copied"), 1800);
    });
  });

  function renderBlogDetailPage(detailId) {
    if (!detailArticleTitle) return;
    const resolvedId = DETAIL_ENTRIES[detailId] ? detailId : "article-onprem-ai";
    const entry = DETAIL_ENTRIES[resolvedId];
    if (!entry) return;

    activeDetailId = resolvedId;
    document.title = `${entry.title} — Navatek Enterprise Solutions`;

    const shortCate = (entry.category || "Góc nhìn Chuyên gia").split("•")[0].trim();
    if (detailBreadcrumbCurrent) detailBreadcrumbCurrent.textContent = shortCate;
    if (detailCategoryTag) detailCategoryTag.textContent = entry.category;
    detailArticleTitle.textContent = entry.title;

    const dateStr = ARTICLE_DATES[resolvedId] || "28/10/2026";
    if (detailArticleDate) detailArticleDate.textContent = `Ngày ${dateStr}`;
    if (detailArticleMeta) detailArticleMeta.textContent = entry.meta;

    if (detailCoverImg) {
      detailCoverImg.src = entry.image;
      detailCoverImg.alt = entry.title;
    }

    if (detailLeadQuote && entry.sections && entry.sections.length > 0) {
      detailLeadQuote.textContent =
        entry.consultNote +
        " Bài viết dưới đây phân tích chi tiết kiến trúc kỹ thuật, bài toán chi phí tổng sở hữu (TCO) và lộ trình triển khai thực tế cho doanh nghiệp.";
    }

    if (detailKpiGrid) {
      detailKpiGrid.innerHTML = "";
      (entry.kpis || []).forEach((k) => {
        const card = document.createElement("div");
        card.className = "fis-article-kpi-card";
        const num = document.createElement("div");
        num.className = "fis-article-kpi-num";
        num.textContent = k.num;
        const lbl = document.createElement("div");
        lbl.className = "fis-article-kpi-lbl";
        lbl.textContent = k.lbl;
        card.appendChild(num);
        card.appendChild(lbl);
        detailKpiGrid.appendChild(card);
      });
    }

    if (detailTocList && detailSectionsContainer) {
      detailTocList.innerHTML = "";
      detailSectionsContainer.innerHTML = "";

      (entry.sections || []).forEach((sec, idx) => {
        const secId = `sec-${idx + 1}`;
        const cleanHeading = sec.heading.replace(/^\d+\.\s*/, "");

        // TOC item
        const li = document.createElement("li");
        li.className = "fis-toc-item";
        const a = document.createElement("a");
        a.href = `#${secId}`;
        const numSpan = document.createElement("span");
        numSpan.className = "toc-num";
        numSpan.textContent = `${idx + 1}.`;
        const txtSpan = document.createElement("span");
        txtSpan.textContent = cleanHeading;
        a.appendChild(numSpan);
        a.appendChild(txtSpan);
        li.appendChild(a);
        detailTocList.appendChild(li);

        // Section block
        const secEl = document.createElement("section");
        secEl.id = secId;
        secEl.className = "fis-article-sec";
        const h2 = document.createElement("h2");
        h2.textContent = `${idx + 1}. ${cleanHeading}`;
        const p = document.createElement("p");
        p.textContent = sec.body;
        secEl.appendChild(h2);
        secEl.appendChild(p);
        detailSectionsContainer.appendChild(secEl);
      });

      // Add Section 4: Enterprise B2B Comparison Table
      const tableSecId = `sec-${(entry.sections || []).length + 1}`;
      const tableNum = (entry.sections || []).length + 1;

      const tocTableLi = document.createElement("li");
      tocTableLi.className = "fis-toc-item";
      tocTableLi.innerHTML = `<a href="#${tableSecId}"><span class="toc-num">${tableNum}.</span><span>Bảng Đối chiếu Kiến trúc &amp; Tiêu chuẩn Nghiệm thu B2B</span></a>`;
      detailTocList.appendChild(tocTableLi);

      const tableSec = document.createElement("section");
      tableSec.id = tableSecId;
      tableSec.className = "fis-article-sec";
      tableSec.innerHTML = `
        <h2>${tableNum}. Bảng Đối chiếu Kiến trúc &amp; Tiêu chuẩn Nghiệm thu B2B</h2>
        <div class="fis-article-table-wrap">
          <table class="fis-article-table">
            <thead>
              <tr>
                <th>Tiêu chí Đánh giá</th>
                <th>Giải pháp Truyền thống / Nhỏ lẻ</th>
                <th>Kiến trúc Chuẩn hóa Navatek B2B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>An toàn &amp; Chủ quyền Dữ liệu</strong></td>
                <td>Phụ thuộc hạ tầng công cộng hoặc phân tán</td>
                <td>100% On-Premise LAN • Tuân thủ ISO/IEC 27001</td>
              </tr>
              <tr>
                <td><strong>Chi phí Vận hành 3 Năm (TCO)</strong></td>
                <td>Tốn điện năng, chi phí bản quyền &amp; bảo trì phát sinh</td>
                <td>Đầu tư CAPEX chính ngạch hoặc thuê HaaS trọn gói</td>
              </tr>
              <tr>
                <td><strong>Cam kết Ứng cứu Phần cứng</strong></td>
                <td>Chờ quy trình RMA hãng từ 7–15 ngày làm việc</td>
                <td>Đổi máy nóng từ kho Loaner Pool trong &lt; 4 giờ</td>
              </tr>
              <tr>
                <td><strong>Hồ sơ Pháp lý &amp; Nghiệm thu</strong></td>
                <td>Thiếu đồng bộ mã Part hoặc chứng từ xuất xứ</td>
                <td>Đầy đủ CO/CQ chính ngạch, Burn-in 24h &amp; VAT 100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
      detailSectionsContainer.appendChild(tableSec);
    }

    // Related Hardware Card inside Article
    if (detailRelatedHwCard) {
      const hwId = entry.relatedHw || "turnkey-ai-box";
      const hw = CATALOG_ITEMS[hwId];
      if (hw) {
        if (detailRelatedHwTitle) detailRelatedHwTitle.textContent = hw.title;
        if (detailInspectHwBtn) detailInspectHwBtn.setAttribute("data-open-hw", hwId);
      }
    }

    // Related Articles Sidebar (6 items excluding current)
    if (detailRelatedList) {
      detailRelatedList.innerHTML = "";
      const allKeys = Object.keys(DETAIL_ENTRIES).filter((k) => k !== resolvedId);
      allKeys.slice(0, 6).forEach((key) => {
        const rel = DETAIL_ENTRIES[key];
        const relDate = ARTICLE_DATES[key] || "15/10/2026";
        const relCate = (rel.category || "Chuyên gia viết").split("•")[0].trim();

        const itemLink = document.createElement("a");
        itemLink.href = `blog-detail.html?id=${encodeURIComponent(key)}`;
        itemLink.className = "fis-related-item";
        itemLink.innerHTML = `
          <div class="fis-related-thumb">
            <img src="${rel.image}" alt="${rel.title}" loading="lazy" />
          </div>
          <div class="fis-related-content">
            <p class="fis-related-cate">${relCate} <span class="date">- ${relDate}</span></p>
            <h3 class="fis-related-title">${rel.title}</h3>
          </div>
        `;
        detailRelatedList.appendChild(itemLink);
      });
    }
  }

  if (detailConsultArticleBtn) {
    detailConsultArticleBtn.addEventListener("click", () => {
      const entry = activeDetailId ? DETAIL_ENTRIES[activeDetailId] : DETAIL_ENTRIES["article-onprem-ai"];
      openRfqModal({
        chip: entry?.consultChip,
        note: entry?.consultNote
      });
    });
  }

  if (detailArticleTitle) {
    const idParam = new URLSearchParams(window.location.search).get("id") || "article-onprem-ai";
    renderBlogDetailPage(idParam);
  }

  syncQuoteCartUI();
})();
