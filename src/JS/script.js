$(document).ready(function() {
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('ul.catalog-item_list').on('click', 'li:not(.catalog-item_it_active)', function() {
        $(this)
          .addClass('catalog-item_it_active').siblings().removeClass('catalog-item_it_active');
      });  
});


$('.modal__close').on('click', function() {
  $('.overlay,#order').fadeOut();
});


$('.catalog-item_btn').each(function(i) {
  $(this).on('click', function() {
      $('#order .modal__text').text($('.catalog-item_subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
  })
});