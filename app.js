
const IMG1 =document.querySelector('.img1');
const IMG2 =document.querySelector('.img2');
const IMG3 =document.querySelector('.img3');
const IMG4 =document.querySelector('.img4');
const IMG5 =document.querySelector('.img5');
const IMG6 =document.querySelector('.img6');
const IMG7=document.querySelector('.img7');
const IMG8=document.querySelector('.img8');
const thumbnails=document.querySelectorAll('img');
const descriptions = document.querySelectorAll( '.description');

function hideAllDescriptions() {
    descriptions.forEach(description => {
        description.classList.add('invisible');
    });
};
let isShifted=false;

thumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener('mouseover', () => {
        thumbnail.classList.add('showOpacity');
        descriptions[index].classList.remove('invisible');
    });

    thumbnail.addEventListener('mouseout', () => {
        thumbnail.classList.remove('showOpacity');
        hideAllDescriptions();
})
});
let isImageExpanded = false; 
function expandImage(imgElement, index) {
    if (!isImageExpanded && !isShifted) { 
        const translateXValue=570+(index*-100)
        imgElement.style.transform = `translateX(${translateXValue}%) scale(1.4) rotate(360deg) translateY(-100%)`;
        imgElement.style.transition = 'transform 0.9s ease';
        isImageExpanded = true;
        isShifted = true; 
    };
};

function restoreImage() {
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.style.transform = '';
    });
    isShifted = false;
    isImageExpanded = false;
};
IMG1.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG1, 0);
        descriptions[0].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    };
});

IMG2.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG2, 1);
        descriptions[1].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});

IMG3.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG3, 2);
        descriptions[2].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});
IMG4.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG4, 3);
        descriptions[3].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});
IMG5.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG5, 4);
        descriptions[4].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});
IMG6.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG6, 5);
        descriptions[5].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});
IMG7.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG7, 6);
        descriptions[6].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});
IMG8.addEventListener('click', () => {
    if (!isShifted) {
        expandImage(IMG8, 7);
        descriptions[7].classList.remove('invisible');
    } else {
        
        isShifted = false;
        restoreImage();
        hideAllDescriptions();
    }
});
