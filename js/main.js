/**
 * Fungsi utilitas untuk memuat komponen HTML eksternal (contoh: navbar, footer) 
 * lalu memasukkannya ke dalam div target (berdasarkan ID).
 * Ini membantu modulasi file HTML agar terhindar dari duplikasi kode header/footer.
 * 
 * @param {string} id - ID dari div target untuk penampung HTML
 * @param {string} file - Path dari file HTML sumber (contoh: 'components/navbar.html')
 */
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    el.innerHTML = await res.text();
  } catch (e) {
    console.warn('Gagal memuat komponen:', file, e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Load komponen yang tersedia
  loadComponent('navbar-placeholder', 'components/navbar.html');
  loadComponent('sidebar-placeholder', 'components/sidebar.html');
  loadComponent('footer-placeholder', 'components/footer.html');

  // Highlight nav link aktif berdasarkan URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
