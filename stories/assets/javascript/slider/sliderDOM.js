import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader'

let sliderText = document.querySelector('#slider-text');
let sliderTitle = document.querySelector('#slider-title');
let sliderSubTitle = document.querySelector('#slider-subtitle');
let sliderImage = document.querySelector('#slider-image');
let sliderTextContent = document.querySelector('#slider-text-content');

let arrowRight = document.querySelector('.right-arrow');
let arrowLeft = document.querySelector('.left-arrow');

let slider = new Slider({
    elements,
    animationFunc: function(element){
        sliderTextContent.classList.add('hide');
        sliderImage.classList.add('hide');
        setTimeout(()=>{
            sliderSubTitle.textContent = element.subtitle;
            sliderTitle.textContent = element.title;
            sliderText.textContent = element.text;
            sliderImage.src = element.image;

            sliderTextContent.classList.remove('hide');
            sliderImage.classList.remove('hide');
        },600);
    },
    speed: 5000
});

slider.play();

arrowRight.addEventListener('click',slider.next);
arrowLeft.addEventListener('click',slider.prev);

const imagePath = elements.map(el => el.image);
console.log(imagePath);
Preloader.preloadImages({
    images: imagePath,
    completed: function(){
        document.querySelector(".controls").style.display = 'block';
    }
})

