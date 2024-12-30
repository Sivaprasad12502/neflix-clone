
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


// const digts=document.querySelectorAll('.cache-component')
// const nums=[1,2,3,4,5,6,7,8,9,10]


// digts.forEach((digit,index)=>{
//     if(index < nums.length){
//         digit.textContent=nums[index]
//     }
// })


const contentUl = document.querySelectorAll('.faq-que');

contentUl.forEach(toggle=>{
  toggle.addEventListener('click',()=>{
    const parent = toggle.parentNode;

    if(parent.classList.contains('show')){
      parent.classList.remove('show')
    }else{
      hideAll();
      parent.classList.add('show');
    }
  })
});

function hideAll  () {
  contentUl.forEach(content=>{
    content.parentNode.classList.remove('show');
  })
}


const inputval=document.querySelectorAll('.email-feild');

inputval.forEach(input =>{
  const validChecker = input.closest('.field-container-dv').querySelector('.valid-checker');



  input.addEventListener('input',()=>{
    const value=input.value;
    validChecker.innerHTML="";

    if(value === ""){
      validChecker.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path>
      </svg>
      Email is required.`;
    }
    else if(!value.includes('@gmail.com')){
      validChecker.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="CircleXSmall" aria-hidden="true">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path>
      </svg>
      Please enter a valid email address.`;
    }
    
  })
})

inputval.forEach(input=>{

  const label=input.nextElementSibling;

  input.addEventListener('input', () => {
    if (input.value !== "") {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  })
})

const buttonEl=document.querySelector('.floating-btn')
window.addEventListener('scroll',scrollBtn)

function scrollBtn() {
  const scrollPosition = window.scrollY;
  const height = buttonEl.offsetHeight;
  if (scrollPosition > height + 500) {
    buttonEl.classList.add('active');
} else if (scrollPosition > height + 150) {
    buttonEl.classList.remove('active');
} else {
    buttonEl.classList.remove('active');
}
}

const marketSelect=document.querySelector('.market-select')
const contentslect=document.querySelector('.content-select')

function updateContentOptions(){
  contentslect.innerHTML=''

  if(marketSelect.value==="India"){
    const indaiOptions=[
      {value:'Movies', label:'Movies'},
      {value:'TV Shows', label:'TV Shows'},
    ]
    indaiOptions.forEach(option=>{
      const opt=document.createElement('option')
      opt.value=option.value;
      opt.label=option.label;
      contentslect.appendChild(opt)
    })
  }else{
    const globalOptions=[
          { value: 'Movies - English', label: 'Movies - English' },
          { value: 'Movies - Other languages', label: 'Movies - Other languages' },
          { value: 'TV Shows - English', label: 'TV Shows - English' },
          { value: 'TV Shows - Other languages', label: 'TV Shows - Other languages' },
    ]
    globalOptions.forEach(option =>{
      const opt=document.createElement('option');
      opt.value=option.value
      opt.label=option.label
      contentslect.appendChild(opt)
    })
  }

}
marketSelect.addEventListener('change',updateContentOptions);
updateContentOptions()


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const movieContainer = document.querySelector('.scrol-movie-container');
    const selectBox=document.getElementById(':R59n75at4l:')
    const secondselctBox=document.querySelectorAll('.content-select')
    const movieList = data.movie;

    const displayMovies=(category)=>{
      movieContainer.innerHTML=""
      const selectedMovies=data[category]
      selectedMovies.forEach((movie, index) => {
        const movieIndex = index + 1
  
        const movieItemHTML = `
          <li class="movie-list-ekim">
            <button class="movie-element">
              <div class="movie-element-ekc">
                <div class="movie-animation"></div>
                <span
                  class="movie-component"
                  style="
                    background-image: url(${movie.image});
                  "
                ></span>
                Mary
              </div>
              <span class="letter-component">
                <span class="null-span">
                  <span class="urx"></span>
                  <span class="cache-component">${movieIndex}</span>
                </span>
              </span>
            </button>
          </li> -->
        `;
  
        movieContainer.innerHTML += movieItemHTML;
      });
    }
    displayMovies("India")
    selectBox.addEventListener('change',(event)=>{
      displayMovies(event.target.value)
    })
    secondselctBox.forEach((en)=>{
      addEventListener('change',(event)=>{
        displayMovies(event.target.value)
      })
    })


  })
  .catch(error => {
    console.error('Error loading the JSON file:', error);
  });
