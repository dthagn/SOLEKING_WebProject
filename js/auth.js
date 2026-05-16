function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

function getUserName() {
  return localStorage.getItem('userName') || 'Người dùng';
}

function requireLogin(redirectUrl) {
  if (!isLoggedIn()) {
    alert('Bạn cần đăng nhập để xem trang này!');
    sessionStorage.setItem('redirectUrl', redirectUrl);
    window.location.href = 'login.html';
  } else {
    window.location.href = redirectUrl;
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  alert('Đăng xuất thành công!');

  const path = window.location.pathname;
  if (path.includes('checkout.html') || path.includes('orders.html')) {
    window.location.href = 'index.html';
  } else {
    window.location.reload();
  }
}

function renderUserMenu() {
  const dropdown = document.getElementById('dropdown-tai-khoan');
  if (!dropdown) return;

  if (isLoggedIn()) {
    dropdown.innerHTML = `
      <a href="#" class="muc-dropdown">Xin chào, ${getUserName()}</a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="requireLogin('orders.html')">Đơn Hàng</a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="logout()" style="color: red;">Đăng Xuất</a>
    `;
  } else {
    dropdown.innerHTML = `
      <a href="login.html" class="muc-dropdown">Đăng Nhập / Đăng Ký</a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="requireLogin('orders.html')">Đơn Hàng</a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  if (path.includes('checkout.html') || path.includes('orders.html')) {
    if (!isLoggedIn()) {
      alert('Vui lòng đăng nhập!');
      sessionStorage.setItem('redirectUrl', path.split('/').pop());
      window.location.href = 'login.html';
    }
  }

  renderUserMenu();

  // Toggle slide đăng nhập / đăng ký (dùng ở login.html)
  const signUp = document.getElementById('signUp');
  const signIn = document.getElementById('signIn');
  const container = document.getElementById('auth-container');

  if (signUp && signIn && container) {
    signUp.addEventListener('click', () => container.classList.add('right-panel-active'));
    signIn.addEventListener('click', () => container.classList.remove('right-panel-active'));
  }

  if (window.location.search.includes('register=true') && container) {
    container.classList.add('right-panel-active');
  }

  // Form đăng nhập
  const formDangNhap = document.getElementById('form-dang-nhap');
  if (formDangNhap) {
    formDangNhap.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', email.split('@')[0]);
      alert('Đăng nhập thành công!');
      const redirectUrl = sessionStorage.getItem('redirectUrl') || 'index.html';
      sessionStorage.removeItem('redirectUrl');
      window.location.href = redirectUrl;
    });
  }

  // Form đăng ký
  const formDangKy = document.getElementById('form-dang-ky');
  if (formDangKy) {
    formDangKy.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('reg-name').value;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
      alert('Đăng ký thành công!');
      const redirectUrl = sessionStorage.getItem('redirectUrl') || 'index.html';
      sessionStorage.removeItem('redirectUrl');
      window.location.href = redirectUrl;
    });
  }
});
