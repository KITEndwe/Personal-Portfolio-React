/* ---------------------------------About----------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*-------------------------Mobile Menu-------------------------*/
var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.querySelector('.fa-bars');
var closeIcon = document.querySelector('.fa-times');

function openmenu(){
    sidemenu.classList.add("active");
    if (menuIcon) menuIcon.style.display = "none";
    if (closeIcon) closeIcon.style.display = "block";
}

function closemenu(){
    sidemenu.classList.remove("active");
    if (menuIcon) menuIcon.style.display = "block";
    if (closeIcon) closeIcon.style.display = "none";
}

// Close menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', () => {
        closemenu();
    });
});

// Close menu when clicking outside on mobile/tablet
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!e.target.closest('nav') && sidemenu.classList.contains('active')) {
            closemenu();
        }
    }
});

// ---------------------------Connect Form------------
const connectBtn = document.querySelector("#conn");
const connectForm = document.querySelector(".conn");
const closeBtn = document.querySelector("#cancele");

if (connectBtn && connectForm && closeBtn) {
    connectBtn.addEventListener("click", () => {
        connectForm.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        connectForm.classList.remove("active");
    });

    // Close form when clicking outside
    connectForm.addEventListener("click", (e) => {
        if (e.target === connectForm) {
            connectForm.classList.remove("active");
        }
    });
}

// Form submission
if (document.getElementById("connect-form")) {
    document.getElementById("connect-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        this.reset();
        if (connectForm) connectForm.classList.remove("active");
    });
}

// Contact form submission
if (document.querySelector("#contact form")) {
    document.querySelector("#contact form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        this.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // Reset menu state on larger screens
        if (sidemenu) sidemenu.classList.remove("active");
        if (menuIcon) menuIcon.style.display = "none";
        if (closeIcon) closeIcon.style.display = "none";
    } else {
        // Reset to default mobile/tablet state
        if (menuIcon) menuIcon.style.display = "block";
        if (closeIcon) closeIcon.style.display = "none";
        if (sidemenu) sidemenu.classList.remove("active");
    }
});

// Initialize on load
window.addEventListener('load', function() {
    // Set initial state based on screen size
    if (window.innerWidth <= 768) {
        // Mobile/tablet view - show hamburger, hide close icon
        if (menuIcon) menuIcon.style.display = "block";
        if (closeIcon) closeIcon.style.display = "none";
    } else {
        // Desktop view - hide both icons
        if (menuIcon) menuIcon.style.display = "none";
        if (closeIcon) closeIcon.style.display = "none";
    }
});