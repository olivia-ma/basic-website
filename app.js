const storySlide = document.querySelector('.story-slide');
const storyImages = document.querySelectorAll('.story-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = storyImages[counter].clientWidth;

storySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
    if (counter >= 5) return
   storySlide.style.transition = "transform 1s eas-in-out";
   counter++;
   storySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if (counter < 1) return
    storySlide.style.transition = "transform 0.4s eas-in-out";
    counter--;
    storySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
 });

 