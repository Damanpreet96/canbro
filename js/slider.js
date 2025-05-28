$(document).ready(function(){
    $('.projetos-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        
      
       // slider responsivo 
        responsive: [
        {
            breakpoint: 1121,
            settings: {
                slidesToShow: 2,
                autoplay: true,
                adaptiveHeight: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                adaptiveHeight: true,
            }
        }
        ]  
         
    });

});  