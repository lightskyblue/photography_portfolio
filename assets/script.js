
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

const syncHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 8);
};

syncHeader();
window.addEventListener('scroll', syncHeader);

if (menuButton && mobileMenu) {
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
  });

  document.addEventListener('click', (event) => {
    const clickedLink = event.target.closest('[data-mobile-menu] a');

    if (clickedLink) {
      setMenu(false);
      return;
    }

    if (mobileMenu.classList.contains('is-open')) {
      setMenu(false);
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

const currentFilter = document.querySelector('[data-current-filter]');
const projectCards = document.querySelectorAll('[data-category-item]');
const filterButtons = document.querySelectorAll('[data-filter]');

if (filterButtons.length && projectCards.length) {
  const applyFilter = (value) => {
    filterButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.filter === value);
      button.setAttribute('aria-pressed', String(button.dataset.filter === value));
    });

    projectCards.forEach((item) => {
      const match = value === 'all' || item.dataset.category === value;
      item.classList.toggle('hidden', !match);
    });

    if (currentFilter) {
      currentFilter.textContent = value === 'all'
        ? 'Showing all selected projects.'
        : `Showing ${value} projects.`;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });

  const urlCategory = new URLSearchParams(window.location.search).get('category');
  if (urlCategory && [...filterButtons].some((button) => button.dataset.filter === urlCategory)) {
    applyFilter(urlCategory);
  }
}
