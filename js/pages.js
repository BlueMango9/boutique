// ─── PAGES ────────────────────────────────────────────────

// ══ HOME PAGE ════════════════════════════════════════════
function renderHome() {
  const slides = [
    { label:'New Collection 2025', title:'Draped in\nTimeless Grace', sub:'Discover our exclusive bridal and festive collections, crafted with centuries of artisanal heritage.', cta:'Explore Women\'s', link:'/women', bg:'assets/images/hero-women.png', gradient:'linear-gradient(110deg,rgba(44,44,44,.65) 0%,rgba(44,44,44,.15) 60%,transparent 100%)' },
    { label:'Men\'s Heritage Line', title:'Regal\nElegance Redefined', sub:'Premium sherwanis, kurtas and Bandhgala suits for the discerning gentleman.', cta:'Shop Men\'s', link:'/men', bg:'assets/images/hero-men.png', gradient:'linear-gradient(110deg,rgba(44,44,44,.6) 0%,rgba(44,44,44,.1) 60%,transparent 100%)' },
    { label:'Artisan Craftsmanship', title:'The Art of\nIndian Textiles', sub:'Every thread tells a story. From Banarasi silk to Kanjeevaram — experience luxury woven by hand.', cta:'View Catalogue', link:'/women', bg:'assets/images/hero-collection.png', gradient:'linear-gradient(110deg,rgba(20,10,5,.7) 0%,rgba(20,10,5,.2) 60%,transparent 100%)' },
    { label:'Bridal Collection', title:'Your Perfect\nBridal Story', sub:'Bespoke lehengas, sarees and gowns to make your most special day unforgettable.', cta:'Bridal Wear', link:'/women', bg:'assets/images/hero-women.png', gradient:'linear-gradient(135deg,rgba(100,20,20,.65) 0%,rgba(44,44,44,.1) 60%,transparent 100%)' },
    { label:'Limited Edition', title:'Exclusive\nDesigner Pieces', sub:'Handpicked curations from master craftsmen across India — available only at Raaha.', cta:'Shop Now', link:'/women', bg:'assets/images/hero-men.png', gradient:'linear-gradient(110deg,rgba(10,20,44,.65) 0%,rgba(10,20,44,.1) 60%,transparent 100%)' },
  ];

  const newArrivals = PRODUCTS.filter(p => p.badge === 'New' || p.badge === 'Trending').slice(0,8);
  const bestsellers  = PRODUCTS.filter(p => p.badge === 'Bestseller').slice(0,4);
  const womenCats = CATEGORIES.women;
  const menCats   = CATEGORIES.men;

  return `
  <!-- HERO CAROUSEL -->
  <section class="hero">
    ${slides.map((s,i)=>`
    <div class="hero-slide ${i===0?'active':''}" data-index="${i}">
      <div class="hero-slide__bg" style="background-image:url('${s.bg}')"></div>
      <div class="hero-slide__overlay" style="background:${s.gradient}"></div>
      <div class="hero-slide__content">
        <span class="label-caps hero-slide__label">${s.label}</span>
        <h1 class="hero-slide__title">${s.title.replace('\n','<br>')}</h1>
        <p class="hero-slide__sub">${s.sub}</p>
        <div class="hero-slide__cta">
          <button class="btn btn-gold btn-lg" onclick="navigate('${s.link}')">${s.cta}</button>
          <button class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,.6);color:#fff" onclick="navigate('/about')">Our Story</button>
        </div>
      </div>
    </div>`).join('')}
    <button class="hero-arrow hero-arrow-prev" onclick="heroSlide(-1)" aria-label="Previous">&#8592;</button>
    <button class="hero-arrow hero-arrow-next" onclick="heroSlide(1)"  aria-label="Next">&#8594;</button>
    <div class="hero-controls">
      ${slides.map((_,i)=>`<div class="hero-dot ${i===0?'active':''}" onclick="goToSlide(${i})"></div>`).join('')}
    </div>
  </section>

  <!-- CATEGORY STRIP -->
  <div class="category-strip">
    <div class="container">
      <div class="category-strip-inner">
        <div class="cat-pill" onclick="navigate('/women')"><span class="cat-pill__icon">✦</span> Women's Collection</div>
        <div class="cat-pill" onclick="navigate('/men')"><span class="cat-pill__icon">✦</span> Men's Collection</div>
        ${womenCats.map(c=>`<div class="cat-pill" onclick="navigate('/women?cat=${c.id}')"><span class="cat-pill__icon">✦</span> ${c.name}</div>`).join('')}
        ${menCats.map(c=>`<div class="cat-pill" onclick="navigate('/men?cat=${c.id}')"><span class="cat-pill__icon">✦</span> ${c.name}</div>`).join('')}
      </div>
    </div>
  </div>

  <!-- FEATURED COLLECTIONS -->
  <section class="section" style="background:var(--white)">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-caps">Curated For You</span>
        <h2 class="display-md">Our Collections</h2>
        <div class="divider-gold"></div>
        <p>Every piece at Raaha is handpicked for its craftsmanship, quality, and timeless appeal.</p>
      </div>
      <div class="collections-grid reveal">
        <div class="collection-card" onclick="navigate('/women?cat=sarees')">
          <div class="collection-card__bg" style="background:linear-gradient(135deg,#8B1A1A 0%,#DAA520 100%)"></div>
          <div class="collection-card__overlay"></div>
          <div class="collection-card__info">
            <div class="collection-card__label">Women's</div>
            <div class="collection-card__name">Silk Sarees</div>
            <div class="collection-card__link">Explore Collection →</div>
          </div>
        </div>
        <div class="collection-card" onclick="navigate('/women?cat=lehengas')">
          <div class="collection-card__bg" style="background:linear-gradient(135deg,#4A0E4E 0%,#D4A5A5 100%)"></div>
          <div class="collection-card__overlay"></div>
          <div class="collection-card__info">
            <div class="collection-card__label">Women's</div>
            <div class="collection-card__name">Bridal Lehengas</div>
            <div class="collection-card__link">Explore →</div>
          </div>
        </div>
        <div class="collection-card" onclick="navigate('/men?cat=sherwanis')">
          <div class="collection-card__bg" style="background:linear-gradient(135deg,#1B1464 0%,#DAA520 100%)"></div>
          <div class="collection-card__overlay"></div>
          <div class="collection-card__info">
            <div class="collection-card__label">Men's</div>
            <div class="collection-card__name">Wedding Sherwanis</div>
            <div class="collection-card__link">Explore →</div>
          </div>
        </div>
        <div class="collection-card" onclick="navigate('/women?cat=gowns')">
          <div class="collection-card__bg" style="background:linear-gradient(135deg,#1C1C1C 0%,#C9A96E 100%)"></div>
          <div class="collection-card__overlay"></div>
          <div class="collection-card__info">
            <div class="collection-card__label">Women's</div>
            <div class="collection-card__name">Designer Gowns</div>
            <div class="collection-card__link">Explore →</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS BAR -->
  <div class="stats-bar">
    <div class="container">
      <div class="stats-inner">
        <div class="stat-item"><div class="stat-number">500+</div><div class="stat-label">Unique Designs</div></div>
        <div class="stat-item"><div class="stat-number">15+</div><div class="stat-label">Years of Heritage</div></div>
        <div class="stat-item"><div class="stat-number">12K+</div><div class="stat-label">Happy Customers</div></div>
        <div class="stat-item"><div class="stat-number">25+</div><div class="stat-label">Artisan Partners</div></div>
      </div>
    </div>
  </div>

  <!-- NEW ARRIVALS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-caps">Just In</span>
        <h2 class="display-md">New Arrivals</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="h-scroll new-arrivals-scroll">
        ${newArrivals.map(p=>buildProductCard(p)).join('')}
      </div>
      <div style="text-align:center;margin-top:2.5rem">
        <button class="btn btn-outline-gold btn-lg" onclick="navigate('/women')">View All Women's →</button>
        <button class="btn btn-outline btn-lg" style="margin-left:1rem" onclick="navigate('/men')">View All Men's →</button>
      </div>
    </div>
  </section>

  <!-- BRAND STORY -->
  <section class="section" style="background:var(--white)">
    <div class="container">
      <div class="brand-story reveal">
        <div class="brand-story__image">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#C9A96E 0%,#8B1A1A 50%,#1B1464 100%);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:3rem;color:rgba(255,255,255,.4);letter-spacing:.1em">Raaha</div>
        </div>
        <div>
          <p class="brand-story__kicker">Our Heritage</p>
          <h2 class="brand-story__title display-md">Craftsmanship That Tells a Story</h2>
          <div class="divider-gold" style="margin:0 0 1.5rem"></div>
          <p class="brand-story__text">Raaha Boutique was born from a deep reverence for India's extraordinary textile heritage. We believe that every weave, every thread, and every embellishment carries the soul of the artisan who crafted it.</p>
          <p class="brand-story__text">We work directly with master craftsmen across Varanasi, Kanchipuram, Surat, and Lucknow — ensuring that every piece in our collection is authentic, fairly traded, and crafted to last lifetimes.</p>
          <button class="btn btn-outline-gold" onclick="navigate('/about')">Read Our Story →</button>
          <div class="brand-story__sign">— Raaha</div>
        </div>
      </div>
    </div>
  </section>

  <!-- BESTSELLERS -->
  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-caps">Most Loved</span>
        <h2 class="display-md">Bestsellers</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="grid-4">
        ${bestsellers.map(p=>`<div class="reveal">${buildProductCard(p)}</div>`).join('')}
      </div>
    </div>
  </section>`;
}

