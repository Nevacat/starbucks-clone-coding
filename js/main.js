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


