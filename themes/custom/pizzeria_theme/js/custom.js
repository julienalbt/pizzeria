/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.pizzeria_theme = {
    attach: function(context, settings) {

      // Custom code here
      $('.is-active').parents('li').addClass('is-active');

      $(document).on('click', 'a[href*=#]:not([href=#])', function($) {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length){
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 4000);
            //return false;
          }
        }})




    }
  };

})(jQuery, Drupal);