// Hero carousel logic
let currentSlide = 0, slideTimer;
function heroSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetSlideTimer();
}
function goToSlide(i) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = i;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetSlideTimer();
}
function resetSlideTimer() { clearInterval(slideTimer); slideTimer = setInterval(()=>heroSlide(1), 5000); }
function startCarousel()   { slideTimer = setInterval(()=>heroSlide(1), 5000); }

// ══ CATALOGUE PAGE ════════════════════════════════════════
function renderCatalogue(gender, urlParams) {
  const genderLabel  = gender === 'women' ? "Women's" : "Men's";
  const cats         = CATEGORIES[gender];
  const activeCat    = urlParams?.get('cat') || 'all';
  let   products     = getProductsByGender(gender);
  if (activeCat !== 'all') products = products.filter(p => p.category === activeCat);
  const allCats      = [{ id:'all', name:'All' }, ...cats];

  return `
  <div class="catalogue-hero">
    <div class="container">
      <span class="label-caps">Raaha Boutique</span>
      <h1 class="display-md" style="margin-top:.5rem">${genderLabel} Collection</h1>
      <p>Discover ${products.length}+ handpicked designs crafted for every occasion</p>
      <div class="filter-tabs" style="justify-content:center">
        ${allCats.map(c=>`<button class="filter-tab ${activeCat===c.id?'active':''}" onclick="filterCatalogue('${gender}','${c.id}')">${c.name}</button>`).join('')}
      </div>
    </div>
  </div>
  <div class="section" style="padding-top:2rem">
    <div class="container">
      <div class="catalogue-toolbar">
        <div class="results-count" id="results-count">${products.length} results</div>
        <div style="display:flex;gap:.75rem;align-items:center">
          <input class="form-control" id="catalogue-search" placeholder="Search within ${genderLabel.toLowerCase()}..." style="width:240px;padding:.5rem 1rem" oninput="searchCatalogue('${gender}')" value="">
          <select class="sort-select" id="sort-select" onchange="sortCatalogue('${gender}')">
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>
      <div class="products-grid" id="products-grid">
        ${products.map(p=>buildProductCard(p)).join('')}
      </div>
      ${products.length===0?`<div class="no-results"><div class="no-results__icon">🔍</div><h3>No items found</h3><p>Try a different category or search term.</p></div>`:''}
    </div>
  </div>`;
}

