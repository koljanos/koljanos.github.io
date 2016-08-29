$(document).ready(function() {
  sectionHeight();

});
$(window).on('resize', function() {
  sectionHeight();
});

// Section Height

function sectionHeight() {
  var windowHeight = $(window).height();
  var lastSectHeight = $(window).height() - $('footer').outerHeight() ;
  $("section").css('min-height', windowHeight + 'px');
  $("section.join-sect").css('min-height', lastSectHeight + 'px');

}
// Main Section resize

function mainSectionResize() {
  var imgHeight = $('.outer-div').outerHeight() / 2;
  var imgWidth = $('section.main-sect .section-header img').outerWidth() / 2;
  $("section.main-sect .section-header").css({
    'margin-left': '-' + imgWidth + 'px',
    'margin-top': '-' + imgHeight + 'px',

  });
}

// JCaraousel

(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });



        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
