// Logic Slider
document.addEventListener('DOMContentLoaded', function() {
  const signUpButton = document.getElementById('signUpBtn');
  const signInButton = document.getElementById('signInBtn');
  const container = document.getElementById('auth-container');

  if(signUpButton && signInButton) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  // Tự động kiểm tra URL để mở form đăng ký
  if (window.location.search.includes('register=true')) {
    if(container) container.classList.add("right-panel-active");
  }
});

// Logic Đăng Nhập
function xuLyDangNhap(e) {
  e.preventDefault();
  localStorage.setItem('isLoggedIn', 'true');
  const email = document.getElementById('dn-email').value;
  localStorage.setItem('userName', email.split('@')[0]);
  alert('Đăng nhập thành công!');
  
  const redirectUrl = sessionStorage.getItem('redirectUrl');
  if (redirectUrl) {
    sessionStorage.removeItem('redirectUrl');
    window.location.href = redirectUrl;
  } else {
    window.location.href = 'index.html';
  }
}

// Logic Đăng Ký
function xuLyDangKy(e) {
  e.preventDefault();
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userName', document.getElementById('dk-ten').value);
  alert('Đăng ký thành công!');
  
  const redirectUrl = sessionStorage.getItem('redirectUrl');
  if (redirectUrl) {
    sessionStorage.removeItem('redirectUrl');
    window.location.href = redirectUrl;
  } else {
    window.location.href = 'index.html';
  }
}
