// ==========================================================================
// 1. MOBILE MENU TOGGLE
// ==========================================================================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };
}

// Close menu when clicking nav links on mobile
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove("bx-x");
            navbar.classList.remove("active");
        }
    });
});

// ==========================================================================
// 2. DYNAMIC TYPED.JS EFFECT
// ==========================================================================
if (document.querySelector(".text") && typeof Typed !== "undefined") {
    new Typed(".text", {
        strings: [
            "Full Stack Web Applications",
            "Node.js & Express APIs",
            "Responsive UI Interfaces",
            "ICT Solutions @ PSU"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// ==========================================================================
// 3. PROJECT CATEGORY FILTER
// ==========================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 200);
            }
        });
    });
});

// ==========================================================================
// 4. SCROLL TO TOP & ACTIVE NAVIGATION HIGHLIGHT
// ==========================================================================
const scrollTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Active navigation link on scroll using Intersection Observer
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ==========================================================================
// 5. INTERACTIVE CONTACT FORM & TOAST NOTIFICATION
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const toastMsg = document.getElementById('toast-msg');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;

        // Display success toast message
        if (toastMsg) {
            toastMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
            toastMsg.classList.add('show');

            setTimeout(() => {
                toastMsg.classList.remove('show');
            }, 4000);
        }

        contactForm.reset();
    });
}
