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
const typingStrings = (typeof portfolioData !== 'undefined' && portfolioData.typingStrings)
    ? portfolioData.typingStrings
    : ["Full Stack Web Applications", "Node.js & Express APIs", "Responsive UI Interfaces"];

if (document.querySelector(".text") && typeof Typed !== "undefined") {
    new Typed(".text", {
        strings: typingStrings,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// ==========================================================================
// 3. RENDER PROJECTS FROM DATA.JS & CATEGORY FILTER
// ==========================================================================
const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
    if (!projectsGrid || typeof portfolioData === 'undefined' || !portfolioData.projects) return;

    projectsGrid.innerHTML = portfolioData.projects.map(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        return `
            <div class="project-card" data-category="${project.category}">
                <div class="project-banner">
                    <i class='bx ${project.icon || 'bx-code-alt'}'></i>
                </div>
                <div class="project-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link-btn"><i class='bx bxl-github'></i> Code Repo</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" class="project-link-btn"><i class='bx bx-link-external'></i> ${project.demoText || 'Live Demo'}</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Call render function
renderProjects();

const filterBtns = document.querySelectorAll('.filter-btn');

function initFilterEvents() {
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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
}

initFilterEvents();

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
            toastMsg.textContent = `ขอบคุณครับคุณ ${name}! ข้อความของคุณถูกส่งเรียบร้อยแล้ว`;
            toastMsg.classList.add('show');

            setTimeout(() => {
                toastMsg.classList.remove('show');
            }, 4000);
        }

        contactForm.reset();
    });
}
