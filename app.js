
const IMG1 =document.querySelector('.img1')
const IMG2 =document.querySelector('.img2')
const IMG3 =document.querySelector('.img3')
const IMG4 =document.querySelector('.img4')
const IMG5 =document.querySelector('.img5')
const IMG8 =document.querySelector('.img8')
const IMG7=document.querySelector('.img7')
const IMG6=document.querySelector('.img6')
const thumbnails=document.querySelectorAll('img')
const images = document.querySelectorAll(' img');
const descriptions = document.querySelectorAll('.description');

let isShifted=false
IMG1.addEventListener('click',()=>{
    if(!isShifted){
        IMG1.style. transform='translateX(175%) scale(2) rotate(360deg)translateY(80%)';
        IMG1.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG1.style.transform='translateX(175%)';
        isShifted=false
    }
});
IMG2.addEventListener('click',()=>{
    if(!isShifted){
        IMG2.style. transform='translateX(125%) scale(2) rotate(360deg)translateY(80%)';
        IMG2.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG2.style.transform='translateX(125%)';
        isShifted=false
    }
});
IMG3.addEventListener('click',()=>{
    if(!isShifted){
        IMG3.style. transform='translateX(75%) scale(2) rotate(360deg)translateY(80%)';
        IMG3.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG3.style.transform='translateX(75%)';
        isShifted=false
    }
});
IMG4.addEventListener('click',()=>{
    if(!isShifted){
        IMG4.style. transform='translateX(25%) scale(2) rotate(360deg)translateY(80%)';
        IMG4.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG4.style.transform=' translateX(25%)';
        isShifted=false
    }
});
IMG5.addEventListener('click',()=>{
    if(!isShifted){
        IMG5.style. transform='translateX(125%) scale(2) rotate(360deg)translateY(80%)';
        IMG5.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG5.style.transform= 'translateX(125%)';
        isShifted=false
    }
});
IMG6.addEventListener('click',()=>{
    if(!isShifted){
        IMG6.style.transform='translateX(-25%) scale(2) rotate(360deg)translateY(80%)';
        IMG6.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG6.style.transform='translateX(-25%)';
        isShifted=false
    }
});
IMG7.addEventListener('click',()=>{
    if(!isShifted){
        IMG7.style.transform='translateX(-175%) scale(2) rotate(360deg)translateY(80%)';
        IMG7.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG7.style.transform='translateX(-175%)';
        isShifted=false;
        
    }
});
IMG8.addEventListener('click',()=>{
    if(!isShifted){
        IMG8.style.transform= 'translateX(-325%) scale(2) rotate(360deg)translateY(80%)';
        IMG8.style.transition='transform 0.9s ease';
        isShifted=true
    }else{
        IMG8.style.transform='translateX(-325%)';
        isShifted=false
    }
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('mouseover', () => {
        thumbnail.classList.add('showOpacity');
        if (!isShifted) {
            descriptions[index].classList.remove('invisible');
        } else {
            descriptions[index].classList.add('invisible');
        }
    });

    thumbnail.addEventListener('mouseout', () => {
        thumbnail.classList.remove('showOpacity');
        if (!isShifted ) {
            descriptions[index].classList.add('invisible');
        } else {
            descriptions[index].classList.add('invisible');
        }
    });
});