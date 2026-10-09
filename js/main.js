// ========================================
// Mobile Navigation
// ========================================

const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.nav-list a');

const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

// 메뉴 상태 변경
const setMenuState = (isOpen) => {
  headerNav.classList.toggle('is-open', isOpen);

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
};

// 메뉴 닫기
const closeMenu = () => {
  setMenuState(false);
};

// 햄버거 버튼 클릭
menuToggle.addEventListener('click', () => {
  const isOpen = headerNav.classList.contains('is-open');

  setMenuState(!isOpen);
});

// 내비게이션 링크 클릭
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// ESC 키 입력
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && headerNav.classList.contains('is-open')) {
    closeMenu();
    menuToggle.focus();
  }
});

// 모바일 → 데스크톱 전환
desktopMediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    closeMenu();
  }
});
