// ─── CART & WISHLIST STATE ────────────────────────────────
const Cart = {
  items: JSON.parse(localStorage.getItem('ab_cart') || '[]'),
  save() { localStorage.setItem('ab_cart', JSON.stringify(this.items)); },
  add(product, qty=1, size='Free Size', color='Default') {
    const key = `${product.id}-${size}-${color}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) { existing.qty += qty; }
    else { this.items.push({ key, id:product.id, name:product.name, price:product.price, size, color, qty, gradient:product.gradient, category:product.category }); }
    this.save(); updateCartBadge(); showToast(`"${product.name}" added to cart ✦`, 'success');
  },
  remove(key) { this.items = this.items.filter(i => i.key !== key); this.save(); updateCartBadge(); },
  updateQty(key, qty) {
    const item = this.items.find(i => i.key === key);
    if (item) { if (qty < 1) this.remove(key); else { item.qty = qty; this.save(); } }
  },
  total() { return this.items.reduce((s,i) => s + i.price * i.qty, 0); },
  count() { return this.items.reduce((s,i) => s + i.qty, 0); },
  clear() { this.items = []; this.save(); updateCartBadge(); }
};

const Wishlist = {
  items: JSON.parse(localStorage.getItem('ab_wish') || '[]'),
  save() { localStorage.setItem('ab_wish', JSON.stringify(this.items)); },
  toggle(id) {
    if (this.has(id)) { this.items = this.items.filter(i => i !== id); }
    else              { this.items.push(id); }
    this.save();
  },
  has(id) { return this.items.includes(id); }
};

// ─── TOAST ────────────────────────────────────────────────
function showToast(msg, type='info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success:'✓', error:'✗', info:'✦' };
  toast.innerHTML = `<span class="toast-icon">${icons[type]||'✦'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateX(20px)'; toast.style.transition='all .35s ease'; setTimeout(()=>toast.remove(),350); }, 3000);
}

// ─── CART BADGE ───────────────────────────────────────────
function updateCartBadge() {
  const badge = document.querySelector('.cart-count');
  const c = Cart.count();
  if (badge) { badge.textContent = c; badge.style.display = c > 0 ? 'flex' : 'none'; }
}

// ─── PRODUCT CARD BUILDER ─────────────────────────────────
function buildProductCard(p, extraClass='') {
  const disc = p.originalPrice ? Math.round((1 - p.price/p.originalPrice)*100) : 0;
  const badgeHTML = p.badge ? `<span class="product-card__badge badge-${p.badge.toLowerCase().replace(/\s+/g,'-')}">${p.badge}</span>` : '';
  const origHTML  = p.originalPrice ? `<span class="product-card__original">${formatPrice(p.originalPrice)}</span>` : '';
  const wishActive = Wishlist.has(p.id) ? 'active' : '';
  return `
  <div class="product-card ${extraClass}" data-id="${p.id}" onclick="navigate('/product/${p.id}')">
    <div class="product-card__image-wrap">
      <div class="product-card__swatch-bg" style="background:linear-gradient(135deg,${p.gradient[0]} 0%,${p.gradient[1]} 100%)">
        <span>${p.category.replace('-',' ')}</span>
      </div>
      ${badgeHTML}
      <button class="wishlist-btn ${wishActive}" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlist(this,${p.id})" aria-label="Wishlist">♡</button>
      <div class="product-card__overlay">
        <button class="btn btn-gold btn-sm" onclick="event.stopPropagation();quickAddToCart(${p.id})">Add to Cart</button>
        <button class="btn btn-outline btn-sm" style="border-color:#fff;color:#fff" onclick="event.stopPropagation();navigate('/product/${p.id}')">View</button>
      </div>
    </div>
    <div class="product-card__info">
      <div class="product-card__category">${p.category.replace('-',' ')} · ${p.occasion}</div>
      <div class="product-card__name">${p.name}</div>
      <div class="product-card__prices">
        <span class="product-card__price">${formatPrice(p.price)}</span>
        ${origHTML}
        ${disc ? `<span style="font-size:.7rem;background:var(--rose-light);color:var(--stock-out);padding:.1rem .45rem;border-radius:4px;font-weight:500">${disc}% off</span>` : ''}
      </div>
      <div class="product-card__stock ${getStockClass(p.stock)}">${getStockLabel(p.stock)}</div>
    </div>
  </div>`;
}

function toggleWishlist(btn, id) {
  Wishlist.toggle(id);
  btn.classList.toggle('active');
  btn.textContent = Wishlist.has(id) ? '♥' : '♡';
  showToast(Wishlist.has(id) ? 'Added to wishlist' : 'Removed from wishlist');
}

function quickAddToCart(id) {
  const p = getProductById(id);
  if (!p) return;
  if (p.stock === 'out-of-stock') { showToast('This item is out of stock', 'error'); return; }
  Cart.add(p, 1, p.sizes[0], p.colors[0]);
}

// ─── CART SIDEBAR ─────────────────────────────────────────
function openCart() {
  const html = renderCartSidebar();
  document.body.insertAdjacentHTML('beforeend', html);
  document.body.style.overflow = 'hidden';
  bindCartEvents();
}

function closeCart() {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.remove();
  document.body.style.overflow = '';
}

function renderCartSidebar() {
  const items = Cart.items;
  const itemsHTML = items.length === 0
    ? `<div class="empty-cart"><div class="empty-cart__icon">🛍</div><p class="empty-cart__text">Your cart is empty</p><button class="btn btn-gold btn-sm" onclick="closeCart();navigate('/women')">Start Shopping</button></div>`
    : items.map(i => `
      <div class="cart-item" data-key="${i.key}">
        <div class="cart-item__img"><div class="cart-item__swatch" style="background:linear-gradient(135deg,${getProductById(i.id)?.gradient[0]||'#ccc'} 0%,${getProductById(i.id)?.gradient[1]||'#999'} 100%)"></div></div>
        <div class="cart-item__info">
          <div class="cart-item__name">${i.name}</div>
          <div class="cart-item__meta">Size: ${i.size} · ${i.color}</div>
          <div class="cart-item__actions">
            <div class="qty-control">
              <button class="qty-btn" onclick="cartQty('${i.key}',-1)">−</button>
              <span class="qty-val">${i.qty}</span>
              <button class="qty-btn" onclick="cartQty('${i.key}',1)">+</button>
            </div>
            <span class="cart-item__price">${formatPrice(i.price * i.qty)}</span>
          </div>
          <span class="cart-remove" onclick="cartRemove('${i.key}')">Remove</span>
        </div>
      </div>`).join('');

  const subtotal = Cart.total();
  const shipping = subtotal > 5000 ? 0 : 199;
  const total = subtotal + shipping;

  return `
  <div id="cart-overlay">
    <div class="sidebar-overlay" onclick="closeCart()"></div>
    <div class="sidebar">
      <div class="sidebar-header">
        <h3 style="font-family:var(--serif);font-size:1.3rem">Shopping Cart <span style="font-size:.85rem;color:var(--charcoal-soft);font-family:var(--sans)">(${Cart.count()} items)</span></h3>
        <button class="nav-icon-btn modal-close" onclick="closeCart()">✕</button>
      </div>
      <div class="sidebar-body">${itemsHTML}</div>
      ${items.length > 0 ? `
      <div class="sidebar-footer">
        <div class="cart-summary">
          <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          <div class="cart-summary-row"><span>Shipping</span><span>${shipping===0?'<span style="color:var(--stock-in)">Free</span>':formatPrice(shipping)}</span></div>
          <div class="cart-summary-row total"><span>Total</span><span style="font-family:var(--serif);font-size:1.2rem">${formatPrice(total)}</span></div>
        </div>
        <p style="font-size:.75rem;color:var(--charcoal-soft);margin-bottom:1rem;text-align:center">Free shipping on orders above ₹5,000</p>
        <button class="btn btn-gold btn-full btn-lg" onclick="closeCart();navigate('/checkout')">Proceed to Checkout →</button>
        <button class="btn btn-ghost btn-full" style="margin-top:.5rem" onclick="closeCart()">Continue Shopping</button>
      </div>` : ''}
    </div>
  </div>`;
}

function bindCartEvents() {}

function cartQty(key, delta) {
  const item = Cart.items.find(i => i.key === key);
  if (item) { Cart.updateQty(key, item.qty + delta); closeCart(); openCart(); }
}
function cartRemove(key) { Cart.remove(key); closeCart(); if (Cart.count() > 0) openCart(); }

// ─── SCROLL REVEAL ─────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold:.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ─── BACK TO TOP ───────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// ─── COOKIE BANNER ─────────────────────────────────────────
function initCookieBanner() {
  if (localStorage.getItem('ab_cookies')) return;
  setTimeout(() => {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('show');
  }, 1500);
}
function acceptCookies()  { localStorage.setItem('ab_cookies','1'); hideCookieBanner(); }
function declineCookies() { localStorage.setItem('ab_cookies','0'); hideCookieBanner(); }
function hideCookieBanner(){ const b=document.getElementById('cookie-banner'); if(b){b.classList.remove('show'); setTimeout(()=>b.remove(),400);} }
