// ─── ROUTER ───────────────────────────────────────────────
function navigate(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const [path, qs]   = hash.split('?');
  const params       = qs ? new URLSearchParams(qs) : null;
  const segments     = path.split('/').filter(Boolean);
  return { path, params, segments };
}

function router() {
  const { path, params, segments } = getRoute();
  const app = document.getElementById('app');
  if (!app) return;

  // reset state
  detailQty   = 1;
  detailSize  = '';
  detailColor = '';

  let html = '';
  if (path === '/' || path === '') {
    html = renderHome();
  } else if (path === '/women') {
    html = renderCatalogue('women', params);
  } else if (path === '/men') {
    html = renderCatalogue('men', params);
  } else if (segments[0] === 'product' && segments[1]) {
    html = renderProduct(segments[1]);
  } else if (path === '/login') {
    html = renderAuth();
  } else if (path === '/checkout') {
    const user = localStorage.getItem('ab_user');
    html = renderCheckout();
  } else if (path === '/order-success') {
    html = renderOrderSuccess();
  } else if (path === '/about') {
    html = renderAbout();
  } else if (path === '/contact') {
    html = renderContact();
  } else if (path === '/search') {
    html = renderSearch(params?.get('q') || '');
  } else if (path === '/terms') {
    html = renderTerms();
  } else if (path === '/privacy') {
    html = renderPrivacy();
  } else if (path === '/cookies') {
    html = renderCookies();
  } else if (path === '/corporate') {
    html = renderCorporate();
  } else {
    html = `<div style="padding:calc(var(--nav-h) + 6rem) 2rem 6rem;text-align:center">
      <div style="font-size:5rem;margin-bottom:1rem;opacity:.15">404</div>
      <h1 style="font-family:var(--serif);font-size:2.5rem;margin-bottom:1rem">Page Not Found</h1>
      <p style="color:var(--charcoal-soft);margin-bottom:2rem">The page you're looking for doesn't exist.</p>
      <button class="btn btn-gold btn-lg" onclick="navigate('/')">Return Home</button>
    </div>`;
  }

  app.innerHTML = html;
  app.className = 'page-enter';
  void app.offsetWidth;

  // Post-render setup
  initReveal();
  if (path === '/' || path === '') { startCarousel(); }
  updateNavActive(path);
  updateUserIcon();
  closeAllDropdowns();
}

function updateNavActive(path) {
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.path === path);
  });
}

