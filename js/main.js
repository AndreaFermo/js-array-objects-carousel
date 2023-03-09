const imagesArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageListDom = document.querySelector('.imageList');

let sliderDom ='';
let inBoxDom ='';

for (let i = 0; i < imagesArray.length; i++) {
    const currentObject = imagesArray[i]

    const myImgWrapper = `<div class="wrapper">
                            <img class="img" src="${currentObject['image']}" alt="">
                            <div class="imgInfo">
                                <h2>${currentObject['title']}</h2>
                                <p>${currentObject['text']}</p>
                            </div>
                        </div>`;

    sliderDom += myImgWrapper;

    const myImgWrapperSmall = `<div class="wrapperSmall">
                                    <img class="img cliccable" src="${currentObject['image']}" alt="">
                                </div>`;

    inBoxDom += myImgWrapperSmall;
}

imageListDom.innerHTML = sliderDom;

const boxNavDom = document.querySelector('.boxNav');

boxNavDom.innerHTML = inBoxDom;

const wrapperDom = document.getElementsByClassName('wrapper');
console.log(wrapperDom)

const wrapperSmallDom = document.getElementsByClassName('wrapperSmall');
console.log(wrapperSmallDom)

let currentImage = 0;

wrapperDom[currentImage].classList.add('block');
wrapperSmallDom[currentImage].classList.add('closeUp');

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');


nextButton.addEventListener('click',
    function() {
       
        if (currentImage < wrapperDom.length - 1) {
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage++;
            wrapperDom[currentImage].classList.add('block');
            wrapperSmallDom[currentImage].classList.add('closeUp');
        } else {
            wrapperDom[0].classList.add('block');
            wrapperSmallDom[0].classList.add('closeUp');
            wrapperDom[wrapperDom.length - 1].classList.remove('block');
            wrapperSmallDom[wrapperDom.length - 1].classList.remove('closeUp');
            currentImage = 0;
        }
    }
); 

prevButton.addEventListener('click',
    function() {
        if (currentImage > 0) {
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage--;
            wrapperDom[currentImage].classList.add('block');
            wrapperSmallDom[currentImage].classList.add('closeUp');
        } else {
            wrapperDom[wrapperDom.length - 1].classList.add('block');
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[wrapperDom.length - 1].classList.add('closeUp');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage = wrapperDom.length - 1;
        }
    }
); 

const clickOnImg = document.getElementsByClassName('cliccable');
console.log(clickOnImg)

for (let i = 0; i < imagesArray.length; i++) {
    clickOnImg[i].addEventListener('click',
    function(){
        wrapperDom[currentImage].classList.remove('block');
        wrapperSmallDom[currentImage].classList.remove('closeUp');
       
        wrapperDom[i].classList.add('block');
        wrapperSmallDom[i].classList.add('closeUp');
        currentImage=i;
    }
    )
}

let idAutoplay = setInterval(goNext, 3000)

let forward = true;


function goNext() {
    if (currentImage < wrapperDom.length - 1) {
        wrapperDom[currentImage].classList.remove('block');
        wrapperSmallDom[currentImage].classList.remove('closeUp');
        currentImage++;
        wrapperDom[currentImage].classList.add('block');
        wrapperSmallDom[currentImage].classList.add('closeUp');
    } else {
        wrapperDom[0].classList.add('block');
        wrapperSmallDom[0].classList.add('closeUp');
        wrapperDom[wrapperDom.length - 1].classList.remove('block');
        wrapperSmallDom[wrapperDom.length - 1].classList.remove('closeUp');
        currentImage = 0;
    }
}


const playButtonDom = document.getElementById('play');
const stopButtonDom = document.getElementById('alt');
const invertButtonDom = document.getElementById('invert');



stopButtonDom.addEventListener('click',
    function() {
        clearInterval(idAutoplay)
        idAutoplay = null;
    }
)


playButtonDom.addEventListener('click',
    function() {
        if (!idAutoplay) {
            idAutoplay = setInterval(goNext, 3000)
        }

    }
)

invertButtonDom.addEventListener('click',
function() {
    if (forward == true) {
        clearInterval(idAutoplay)
        idAutoplay = setInterval(goBack, 3000)
        forward = false;
    } else {
        clearInterval(idAutoplay)
        
        idAutoplay = setInterval(goNext, 3000)
        forward = true;
    }

}
)

function goBack() {
        if (currentImage > 0) {
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage--;
            wrapperDom[currentImage].classList.add('block');
            wrapperSmallDom[currentImage].classList.add('closeUp');
        } else {
            wrapperDom[wrapperDom.length - 1].classList.add('block');
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[wrapperDom.length - 1].classList.add('closeUp');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage = wrapperDom.length - 1;
        }
    }




