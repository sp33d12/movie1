 var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
     
    });

     var swiper = new Swiper(".coming-container", {
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      centeredSlides:true,
      breakpoints:{
        0:{
          slidesPerView:4
        },
        
        
      }
     
    });