function filterCatalogue(gender, cat) {
  navigate(`/${gender}${cat!=='all'?'?cat='+cat:''}`);
}

function searchCatalogue(gender) {
  const q = document.getElementById('catalogue-search')?.value || '';
  const sort = document.getElementById('sort-select')?.value || 'default';
  let products = getProductsByGender(gender);
  if (q) products = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.fabric.toLowerCase().includes(q.toLowerCase()) || p.occasion.toLowerCase().includes(q.toLowerCase()));
  products = sortProducts(products, sort);
  const grid = document.getElementById('products-grid');
  const count = document.getElementById('results-count');
  if (grid)  grid.innerHTML  = products.map(p=>buildProductCard(p)).join('') || `<div class="no-results" style="grid-column:1/-1"><div class="no-results__icon">🔍</div><h3>No results found</h3><p>Try another search term.</p></div>`;
  if (count) count.textContent = `${products.length} results`;
}

function sortCatalogue(gender) {
  const q = document.getElementById('catalogue-search')?.value || '';
  searchCatalogue(gender);
}

function sortProducts(arr, mode) {
  const a = [...arr];
  if (mode==='price-asc')  return a.sort((x,y)=>x.price-y.price);
  if (mode==='price-desc') return a.sort((x,y)=>y.price-x.price);
  if (mode==='name')       return a.sort((x,y)=>x.name.localeCompare(y.name));
  return a;
}

