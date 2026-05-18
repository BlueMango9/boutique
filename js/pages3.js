// ══ ABOUT PAGE ═══════════════════════════════════════════
function renderAbout() {
  return `
  <div class="about-hero">
    <div class="container">
      <span class="label-caps" style="color:var(--gold-light)">Est. 2009</span>
      <h1 class="display-md" style="color:var(--white);margin:.5rem 0 1rem">Our Story</h1>
      <p>Fifteen years of passion, craftsmanship, and a deep love for India's extraordinary textile heritage.</p>
    </div>
  </div>

  <section class="section" style="background:var(--white)">
    <div class="container">
      <div class="brand-story reveal">
        <div class="brand-story__image">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#C9A96E 0%,#8B1A1A 100%);display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-size:2rem;color:rgba(255,255,255,.5)">Our Heritage</div>
        </div>
        <div>
          <p class="brand-story__kicker">Who We Are</p>
          <h2 class="display-md">Raaha Boutique</h2>
          <div class="divider-gold" style="margin:1rem 0 1.5rem"></div>
          <p class="brand-story__text">Founded in 2009, Raaha Boutique was born from a singular vision — to create a space where India's extraordinary textile artistry meets the modern woman and man. Our name, "Raaha," means attraction or allure in Sanskrit, and it captures exactly what we aspire to create: clothing that draws the world's attention to the unmatched craftsmanship of Indian artisans.</p>
          <p class="brand-story__text">We work with over 25 master weavers and craftsmen from Varanasi, Kanchipuram, Surat, Kolkata, and Lucknow — ensuring authenticity, fair trade, and the continuation of centuries-old traditions.</p>
          <p class="brand-story__text">Every garment you purchase from Raaha is not just clothing — it is a living piece of cultural heritage, crafted by skilled hands and offered to you with love.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header reveal">
        <span class="label-caps">What Defines Us</span>
        <h2 class="display-md">Our Values</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="values-grid reveal">
        <div class="value-card"><div class="value-icon">✦</div><h3>Authentic Craftsmanship</h3><p>We source exclusively from verified artisans and weaver cooperatives, ensuring every piece is genuinely handcrafted with traditional techniques.</p></div>
        <div class="value-card"><div class="value-icon">♡</div><h3>Customer First</h3><p>Your satisfaction is our heritage. From personalized styling consultations to hassle-free returns, we ensure a premium experience at every step.</p></div>
        <div class="value-card"><div class="value-icon">⊛</div><h3>Sustainable Fashion</h3><p>We champion eco-conscious fashion through natural fabrics, ethical production, and packaging that leaves the lightest possible footprint on our planet.</p></div>
        <div class="value-card"><div class="value-icon">◈</div><h3>Heritage Preservation</h3><p>A portion of every sale goes toward supporting traditional weaving communities and preserving dying textile arts across India.</p></div>
        <div class="value-card"><div class="value-icon">◇</div><h3>Inclusive Luxury</h3><p>We believe premium fashion should be accessible. Our collections span a wide price range without ever compromising on quality or craftsmanship.</p></div>
        <div class="value-card"><div class="value-icon">✿</div><h3>Artisan Partnership</h3><p>We pay artisans fairly and give them creative ownership. Their names, stories, and villages are celebrated alongside every piece they create.</p></div>
      </div>
    </div>
  </section>

  <div class="stats-bar">
    <div class="container">
      <div class="stats-inner">
        <div class="stat-item"><div class="stat-number">2009</div><div class="stat-label">Year Founded</div></div>
        <div class="stat-item"><div class="stat-number">25+</div><div class="stat-label">Artisan Partners</div></div>
        <div class="stat-item"><div class="stat-number">12K+</div><div class="stat-label">Happy Customers</div></div>
        <div class="stat-item"><div class="stat-number">500+</div><div class="stat-label">Designs Per Year</div></div>
      </div>
    </div>
  </div>`;
}

