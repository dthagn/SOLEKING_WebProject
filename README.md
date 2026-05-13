# 👟 SOLEKING - Web Bán Giày Thể Thao

## 📋 Cấu Trúc Dự Án

```
SOLEKING_WebProject/
├── assets/
│   ├── images/              # Ảnh sản phẩm, banner, logo
│                # Font chữ (nếu cần)
├── css/
│   ├── base.css             # Reset, biến, typography
│   ├── layout.css           # Header, Footer, Navbar
│   ├── home.css             # Trang chủ
│   ├── product.css          # Danh sách & chi tiết sản phẩm
│   ├── form.css             # Form, Cart
│   └── responsive.css       # Media queries
├── index.html               # Trang chủ
├── san-pham.html            # Danh sách sản phẩm
├── chi-tiet.html            # Chi tiết sản phẩm
└── README.md                # Tài liệu dự án
```

---

## 👥 Chia Công Việc Cho 3 Thành Viên

### **Thành Viên 1: Layout & Infrastructure**
**Trách nhiệm chính:** Header, Footer, Navbar, Breadcrumb

**File CSS cần maintain:**
- `css/layout.css` - Quản lý tất cả các component chung
- Đảm bảo header/footer/navbar nhất quán trên tất cả các trang

**HTML Files:**
- Tạo header/footer trong tất cả 3 trang HTML
- Đảm bảo navigation hoạt động đúng

**Checklist:**
- [ ] Header sticky với dropdown navigation
- [ ] Footer 4 column + subscribe form
- [ ] Breadcrumb navigation
- [ ] Active link highlighting
- [ ] Responsive menu (mobile hamburger)
- [ ] SEO semantic HTML

---

### **Thành Viên 2: Homepage & Product Listing**
**Trách nhiệm chính:** Trang chủ, danh sách sản phẩm

**File CSS cần maintain:**
- `css/home.css` - Hero, Categories, Flash Sale, Newsletter
- `css/product.css` - Product Cards, Grid, Filter Sidebar

**HTML Files:**
- `index.html` - Trang chủ hoàn chỉnh
- `san-pham.html` - Danh sách sản phẩm + filter

**Checklist:**
- [ ] Hero banner với CTA buttons
- [ ] Product grid (4 cột desktop, 2 cột tablet, 1 cột mobile)
- [ ] Product cards với hover effects
- [ ] Category cards dengan overlay
- [ ] Flash sale section
- [ ] Filter sidebar (Category, Brand, Price, Rating, Color)
- [ ] Sort dropdown
- [ ] Pagination
- [ ] Product rating & reviews count
- [ ] Responsive grid layouts
---SANG
---

### **Thành Viên 3: Product Detail & Forms**
**Trách nhiệm chính:** Trang chi tiết sản phẩm, giỏ hàng, form

**File CSS cần maintain:**
- `css/form.css` - Forms, Cart, Checkout, Alerts
- `css/responsive.css` - Mobile breakpoints & media queries

**HTML Files:**
- `chi-tiet.html` - Trang chi tiết sản phẩm đầy đủ

**Checklist:**
- [ ] Product detail layout (gallery + info)
- [ ] Image gallery với thumbnail navigation
- [ ] Size selector (radio buttons)
- [ ] Color selector (visual swatches)
- [ ] Quantity counter
- [ ] Add to cart button
- [ ] Related products section
- [ ] Product tabs (Details, Reviews, Q&A)
- [ ] Responsive design cho mobile
- [ ] Form inputs styling
- [ ] Mobile-first breakpoints
- [ ] Print styles (optional)
- [ ] Dark mode support (optional)

---

## 🎨 Design System

### **Color Palette**
```css
--color-primary: #000 (Đen chính)
--color-accent: #ff6b35 (Cam nổi bật)
--color-success: #2ecc71 (Xanh lá)
--color-danger: #e74c3c (Đỏ)
--color-text: #333
--color-border: #e0e0e0
--color-bg-light: #f9f9f9
```

### **Typography**
- Font Family: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`)
- Heading Font: `Poppins` (hoặc system)
- Sizes: `0.875rem → 2.5rem`

### **Spacing**
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- xxl: 4rem

### **Border Radius**
- sm: 0.25rem
- md: 0.5rem
- lg: 1rem
- xl: 1.5rem

---

## 🔧 Hướng Dẫn CSS

### **BEM Naming Convention**
```css
/* Block */
.header { }

/* Element */
.header__logo { }
.header__nav { }
.header__nav-link { }

/* Modifier */
.button--primary { }
.button--large { }

