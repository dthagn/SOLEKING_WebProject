// Script chính cho giao diện chung (tìm kiếm, dropdown)
document.addEventListener('DOMContentLoaded', function () {
  const btnTimKiem = document.getElementById('btn-tim-kiem');
  const overlayTK = document.getElementById('overlay-tim-kiem');
  const inputTK = document.getElementById('input-tim-kiem');

  // Mở popup tìm kiếm
  if (btnTimKiem) {
    btnTimKiem.addEventListener('click', function(e) {
      e.preventDefault();
      if (overlayTK) {
        overlayTK.classList.add('mo');
        document.body.style.overflow = 'hidden';
        setTimeout(() => { if (inputTK) inputTK.focus(); }, 300);
      }
    });
  }

  // Đóng popup tìm kiếm
  function dongTimKiem() {
    if (overlayTK) {
      overlayTK.classList.remove('mo');
      document.body.style.overflow = '';
    }
  }

  if (overlayTK) {
    overlayTK.addEventListener('click', function (e) {
      if (e.target === overlayTK) dongTimKiem();
    });
  }

  // Nhấn Enter để chuyển sang trang sản phẩm
  if (inputTK) {
    inputTK.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && inputTK.value.trim() !== '') {
        window.location.href = 'san-pham.html';
      }
    });
  }

  // Đóng mọi thứ khi ấn phím Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dongTimKiem();
      dongDropdownUser();
    }
  });

  // Đóng dropdown tài khoản khi click ra ngoài
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#wrapper-tai-khoan')) {
      dongDropdownUser();
    }
  });
});

// Đóng/Mở menu người dùng
function toggleDropdownUser(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const dd = document.getElementById('dropdown-tai-khoan');
  if (dd) {
    dd.classList.toggle('mo');
  }
}

function dongDropdownUser() {
  const dd = document.getElementById('dropdown-tai-khoan');
  if (dd) {
    dd.classList.remove('mo');
  }
}

// Đóng modal tìm kiếm qua nút x
function dongTimKiem() {
  const overlay = document.getElementById('overlay-tim-kiem');
  if (overlay) {
    overlay.classList.remove('mo');
    document.body.style.overflow = '';
  }
}
