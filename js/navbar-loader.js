// Navbar loader with path fixes
function loadNavbar(containerId, navPath) {
  fetch(navPath)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      container.innerHTML = html;
      
      // Calculate path depth from current page to root
      const currentPath = window.location.pathname;
      const pathParts = currentPath.split('/').filter(p => p);
      // If path ends with .html, exclude it from depth calculation
      const depth = pathParts.length - (currentPath.endsWith('.html') ? 1 : 0);
      const prefix = depth > 0 ? '../'.repeat(depth) : '';
      
      // Fix all relative internal links (not http/https/#/mailto:)
      container.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/') && !href.startsWith('mailto:')) {
          link.setAttribute('href', prefix + href);
        }
      });
      
      // Initialize Bootstrap dropdowns if Bootstrap is loaded
      if (typeof bootstrap !== 'undefined') {
        setTimeout(() => {
          const dropdownElementList = [].slice.call(container.querySelectorAll('.dropdown-toggle'));
          dropdownElementList.forEach(function (dropdownToggleEl) {
            try {
              new bootstrap.Dropdown(dropdownToggleEl);
            } catch(e) {
              // Dropdown already initialized, ignore
            }
          });
        }, 50);
      }
    })
    .catch(err => console.error('Error loading navbar:', err));
}

