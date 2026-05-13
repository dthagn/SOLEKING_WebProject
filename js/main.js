/* ================================================
   SOLEKING — main.js (Dùng chung cho tất cả trang)
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ===== TÌM KIẾM OVERLAY =====
  var btnTimKiem = document.getElementById('btn-tim-kiem');
  if (btnTimKiem) {
    btnTimKiem.addEventListener('click', moTimKiem);
  }

  var overlayTK = document.getElementById('overlay-tim-kiem');
  if (overlayTK) {
    overlayTK.addEventListener('click', function (e) {
      if (e.target === overlayTK) dongTimKiem();
    });
  }

  var inputTK = document.getElementById('input-tim-kiem');
  if (inputTK) {
    inputTK.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && inputTK.value.trim() !== '') {
        window.location.href = 'san-pham.html';
      }
    });
  }

  // ===== XÓA TRẠNG THÁI MUA NGAY KHI VÀO GIỎ HÀNG =====
  var btnGioHang = document.getElementById('btn-gio-hang');
  if (btnGioHang) {
    btnGioHang.addEventListener('click', function() {
      sessionStorage.removeItem('isBuyNow');
      sessionStorage.removeItem('soleking_mua_ngay');
    });
  }

  // ===== RENDER DROPDOWN USER DYNAMICALLY =====
  renderUserDropdown();

  // Đóng dropdown khi click ra ngoài
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#wrapper-tai-khoan')) {
      dongDropdownUser();
    }
  });

  // Đóng overlay/dropdown bằng Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dongTimKiem();
      dongDropdownUser();
    }
  });

  // ===== KIỂM TRA QUYỀN TRUY CẬP TRANG THANH TOÁN VÀ ĐƠN HÀNG =====
  if (window.location.pathname.includes('thanh-toan.html') || window.location.pathname.includes('don-hang.html')) {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      alert('Vui lòng đăng nhập hoặc đăng ký để sử dụng chức năng này!');
      sessionStorage.setItem('redirectUrl', window.location.pathname.split('/').pop());
      window.location.href = 'tai-khoan.html';
    }
  }
});

// ===== CÁC HÀM TÌM KIẾM =====
function moTimKiem(e) {
  if (e) e.preventDefault();
  var overlay = document.getElementById('overlay-tim-kiem');
  if (!overlay) return;
  overlay.classList.add('mo');
  document.body.style.overflow = 'hidden';
  setTimeout(function () {
    var input = document.getElementById('input-tim-kiem');
    if (input) input.focus();
  }, 300);
}

function dongTimKiem() {
  var overlay = document.getElementById('overlay-tim-kiem');
  if (overlay) overlay.classList.remove('mo');
  document.body.style.overflow = '';
}

// ===== CÁC HÀM USER DROPDOWN =====
function toggleDropdownUser(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  var dd = document.getElementById('dropdown-tai-khoan');
  if (!dd) return;
  dd.classList.toggle('mo');
}

function dongDropdownUser() {
  var dd = document.getElementById('dropdown-tai-khoan');
  if (dd) dd.classList.remove('mo');
}

// Hàm render giao diện Dropdown dựa trên trạng thái đăng nhập
function renderUserDropdown() {
  const dropdown = document.getElementById('dropdown-tai-khoan');
  if (!dropdown) return;

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('userName') || 'Người dùng';

  if (isLoggedIn) {
    dropdown.innerHTML = `
      <a href="#" class="muc-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Xin chào, ${userName}
      </a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="yeuCauDangNhap(event, 'don-hang.html')">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Đơn Hàng
      </a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="xuLyDangXuat(event)" style="color:#ff3366;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Đăng Xuất
      </a>
    `;
  } else {
    dropdown.innerHTML = `
      <a href="tai-khoan.html" class="muc-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Đăng Nhập / Đăng Ký
      </a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="yeuCauDangNhap(event, 'don-hang.html')">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Đơn Hàng
      </a>
    `;
  }
}

// ===== XỬ LÝ QUYỀN TRUY CẬP (RÀNG BUỘC ĐĂNG NHẬP) =====
function yeuCauDangNhap(e, urlToRedirect) {
  if (e) e.preventDefault();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    alert('Vui lòng đăng nhập để sử dụng tính năng này!');
    // Lưu URL muốn đi tới để quay lại sau khi đăng nhập xong
    sessionStorage.setItem('redirectUrl', urlToRedirect);
    window.location.href = 'tai-khoan.html';
  } else {
    window.location.href = urlToRedirect;
  }
}

function xuLyDangXuat(e) {
  if (e) e.preventDefault();
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  alert('Đăng xuất thành công!');
  renderUserDropdown();
  
  // Nếu đang ở trang yêu cầu đăng nhập, đẩy về trang chủ
  if (window.location.pathname.includes('thanh-toan.html') || window.location.pathname.includes('don-hang.html')) {
    window.location.href = 'index.html';
  }
}
