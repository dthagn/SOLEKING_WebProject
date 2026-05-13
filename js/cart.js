// Lấy giỏ hàng từ localStorage
function getCart() {
  const cartData = localStorage.getItem('soleking_cart');
  if (cartData) {
    try {
      return JSON.parse(cartData);
    } catch (e) {
      return [];
    }
  }
  return [];
}

// Lưu giỏ hàng vào localStorage
function saveCart(cartArray) {
  localStorage.setItem('soleking_cart', JSON.stringify(cartArray));
}

// Xóa trạng thái "Mua ngay" (để giỏ hàng hoạt động bình thường)
function clearBuyNowState() {
  sessionStorage.removeItem('isBuyNow');
  sessionStorage.removeItem('soleking_mua_ngay');
}

// Cập nhật số lượng hiển thị trên icon giỏ hàng
function updateCartBadge() {
  const cart = getCart();
  let totalItems = 0;
  for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].soLuong;
  }
  
  const badge = document.getElementById('btn-gio-hang');
  if (badge) {
    const badgeEl = badge.querySelector('.thong-bao-nho');
    if (badgeEl) {
      badgeEl.textContent = totalItems;
    }
  }
}

// Chạy cập nhật badge khi tải trang
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
  
  // Khi người dùng bấm vào icon giỏ hàng trên menu, xóa phiên mua ngay
  const btnGioHang = document.getElementById('btn-gio-hang');
  if (btnGioHang) {
    btnGioHang.addEventListener('click', clearBuyNowState);
  }
});
