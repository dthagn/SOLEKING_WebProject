const fs = require('fs');
const path = require('path');

const classDict = {
  // HEADER
  'phan-dau': 'header',
  'phan-dau-chinh': 'header-main',
  'noi-dung-phan-dau': 'header-content',
  'thanh-dieu-huong': 'navbar',
  'lien-ket-dieu-huong': 'nav-link',
  'hanh-dong': 'header-actions',
  'nut-hanh-dong': 'btn-action',
  'thong-bao-nho': 'badge',
  
  // HERO VIDEO
  'video-nen': 'video-bg',
  'video-lop-phu': 'video-overlay',
  'video-noi-dung': 'video-content',
  'video-nhom-nut': 'video-btn-group',
  'video-cta-phu': 'video-btn-secondary',
  'video-cta': 'video-btn',

  // MARQUEE
  'bang-thuong-hieu': 'brand-marquee',
  'bang-chay': 'marquee-track',
  'muc-bang': 'marquee-item',
  'dau-phan-cach': 'marquee-separator',

  // CATEGORIES
  'danh-muc': 'categories',
  'luoi-danh-muc': 'category-grid',
  'the-danh-muc': 'category-card',
  'khung-anh-danh-muc': 'category-img-wrapper',
  'anh-danh-muc': 'category-img',
  'lop-phu-danh-muc': 'category-overlay',
  'tieu-de-the-danh-muc': 'category-title',
  'mo-ta-anh-bia': 'category-desc',
  'lien-ket-danh-muc': 'category-link',

  // BANNER
  'banner-phan-cach': 'separator-banner',
  'noi-dung-banner-pc': 'banner-content',
  'sub-banner': 'banner-sub',
  'tieu-de-banner-pc': 'banner-title',
  'vach-ke-banner': 'banner-line',

  // FEATURED PRODUCTS
  'phan-san-pham-noi-bat': 'featured-products',
  'noi-dung-phan-dau-sp': 'section-header',
  'tieu-de-khoi': 'section-title',
  'luoi-san-pham-grid': 'product-grid',
  'the-san-pham-fashion': 'product-card',
  'hinh-san-pham': 'product-img-wrapper',
  'thong-tin-san-pham': 'product-info',
  'ten-sp': 'product-name',
  'gia-sp': 'product-price',
  'nut-mua-sp': 'btn-buy',
  'phan-xem-them': 'view-more',
  'nut-xem-them': 'btn-view-more',

  // FOOTER
  'nut-len-dau': 'btn-scroll-top',
  'phan-cuoi-duoi': 'footer-bottom',
  'phan-cuoi': 'footer',
  'noi-dung-phan-cuoi': 'footer-content',
  'cot-phan-cuoi': 'footer-col',
  'tieu-de-phan-cuoi': 'footer-title',
  'danh-sach-phan-cuoi': 'footer-links',

  // SEARCH
  'overlay-tim-kiem': 'search-overlay',
  'hop-tim-kiem': 'search-box',
  'dong-overlay-tk': 'btn-close-search',
  'o-nhap-tim-kiem': 'search-input',
  'btn-thuc-hien-tk': 'btn-submit-search',
  'khung-goi-y': 'search-suggestions',

  // PRODUCT PAGE
  'danh-sach-duong-dan': 'breadcrumb-list',
  'muc-duong-dan': 'breadcrumb-item',
  'lien-ket-duong-dan': 'breadcrumb-link',
  'duong-dan-hien-tai': 'breadcrumb-current',
  'duong-dan': 'breadcrumb',
  'khung-chua-danh-muc': 'category-filter-wrapper',
  'btn-danh-muc': 'btn-category',
  'hop-bo-loc': 'filter-box',
  'o-chon-loc': 'filter-select',
  'vung-san-pham': 'products-area',

  // PRODUCT DETAIL
  'chi-tiet-san-pham': 'product-detail',
  'bo-suu-tap-anh': 'product-gallery',
  'anh-chinh': 'main-image-wrapper',
  'anh-thu-nho-nhom': 'thumbnail-group',
  'anh-thu-nho': 'thumbnail',
  'danh-muc-chi-tiet': 'detail-category',
  'tieu-de-chi-tiet': 'detail-title',
  'danh-gia-chi-tiet': 'detail-rating',
  'sao-chi-tiet': 'detail-stars',
  'lien-ket-danh-gia': 'detail-review-link',
  'gia-chi-tiet': 'detail-price-wrapper',
  'gia-hien-tai-chi-tiet': 'detail-price-current',
  'gia-cu-chi-tiet': 'detail-price-old',
  'giam-gia-chi-tiet': 'detail-discount',
  'mo-ta-chi-tiet': 'detail-desc',
  'tuy-chon-san-pham': 'product-options',
  'nhom-tuy-chon': 'option-group',
  'nhan-tuy-chon': 'option-label',
  'tuy-chon-kich-thuoc': 'size-options',
  'kich-thuoc': 'size-item',
  'chon-so-luong': 'quantity-selector',
  'nut-chon-so-luong': 'btn-quantity',
  'o-nhap-so-luong': 'quantity-input',
  'hanh-dong-chi-tiet': 'detail-actions',
  'hanh-dong-chinh': 'btn-primary',
  'hanh-dong-phu': 'btn-secondary',
  'san-pham-lien-quan': 'related-products',
  'tieu-de-san-pham-lq': 'related-title',
  'luoi-san-pham-nhom': 'related-grid',
  'the-sp-premium': 'premium-card',
  'khung-anh-sp': 'premium-img-wrapper',
  'lop-phu-hanh-dong': 'premium-overlay',
  'nut-overlay': 'btn-overlay',
  'thong-tin-sp-premium': 'premium-info',
  'ten-sp-premium': 'premium-name',
  'mo-ta-sp-ngan': 'premium-desc',
  'gia-sp-premium': 'premium-price',

  // CHECKOUT & PAYMENT
  'trang-thanh-toan': 'checkout-page',
  'tieu-de-trang-tt': 'checkout-subtitle',
  'tieu-de-chinh-tt': 'checkout-title',
  'khung-form-tt': 'checkout-form-wrapper',
  'tieu-de-phan-form': 'form-section-title',
  'nhom-form-tt': 'form-group',
  'nhan-form-tt': 'form-label',
  'o-form-tt': 'form-input',
  'hang-form-tt': 'form-row',
  'phuong-thuc-tt': 'payment-methods',
  'tuy-chon-tt': 'payment-option',
  'nut-xac-nhan-tt': 'btn-submit-order',
  'khung-gio-hang-tt': 'checkout-cart-wrapper',
  'tieu-de-gio-tt': 'checkout-cart-title',
  'so-sp-gio': 'cart-item-count',
  'danh-sach-gio': 'cart-list',
  'gio-trong': 'cart-empty',
  'tong-ket-gio': 'cart-summary',
  'dong-tong-ket': 'summary-row',
  'tong-cuoi': 'summary-total',
  'mien-phi-tag': 'tag-free',
  'dong-sp-gio': 'cart-item',
  'anh-sp-gio': 'cart-item-img',
  'thong-tin-sp-gio': 'cart-item-info',
  'ten-sp-gio': 'cart-item-name',
  'meta-sp-gio': 'cart-item-meta',
  'gia-sp-gio': 'cart-item-price',
  'nut-xoa-gio': 'btn-remove-item',

  // AUTH (LOGIN/REGISTER)
  'auth-page': 'auth-page',
  'auth-container': 'auth-container',
  'form-container': 'form-container',
  'auth-form': 'auth-form',

  // ABOUT & CONTACT
  'bia-gioi-thieu': 'about-cover',
  'tieu-de-gioi-thieu': 'about-title',
  'mo-ta-gioi-thieu': 'about-desc',
  'khoi-cau-chuyen': 'story-block',
  'noi-dung-cau-chuyen': 'story-content',
  'so-thu-tu': 'story-number',
  'tieu-de-khoi-ct': 'story-title',
  'doan-van-ct': 'story-text',
  'anh-cau-chuyen': 'story-image',
  'khoi-so-lieu': 'stats-block',
  'muc-so-lieu': 'stat-item',
  'con-so': 'stat-number',
  'nhan-so': 'stat-label',
  'bia-lien-he': 'contact-cover',
  'tieu-de-lien-he': 'contact-title',
  'mo-ta-lien-he': 'contact-desc',
  'khu-vuc-lien-he': 'contact-area',
  'thong-tin-lien-he': 'contact-info',
  'the-thong-tin': 'info-card',
  'tieu-de-the-tt': 'info-title',
  'chi-tiet-the-tt': 'info-detail',
  'khung-bieu-mau-lh': 'contact-form-wrapper',
  'bieu-mau-lh': 'contact-form',
  'hang-nhap-lieu': 'input-row',
  'nhom-nhap-lieu': 'input-group',
  'nhan-nhap-lieu': 'input-label',
  'o-nhap-lieu': 'input-field',
  'nut-gui-lh': 'btn-submit-contact'
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.vscode' && file !== 'assets') {
        processDirectory(fullPath);
      }
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      if (file === 'refactor.js') continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Sort keys by length descending to prevent partial replacements (e.g. replacing 'phan-dau' inside 'phan-dau-chinh')
      const sortedKeys = Object.keys(classDict).sort((a, b) => b.length - a.length);

      for (const oldClass of sortedKeys) {
        const newClass = classDict[oldClass];
        // Match oldClass bounded by quotes, spaces, dots (for css), or tags.
        // We use a regex that matches the class name as a distinct word.
        const regex = new RegExp('(?<![a-zA-Z0-9_-])' + oldClass + '(?![a-zA-Z0-9_-])', 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newClass);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

console.log("Bắt đầu refactor đổi tên class...");
processDirectory(__dirname);
console.log("Hoàn tất đổi tên class!");
