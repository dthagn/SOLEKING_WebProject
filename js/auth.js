// Kiểm tra trạng thái đăng nhập
function checkLogin() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

function getUserName() {
  return localStorage.getItem('userName') || 'Người dùng';
}

// Chuyển hướng nếu chưa đăng nhập
function requireLogin(redirectUrl) {
  if (!checkLogin()) {
    alert('Bạn cần đăng nhập để xem trang này!');
    sessionStorage.setItem('redirectUrl', redirectUrl);
    window.location.href = 'tai-khoan.html';
  } else {
    window.location.href = redirectUrl;
  }
}

// Xử lý đăng xuất
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  alert('Đăng xuất thành công!');
  
  // Nếu đang ở trang cần bảo mật, đẩy về trang chủ
  const path = window.location.pathname;
  if (path.includes('thanh-toan.html') || path.includes('don-hang.html')) {
    window.location.href = 'index.html';
  } else {
    window.location.reload();
  }
}

// Hiển thị giao diện người dùng trên header
function renderUserMenu() {
  const dropdown = document.getElementById('dropdown-tai-khoan');
  if (!dropdown) return;

  if (checkLogin()) {
    dropdown.innerHTML = `
      <a href="#" class="muc-dropdown">Xin chào, ${getUserName()}</a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="requireLogin('don-hang.html')">Đơn Hàng</a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="logout()" style="color: red;">Đăng Xuất</a>
    `;
  } else {
    dropdown.innerHTML = `
      <a href="tai-khoan.html" class="muc-dropdown">Đăng Nhập / Đăng Ký</a>
      <div class="ke-dropdown"></div>
      <a href="#" class="muc-dropdown" onclick="requireLogin('don-hang.html')">Đơn Hàng</a>
    `;
  }
}

// Chặn truy cập các trang yêu cầu đăng nhập
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  if (path.includes('thanh-toan.html') || path.includes('don-hang.html')) {
    if (!checkLogin()) {
      alert('Vui lòng đăng nhập!');
      sessionStorage.setItem('redirectUrl', path.split('/').pop());
      window.location.href = 'tai-khoan.html';
    }
  }
  renderUserMenu();
});

// Chuyển đổi giữa Đăng nhập và Đăng ký (Slide effect)
document.addEventListener('DOMContentLoaded', function() {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('auth-container');

  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  // Xử lý nộp form Đăng nhập
  const formDangNhap = document.getElementById('form-dang-nhap');
  if (formDangNhap) {
    formDangNhap.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;

      // Giả lập đăng nhập thành công
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', email.split('@')[0]); // Lấy phần trước @ làm tên
      
      alert('Đăng nhập thành công!');
      
      // Chuyển hướng về trang trước đó hoặc trang chủ
      const redirectUrl = sessionStorage.getItem('redirectUrl') || 'index.html';
      sessionStorage.removeItem('redirectUrl');
      window.location.href = redirectUrl;
    });
  }

  // Xử lý nộp form Đăng ký
  const formDangKy = document.getElementById('form-dang-ky');
  if (formDangKy) {
    formDangKy.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('reg-name').value;
      
      // Giả lập đăng ký thành công
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
      
      alert('Đăng ký tài khoản thành công!');
      window.location.href = 'index.html';
    });
  }
});
