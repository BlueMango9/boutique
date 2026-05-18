// ══ AUTH PAGE ════════════════════════════════════════════
function renderAuth() {
  return `
  <div class="auth-page">
    <div class="auth-visual">
      <div class="auth-visual__bg" style="background:linear-gradient(135deg,#C9A96E 0%,#8B1A1A 50%,#1B1464 100%)"></div>
      <div class="auth-visual__content">
        <div class="auth-visual__logo">Raaha</div>
        <p class="auth-visual__text">Your premier destination for premium Indian fashion and timeless elegance.</p>
        <div class="auth-visual__quote">"Elegance is the only beauty that never fades."</div>
      </div>
    </div>
    <div class="auth-form-wrap">
      <div class="auth-form">
        <h2 style="font-family:var(--serif);font-size:2rem;margin-bottom:.35rem">Welcome</h2>
        <p style="color:var(--charcoal-soft);font-size:.9rem;margin-bottom:1.5rem">Sign in to your account or create a new one.</p>
        <div class="auth-tabs">
          <div class="auth-tab active" id="tab-login" onclick="switchAuthTab('login')">Sign In</div>
          <div class="auth-tab"        id="tab-signup" onclick="switchAuthTab('signup')">Create Account</div>
        </div>

        <!-- Login Form -->
        <div id="login-form">
          <div class="social-auth">
            <button class="social-auth-btn"><span>G</span> Google</button>
            <button class="social-auth-btn"><span>f</span> Facebook</button>
          </div>
          <div class="auth-or">or</div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="login-email" class="form-control" placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" id="login-pass" class="form-control" placeholder="••••••••">
          </div>
          <div style="text-align:right;margin-bottom:1.25rem">
            <a href="#" style="font-size:.82rem;color:var(--gold)">Forgot Password?</a>
          </div>
          <button class="btn btn-gold btn-full btn-lg" onclick="handleLogin()">Sign In</button>
        </div>

        <!-- Signup Form -->
        <div id="signup-form" style="display:none">
          <div class="form-row">
            <div class="form-group"><label class="form-label">First Name</label><input type="text" class="form-control" placeholder="Priya" id="signup-fname"></div>
            <div class="form-group"><label class="form-label">Last Name</label><input type="text" class="form-control" placeholder="Sharma" id="signup-lname"></div>
          </div>
          <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-control" placeholder="your@email.com" id="signup-email"></div>
          <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="form-control" placeholder="+91 98765 43210" id="signup-phone"></div>
          <div class="form-group"><label class="form-label">Password</label><input type="password" class="form-control" placeholder="Min. 8 characters" id="signup-pass"></div>
          <div class="form-group">
            <label style="display:flex;align-items:flex-start;gap:.6rem;font-size:.82rem;color:var(--charcoal-soft);cursor:pointer">
              <input type="checkbox" style="margin-top:2px;accent-color:var(--gold)">
              I agree to the <a href="#" onclick="navigate('/terms')" style="color:var(--gold)">Terms & Conditions</a> and <a href="#" onclick="navigate('/privacy')" style="color:var(--gold)">Privacy Policy</a>
            </label>
          </div>
          <button class="btn btn-gold btn-full btn-lg" onclick="handleSignup()">Create Account</button>
        </div>

        <!-- Guest -->
        <div class="guest-divider"><span>or continue without account</span></div>
        <div class="guest-box" onclick="navigate('/checkout')">
          <h4>🛍 Continue as Guest</h4>
          <p>No account needed — just enter your delivery details at checkout.</p>
          <div class="guest-arrow">Go to Checkout →</div>
        </div>
      </div>
    </div>
  </div>`;
}

function switchAuthTab(tab) {
  document.getElementById('login-form').style.display  = tab==='login'  ? 'block' : 'none';
  document.getElementById('signup-form').style.display = tab==='signup' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active', tab==='login');
  document.getElementById('tab-signup').classList.toggle('active', tab==='signup');
}
function handleLogin()  { const e=document.getElementById('login-email')?.value; if(!e){showToast('Please enter email','error');return;} localStorage.setItem('ab_user',JSON.stringify({email:e,name:e.split('@')[0]})); showToast('Signed in successfully ✦','success'); navigate('/'); }
function handleSignup() { const e=document.getElementById('signup-email')?.value,f=document.getElementById('signup-fname')?.value; if(!e||!f){showToast('Please fill required fields','error');return;} localStorage.setItem('ab_user',JSON.stringify({email:e,name:f})); showToast('Account created! Welcome to Raaha ✦','success'); navigate('/'); }