function updateUserIcon() {
  const user = JSON.parse(localStorage.getItem('ab_user') || 'null');
  const btn  = document.getElementById('user-nav-btn');
  if (btn) {
    btn.title = user ? `Signed in as ${user.name}` : 'Sign In';
    btn.innerHTML = user
      ? `<span style="font-size:.75rem;font-weight:600;color:var(--gold)">${user.name[0].toUpperCase()}</span>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-search-bar').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.search-suggestions').forEach(s => s.classList.remove('show'));
}

// ─── NAVBAR BUILDER ───────────────────────────────────────
function buildNavbar() {
  const wCats = CATEGORIES.women;
  const mCats = CATEGORIES.men;

  const wDropdown = `
  <div class="nav-dropdown">
    <div class="dropdown-inner">
      <span class="dropdown-label">Women's Collections</span>
      <div class="dropdown-grid">
        ${wCats.map(c=>`
        <a class="dropdown-link" href="#" onclick="navigate('/women?cat=${c.id}');return false">
          <span class="dropdown-link__icon">✦</span>
          <div class="dropdown-link__text">
            <div class="dropdown-link__name">${c.name}</div>
            <div class="dropdown-link__sub">${c.description}</div>
          </div>
        </a>`).join('')}
        <a class="dropdown-link" href="#" onclick="navigate('/women');return false">
          <span class="dropdown-link__icon">→</span>
          <div class="dropdown-link__text"><div class="dropdown-link__name">View All Women's</div></div>
        </a>
      </div>
    </div>
  </div>`;

  const mDropdown = `
  <div class="nav-dropdown">
    <div class="dropdown-inner">
      <span class="dropdown-label">Men's Collections</span>
      <div class="dropdown-grid">
        ${mCats.map(c=>`
        <a class="dropdown-link" href="#" onclick="navigate('/men?cat=${c.id}');return false">
          <span class="dropdown-link__icon">✦</span>
          <div class="dropdown-link__text">
            <div class="dropdown-link__name">${c.name}</div>
            <div class="dropdown-link__sub">${c.description}</div>
          </div>
        </a>`).join('')}
        <a class="dropdown-link" href="#" onclick="navigate('/men');return false">
          <span class="dropdown-link__icon">→</span>
          <div class="dropdown-link__text"><div class="dropdown-link__name">View All Men's</div></div>
        </a>
      </div>
    </div>
  </div>`;

  return `
  <nav id="navbar">
    <div class="nav-inner">
      <a class="nav-logo" href="#" onclick="navigate('/');return false" aria-label="Raaha Boutique Home">
        <div class="nav-logo__mark">A</div>
        <div class="nav-logo__text">
          <span class="nav-logo__name">Raaha</span>
          <span class="nav-logo__tagline">Boutique</span>
        </div>
      </a>

      <ul class="nav-menu" role="navigation">
        <li class="nav-item">
          <a class="nav-link" href="#" data-path="/" onclick="navigate('/');return false">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-path="/women" onclick="navigate('/women');return false">
            Women <span class="chevron">▾</span>
          </a>
          ${wDropdown}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-path="/men" onclick="navigate('/men');return false">
            Men <span class="chevron">▾</span>
          </a>
          ${mDropdown}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-path="/about" onclick="navigate('/about');return false">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-path="/contact" onclick="navigate('/contact');return false">Contact</a>
        </li>
      </ul>

      <div class="nav-actions">
        <button class="nav-icon-btn" onclick="toggleSearch()" aria-label="Search" title="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <button class="nav-icon-btn" id="user-nav-btn" onclick="handleUserNav()" aria-label="Account" title="Account">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        <button class="nav-icon-btn" onclick="openCart()" aria-label="Shopping Cart" title="Cart" style="position:relative">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span class="cart-count" style="display:none">0</span>
        </button>
        <button class="nav-hamburger" id="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Search bar -->
    <div class="nav-search-bar" id="nav-search-bar">
      <input class="nav-search-input" id="nav-search-input" placeholder="Search sarees, lehengas, sherwanis, fabrics..."
        oninput="updateSearchSuggestions(this.value)"
        onkeydown="if(event.key==='Enter'&&this.value){navigate('/search?q='+encodeURIComponent(this.value));toggleSearch()}">
      <div class="search-suggestions" id="search-suggestions"></div>
    </div>
  </nav>

  <!-- Mobile Nav -->
  <div class="mobile-nav" id="mobile-nav">
    <div class="mobile-nav-section">
      <h4>Women's</h4>
      <a class="mobile-nav-link" href="#" onclick="navigate('/women');closeMobileNav();return false">All Women's →</a>
      ${wCats.map(c=>`<a class="mobile-nav-link" href="#" onclick="navigate('/women?cat=${c.id}');closeMobileNav();return false">${c.name}</a>`).join('')}
    </div>
    <div class="mobile-nav-section">
      <h4>Men's</h4>
      <a class="mobile-nav-link" href="#" onclick="navigate('/men');closeMobileNav();return false">All Men's →</a>
      ${mCats.map(c=>`<a class="mobile-nav-link" href="#" onclick="navigate('/men?cat=${c.id}');closeMobileNav();return false">${c.name}</a>`).join('')}
    </div>
    <div class="mobile-nav-section">
      <h4>More</h4>
      <a class="mobile-nav-link" href="#" onclick="navigate('/about');closeMobileNav();return false">About Us</a>
      <a class="mobile-nav-link" href="#" onclick="navigate('/contact');closeMobileNav();return false">Contact</a>
      <a class="mobile-nav-link" href="#" onclick="navigate('/search');closeMobileNav();return false">Search</a>
      <a class="mobile-nav-link" href="#" onclick="handleUserNav();closeMobileNav();return false">My Account</a>
    </div>
  </div>`;
}

// ─── FOOTER BUILDER ───────────────────────────────────────
function buildFooter() {
  return `
  <footer id="footer">
    <div class="newsletter-bar">
      <div>
        <h3>Stay in the Loop</h3>
        <p>New arrivals, exclusive offers and styling inspiration — delivered to your inbox.</p>
      </div>
      <div class="newsletter-form">
        <input type="email" class="newsletter-input" id="nl-email" placeholder="Enter your email address">
        <button class="newsletter-btn" onclick="subscribeNewsletter()">Subscribe</button>
      </div>
    </div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="nav-logo" style="margin-bottom:1rem">
            <div class="nav-logo__mark">A</div>
            <div class="nav-logo__text">
              <span class="nav-logo__name">Raaha</span>
              <span class="nav-logo__tagline">Boutique</span>
            </div>
          </div>
          <p>India's premier destination for authentic handcrafted fashion. Bringing the best of Indian artisanship to your wardrobe since 2009.</p>
          <div class="footer-socials">
            <a href="#" class="social-btn" aria-label="Instagram">📷</a>
            <a href="#" class="social-btn" aria-label="Facebook">f</a>
            <a href="#" class="social-btn" aria-label="Pinterest">P</a>
            <a href="#" class="social-btn" aria-label="YouTube">▶</a>
            <a href="#" class="social-btn" aria-label="WhatsApp">✆</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Collections</h5>
          <div class="footer-links">
            <a class="footer-link" href="#" onclick="navigate('/women');return false">Women's Collection</a>
            <a class="footer-link" href="#" onclick="navigate('/men');return false">Men's Collection</a>
            <a class="footer-link" href="#" onclick="navigate('/women?cat=sarees');return false">Sarees</a>
            <a class="footer-link" href="#" onclick="navigate('/women?cat=lehengas');return false">Lehengas</a>
            <a class="footer-link" href="#" onclick="navigate('/men?cat=sherwanis');return false">Sherwanis</a>
            <a class="footer-link" href="#" onclick="navigate('/women?cat=gowns');return false">Gowns</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Customer Care</h5>
          <div class="footer-links">
            <a class="footer-link" href="#" onclick="navigate('/contact');return false">Contact Us</a>
            <a class="footer-link" href="#" onclick="navigate('/about');return false">About Us</a>
            <a class="footer-link" href="#">Shipping Policy</a>
            <a class="footer-link" href="#">Returns & Exchanges</a>
            <a class="footer-link" href="#">Size Guide</a>
            <a class="footer-link" href="#">Track Your Order</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <div class="footer-contact-item"><span class="icon">📍</span><span>12, Fashion Street, Jubilee Hills, Hyderabad – 500033</span></div>
          <div class="footer-contact-item"><span class="icon">📧</span><span>hello@Raaha.in</span></div>
          <div class="footer-contact-item"><span class="icon">📞</span><span>+91 40 1234 5678</span></div>
          <div class="footer-contact-item"><span class="icon">🕐</span><span>Mon–Sat: 10 AM – 7:30 PM</span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Raaha Boutique Pvt. Ltd. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#" onclick="navigate('/terms');return false">Terms & Conditions</a>
          <a href="#" onclick="navigate('/privacy');return false">Privacy Policy</a>
          <a href="#" onclick="navigate('/cookies');return false">Cookie Policy</a>
          <a href="#" onclick="navigate('/corporate');return false">Corporate Info</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ─── NAVBAR INTERACTIONS ──────────────────────────────────
function toggleSearch() {
  const bar = document.getElementById('nav-search-bar');
  if (!bar) return;
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('nav-search-input')?.focus();
}

function updateSearchSuggestions(q) {
  const box = document.getElementById('search-suggestions');
  if (!box) return;
  if (q.length < 2) { box.classList.remove('show'); return; }
  const results = searchProducts(q).slice(0, 5);
  if (!results.length) { box.classList.remove('show'); return; }
  box.innerHTML = results.map(p=>`
    <div class="suggestion-item" onclick="navigate('/product/${p.id}');toggleSearch()">
      <span class="suggestion-icon">✦</span>
      <div>
        <div style="font-size:.875rem;font-weight:500">${p.name}</div>
        <div style="font-size:.72rem;color:var(--charcoal-soft)">${p.category} · ${formatPrice(p.price)}</div>
      </div>
    </div>`).join('');
  box.classList.add('show');
}

function handleUserNav() {
  const user = JSON.parse(localStorage.getItem('ab_user') || 'null');
  if (user) {
    if (confirm(`Signed in as ${user.name}.\n\nClick OK to sign out.`)) {
      localStorage.removeItem('ab_user');
      updateUserIcon();
      showToast('Signed out successfully');
    }
  } else { navigate('/login'); }
}

function toggleMobileNav() {
  document.getElementById('mobile-nav')?.classList.toggle('open');
  document.getElementById('hamburger')?.classList.toggle('active');
  document.body.style.overflow = document.getElementById('mobile-nav')?.classList.contains('open') ? 'hidden' : '';
}
function closeMobileNav() {
  document.getElementById('mobile-nav')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('active');
  document.body.style.overflow = '';
}

function subscribeNewsletter() {
  const e = document.getElementById('nl-email')?.value;
  if (!e || !e.includes('@')) { showToast('Please enter a valid email','error'); return; }
  showToast('Subscribed! Welcome to the Raaha family ✦','success');
  const inp = document.getElementById('nl-email');
  if (inp) inp.value = '';
}

// ─── INIT ─────────────────────────────────────────────────
function init() {
  // Inject navbar
  const navWrap = document.getElementById('navbar-wrap');
  if (navWrap) navWrap.innerHTML = buildNavbar();

  // Inject footer
  const footerWrap = document.getElementById('footer-wrap');
  if (footerWrap) footerWrap.innerHTML = buildFooter();

  // Inject utils
  document.body.insertAdjacentHTML('beforeend', `
    <div id="toast-container"></div>
    <button id="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">↑</button>
    <div id="cookie-banner">
      <span>We use cookies to enhance your experience. By continuing, you agree to our <a href="#" onclick="navigate('/cookies');return false">Cookie Policy</a>.</span>
      <div class="cookie-actions">
        <button class="btn btn-outline btn-sm" style="border-color:rgba(255,255,255,.4);color:rgba(255,255,255,.7)" onclick="declineCookies()">Decline</button>
        <button class="btn btn-gold btn-sm" onclick="acceptCookies()">Accept All</button>
      </div>
    </div>`);

  // Scroll effects
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Close search on outside click
  document.addEventListener('click', e => {
    const bar = document.getElementById('nav-search-bar');
    const btn = e.target.closest('[onclick="toggleSearch()"]');
    if (bar && !bar.contains(e.target) && !btn) bar.classList.remove('open');
  });

  updateCartBadge();
  initBackToTop();
  initCookieBanner();

  // Route
  router();
  window.addEventListener('hashchange', router);
}

document.addEventListener('DOMContentLoaded', init);