// ══ PRODUCT DETAIL ════════════════════════════════════════
function renderProduct(id) {
  const p = getProductById(parseInt(id));
  if (!p) return `<div class="section" style="padding-top:calc(var(--nav-h)+4rem);text-align:center"><h2>Product not found</h2><button class="btn btn-gold" style="margin-top:1.5rem" onclick="navigate('/')">Go Home</button></div>`;

  const disc    = p.originalPrice ? Math.round((1-p.price/p.originalPrice)*100) : 0;
  const related = PRODUCTS.filter(x => x.category===p.category && x.id!==p.id).slice(0,4);

  return `
  <div class="product-detail section">
    <div class="container">
      <div class="product-layout">
        <!-- Gallery -->
        <div class="product-gallery">
          <div class="product-main-img">
            <div class="swatch-display" style="background:linear-gradient(135deg,${p.gradient[0]} 0%,${p.gradient[1]} 100%)">
              ${p.name}
            </div>
          </div>
          <div class="product-thumbs">
            ${p.colors.slice(0,3).map((c,i)=>`<div class="product-thumb ${i===0?'active':''}" style="background:linear-gradient(135deg,${p.gradient[0]} 0%,${p.gradient[1]} 100%);opacity:${i===0?1:.65}" onclick="selectThumb(this)"></div>`).join('')}
          </div>
        </div>
        <!-- Info -->
        <div class="product-info">
          <div class="product-info__breadcrumb">
            <a href="#" onclick="navigate('/')">Home</a> / 
            <a href="#" onclick="navigate('/${p.gender}')">${p.gender==='women'?"Women's":"Men's"}</a> / 
            <span>${p.name}</span>
          </div>
          ${p.badge ? `<div class="product-info__badge"><span class="product-card__badge badge-${p.badge.toLowerCase().replace(/\s+/g,'-')}" style="position:static">${p.badge}</span></div>` : ''}
          <h1 class="product-info__name">${p.name}</h1>
          <div class="product-info__fabric">${p.fabric} · ${p.occasion}</div>
          <div class="product-info__prices price-tag">
            <span class="current">${formatPrice(p.price)}</span>
            ${p.originalPrice?`<span class="original">${formatPrice(p.originalPrice)}</span><span class="discount">${disc}% off</span>`:''}
          </div>
          <div class="product-info__stock ${getStockClass(p.stock)}" style="margin:.75rem 0 1.5rem;font-size:.85rem">${getStockLabel(p.stock)}</div>
          <p class="product-info__desc">${p.description}</p>

          <div class="size-label">Select Size</div>
          <div class="size-options">
            ${p.sizes.map((s,i)=>`<button class="size-btn ${i===0?'active':''}" onclick="selectSize(this,'${s}')">${s}</button>`).join('')}
          </div>

          <div class="size-label">Select Colour</div>
          <div class="color-options">
            ${p.colors.map((c,i)=>`<div class="color-dot ${i===0?'active':''}" style="background:linear-gradient(135deg,${p.gradient[0]} 0%,${p.gradient[1]} 100%)" data-name="${c}" onclick="selectColor(this,'${c}')"></div>`).join('')}
          </div>
          <div style="font-size:.8rem;color:var(--charcoal-soft);margin-bottom:1.25rem" id="color-label">Colour: ${p.colors[0]}</div>

          <div class="qty-row">
            <span class="size-label" style="margin:0">Quantity</span>
            <div class="qty-wrap">
              <button class="qty-btn" onclick="changeQty(-1)">−</button>
              <span class="qty-val" id="detail-qty">1</span>
              <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
          </div>

          <div class="product-cta">
            <button class="btn btn-gold btn-lg" onclick="addDetailToCart(${p.id})" ${p.stock==='out-of-stock'?'disabled style="opacity:.5;cursor:not-allowed"':''}>
              ${p.stock==='out-of-stock'?'Out of Stock':'Add to Cart'}
            </button>
            <button class="btn btn-primary btn-lg" onclick="addDetailToCart(${p.id},true)" ${p.stock==='out-of-stock'?'disabled style="opacity:.5"':''}>Buy Now</button>
          </div>

          <dl class="product-meta">
            <div class="meta-row"><dt>Fabric</dt><dd>${p.fabric}</dd></div>
            <div class="meta-row"><dt>Occasion</dt><dd>${p.occasion}</dd></div>
            <div class="meta-row"><dt>Care</dt><dd>Dry Clean Only</dd></div>
            <div class="meta-row"><dt>SKU</dt><dd>AB-${String(p.id).padStart(4,'0')}</dd></div>
            <div class="meta-row"><dt>Delivery</dt><dd>3-7 Business Days</dd></div>
          </dl>
        </div>
      </div>

      ${related.length?`
      <div style="margin-top:5rem">
        <div class="section-header"><span class="label-caps">You May Also Like</span><h2 class="display-sm">Related Products</h2><div class="divider-gold"></div></div>
        <div class="grid-4">${related.map(r=>buildProductCard(r)).join('')}</div>
      </div>`:''}
    </div>
  </div>`;
}

let detailQty=1, detailSize='', detailColor='';
function selectSize(btn,size)   { document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); detailSize=size; }
function selectColor(dot,color) { document.querySelectorAll('.color-dot').forEach(d=>d.classList.remove('active')); dot.classList.add('active'); detailColor=color; const lbl=document.getElementById('color-label'); if(lbl)lbl.textContent='Colour: '+color; }
function selectThumb(t)         { document.querySelectorAll('.product-thumb').forEach(x=>{x.classList.remove('active');x.style.opacity='.65';}); t.classList.add('active'); t.style.opacity='1'; }
function changeQty(d)           { const el=document.getElementById('detail-qty'); detailQty=Math.max(1,Math.min(10,(detailQty||1)+d)); if(el)el.textContent=detailQty; }
function addDetailToCart(id,buyNow=false) {
  const p=getProductById(id);
  if (!p||p.stock==='out-of-stock') return;
  const size  = detailSize  || p.sizes[0];
  const color = detailColor || p.colors[0];
  const qty   = detailQty  || 1;
  Cart.add(p, qty, size, color);
  if (buyNow) { closeCart(); navigate('/checkout'); }
}
