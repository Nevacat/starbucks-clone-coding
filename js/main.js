//// Header Sub Menu Search
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchEl.setAttribute('placeholder','');
});

//// Header Badges
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(
  function(){
    if (window.scrollY>500){
      gsap.to(badgeEl, 0.6, {
        opacity:0,
        display:"none"
      })
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity:1,
        display:"block"
      })
    }
  },300))


  //// VISUAL FADE-IN

  const fadeEls = document.querySelectorAll('.visual .fade-in');
  
  fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1,{
      delay:(index+1) * 0.5,
      opacity: 1
    });
  });

  //// NOTICE SWIPER

new Swiper('.notice-line .swiper-container',{
  direction:'vertical',
  autoplay: true,
  loop: true
});

////PROMOTION SWIPER

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

////PROMOTION TOGGLE

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
})

////AWARDS
new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween: 30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

////FLOATING ICON

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay,size){
  gsap.to(selector,random(1.5, 2.5), {
    y: size,
    repeat: -1, 
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

////SCROLL MAGIC

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();