function xacNhanDonHang(e) {
  if (e) e.preventDefault();

  const hoTen = document.querySelector('input[placeholder="Nguyễn Văn A"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const phone = document.querySelector('input[type="tel"]').value.trim();
  const address = document.querySelector('input[placeholder="Số nhà, tên đường, phường/xã..."]').value.trim();

  if (!hoTen || !email || !phone || !address) {
    alert('Vui lòng nhập đầy đủ các thông tin bắt buộc (*)!');
    return;
  }

  const isBuyNow = sessionStorage.getItem('isBuyNow') === 'true';
  const gio = isBuyNow
    ? (JSON.parse(sessionStorage.getItem('soleking_mua_ngay')) || [])
    : getCart();

  if (gio.length === 0) {
    alert('Giỏ hàng của bạn đang trống! Hãy thêm sản phẩm trước khi đặt hàng.');
    return;
  }

  const dsDonHang = JSON.parse(localStorage.getItem('soleking_orders')) || [];
  dsDonHang.push({
    id: 'DH' + Math.floor(Math.random() * 100000),
    thoiGian: Date.now(),
    sanPham: gio,
    tongTien: document.getElementById('tong-cong-tt').textContent,
    khachHang: { hoTen, email, phone, address }
  });
  localStorage.setItem('soleking_orders', JSON.stringify(dsDonHang));

  if (isBuyNow) {
    sessionStorage.removeItem('soleking_mua_ngay');
    sessionStorage.removeItem('isBuyNow');
  } else {
    saveCart([]);
  }

  alert('🎉 Đặt hàng thành công!\nCảm ơn bạn đã mua sắm tại SOLEKING.\nChúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất!');
  location.href = 'orders.html';
}

function formatGia(so) {
  return so.toLocaleString('vi-VN') + 'đ';
}

function xoaSanPham(index) {
  const isBuyNow = sessionStorage.getItem('isBuyNow') === 'true';
  if (isBuyNow) {
    const gio = JSON.parse(sessionStorage.getItem('soleking_mua_ngay')) || [];
    gio.splice(index, 1);
    sessionStorage.setItem('soleking_mua_ngay', JSON.stringify(gio));
  } else {
    const gio = getCart();
    gio.splice(index, 1);
    saveCart(gio);
  }
  hienThiGio();
}

function hienThiGio() {
  const isBuyNow = sessionStorage.getItem('isBuyNow') === 'true';
  let gio = [];

  const container = document.getElementById('danh-sach-gio');
  const soSpText = document.getElementById('so-luong-tt');
  const tieuDe = document.querySelector('.tieu-de-trang-tt');

  if (isBuyNow) {
    try { gio = JSON.parse(sessionStorage.getItem('soleking_mua_ngay')) || []; } catch (e) {}
    if (tieuDe) tieuDe.textContent = 'Mua Ngay (Không lưu vào giỏ)';
  } else {
    gio = getCart();
    if (tieuDe) tieuDe.textContent = 'Hoàn tất đơn hàng';
  }

  if (soSpText) {
    soSpText.textContent = gio.reduce((t, sp) => t + sp.soLuong, 0) + ' sản phẩm';
  }

  if (gio.length === 0) {
    container.innerHTML = '<div class="gio-trong">'
      + '<p>Giỏ hàng của bạn đang trống</p>'
      + '<p style="margin-top:10px;"><a href="product.html" style="color:#ff3366; text-decoration:underline;">Mua sắm ngay →</a></p>'
      + '</div>';
    document.getElementById('tam-tinh-tt').textContent = '0đ';
    document.getElementById('tong-cong-tt').textContent = '0đ';
    return;
  }

  let html = '';
  let tongTien = 0;

  gio.forEach((sp, i) => {
    const giaNum = parseInt((sp.gia || '0').replace(/\./g, '').replace('đ', ''));
    tongTien += giaNum * sp.soLuong;

    html += '<div class="dong-sp-gio" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #333;">'
      + '<div style="display:flex; align-items:center;">'
      + '<img src="' + (sp.anh || 'assets/images/nike1.png') + '" alt="' + sp.ten + '" style="width:60px; height:60px; object-fit:cover; border-radius:4px; margin-right:15px;">'
      + '<div>'
      + '<div style="font-weight:bold; margin-bottom:5px; color:#fff;">' + sp.ten + '</div>'
      + '<div style="color:#888; font-size:13px;">Size: ' + (sp.size || '?') + ' &nbsp;|&nbsp; SL: ' + sp.soLuong + '</div>'
      + '</div></div>'
      + '<div style="text-align:right;">'
      + '<div style="font-weight:bold; color:#ff3366; margin-bottom:5px;">' + sp.gia + '</div>'
      + '<button onclick="xoaSanPham(' + i + ')" style="background:transparent; border:none; color:#888; cursor:pointer;">✕ Xóa</button>'
      + '</div></div>';
  });

  container.innerHTML = html;
  document.getElementById('tam-tinh-tt').textContent = formatGia(tongTien);
  document.getElementById('tong-cong-tt').textContent = formatGia(tongTien);
}

document.addEventListener('DOMContentLoaded', function () {
  hienThiGio();
  const btnXacNhan = document.querySelector('.nut-xac-nhan-tt');
  if (btnXacNhan) btnXacNhan.addEventListener('click', xacNhanDonHang);
});
