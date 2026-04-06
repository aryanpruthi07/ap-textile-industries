// script.js - Vanilla JavaScript for AP Textile Industries
// Meets the requirements for JavaScript DOM Manipulation syllabus

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu DOM Manipulation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconPath = document.getElementById('menu-icon-path');

    if (mobileMenuBtn && mobileMenu && menuIconPath) {
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            // Toggle menu visibility
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                // Change icon to 'X' pattern
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                mobileMenu.classList.add('hidden');
                // Change icon back to hamburger pattern
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            }
        });
    }

    // 2. Pre-fill Product Dropdown based on URL Query Parameters (Products Page -> Contact Page)
    const productSelect = document.getElementById('product');
    if (productSelect) {
        // Read URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const requestedProduct = urlParams.get('product');
        
        if (requestedProduct) {
            // Find option and select it
            for (let i = 0; i < productSelect.options.length; i++) {
                if (productSelect.options[i].value === requestedProduct) {
                    productSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    // 3. Form Submission Handling with mailto: fallback
    const contactForm = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent standard page reload

            // Gather inputs
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const product = document.getElementById('product').value;
            const msg = document.getElementById('message').value;

            // Construct email details
            const subject = encodeURIComponent(`New Inquiry from ${name} at ${company || 'Individual'}`);
            
            let bodyContent = `Name: ${name}\n`;
            if (company) bodyContent += `Company: ${company}\n`;
            if (product) bodyContent += `Product of Interest: ${product}\n`;
            bodyContent += `\nMessage:\n${msg}\n`;

            const body = encodeURIComponent(bodyContent);

            // Open user's default email client
            window.location.href = `mailto:aptextileindustries1@gmail.com?subject=${subject}&body=${body}`;

            // Manipulate DOM to show success message and hide form
            formContainer.classList.add('hidden');
            successMessage.classList.remove('hidden');
            successMessage.style.display = 'flex';
        });
    }
});
