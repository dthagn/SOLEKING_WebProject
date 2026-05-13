// Dữ liệu sản phẩm dùng chung
const sanPhamData = {
  nike1: {
    ten: "Nike Air Force 1 '07",
    gia: "1.599.000đ",
    giaCu: "3.199.000đ",
    giamGia: "-50%",
    moTa: "Sự tỏa sáng tồn tại trong Nike Air Force 1 '07.",
    anh: "assets/images/nike1.png",
    dsAnh: [
      "assets/images/nike1.png",
      "assets/images/nike2.jpg",
      "assets/images/nike3.jpg",
      "assets/images/nike4.jpg"
    ],
    danhGia: 245,
    soSao: 4
  },
  nike2: {
    ten: "Nike Air Max 2024",
    gia: "3.499.000đ",
    moTa: "Trải nghiệm đệm khí Air tối đa cho mỗi bước chạy.",
    anh: "assets/images/NIKE+AIR+MAX+90.png",
    dsAnh: [
      "assets/images/NIKE+AIR+MAX+90.png",
      "assets/images/NIKE+AIR+MAX+902.png",
      "assets/images/NIKE+AIR+MAX+903.jpg",
      "assets/images/NIKE+AIR+MAX+904.jpg"
    ],
    danhGia: 180,
    soSao: 5
  },
  nike3: {
    ten: "Nike ZoomX Invincible",
    gia: "4.299.000đ",
    moTa: "Giày chạy bộ chuyên nghiệp với công nghệ ZoomX.",
    anh: "assets/images/NIKE+VOMERO+PLUS.png",
    dsAnh: [
      "assets/images/NIKE+VOMERO+PLUS.png",
      "assets/images/zoomx2.jpg",
      "assets/images/zoomx3.jpg",
      "assets/images/zoomx4.jpg"
    ],
    danhGia: 320,
    soSao: 5
  },
  adidas1: {
    ten: "Adidas Ultraboost 22",
    gia: "2.299.000đ",
    moTa: "Sự hoàn hảo cho đôi chân, ôm sát như tất cùng công nghệ đệm Boost trứ danh.",
    anh: "assets/images/Giay_Pureboost_22.png",
    dsAnh: [
      "assets/images/Giay_Pureboost_22.png",
      "assets/images/Giay_Pureboost_22.png",
      "assets/images/Giay_Pureboost_22.png",
      "assets/images/Giay_Pureboost_22.png"
    ],
    danhGia: 150,
    soSao: 4
  },
  adidas2: {
    ten: "Adidas NMD R1 V2",
    gia: "2.599.000đ",
    moTa: "Phong cách đường phố táo bạo với các điểm nhấn đặc trưng không thể nhầm lẫn.",
    anh: "assets/images/NMD1.jpg",
    dsAnh: [
      "assets/images/NMD1.jpg",
      "assets/images/NMD1.jpg",
      "assets/images/NMD1.jpg",
      "assets/images/NMD1.jpg"
    ],
    danhGia: 210,
    soSao: 5
  },
  adidas3: {
    ten: "Adidas Supernova Rise",
    gia: "2.799.000đ",
    moTa: "Thiết kế nhẹ, thoáng khí và êm ái cho chạy bộ hằng ngày, hỗ trợ tốt cho người yêu thích vận động.",
    anh: "assets/images/adidassupernovarise2.jpg",
    dsAnh: [
      "assets/images/adidassupernovarise2.jpg",
      "assets/images/adidassupernovarise2.jpg",
      "assets/images/adidassupernovarise2.jpg",
      "assets/images/adidassupernovarise2.jpg"
    ],
    danhGia: 85,
    soSao: 4
  },
  puma1: {
    ten: "Puma MB.02 Phenom",
    gia: "3.199.000đ",
    moTa: "Phủ sóng sàn đấu với bản phối màu nổi bật từ chữ ký của LaMelo Ball.",
    anh: "assets/images/Puma MB.02 Phenom.jpg",
    dsAnh: [
      "assets/images/Puma MB.02 Phenom.jpg",
      "assets/images/Puma MB.02 Phenom.jpg",
      "assets/images/Puma MB.02 Phenom.jpg",
      "assets/images/Puma MB.02 Phenom.jpg"
    ],
    danhGia: 92,
    soSao: 5
  },
  puma2: {
    ten: "Puma Clyde All-Pro",
    gia: "2.899.000đ",
    moTa: "Thiết kế nhẹ, bám sân tốt, hỗ trợ di chuyển linh hoạt cho các trận đấu cường độ cao.",
    anh: "assets/images/Clyde_all_pro.jpg",
    dsAnh: [
      "assets/images/Clyde_all_pro.jpg",
      "assets/images/Clyde_all_pro.jpg",
      "assets/images/Clyde_all_pro.jpg",
      "assets/images/Clyde_all_pro.jpg"
    ],
    danhGia: 110,
    soSao: 4
  },
  puma3: {
    ten: "Puma RS-X Efekt",
    gia: "2.699.000đ",
    moTa: "Phong cách thể thao đường phố với form hầm hố, đệm êm và phối màu nổi bật.",
    anh: "assets/images/RS_X_efekt.jpg",
    dsAnh: [
      "assets/images/RS_X_efekt.jpg",
      "assets/images/RS_X_efekt.jpg",
      "assets/images/RS_X_efekt.jpg",
      "assets/images/RS_X_efekt.jpg"
    ],
    danhGia: 145,
    soSao: 4
  },
  ao1: {
    ten: "Áo Thể Thao",
    gia: "299.000đ",
    moTa: "Bộ sưu tập áo thể thao hiện đại, thoáng mát, phù hợp mọi hoạt động.",
    anh: "assets/images/aott.jpg",
    dsAnh: [
      "assets/images/aott.jpg",
      "assets/images/aott.jpg",
      "assets/images/aott.jpg",
      "assets/images/aott.jpg"
    ],
    danhGia: 40,
    soSao: 4
  },
  quan1: {
    ten: "Quần Thể Thao",
    gia: "249.000đ",
    moTa: "Thoải mái vận động mọi ngày, chất liệu co giãn 4 chiều.",
    anh: "assets/images/quantt.jpg",
    dsAnh: [
      "assets/images/quantt.jpg",
      "assets/images/quantt.jpg",
      "assets/images/quantt.jpg",
      "assets/images/quantt.jpg"
    ],
    danhGia: 65,
    soSao: 5
  },
  mu1: {
    ten: "Mũ & Nón",
    gia: "199.000đ",
    moTa: "Style đường phố đỉnh cao với các thiết kế snapback và dad hat.",
    anh: "assets/images/mu.jpg",
    dsAnh: [
      "assets/images/mu.jpg",
      "assets/images/mu.jpg",
      "assets/images/mu.jpg",
      "assets/images/mu.jpg"
    ],
    danhGia: 30,
    soSao: 4
  },
  tui1: {
    ten: "Túi & Ba Lô",
    gia: "499.000đ",
    moTa: "Linh động và thời trang, dung tích lớn phù hợp đi học và đi làm.",
    anh: "assets/images/tui.jpg",
    dsAnh: [
      "assets/images/tui.jpg",
      "assets/images/tui.jpg",
      "assets/images/tui.jpg",
      "assets/images/tui.jpg"
    ],
    danhGia: 25,
    soSao: 5
  },
  tat1: {
    ten: "Vớ Thể Thao",
    gia: "89.000đ",
    moTa: "Chất liệu cao cấp, kháng khuẩn, khử mùi, bảo vệ gót chân tối ưu.",
    anh: "assets/images/tat.avif",
    dsAnh: [
      "assets/images/tat.avif",
      "assets/images/tat.avif",
      "assets/images/tat.avif",
      "assets/images/tat.avif"
    ],
    danhGia: 15,
    soSao: 4
  },
  phukien1: {
    ten: "Phụ Kiện Giày",
    gia: "59.000đ",
    moTa: "Dây giày, lót giày và phụ kiện cao cấp.",
    anh: "assets/images/lot.jpg",
    dsAnh: [
      "assets/images/lot.jpg",
      "assets/images/lot.jpg",
      "assets/images/lot.jpg",
      "assets/images/lot.jpg"
    ],
    danhGia: 5,
    soSao: 4
  }
};
