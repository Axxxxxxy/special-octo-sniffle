document.addEventListener('DOMContentLoaded', function () {
  const tabService = document.querySelector('.tab-service');
  const tabMenu = document.querySelector('.tab-menu');
  const serviceView = document.querySelector('.service-view');
  const menuView = document.querySelector('.menu-view');

  function setActiveTab(tab) {
    tabService.classList.remove('active');
    tabMenu.classList.remove('active');
    tabService.querySelector('img').src = 'images/tab_service.png';
    tabMenu.querySelector('img').src = 'images/tab_menu.png';

    if (tab === 'service') {
      tabService.classList.add('active');
      tabService.querySelector('img').src = 'images/tab_service_active.png';
      serviceView.classList.remove('hidden');
      menuView.classList.add('hidden');
    } else {
      tabMenu.classList.add('active');
      tabMenu.querySelector('img').src = 'images/tab_menu_active.png';
      serviceView.classList.add('hidden');
      menuView.classList.remove('hidden');
    }
  }

  tabService.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveTab('service');
  });

  tabMenu.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveTab('menu');
  });

  setActiveTab('service');
});
