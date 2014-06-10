(function($){
  Drupal.behaviors.emplementMenu = {
    attach: function (context, settings) {
      $('#page', context).once('asdfasdf', function(){
        var mainNav = responsiveNav('block-system-main-menu');
        if ($('#block-system-user-menu', context).length) {
          var userNav = responsiveNav('block-system-user-menu');
        };
      });
    }
  }
})(jQuery);