// ══ CONTACT PAGE ═════════════════════════════════════════
function renderContact() {
  return `
  <div class="about-hero">
    <div class="container">
      <span class="label-caps" style="color:var(--gold-light)">Get In Touch</span>
      <h1 class="display-md" style="color:var(--white);margin:.5rem 0 1rem">Contact Us</h1>
      <p>We'd love to hear from you. Our team responds within 24 hours on business days.</p>
    </div>
  </div>

  <section class="section" style="background:var(--white)">
    <div class="container">
      <div class="contact-layout">
        <div class="reveal">
          <span class="label-caps">Send Us a Message</span>
          <h2 class="display-sm" style="margin:.5rem 0 1.5rem">Personal Enquiry</h2>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Your Name *</label><input type="text" class="form-control" id="ct-name" placeholder="Priya Sharma"></div>
            <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="form-control" id="ct-phone" placeholder="+91 98765 43210"></div>
          </div>
          <div class="form-group"><label class="form-label">Email Address *</label><input type="email" class="form-control" id="ct-email" placeholder="your@email.com"></div>
          <div class="form-group">
            <label class="form-label">Subject</label>
            <select class="form-control" id="ct-subject">
              <option>General Enquiry</option>
              <option>Order Support</option>
              <option>Custom / Bespoke Order</option>
              <option>Bulk / Corporate Order</option>
              <option>Return / Exchange</option>
              <option>Collaboration</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Message *</label><textarea class="form-control" id="ct-msg" rows="5" placeholder="Tell us how we can help..."></textarea></div>
          <button class="btn btn-gold btn-lg" onclick="submitContact()">Send Message →</button>
        </div>
        <div class="reveal">
          <span class="label-caps">Find Us</span>
          <h2 class="display-sm" style="margin:.5rem 0 2rem">Our Details</h2>
          <div class="contact-info-item">
            <div class="contact-info-icon">📍</div>
            <div class="contact-info-text"><h4>Store Address</h4><p>Raaha Boutique<br>12, Fashion Street, Jubilee Hills<br>Hyderabad, Telangana – 500033<br>India</p></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">📧</div>
            <div class="contact-info-text"><h4>Email Us</h4><p>General: hello@Raaha.in<br>Orders: orders@Raaha.in<br>Wholesale: wholesale@Raaha.in</p></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">📞</div>
            <div class="contact-info-text"><h4>Call Us</h4><p>+91 40 1234 5678<br>+91 98765 43210 (WhatsApp)<br>Mon–Sat: 10 AM – 7 PM IST</p></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">📱</div>
            <div class="contact-info-text">
              <h4>Follow Us</h4>
              <div style="display:flex;gap:.75rem;margin-top:.5rem">
                ${[['Instagram','@Raaha.boutique'],['Facebook','Raaha Boutique'],['Pinterest','@Raaha'],['YouTube','Raaha Boutique']].map(([s,h])=>`<div style="font-size:.8rem"><strong>${s}</strong><br><span style="color:var(--gold)">${h}</span></div>`).join('')}
              </div>
            </div>
          </div>
          <div style="background:var(--ivory);border-radius:var(--radius-md);padding:1.5rem;margin-top:1rem">
            <h4 style="margin-bottom:.5rem">Business Hours</h4>
            ${[['Monday – Friday','10:00 AM – 7:30 PM'],['Saturday','10:00 AM – 8:00 PM'],['Sunday','11:00 AM – 6:00 PM']].map(([d,t])=>`<div style="display:flex;justify-content:space-between;font-size:.875rem;padding:.35rem 0;border-bottom:1px solid var(--ivory-dark)"><span style="color:var(--charcoal-soft)">${d}</span><span style="font-weight:500">${t}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function submitContact() {
  const n=document.getElementById('ct-name')?.value, e=document.getElementById('ct-email')?.value, m=document.getElementById('ct-msg')?.value;
  if (!n||!e||!m) { showToast('Please fill required fields','error'); return; }
  showToast('Message sent! We\'ll respond within 24 hours. ✦','success');
  ['ct-name','ct-phone','ct-email','ct-msg'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
}

// ══ SEARCH PAGE ══════════════════════════════════════════
function renderSearch(query) {
  const results = query ? searchProducts(query) : [];
  return `
  <div style="padding-top:calc(var(--nav-h)+3rem);padding-bottom:5rem">
    <div class="container">
      <div class="section-header" style="margin-bottom:2rem">
        <span class="label-caps">Search</span>
        <h1 class="display-md">Find Your Look</h1>
        <div class="divider-gold"></div>
      </div>
      <div style="max-width:640px;margin:0 auto 3rem">
        <div style="position:relative">
          <input class="form-control" id="main-search" placeholder="Search sarees, lehengas, sherwanis..." value="${query||''}" style="padding:.9rem 3rem .9rem 1.25rem;font-size:1rem;border-radius:40px" oninput="liveSearch(this.value)" onkeydown="if(event.key==='Enter')navigate('/search?q='+this.value)">
          <span style="position:absolute;right:1.25rem;top:50%;transform:translateY(-50%);color:var(--gold);font-size:1.2rem;pointer-events:none">⊕</span>
        </div>
      </div>
      ${query ? `<p style="color:var(--charcoal-soft);margin-bottom:2rem;text-align:center">${results.length} result${results.length!==1?'s':''} for "<strong>${query}</strong>"</p>` : '<p style="color:var(--charcoal-soft);text-align:center">Start typing to search our catalogue...</p>'}
      <div class="grid-4" id="search-results">
        ${results.map(p=>buildProductCard(p)).join('')}
      </div>
    </div>
  </div>`;
}

function liveSearch(q) {
  const results = q.length > 1 ? searchProducts(q) : [];
  const grid = document.getElementById('search-results');
  if (grid) grid.innerHTML = results.map(p=>buildProductCard(p)).join('') || (q.length>1?'<p style="grid-column:1/-1;text-align:center;color:var(--charcoal-soft)">No results found.</p>':'');
}

// ══ LEGAL PAGES ══════════════════════════════════════════
function renderTerms() {
  return `<div class="legal-page"><div class="container"><div class="legal-content">
    <span class="label-caps">Legal</span>
    <h1 class="display-md" style="margin:.5rem 0 2rem">Terms & Conditions</h1>
    <div class="divider-gold" style="margin:0 0 2rem"></div>
    <h2>1. Acceptance of Terms</h2>
    <p>By accessing and using the Raaha Boutique website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree, please do not use our services.</p>
    <h2>2. Products and Pricing</h2>
    <p>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to modify prices without prior notice. Product images are for representative purposes — actual colours may vary slightly due to photography and display settings.</p>
    <h2>3. Orders and Payment</h2>
    <p>By placing an order, you confirm that all information provided is accurate. Payment is processed securely through our payment partners. We accept Visa, Mastercard, American Express, RuPay, UPI, Net Banking, and Cash on Delivery.</p>
    <h2>4. Shipping and Delivery</h2>
    <p>Standard delivery takes 5–7 business days. Express delivery takes 2–3 business days. Same-day delivery is available in select cities for orders placed before 12 PM. Shipping charges are waived for orders above ₹5,000.</p>
    <h2>5. Returns and Exchanges</h2>
    <p>We accept returns within 14 days of delivery for unworn, unwashed items in original packaging with tags intact. Customized or bespoke items are not eligible for return. Refunds are processed within 7–10 business days.</p>
    <h2>6. Intellectual Property</h2>
    <p>All content on this website — including images, text, logos, and designs — is the intellectual property of Raaha Boutique and is protected by Indian and international copyright laws.</p>
    <h2>7. Governing Law</h2>
    <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>
    <p class="legal-last-updated">Last updated: 1 January 2025</p>
  </div></div></div>`;
}

function renderPrivacy() {
  return `<div class="legal-page"><div class="container"><div class="legal-content">
    <span class="label-caps">Legal</span>
    <h1 class="display-md" style="margin:.5rem 0 2rem">Privacy Policy</h1>
    <div class="divider-gold" style="margin:0 0 2rem"></div>
    <p>At Raaha Boutique, we are committed to protecting your personal information and your right to privacy.</p>
    <h2>1. Information We Collect</h2>
    <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This includes your name, email address, phone number, postal address, and payment information (processed securely by our payment partners).</p>
    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>To process and fulfil your orders</li>
      <li>To communicate with you about your orders and account</li>
      <li>To send promotional emails (only with your consent)</li>
      <li>To improve our products, services, and website</li>
      <li>To comply with legal obligations</li>
    </ul>
    <h2>3. Data Sharing</h2>
    <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (shipping partners, payment processors) only as necessary to fulfil your order.</p>
    <h2>4. Data Security</h2>
    <p>We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information.</p>
    <h2>5. Your Rights</h2>
    <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@Raaha.in.</p>
    <h2>6. Contact</h2>
    <p>For privacy-related queries, email us at: <strong>privacy@Raaha.in</strong></p>
    <p class="legal-last-updated">Last updated: 1 January 2025</p>
  </div></div></div>`;
}

function renderCookies() {
  return `<div class="legal-page"><div class="container"><div class="legal-content">
    <span class="label-caps">Legal</span>
    <h1 class="display-md" style="margin:.5rem 0 2rem">Cookie Policy</h1>
    <div class="divider-gold" style="margin:0 0 2rem"></div>
    <p>This Cookie Policy explains how Raaha Boutique uses cookies and similar tracking technologies on our website.</p>
    <h2>What Are Cookies?</h2>
    <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently and provide information to website owners.</p>
    <h2>Types of Cookies We Use</h2>
    <h3>Essential Cookies</h3>
    <p>These cookies are necessary for the website to function. They enable core features such as your shopping cart, account login, and security. These cannot be disabled.</p>
    <h3>Analytics Cookies</h3>
    <p>These help us understand how visitors interact with our website by collecting anonymous data. This helps us improve the user experience.</p>
    <h3>Marketing Cookies</h3>
    <p>These are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. You can opt out at any time.</p>
    <h2>Managing Cookies</h2>
    <p>You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of the website.</p>
    <p class="legal-last-updated">Last updated: 1 January 2025</p>
  </div></div></div>`;
}

function renderCorporate() {
  return `<div class="legal-page"><div class="container"><div class="legal-content">
    <span class="label-caps">Legal</span>
    <h1 class="display-md" style="margin:.5rem 0 2rem">Corporate Information</h1>
    <div class="divider-gold" style="margin:0 0 2rem"></div>
    <div style="background:var(--ivory);border-radius:var(--radius-md);padding:2rem;margin-bottom:2rem">
      <table style="width:100%;border-collapse:collapse">
        ${[['Legal Entity Name','Raaha Boutique Private Limited'],['CIN','U52100TG2009PTC065432'],['Registered Office','12, Fashion Street, Jubilee Hills, Hyderabad – 500033'],['State of Incorporation','Telangana, India'],['GST Number','36AABCA1234M1Z5'],['PAN Number','AABCA1234M'],['Year of Incorporation','2009'],['Nature of Business','Retail of Designer Clothing & Textiles (NIC Code: 4771)']].map(([k,v])=>`<tr style="border-bottom:1px solid var(--ivory-dark)"><td style="padding:.75rem 1rem .75rem 0;color:var(--charcoal-soft);font-size:.875rem;width:45%">${k}</td><td style="padding:.75rem 0;font-weight:500;font-size:.875rem">${v}</td></tr>`).join('')}
      </table>
    </div>
    <h2>Registered Address</h2>
    <p>Raaha Boutique Private Limited<br>12, Fashion Street, Jubilee Hills<br>Hyderabad, Telangana – 500033<br>India</p>
    <h2>Customer Grievance</h2>
    <p>For any grievances, please contact our Grievance Officer:<br><strong>Ms. Kavitha Rao</strong><br>Email: grievance@Raaha.in<br>Phone: +91 40 1234 5678<br>Response time: Within 48 business hours</p>
    <p class="legal-last-updated">Last updated: 1 January 2025</p>
  </div></div></div>`;
}
