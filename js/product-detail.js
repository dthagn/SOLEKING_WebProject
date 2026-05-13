// Các biến toàn cục
let sizeChon = '';

// Đổi ảnh chính khi bấm vào ảnh thu nhỏ
function doiAnh(element, imgPath) {
  // Thay đổi src của ảnh chính
  document.getElementById('img-chinh').src = imgPath;

  // Xóa class active ở tất cả các ảnh thu nhỏ
  const thumbnails = document.querySelectorAll('.anh-thu-nho');
  thumbnails.forEach(t => t.classList.remove('active'));

  // Thêm class active vào ảnh được click
  if (element) {
    element.classList.add('active');
  }
}

// Chọn size
function chonSize(element, size) {
  sizeChon = size;
  
  // Ẩn cảnh báo
  document.getElementById('canh-bao-size').style.display = 'none';
  document.getElementById('nhom-size').style.outline = 'none';

  // Cập nhật giao diện nút size
  const buttons = document.querySelectorAll('.kich-thuoc');
  buttons.forEach(btn => {
    btn.style.backgroundColor = 'transparent';
    btn.style.color = '#ffffff';
  });

  element.style.backgroundColor = '#ff3366';
  element.style.color = '#ffffff';
}

// Tăng giảm số lượng
function doiSoLuong(thayDoi) {
  const oNhap = document.getElementById('o-so-luong');
  let sl = parseInt(oNhap.value) + thayDoi;
  
  if (sl < 1) sl = 1;
  if (sl > 10) sl = 10;
  
  oNhap.value = sl;
  
  document.getElementById('btn-giam').disabled = (sl === 1);
  document.getElementById('btn-tang').disabled = (sl === 10);
}

// Thêm vào giỏ hàng
function themVaoGio() {
  if (!sizeChon) {
    document.getElementById('canh-bao-size').style.display = 'block';
    document.getElementById('nhom-size').style.outline = '2px solid #ff3366';
    document.getElementById('nhom-size').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const soLuong = parseInt(document.getElementById('o-so-luong').value) || 1;
  const tenSP = document.querySelector('.tieu-de-chi-tiet') ? document.querySelector('.tieu-de-chi-tiet').textContent.trim() : 'Sản phẩm';
  const giaSP = document.querySelector('.gia-hien-tai-chi-tiet') ? document.querySelector('.gia-hien-tai-chi-tiet').textContent.trim() : '0đ';
  const anhSP = document.getElementById('img-chinh') ? document.getElementById('img-chinh').src : '';

  const gio = getCart();
  
  // Kiểm tra sản phẩm đã có chưa
  let tonTai = false;
  for (let i = 0; i < gio.length; i++) {
    if (gio[i].ten === tenSP && gio[i].size === sizeChon) {
      gio[i].soLuong += soLuong;
      tonTai = true;
      break;
    }
  }

  if (!tonTai) {
    gio.push({
      ten: tenSP,
      gia: giaSP,
      size: sizeChon,
      soLuong: soLuong,
      anh: anhSP
    });
  }

  saveCart(gio);
  updateCartBadge();

  // Hiệu ứng nút
  const btn = document.getElementById('btn-them-gio');
  btn.textContent = '✓ Đã Thêm Vào Giỏ!';
  btn.style.backgroundColor = '#22c55e';
  btn.style.borderColor = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'Thêm Vào Giỏ Hàng';
    btn.style.backgroundColor = 'transparent';
    btn.style.borderColor = '#ffffff';
  }, 2000);
}

// Mua ngay
function muaNgay() {
  if (!sizeChon) {
    document.getElementById('canh-bao-size').style.display = 'block';
    document.getElementById('nhom-size').style.outline = '2px solid #ff3366';
    document.getElementById('nhom-size').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const soLuong = parseInt(document.getElementById('o-so-luong').value) || 1;
  const tenSP = document.querySelector('.tieu-de-chi-tiet') ? document.querySelector('.tieu-de-chi-tiet').textContent.trim() : 'Sản phẩm';
  const giaSP = document.querySelector('.gia-hien-tai-chi-tiet') ? document.querySelector('.gia-hien-tai-chi-tiet').textContent.trim() : '0đ';
  const anhSP = document.getElementById('img-chinh') ? document.getElementById('img-chinh').src : '';

  const spMuaNgay = [{
    ten: tenSP,
    gia: giaSP,
    size: sizeChon,
    soLuong: soLuong,
    anh: anhSP
  }];

  sessionStorage.setItem('soleking_mua_ngay', JSON.stringify(spMuaNgay));
  sessionStorage.setItem('isBuyNow', 'true');

  location.href = 'thanh-toan.html';
}

// Load dữ liệu khi vào trang
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-giam').disabled = true;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id && typeof sanPhamData !== 'undefined' && sanPhamData[id]) {
    const sp = sanPhamData[id];

    document.querySelector(".tieu-de-chi-tiet").textContent = sp.ten;
    document.querySelector(".gia-hien-tai-chi-tiet").textContent = sp.gia;
    document.querySelector(".mo-ta-chi-tiet").textContent = sp.moTa;
    document.getElementById("img-chinh").src = sp.anh;

    // Hiển thị danh sách ảnh nhỏ
    const nhomThumb = document.getElementById("nhom-thumbnail");
    nhomThumb.innerHTML = "";

    sp.dsAnh.forEach((anh, index) => {
      const thumb = document.createElement("div");
      thumb.className = "anh-thu-nho";
      if (index === 0) thumb.classList.add("active");
      
      thumb.onclick = function() {
        doiAnh(this, anh);
      };

      thumb.innerHTML = `<img src="${anh}" alt="Ảnh ${index + 1}">`;
      nhomThumb.appendChild(thumb);
    });

    // Cập nhật giá cũ (nếu có)
    const giaCu = document.querySelector(".gia-cu-chi-tiet");
    const giamGia = document.querySelector(".giam-gia-chi-tiet");

    if (sp.giaCu && sp.giamGia) {
      if (giaCu) {
        giaCu.textContent = sp.giaCu;
        giaCu.style.display = "inline";
      }
      if (giamGia) {
        giamGia.textContent = sp.giamGia;
        giamGia.style.display = "inline";
      }
    }
  }
});
