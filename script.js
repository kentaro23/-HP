(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('[data-nav]');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('is-active');
    }
  });

  var toggle = document.querySelector('[data-menu-toggle]');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('is-open');
    });
  }
})();
