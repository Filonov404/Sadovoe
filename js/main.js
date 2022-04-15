$(function() { // Dropdown toggle
    $('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
    });

    $(".burger-menu ").on("click", ".bar", function () {
        $(".menu").slideToggle();
        $(".bar").toggleClass("change");
        $(".menu li").slide();
    });

    $(document).click(function(e)
    {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle'))
        { $('.dropdown').slideUp(); }
    });

    $(".slider-box").slick({
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        lazyLoad: 'ondemand'
    });
});