// ══ CHECKOUT PAGE ════════════════════════════════════════
function renderCheckout() {
  const items = Cart.items;
  if (items.length===0) return `<div class="section" style="padding-top:calc(var(--nav-h)+4rem);text-align:center"><h2 style="font-family:var(--serif)">Your cart is empty</h2><button class="btn btn-gold" style="margin-top:1.5rem" onclick="navigate('/')">Continue Shopping</button></div>`;
  const subtotal=Cart.total(), ship=subtotal>5000?0:199, tax=Math.round(subtotal*.05), total=subtotal+ship+tax;
  return `
  <div class="checkout-page">
    <div class="container">
      <h1 style="font-family:var(--serif);font-size:2.2rem;margin-bottom:2rem">Checkout</h1>
      <div class="checkout-layout">
        <div>
          <!-- Step 1: Address -->
          <div class="checkout-step">
            <h3><span class="step-num">1</span> Delivery Address</h3>
            <div class="form-row">
              <div class="form-group"><label class="form-label">First Name *</label><input type="text" class="form-control" id="co-fname" placeholder="Priya"></div>
              <div class="form-group"><label class="form-label">Last Name *</label><input type="text" class="form-control" id="co-lname" placeholder="Sharma"></div>
            </div>
            <div class="form-group"><label class="form-label">Email Address *</label><input type="email" class="form-control" id="co-email" placeholder="your@email.com"></div>
            <div class="form-group"><label class="form-label">Phone Number *</label><input type="tel" class="form-control" id="co-phone" placeholder="+91 98765 43210"></div>
            <div class="form-group"><label class="form-label">Address Line 1 *</label><input type="text" class="form-control" id="co-addr1" placeholder="Flat No., Building Name, Street"></div>
            <div class="form-group"><label class="form-label">Address Line 2</label><input type="text" class="form-control" id="co-addr2" placeholder="Area, Landmark (optional)"></div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">City *</label><input type="text" class="form-control" id="co-city" placeholder="Mumbai"></div>
              <div class="form-group"><label class="form-label">State *</label>
                <select class="form-control" id="co-state">
                  <option value="">Select State</option>
                  ${['Andhra Pradesh','Delhi','Gujarat','Karnataka','Kerala','Maharashtra','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','West Bengal'].map(s=>`<option>${s}</option>`).join('')}
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Pincode *</label><input type="text" class="form-control" id="co-pin" placeholder="400001" maxlength="6"></div>
              <div class="form-group"><label class="form-label">Country</label><input type="text" class="form-control" value="India" readonly></div>
            </div>
          </div>

          <!-- Step 2: Delivery Type -->
          <div class="checkout-step">
            <h3><span class="step-num">2</span> Delivery Type</h3>
            <div class="delivery-options">
              <label class="delivery-option active" id="del-standard">
                <input type="radio" name="delivery" value="standard" checked onchange="selectDelivery(this.parentElement)">
                <div class="delivery-option__info">
                  <div class="delivery-option__name">Standard Delivery</div>
                  <div class="delivery-option__sub">5–7 business days</div>
                </div>
                <div class="delivery-option__price">${subtotal>5000?'<span style="color:var(--stock-in)">Free</span>':formatPrice(199)}</div>
              </label>
              <label class="delivery-option" id="del-express">
                <input type="radio" name="delivery" value="express" onchange="selectDelivery(this.parentElement)">
                <div class="delivery-option__info">
                  <div class="delivery-option__name">Express Delivery</div>
                  <div class="delivery-option__sub">2–3 business days</div>
                </div>
                <div class="delivery-option__price">${formatPrice(499)}</div>
              </label>
              <label class="delivery-option" id="del-sameday">
                <input type="radio" name="delivery" value="sameday" onchange="selectDelivery(this.parentElement)">
                <div class="delivery-option__info">
                  <div class="delivery-option__name">Same Day Delivery</div>
                  <div class="delivery-option__sub">Order before 12 PM (select cities)</div>
                </div>
                <div class="delivery-option__price">${formatPrice(999)}</div>
              </label>
            </div>
          </div>

          <!-- Step 3: Payment -->
          <div class="checkout-step">
            <h3><span class="step-num">3</span> Payment</h3>
            <div class="payment-tabs">
              <div class="payment-tab active" onclick="switchPayment(this,'card')">💳 Card</div>
              <div class="payment-tab" onclick="switchPayment(this,'upi')">📱 UPI</div>
              <div class="payment-tab" onclick="switchPayment(this,'netbanking')">🏦 Net Banking</div>
              <div class="payment-tab" onclick="switchPayment(this,'cod')">💰 Cash on Delivery</div>
            </div>

            <div id="pay-card">
              <div class="card-icons">
                <div class="card-icon">VISA</div><div class="card-icon">MC</div><div class="card-icon">AMEX</div><div class="card-icon">RuPay</div>
              </div>
              <div class="form-group"><label class="form-label">Card Number</label><input type="text" class="form-control" placeholder="1234  5678  9012  3456" maxlength="19" id="card-num" oninput="fmtCard(this)"></div>
              <div class="form-row">
                <div class="form-group"><label class="form-label">Expiry</label><input type="text" class="form-control" placeholder="MM / YY" maxlength="7" id="card-exp"></div>
                <div class="form-group"><label class="form-label">CVV</label><input type="password" class="form-control" placeholder="•••" maxlength="4" id="card-cvv"></div>
              </div>
              <div class="form-group"><label class="form-label">Name on Card</label><input type="text" class="form-control" placeholder="PRIYA SHARMA" id="card-name" style="text-transform:uppercase"></div>
            </div>
            <div id="pay-upi" style="display:none">
              <div class="form-group"><label class="form-label">UPI ID</label><input type="text" class="form-control" placeholder="yourname@upi" id="upi-id"></div>
              <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:.75rem">
                ${['GPay','PhonePe','Paytm','BHIM'].map(u=>`<button class="btn btn-outline btn-sm">${u}</button>`).join('')}
              </div>
            </div>
            <div id="pay-netbanking" style="display:none">
              <div class="form-group"><label class="form-label">Select Bank</label>
                <select class="form-control">
                  <option>-- Select Your Bank --</option>
                  ${['SBI','HDFC Bank','ICICI Bank','Axis Bank','Kotak Mahindra','Bank of Baroda','Punjab National Bank','Canara Bank','IndusInd Bank'].map(b=>`<option>${b}</option>`).join('')}
                </select>
              </div>
            </div>
            <div id="pay-cod" style="display:none">
              <div style="background:var(--ivory);border-radius:var(--radius-md);padding:1.25rem;border:1.5px solid var(--ivory-dark)">
                <p style="font-size:.9rem;color:var(--charcoal-soft);line-height:1.7">Pay with cash when your order is delivered. Please keep exact change handy. COD available for orders up to ₹50,000.</p>
                <p style="font-size:.82rem;color:var(--charcoal-soft);margin-top:.5rem">Additional ₹50 COD handling fee applies.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h3>Order Summary</h3>
          ${items.map(i=>`
          <div class="order-item">
            <div class="order-item__img"><div style="width:100%;height:100%;background:linear-gradient(135deg,${getProductById(i.id)?.gradient[0]||'#ccc'} 0%,${getProductById(i.id)?.gradient[1]||'#999'} 100%)"></div></div>
            <div style="flex:1">
              <div class="order-item__name">${i.name}</div>
              <div class="order-item__meta">Qty ${i.qty} · ${i.size}</div>
            </div>
            <div class="order-item__price">${formatPrice(i.price*i.qty)}</div>
          </div>`).join('')}
          <hr class="order-divider">
          <div class="promo-row">
            <input type="text" class="form-control promo-input" placeholder="Promo code" id="promo-code">
            <button class="btn btn-outline btn-sm" onclick="applyPromo()">Apply</button>
          </div>
          <div class="order-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          <div class="order-row"><span>Shipping</span><span>${ship===0?'<span style="color:var(--stock-in)">Free</span>':formatPrice(ship)}</span></div>
          <div class="order-row"><span>GST (5%)</span><span>${formatPrice(tax)}</span></div>
          <div class="order-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
          <button class="btn btn-gold btn-full btn-lg" style="margin-top:1.25rem" onclick="placeOrder()">Place Order →</button>
          <p style="font-size:.72rem;color:var(--charcoal-soft);text-align:center;margin-top:.75rem">🔒 Secured by 256-bit SSL encryption</p>
        </div>
      </div>
    </div>
  </div>`;
}

