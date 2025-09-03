// Shared components for header, navigation, and footer
const SharedComponents = {
    header: `
        <header>
            <div class="container">
                <p class="subtitle">Visual Perception & Cognitive Psychology @ Williams College</p>
            </div>
        </header>
    `,
    
    navigation: `
        <nav>
            <div class="container">
                <ul>
                    <li><a href="index.html" class="nav-link" data-page="about">About</a></li>
                    <li><a href="research.html" class="nav-link" data-page="research">Research</a></li>
                    <li><a href="people.html" class="nav-link" data-page="people">People</a></li>
                    <li><a href="publications.html" class="nav-link" data-page="publications">Publications</a></li>
                    <li><a href="getting-started.html" class="nav-link" data-page="getting-started">Getting Started</a></li>
                    <li><a href="join-us.html" class="nav-link" data-page="join-us">Join Us</a></li>
                </ul>
            </div>
        </nav>
    `,
    
    footer: `
        <footer>
            <div class="container">
                <p>&copy; 2025 WaveLab, Williams College. All rights reserved.</p>
            </div>
        </footer>
    `
};

// Function to determine current page based on URL
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    switch(filename) {
        case 'index.html':
        case '':
            return 'about';
        case 'research.html':
            return 'research';
        case 'people.html':
            return 'people';
        case 'publications.html':
            return 'publications';
        case 'getting-started.html':
            return 'getting-started';
        case 'join-us.html':
            return 'join-us';
        default:
            return 'about';
    }
}

// Function to set active navigation link
function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize shared components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert shared components
    const headerContainer = document.getElementById('header-container');
    const navContainer = document.getElementById('nav-container');
    const footerContainer = document.getElementById('footer-container');
    
    if (headerContainer) {
        headerContainer.innerHTML = SharedComponents.header;
    }
    
    if (navContainer) {
        navContainer.innerHTML = SharedComponents.navigation;
    }
    
    if (footerContainer) {
        footerContainer.innerHTML = SharedComponents.footer;
    }
    
    // Set active navigation link
    setActiveNavLink();
    
    // Trigger fade-in animation for content
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});