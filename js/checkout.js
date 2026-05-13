// ============================================================
// LƯU ĐƠN HÀNG VÀO LỊCH SỬ MUA HÀNG
// ============================================================

function xacNhanDonHang(e) {
  e.preventDefault();
  const isBuyNow = sessionStorage.getItem('isBuyNow') === 'true';
  const gio = isBuyNow ? (JSON.parse(sessionStorage.getItem('soleking_mua_ngay')) || []) : getCart();
  
  if (gio.length === 0) {
    alert('Giỏ hàng của bạn đang trống! Hãy thêm sản phẩm trước khi đặt hàng.');
    return;
  }
  
  // Lưu lịch sử đơn hàng
  const dsDonHang = JSON.parse(localStorage.getItem('soleking_orders')) || [];
  dsDonHang.push({
    id: 'DH' + Math.floor(Math.random() * 100000),
    thoiGian: Date.now(), 
    sanPham: gio,
    tongTien: document.getElementById('tong-cong').textContent
  });
  localStorage.setItem('soleking_orders', JSON.stringify(dsDonHang));

  // Xóa giỏ sau khi đặt hàng thành công
  if (isBuyNow) {
    sessionStorage.removeItem('soleking_mua_ngay');
    sessionStorage.removeItem('isBuyNow');
  } else {
    saveCart([]);
  }
  
  alert('🎉 Đặt hàng thành công!\nCảm ơn bạn đã mua sắm tại SOLEKING.\nChúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất!');
  
  // Không chuyển hướng trực tiếp đến trang đơn hàng, chuyển về trang chủ
  location.href = 'index.html';
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
  const soSpText = document.getElementById('so-sp-text');
  const badge = document.getElementById('badge-gio-hang');
  const tieuDeForm = document.querySelector('.tieu-de-trang-tt');

  if (isBuyNow) {
    try { gio = JSON.parse(sessionStorage.getItem('soleking_mua_ngay')) || []; } catch(e) {}
    if (tieuDeForm) tieuDeForm.textContent = 'Mua Ngay (Không lưu vào giỏ)';
  } else {
    gio = getCart();
    if (tieuDeForm) tieuDeForm.textContent = 'Hoàn tất mua hàng';
  }

  const tongSp = gio.reduce((t, sp) => t + sp.soLuong, 0);
  soSpText.textContent = tongSp + ' sản phẩm';
  if (badge && !isBuyNow) badge.textContent = tongSp;

  if (gio.length === 0) {
    container.innerHTML = '<div class="gio-trong">'
      + '<p>Giỏ hàng của bạn đang trống</p>'
      + '<p style="margin-top:10px;"><a href="san-pham.html" style="color:#ff3366; text-decoration:underline;">Mua sắm ngay →</a></p>'
      + '</div>';
    document.getElementById('tam-tinh').textContent = '0đ';
    document.getElementById('tong-cong').textContent = '0đ';
    document.getElementById('phi-ship').textContent = 'Miễn phí';
    return;
  }

  let html = '';
  let tongTien = 0;

  gio.forEach((sp, i) => {
    const giaNum = parseInt((sp.gia || '0').replace(/\./g, '').replace('đ', ''));
    tongTien += giaNum * sp.soLuong;
    
    html += '<div class="dong-sp-gio" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #333;">'
      + '<div style="display:flex; align-items:center;">'
      + '<img class="anh-sp-gio" src="' + (sp.anh || 'assets/images/nike1.png') + '" alt="' + sp.ten + '" style="width:60px; height:60px; object-fit:cover; border-radius:4px; margin-right:15px;">'
      + '<div>'
      + '<div class="ten-sp-gio" style="font-weight:bold; margin-bottom:5px;">' + sp.ten + '</div>'
      + '<div class="meta-sp-gio" style="color:#888; font-size:13px;">Size: ' + (sp.size || '?') + ' &nbsp;|&nbsp; SL: ' + sp.soLuong + '</div>'
      + '</div>'
      + '</div>'
      + '<div style="text-align:right;">'
      + '<div class="gia-sp-gio" style="font-weight:bold; color:#ff3366; margin-bottom:5px;">' + sp.gia + '</div>'
      + '<button class="nut-xoa-gio" onclick="xoaSanPham(' + i + ')" style="background:transparent; border:none; color:#888; cursor:pointer;">✕ Xóa</button>'
      + '</div>'
      + '</div>';
  });

  container.innerHTML = html;
  document.getElementById('tam-tinh').textContent = formatGia(tongTien);
  document.getElementById('tong-cong').textContent = formatGia(tongTien);
  document.getElementById('phi-ship').textContent = 'Miễn phí';
}

document.addEventListener('DOMContentLoaded', hienThiGio);
