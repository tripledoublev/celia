document.addEventListener('DOMContentLoaded', function() {
  // Get all language switcher links
  const langSwitchers = document.querySelectorAll('.lang-links a, .desktop-lang-links a');
  
  // Add event listeners to language switcher links
  langSwitchers.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only handle links that have explicit paths, not those using the alternate_url filter
      if (!this.href.includes('alternate_url')) {
        e.preventDefault();
        
        const targetLang = this.textContent.toLowerCase();
        const currentUrl = window.location.pathname;
        const siteBaseUrl = document.querySelector('meta[name="site-baseurl"]')?.content || '';
        
        // Strip baseurl from current path if present
        const normalizedPath = currentUrl.replace(new RegExp(`^${siteBaseUrl}`), '');
        
        // Handle root URL
        if (normalizedPath === '/' && targetLang === 'en') {
          window.location.href = siteBaseUrl + '/en/';
          return;
        }
        
        // Handle lang homepage URLs
        if (normalizedPath === '/en/bio/' && targetLang === 'fr') {
          window.location.href = siteBaseUrl + '/bio/';
          return;
        }
        
        if (normalizedPath === '/bio/' && targetLang === 'en') {
          window.location.href = siteBaseUrl + '/en/bio/';
          return;
        }
        
        // Handle individual project pages (has a project name after /projects/)
        if (normalizedPath.includes('/projects/') && 
            !normalizedPath.endsWith('/projects/')) {
          // Extract the project name from the URL
          const urlParts = normalizedPath.split('/');
          const projectName = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];
          
          // Keep individual project pages at /projects/[name]
          window.location.href = siteBaseUrl + `/projects/${projectName}`;
          return;
        }
        
        // Handle other pages
        if (normalizedPath.includes('/press/') || normalizedPath.includes('/presse/')) {
          if (targetLang === 'fr') {
            window.location.href = siteBaseUrl + '/presse/';
          } else {
            window.location.href = siteBaseUrl + '/en/press/';
          }
          return;
        }
        
        // Handle project listing pages
        if (normalizedPath === '/projets/' || normalizedPath === '/en/projects/') {
          // Always go to /projets/ for French, /en/projects/ for English
          window.location.href = targetLang === 'fr' ? siteBaseUrl + '/projets/' : siteBaseUrl + '/en/projects/';
          return;
        }
        
        // Default fallback to the language homepage
        window.location.href = targetLang === 'fr' ? siteBaseUrl + '/' : siteBaseUrl + '/en/';
      }
    });
  });
}); 