/* Pseudo-class states */
.header__nav-link:hover { }
.header__nav-link.active { }
```

### **CSS Organization**
1. **base.css** - Root variables, reset, utilities
2. **layout.css** - Layout components (header, footer, navbar)
3. **home.css** - Homepage specific styles
4. **product.css** - Product grid & detail styles
5. **form.css** - Form elements & shopping cart
6. **responsive.css** - Media queries (cuối cùng để override)

### **Responsive Breakpoints**
```css
/* Mobile: 320px - 639px */
@media (max-width: 639px) { }

/* Tablet: 640px - 1023px */
@media (min-width: 640px) { }
@media (max-width: 1023px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }
```

---

## 📱 Responsive Checklist

- [ ] Mobile-first approach
- [ ] Tablet optimization (640px)
- [ ] Desktop optimization (1024px+)
- [ ] Extra small devices (< 380px)
- [ ] Touch-friendly buttons (44px minimum)
- [ ] Flexible images
- [ ] Viewport meta tag
- [ ] Readable font sizes on all devices

---

## ♿ Accessibility

- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] ARIA labels (`aria-label`, `aria-labelledby`)
- [ ] Color contrast (WCAG AA)
- [ ] Focus visible states
- [ ] Skip navigation link
- [ ] Image alt text
- [ ] Form labels
- [ ] Keyboard navigation

---

## 🚀 SEO Basics

- [ ] Meta descriptions
- [ ] Semantic HTML tags
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Image alt attributes
- [ ] Internal linking
- [ ] Mobile responsive
- [ ] Fast loading
- [ ] Clean URLs

---

## 📝 Quy Tắc Code

### **CSS**
```css
/* Comment theo section */
/* ======================================
   HEADER
   ====================================== */

/* Đặt tên class rõ ràng */
.product-card__title { } /* Tốt */
.pt { } /* Không tốt */

/* Luôn dùng biến */
color: var(--color-primary); /* Tốt */
color: #000; /* Tránh */

/* Spacing */
margin-bottom: var(--spacing-md);
padding: var(--spacing-sm) var(--spacing-md);
```

### **HTML**
```html
<!-- Semantic HTML -->
<header>
  <nav>
    <a href="#" class="nav-link">Link</a>
  </nav>
</header>

<main>
  <article>
    <h1>Title</h1>
  </article>
</main>

<footer>
  <p>&copy; 2024</p>
</footer>
```

---

## 🔄 Workflow Collaboration

### **Commit Messages**
```
feat: Add product card component
fix: Fix mobile menu toggle
style: Update colors in base.css
responsive: Add tablet breakpoints
docs: Update README
```

### **Code Review Checklist**
- [ ] CSS follows BEM convention
- [ ] Variables used instead of hardcoded values
- [ ] Responsive design tested
- [ ] No magic numbers
- [ ] Consistent spacing
- [ ] Clean code (no unused styles)

---

## 📦 Assets to Add

### **Images Needed** (trong `assets/images/`)
- `hero-shoe.png` - Hero banner shoe
- `category-*.jpg` - Category images (4 files)
- `shoe-1.jpg` to `shoe-8.jpg` - Product images
- `shoe-1-1.jpg` to `shoe-1-5.jpg` - Product detail gallery
- `logo.png` - Brand logo

### **Icons** (trong `assets/icons/`)
- Search icon (SVG)
- Heart/Like icon (SVG)
- Cart icon (SVG)
- Menu/Hamburger icon (SVG)

---

## ✅ Testing Checklist

- [ ] **Cross-browser:** Chrome, Firefox, Safari, Edge
- [ ] **Responsive:** Mobile (320px), Tablet (768px), Desktop (1024px+)
- [ ] **Performance:** LCP < 2.5s, CLS < 0.1
- [ ] **Accessibility:** a11y scan, keyboard navigation
- [ ] **SEO:** Meta tags, structured data
- [ ] **Forms:** Validation, submission
- [ ] **Links:** Internal & external links work
- [ ] **Images:** Load correctly, alt text present

---

## 📚 Resources

- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **BEM Methodology:** http://getbem.com/
- **Mobile First:** https://www.nngroup.com/articles/mobile-first-web-design/
- **Accessibility:** https://www.w3.org/WAI/fundamentals/

---

## 🎯 Performance Tips

1. **CSS:**
   - Minimize selectors depth
   - Avoid `!important`
   - Use shorthand properties

2. **Images:**
   - Optimize file sizes (WebP, JPEG)
   - Use `srcset` for responsive images
   - Lazy loading for off-screen images

3. **Font:**
   - System fonts first (avoid @import)
   - Limit font variants

---

## 💡 Notes

- Không dùng framework (Bootstrap, Tailwind, etc.)
- Không dùng JavaScript libraries (jQuery, etc.)
- Pure HTML + CSS + Vanilla JS
- Responsive từ mobile-first approach
- SEO-friendly semantic HTML
- BEM naming convention bắt buộc

**Last Updated:** 2024
