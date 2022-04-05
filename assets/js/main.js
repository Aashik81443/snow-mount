$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();

    //   fancybox
    $('.fancybox').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    // gallery-slide 
    $('.gallery-slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1
    });

    //testimonial-slider
    $('.testimonial-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(window).resize(function () {
        $('.testimonial-slider')[0].slick.refresh();
    });

    

});