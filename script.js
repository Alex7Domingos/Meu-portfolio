//script jquery

//efeito slide up navegação 
$('#navegacao').slideUp(0).slideDown(1500)

//função owlcarousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
    margin: 15,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }

    }
})






