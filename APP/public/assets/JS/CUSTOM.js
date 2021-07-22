/*===================================
            SERVICES
=====================================*/

$(function()    {

    //animate on scroll
    new WOW().init();
})

/*===================================
            WORK
=====================================*/

$(function()    {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

})

/*===================================
            TEAM
=====================================*/

$(function()    {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 1000,
        loop: true

    });

})

/*===================================
            TESTEMONIAL
=====================================*/

$(function()    {

    $("#customer-testimonial").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true

    });

})


