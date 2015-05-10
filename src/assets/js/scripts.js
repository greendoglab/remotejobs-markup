(function($) {

    // Tabs
    function Tabs() {
        var tabContainer = $('[data-role="tab"]');

        tabContainer.hide().filter(':first').show();

        $('[data-role="tab-trigger"]').click(function () {
            tabContainer.hide();
            tabContainer.filter(this.hash).fadeIn();
            $('[data-role="tab-trigger"]').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    }

    // document ready
    $(window).on('load', function() {
        Tabs();
    });

    // all initial on window resize
    $(window).on('resize', function() {});


})(jQuery);
