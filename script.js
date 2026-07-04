id="w42xmh"
/* =========================
   PAGE NAVIGATION
========================= */

let currentPage = 1;
const totalPages = 13;

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const music =
document.getElementById("bgMusic");

let isPlaying = false;

function toggleMusic(){

    const btn =
    document.querySelector(".music-btn");

    if(!isPlaying){

        music.play();

        music.volume = 0.25;

        btn.innerHTML =
        "❚❚ Pause Music";

        isPlaying = true;

    }else{

        music.pause();

        btn.innerHTML =
        "♪ Play Music";

        isPlaying = false;
    }
}
document
.querySelectorAll(".memory-card")
.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.add("revealed");

        sparkleEffect();

    });

});
function showPage(pageNumber){

    document
    .querySelectorAll(".page")
    .forEach(page => {
        page.classList.remove("active");
    });

    document
    .getElementById(`page${pageNumber}`)
    .classList.add("active");

    updateButtons();
}

function nextPage(){

    if(currentPage === 1 && !isPlaying){

        music.play();

        music.volume = 0.25;

        isPlaying = true;

        const btn =
        document.querySelector(".music-btn");

        if(btn){
            btn.innerHTML =
            "❚❚ Pause Music";
        }
    }

    if(currentPage < totalPages){

        currentPage++;

        sparkleEffect();

        showPage(currentPage);
    }
}

function previousPage(){

    if(currentPage > 1){

        currentPage--;

        sparkleEffect();

        showPage(currentPage);
    }
}

function updateButtons(){

    if(currentPage === 1){
        prevBtn.style.opacity = "0.5";
        prevBtn.disabled = true;
    }else{
        prevBtn.style.opacity = "1";
        prevBtn.disabled = false;
    }

    if(currentPage === totalPages){
        nextBtn.style.opacity = "0.5";
        nextBtn.disabled = true;
    }else{
        nextBtn.style.opacity = "1";
        nextBtn.disabled = false;
    }
}

updateButtons();

/* =========================
   TYPEWRITER EFFECT
========================= */

const text =
"A Beautiful Celebration Created Especially For You";

let charIndex = 0;

function typeWriter(){

    const target =
    document.getElementById("typing");

    if(!target) return;

    if(charIndex < text.length){

        target.innerHTML +=
        text.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter,60);
    }
}

window.addEventListener(
"load",
typeWriter
);

/* =========================
   SAKURA PETALS
========================= */

const petalsContainer =
document.getElementById("petals-container");

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.animationDuration =
    (8 + Math.random() * 7) + "s";

    petal.style.opacity =
    0.5 + Math.random() * 0.5;

    petal.style.transform =
    `scale(${0.6 + Math.random()})`;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },15000);
}

setInterval(createPetal, 300);

/* =========================
   SPARKLE TRANSITION
========================= */

function sparkleEffect(){

    const symbols =
    ["؛༊","؛༊","؛༊","؛༊","؛༊"];

    for(let i=0;i<20;i++){

        const sparkle =
        document.createElement("div");

        sparkle.classList.add("sparkle");

        sparkle.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

        sparkle.style.left =
        Math.random() * 100 + "vw";

        sparkle.style.top =
        Math.random() * 100 + "vh";

        document.body.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.remove();
        },1200);
    }
}

/* =========================
   KEYBOARD NAVIGATION
========================= */

document.addEventListener(
"keydown",
(e)=>{

    if(e.key === "ArrowRight"){
        nextPage();
    }

    if(e.key === "ArrowLeft"){
        previousPage();
    }
});

/* =========================
   TOUCH SWIPE SUPPORT
========================= */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener(
"touchstart",
(e)=>{
    touchStartX =
    e.changedTouches[0].screenX;
});

document.addEventListener(
"touchend",
(e)=>{

    touchEndX =
    e.changedTouches[0].screenX;

    handleSwipe();
});

function handleSwipe(){

    if(touchEndX <
       touchStartX - 50){

        nextPage();
    }

    if(touchEndX >
       touchStartX + 50){

        previousPage();
    }
}
