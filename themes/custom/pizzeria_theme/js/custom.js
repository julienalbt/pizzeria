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

    }
  };

})(jQuery, Drupal);