function selectDelivery(el) { document.querySelectorAll('.delivery-option').forEach(d=>d.classList.remove('active')); el.classList.add('active'); }
function switchPayment(tab,type) {
  document.querySelectorAll('.payment-tab').forEach(t=>t.classList.remove('active')); tab.classList.add('active');
  ['card','upi','netbanking','cod'].forEach(t=>{ const el=document.getElementById('pay-'+t); if(el)el.style.display=t===type?'block':'none'; });
}
function fmtCard(inp) { inp.value=inp.value.replace(/\D/g,'').replace(/(.{4})/g,'$1  ').trim(); }
function applyPromo() { const c=document.getElementById('promo-code')?.value; if(c) showToast('Invalid promo code','error'); }
function placeOrder() {
  const f=document.getElementById('co-fname')?.value, e=document.getElementById('co-email')?.value, a=document.getElementById('co-addr1')?.value;
  if(!f||!e||!a) { showToast('Please fill all required fields','error'); return; }
  Cart.clear(); navigate('/order-success');
}

// ══ ORDER SUCCESS ════════════════════════════════════════
function renderOrderSuccess() {
  return `
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem;padding-top:calc(var(--nav-h)+2rem)">
    <div style="max-width:480px">
      <div style="font-size:4rem;margin-bottom:1.5rem">✦</div>
      <h1 style="font-family:var(--serif);font-size:2.5rem;margin-bottom:1rem">Order Placed!</h1>
      <p style="color:var(--charcoal-soft);line-height:1.8;margin-bottom:.5rem">Thank you for shopping with <strong>Raaha Boutique</strong>. Your order has been received and is being prepared with care.</p>
      <p style="color:var(--charcoal-soft);font-size:.875rem;margin-bottom:2rem">A confirmation email will be sent to you shortly.</p>
      <div style="background:var(--ivory);border-radius:var(--radius-md);padding:1.5rem;margin-bottom:2rem">
        <div style="font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:.5rem">Order ID</div>
        <div style="font-family:var(--serif);font-size:1.4rem">#AB-${Math.floor(Math.random()*90000+10000)}</div>
      </div>
      <button class="btn btn-gold btn-lg" onclick="navigate('/')">Continue Shopping</button>
    </div>
  </div>`;
}
