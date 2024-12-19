
const scrollableContainer = document.querySelector('.scrol-movie-container');
const navbarRight = document.querySelector('.nav-animation-bar-right');
const navbarLeft = document.querySelector('.nav-animation-bar');



function checkScrollPosition() {
  const scrollPosition = scrollableContainer.scrollLeft;
  const maxScroll = scrollableContainer.scrollWidth - scrollableContainer.clientWidth;

  if (scrollPosition > 0) {
    navbarLeft.classList.add('active');
  } else {
    navbarLeft.classList.remove('active');
  }

  if (scrollPosition < maxScroll) {
    navbarRight.classList.add('active');
  } else {
    navbarRight.classList.remove('active');
  }
}

scrollableContainer.addEventListener('scroll', checkScrollPosition);

checkScrollPosition();


const digts=document.querySelectorAll('.cache-component')
const nums=[1,2,3,4,5,6,7,8,9,10]


digts.forEach((digit,index)=>{
    if(index < nums.length){
        digit.textContent=nums[index]
    }
})
