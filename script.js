// script.js — AP Textile Industries
// Dynamic transitions, animations & DOM manipulation

/* ══════════════════════════════════════════
   1. PAGE TRANSITION (fade between pages)
══════════════════════════════════════════ */
(function () {
    // Inject overlay if not present
    let overlay = document.getElementById('page-transition');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'page-transition';
        document.body.prepend(overlay);
    }

    // Intercept all internal nav links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        // Only internal .html pages
        if (!href || href.startsWith('http') || href.startsWith('#') ||
            href.startsWith('mailto') || href.startsWith('tel') ||
            href.startsWith('https://wa.me') || !href.endsWith('.html')) return;

        // Skip if same page
        if (link.hostname !== location.hostname) return;

        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => {
            window.location.href = href;
        }, 380);
    });

    // Fade in on arrival
    window.addEventListener('pageshow', () => {
        overlay.classList.remove('active');
    });
})();


/* ══════════════════════════════════════════
   2. SCROLL REVEAL (Intersection Observer)
══════════════════════════════════════════ */
(function () {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        revealObserver.observe(el);
    });
})();


/* ══════════════════════════════════════════
   3. STAT COUNTER (scroll-triggered)
══════════════════════════════════════════ */
(function () {
    const duration = 2000;

    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            counter.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else counter.textContent = target;
        }
        requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-counter');
                counters.forEach(c => {
                    c.textContent = '0';
                    animateCounter(c);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    // Observe both stats sections (index & about)
    document.querySelectorAll('section.bg-gold, section.bg-navy').forEach(section => {
        if (section.querySelector('.stat-counter')) {
            counterObserver.observe(section);
        }
    });
})();


/* ══════════════════════════════════════════
   4. NAVBAR — shrink + underline on scroll
══════════════════════════════════════════ */
(function () {
    const header = document.querySelector('header');
    if (!header) return;

    // Add nav-link class for underline effect
    header.querySelectorAll('nav.hidden.md\\:flex a:not([class*="bg-navy"])').forEach(a => {
        a.classList.add('nav-link');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
})();


/* ══════════════════════════════════════════
   5. MOBILE MENU (smooth slide-down)
══════════════════════════════════════════ */
(function () {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconPath = document.getElementById('menu-icon-path');
    if (!btn || !menu) return;

    // Remove Tailwind 'hidden' — use CSS max-height animation instead
    menu.classList.remove('hidden');

    let isOpen = false;
    btn.addEventListener('click', () => {
        isOpen = !isOpen;
        menu.classList.toggle('open', isOpen);
        if (iconPath) {
            iconPath.setAttribute('d', isOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16m-7 6h7');
        }
    });
})();


/* ══════════════════════════════════════════
   6. BUTTON RIPPLE EFFECT
══════════════════════════════════════════ */
(function () {
    function addRipple(e) {
        const btn = e.currentTarget;
        const circle = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.className = 'ripple';
        circle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${e.clientX - rect.left - size / 2}px;
            top: ${e.clientY - rect.top - size / 2}px;
        `;
        btn.appendChild(circle);
        circle.addEventListener('animationend', () => circle.remove());
    }

    // Apply to all buttons and primary CTA links
    document.querySelectorAll('button, a[class*="bg-navy"], a[class*="bg-gold"]').forEach(el => {
        el.classList.add('btn-ripple');
        el.addEventListener('click', addRipple);
    });
})();


/* ══════════════════════════════════════════
   7. BACK TO TOP BUTTON
══════════════════════════════════════════ */
(function () {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>`;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


/* ══════════════════════════════════════════
   8. PARALLAX HERO (subtle depth effect)
══════════════════════════════════════════ */
(function () {
    const heroVideo = document.querySelector('.gradient-hero video');
    if (!heroVideo) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroVideo.style.transform = `scale(-1,1) translateY(${scrolled * 0.25}px)`;
        }
    }, { passive: true });
})();


/* ══════════════════════════════════════════
   9. CONTACT FORM — pre-fill & submit
══════════════════════════════════════════ */
(function () {
    // Pre-fill product from URL query param
    const productSelect = document.getElementById('product');
    if (productSelect) {
        const param = new URLSearchParams(window.location.search).get('product');
        if (param) {
            for (let i = 0; i < productSelect.options.length; i++) {
                if (productSelect.options[i].value === param) {
                    productSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    // Form submission with mailto + DOM success message
    const contactForm = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const product = document.getElementById('product').value;
            const msg = document.getElementById('message').value;

            const subject = encodeURIComponent(`New Inquiry from ${name} at ${company || 'Individual'}`);
            let body = `Name: ${name}\n`;
            if (company) body += `Company: ${company}\n`;
            if (product) body += `Product of Interest: ${product}\n`;
            body += `\nMessage:\n${msg}\n`;

            // Open Gmail compose in a new tab (works on all platforms — bypasses Apple Mail)
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aptextileindustries1@gmail.com&su=${subject}&body=${encodeURIComponent(body)}`;
            window.open(gmailUrl, '_blank');

            formContainer.classList.add('hidden');
            successMessage.classList.remove('hidden');
            successMessage.style.display = 'flex';
        });
    }
})();


/* ══════════════════════════════════════════
   10. IMG ZOOM WRAP — auto-apply
══════════════════════════════════════════ */
(function () {
    // Apply img-zoom-wrap class to product card image containers
    document.querySelectorAll('.card-hover .relative.h-48, .card-hover .md\\:w-2\\/5').forEach(el => {
        el.classList.add('img-zoom-wrap');
    });
})();
