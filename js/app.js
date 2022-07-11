$(document).ready(function(){
    $('.cards').slick({
      dots: false,
      infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
      responsive: [
        {
            breakpoint: 1440,
            settings: {
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
    });
  });

  const burger = document.querySelector('.burger')
  const mobileNav = document.querySelector('.mobile-nav')
  const navMenu = document.querySelector('.nav-list')
  const line = document.querySelector('.line')
  function opacity() {
  burger.addEventListener('click', () => {
    const visibility = mobileNav.getAttribute('data-visible')
    if(visibility === "false") {
      mobileNav.setAttribute("data-visible", true)
    } else if  (visibility === "true") {
      mobileNav.setAttribute("data-visible", false)
    }
    if(visibility === "false") {
      navMenu.setAttribute("data-visible", true)
    } else if  (visibility === "true") {
      navMenu.setAttribute("data-visible", false)
    }
    if(visibility === "false") {
      line.setAttribute("data-visible", true)
    } else if  (visibility === "true") {
      line.setAttribute("data-visible", false)
    }
  })
}


opacity();