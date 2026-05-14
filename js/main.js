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

  // Xử lý tìm kiếm gợi ý (Live Search)
  if (inputTK) {
    inputTK.addEventListener('input', thucHienGoiY);
    inputTK.addEventListener('keyup', thucHienGoiY);

    function thucHienGoiY() {
      const keyword = inputTK.value.toLowerCase().trim();
      const goiYContainer = document.getElementById('goi-y-tim-kiem');
      
      if (!goiYContainer) return;

      if (keyword.length < 1) {
        goiYContainer.innerHTML = '';
        goiYContainer.style.display = 'none';
        return;
      }

      // Kiểm tra dữ liệu
      if (typeof sanPhamData === 'undefined') {
        console.error("Dữ liệu sản phẩm (sanPhamData) chưa được tải!");
        return;
      }

      const ketQua = Object.keys(sanPhamData).filter(key => {
        const sp = sanPhamData[key];
        return sp.ten.toLowerCase().includes(keyword);
      });

      if (ketQua.length === 0) {
        goiYContainer.innerHTML = '<div style="padding:20px; color:#888; text-align:center;">Không tìm thấy sản phẩm phù hợp...</div>';
      } else {
        let html = '';
        ketQua.slice(0, 6).forEach(key => {
          const sp = sanPhamData[key];
          html += `
            <div class="muc-goi-y" onclick="window.location.href='chi-tiet.html?id=${key}'">
              <img src="${sp.anh}" alt="${sp.ten}">
              <div class="thong-tin-goi-y">
                <div class="ten-goi-y">${sp.ten}</div>
                <div class="gia-goi-y">${sp.gia}</div>
              </div>
              <div style="color:#555; font-size:12px;">→</div>
            </div>
          `;
        });
        goiYContainer.innerHTML = html;
      }
      goiYContainer.style.display = 'block';
    }

    // Nút tìm kiếm thủ công
    const btnThucHien = document.getElementById('btn-thuc-hien-tk');
    if (btnThucHien) {
      btnThucHien.addEventListener('click', function() {
        if (inputTK.value.trim() !== '') {
          window.location.href = 'san-pham.html?search=' + encodeURIComponent(inputTK.value.trim());
        }
      });
    }

    inputTK.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && inputTK.value.trim() !== '') {
        window.location.href = 'san-pham.html?search=' + encodeURIComponent(inputTK.value.trim());
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
