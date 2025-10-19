---
layout: page
title: Server Service 
sidebar: false
---

<script setup>
import { ref } from 'vue'
</script>

<style>
.service-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.service-header {
    text-align: center;
    margin-bottom: 60px;
}

.service-header h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 15px;
}

.service-header p {
    font-size: 1.2em;
    color: var(--vp-c-text-2);
}

.pricing-grid {
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-bottom: 60px;
    flex-wrap: wrap;
}

.price-card {
    background: var(--vp-c-bg-soft);
    border: none;
    border-radius: 12px;
    padding: 35px 25px;
    position: relative;
    flex: 0 1 400px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    min-height: 550px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.price-card.featured {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.price-badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: var(--vp-c-brand-1);
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.75em;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.price-icon {
    font-size: 3em;
    margin-bottom: 25px;
    text-align: center;
}

.price-name {
    font-size: 1.8em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 25px;
}

.price-amount {
    font-size: 2.5em;
    font-weight: 700;
    color: var(--vp-c-brand-1);
    text-align: center;
    margin-bottom: 5px;
}

.price-period {
    text-align: center;
    color: var(--vp-c-text-2);
    font-size: 0.9em;
    margin-top: 5px;
    margin-bottom: 25px;
}

.price-features {
    list-style: none;
    padding: 0;
    margin: 25px 0;
    flex-grow: 1;
}

.price-features li {
    padding: 10px 0;
    color: var(--vp-c-text-2);
    display: flex;
    align-items: flex-start;
}

.price-features li::before {
    content: '✓';
    color: var(--vp-c-brand-1);
    font-weight: 700;
    margin-right: 10px;
    font-size: 1.2em;
    flex-shrink: 0;
}

.price-btn {
    width: 100%;
    padding: 12px 24px;
    background: var(--vp-c-brand-1);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    display: block;
    text-align: center;
    margin-top: 20px;
}

.price-btn:hover {
    background: var(--vp-c-brand-2);
    transform: scale(1.02);
}

.section-divider {
    max-width: 100%;
    height: 1px;
    background: var(--vp-c-divider);
    margin: 80px auto;
}

.trust-badges {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin: 50px 0 80px;
    padding: 0 20px;
}

.trust-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: transform 0.2s ease;
}

.trust-item:hover {
    transform: translateY(-3px);
}

.trust-icon {
    font-size: 2em;
    transition: transform 0.2s ease;
}

.trust-item:hover .trust-icon {
    transform: scale(1.1);
}

.trust-text {
    font-size: 0.9em;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

.provider-wrapper {
    margin-top: 20px;
    text-align: center;
}

.provider-wrapper h2 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 40px;
}

.provider-box {
    max-width: 700px;
    margin: 0 auto;
    background: var(--vp-c-bg-soft);
    border: none;
    border-radius: 12px;
    padding: 40px 30px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.provider-logo-img {
    width: auto;
    height: 100px;
    margin: 0 auto 25px;
    display: block;
}

.provider-name {
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 12px;
}

.provider-desc {
    font-size: 1.1em;
    color: var(--vp-c-text-2);
    margin-bottom: 25px;
}

.provider-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.provider-btn {
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.provider-btn.primary {
    background: var(--vp-c-brand-1);
    color: white;
}

.provider-btn.primary:hover {
    background: var(--vp-c-brand-2);
}

.provider-btn.secondary {
    background: var(--vp-c-bg-alt);
    color: var(--vp-c-text-1);
    border: none;
}

.provider-btn.secondary:hover {
    transform: translateY(-2px);
}

/* ========================================
   Responsive Breakpoints
   Based on BREAKPOINTS constants
   ======================================== */

/* Small Mobile - max 640px (BREAKPOINTS.SMALL_DEVICES_MIN) */
@media (max-width: 640px) {
    .service-header h1 {
        font-size: 1.8em;
        line-height: 1.2;
    }
    
    .service-header p {
        font-size: 1em;
    }
    
    .pricing-grid {
        gap: 20px;
    }
    
    .price-card {
        padding: 25px 20px;
        min-height: auto;
    }
    
    .price-icon {
        font-size: 2.5em;
        margin-bottom: 20px;
    }
    
    .price-name {
        font-size: 1.5em;
        margin-bottom: 20px;
    }
    
    .price-amount {
        font-size: 2em;
    }
    
    .price-badge {
        font-size: 0.65em;
        right: 15px;
    }
    
    .trust-badges {
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        display: grid;
    }
    
    .trust-icon {
        font-size: 1.6em;
    }
    
    .trust-text {
        font-size: 0.8em;
    }
    
    .provider-box {
        padding: 25px 15px;
    }
    
    .provider-logo-img {
        height: 80px;
    }
    
    .provider-name {
        font-size: 1.5em;
    }
    
    .provider-desc {
        font-size: 1em;
    }
    
    .provider-actions {
        flex-direction: column;
        width: 100%;
    }
    
    .provider-btn {
        width: 100%;
        justify-content: center;
    }
}

/* Tablet - 768px to 1023px (BREAKPOINTS.TABLET_MIN to TABLET_MAX) */
@media (min-width: 768px) and (max-width: 1023px) {
    .service-header h1 {
        font-size: 2.2em;
    }
    
    .pricing-grid {
        gap: 25px;
    }
    
    .price-card {
        flex: 0 1 350px;
        max-width: 380px;
    }
    
    .trust-badges {
        gap: 30px;
    }
    
    .provider-box {
        max-width: 650px;
    }
}

/* Mobile & Tablet - max 1023px */
@media (max-width: 1023px) {
    .pricing-grid {
        flex-direction: column;
        align-items: center;
    }
    
    .price-card {
        width: 100%;
        max-width: 500px;
    }
    
    .section-divider {
        margin: 60px auto;
    }
}

/* Large Desktop - min 1200px (BREAKPOINTS.LARGE_DESKTOP_MIN) */
@media (min-width: 1200px) {
    .service-wrapper {
        max-width: 1280px;
    }
    
    .pricing-grid {
        gap: 40px;
    }
    
    .price-card {
        flex: 0 1 420px;
        max-width: 480px;
    }
    
    .provider-box {
        max-width: 800px;
        padding: 50px 40px;
    }
}
</style>

<div class="service-wrapper">
<div class="service-header">
<h1>Server Service</h1>
<p>Professional server setup for your RedM project</p>
</div>

<div class="pricing-grid">
<div class="price-card">
<div class="price-icon">🎯</div>
<div class="price-name">Standard</div>
<div class="price-amount">50€</div>
<div class="price-period">One-time payment</div>
<ul class="price-features">
<li>Setting up the FXServer</li>
<li>Setting up the database</li>
<li>Installing the framework</li>
<li>Basic configuration</li>
</ul>
<a href="https://iceline-hosting.com/spooni" target="_blank" rel="noopener noreferrer" class="price-btn">Get Started</a>
</div>
<div class="price-card featured">
<div class="price-badge">⭐ POPULAR</div>
<div class="price-icon">💎</div>
<div class="price-name">Premium</div>
<div class="price-amount">100€</div>
<div class="price-period">One-time payment</div>
<ul class="price-features">
<li>Everything from&nbsp;<strong>Standard</strong></li>
<li>Custom request implementation</li>
<li>Advanced optimization</li>
<li>Post-setup assistance</li>
</ul>
<a href="https://iceline-hosting.com/spooni" target="_blank" rel="noopener noreferrer" class="price-btn">Get Started</a>
</div>
</div>

<div class="trust-badges">
<div class="trust-item">
<div class="trust-icon">⚡</div>
<div class="trust-text">Fast implementation</div>
</div>
<div class="trust-item">
<div class="trust-icon">🛡️</div>
<div class="trust-text">Secure & reliable</div>
</div>
<div class="trust-item">
<div class="trust-icon">💬</div>
<div class="trust-text">Discord support</div>
</div>
<div class="trust-item">
<div class="trust-icon">✨</div>
<div class="trust-text">Professional quality</div>
</div>
</div>

<div class="section-divider"></div>

<div class="provider-wrapper">
<h2>Recommended Server Provider</h2>
<div class="provider-box">
<img src="/iceline.webp" alt="Iceline Hosting" class="provider-logo-img">
<div class="provider-name">Iceline Hosting</div>
<div class="provider-desc">Simplified server hosting, at any scale.</div>
<div class="provider-actions">
<a href="https://iceline-hosting.com/" target="_blank" rel="noopener noreferrer" class="provider-btn primary">Get your server</a>
<a href="https://discord.gg/knVH9SYB4g" target="_blank" rel="noopener noreferrer" class="provider-btn secondary">Join Discord</a>
</div>
</div>
</div>
</div>
