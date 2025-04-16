// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to menu items when they come into view
const menuItems = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

menuItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(item);
});

// Order button functionality
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.parentElement.querySelector('h3').textContent;
        alert(`${itemName} сонголтонд баярлалаа! Манай дэлгүүрт хүрэлцэн ирж захиалга өгнө үү.`);
    });
});

// Gallery Image Modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <img src="" alt="" class="modal-img">
        <p class="modal-caption"></p>
    </div>
`;
document.body.appendChild(modal);

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay p');
        modal.querySelector('.modal-img').src = img.src;
        modal.querySelector('.modal-caption').textContent = caption.textContent;
        modal.style.display = 'flex';
    });
});

modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Add modal styles
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    .modal-img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 10px;
    }
    .modal-caption {
        color: white;
        text-align: center;
        margin-top: 1rem;
        font-size: 1.2rem;
    }
    .close-modal {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Social Media Share Buttons
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.querySelector('i').className.split(' ')[1];
        let shareUrl = '';
        
        switch(platform) {
            case 'fa-facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                break;
            case 'fa-instagram':
                shareUrl = 'https://www.instagram.com/';
                break;
            case 'fa-tiktok':
                shareUrl = 'https://www.tiktok.com/';
                break;
            case 'fa-whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent('Check out Sweet Bubbles Tea Shop! ' + window.location.href)}`;
                break;
        }
        
        window.open(shareUrl, '_blank');
    });
});

// Add scroll animation for gallery items
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    galleryObserver.observe(item);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navContainer = document.querySelector('.nav-container');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navContainer.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navContainer.classList.remove('active');
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
        }
    });
}); 