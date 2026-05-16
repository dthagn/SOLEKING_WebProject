document.addEventListener('DOMContentLoaded', function () {
  const btnTimKiem = document.getElementById('btn-tim-kiem');
  const overlayTK = document.getElementById('search-overlay');
  const inputTK = document.getElementById('input-tim-kiem');

  if (btnTimKiem) {
    btnTimKiem.addEventListener('click', function (e) {
      e.preventDefault();
      if (!overlayTK) return;
      overlayTK.classList.add('mo');
      document.body.style.overflow = 'hidden';
      setTimeout(() => { if (inputTK) inputTK.focus(); }, 300);
    });
  }

  if (overlayTK) {
    overlayTK.addEventListener('click', function (e) {
      if (e.target === overlayTK) dongTimKiem();
    });
  }

  if (inputTK) {
    inputTK.addEventListener('input', hienGoiY);
    inputTK.addEventListener('keyup', hienGoiY);

    const btnThucHien = document.getElementById('btn-submit-search');
    if (btnThucHien) {
      btnThucHien.addEventListener('click', function () {
        if (inputTK.value.trim()) {
          window.location.href = 'product.html?search=' + encodeURIComponent(inputTK.value.trim());
        }
      });
    }

    inputTK.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && inputTK.value.trim()) {
        window.location.href = 'product.html?search=' + encodeURIComponent(inputTK.value.trim());
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dongTimKiem();
      dongDropdownUser();
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#wrapper-tai-khoan')) {
      dongDropdownUser();
    }
  });
});

function hienGoiY() {
  const inputTK = document.getElementById('input-tim-kiem');
  const goiYBox = document.getElementById('goi-y-tim-kiem');
  if (!inputTK || !goiYBox) return;

  const keyword = inputTK.value.toLowerCase().trim();

  if (!keyword) {
    goiYBox.innerHTML = '';
    goiYBox.style.display = 'none';
    return;
  }

  if (typeof sanPhamData === 'undefined') return;

  const ketQua = Object.keys(sanPhamData).filter(key =>
    sanPhamData[key].ten.toLowerCase().includes(keyword)
  );

  if (ketQua.length === 0) {
    goiYBox.innerHTML = '<div style="padding:20px; color:#888; text-align:center;">Không tìm thấy sản phẩm phù hợp...</div>';
  } else {
    goiYBox.innerHTML = ketQua.slice(0, 6).map(key => {
      const sp = sanPhamData[key];
      return `
        <div class="muc-goi-y" onclick="window.location.href='product-detail.html?id=${key}'">
          <img src="${sp.anh}" alt="${sp.ten}">
          <div class="thong-tin-goi-y">
            <div class="ten-goi-y">${sp.ten}</div>
            <div class="gia-goi-y">${sp.gia}</div>
          </div>
          <div style="color:#555; font-size:12px;">→</div>
        </div>
      `;
    }).join('');
  }
  goiYBox.style.display = 'block';
}

function dongTimKiem() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.remove('mo');
  document.body.style.overflow = '';
}

function toggleDropdownUser(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  const dd = document.getElementById('dropdown-tai-khoan');
  if (dd) dd.classList.toggle('mo');
}

function dongDropdownUser() {
  const dd = document.getElementById('dropdown-tai-khoan');
  if (dd) dd.classList.remove('mo');
}
