$(document).ready(function () {
  /**
   * Sidebar Dropdown
   */
  $('.nav-dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });

  // open sub-menu when an item is active.
  $('ul.nav').find('a.active').parent().parent().parent().addClass('open');

  /**
   * Sidebar Toggle
   */
  $('.sidebar-toggle').on('click', function (e) {
    console.log("click");
    e.preventDefault();
    $('div.main-wrapper').toggleClass('sidebar-hidden');

  });

  /**
   * Mobile Sidebar Toggle
   */
  $('.sidebar-mobile-toggle').on('click', function () {
    console.log("click");
    $('div.main-wrapper').toggleClass('sidebar-mobile-show');

  });
});
