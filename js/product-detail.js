let sizeChon = '';

function doiAnh(element, imgPath) {
  document.getElementById('img-chinh').src = imgPath;

  document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
  if (element) element.classList.add('active');
}

function chonSize(element, size) {
  sizeChon = size;

  document.getElementById('canh-bao-size').style.display = 'none';
  document.getElementById('nhom-size').style.outline = 'none';

  document.querySelectorAll('.size-item').forEach(btn => {
    btn.style.backgroundColor = 'transparent';
    btn.style.color = '#ffffff';
  });

  element.style.backgroundColor = '#ff3366';
  element.style.color = '#ffffff';
}

function doiSoLuong(thayDoi) {
  const oNhap = document.getElementById('o-so-luong');
  let sl = parseInt(oNhap.value) + thayDoi;

  if (sl < 1) sl = 1;
  if (sl > 10) sl = 10;

  oNhap.value = sl;
  document.getElementById('btn-giam').disabled = (sl === 1);
  document.getElementById('btn-tang').disabled = (sl === 10);
}

function themVaoGio() {
  if (!sizeChon) {
    document.getElementById('canh-bao-size').style.display = 'block';
    document.getElementById('nhom-size').style.outline = '2px solid #ff3366';
    document.getElementById('nhom-size').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const soLuong = parseInt(document.getElementById('o-so-luong').value) || 1;
  const tenSP = document.querySelector('.detail-title')?.textContent.trim() || 'Sản phẩm';
  const giaSP = document.querySelector('.detail-price-current')?.textContent.trim() || '0đ';
  const anhSP = document.getElementById('img-chinh')?.src || '';

  const gio = getCart();
  const existing = gio.find(item => item.ten === tenSP && item.size === sizeChon);

  if (existing) {
    existing.soLuong += soLuong;
  } else {
    gio.push({ ten: tenSP, gia: giaSP, size: sizeChon, soLuong, anh: anhSP });
  }

  saveCart(gio);
  updateCartBadge();

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

function muaNgay() {
  if (!sizeChon) {
    document.getElementById('canh-bao-size').style.display = 'block';
    document.getElementById('nhom-size').style.outline = '2px solid #ff3366';
    document.getElementById('nhom-size').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const soLuong = parseInt(document.getElementById('o-so-luong').value) || 1;
  const tenSP = document.querySelector('.detail-title')?.textContent.trim() || 'Sản phẩm';
  const giaSP = document.querySelector('.detail-price-current')?.textContent.trim() || '0đ';
  const anhSP = document.getElementById('img-chinh')?.src || '';

  sessionStorage.setItem('soleking_mua_ngay', JSON.stringify([{ ten: tenSP, gia: giaSP, size: sizeChon, soLuong, anh: anhSP }]));
  sessionStorage.setItem('isBuyNow', 'true');
  location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn-giam').disabled = true;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id || typeof sanPhamData === 'undefined' || !sanPhamData[id]) return;

  const sp = sanPhamData[id];

  document.querySelector('.detail-title').textContent = sp.ten;
  document.querySelector('.detail-price-current').textContent = sp.gia;
  document.querySelector('.detail-desc').textContent = sp.moTa;
  document.getElementById('img-chinh').src = sp.anh;

  const nhomThumb = document.getElementById('nhom-thumbnail');
  nhomThumb.innerHTML = '';
  sp.dsAnh.forEach((anh, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
    thumb.onclick = function () { doiAnh(this, anh); };
    thumb.innerHTML = `<img src="${anh}" alt="Ảnh ${index + 1}">`;
    nhomThumb.appendChild(thumb);
  });

  const giaCu = document.querySelector('.detail-price-old');
  const giamGia = document.querySelector('.detail-discount');
  if (sp.giaCu && sp.giamGia) {
    if (giaCu) { giaCu.textContent = sp.giaCu; giaCu.style.display = 'inline'; }
    if (giamGia) { giamGia.textContent = sp.giamGia; giamGia.style.display = 'inline'; }
  }
});
