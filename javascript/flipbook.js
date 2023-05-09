// References to DOM elements 
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');
const text = document.querySelector('#text')

const paper1 = document.querySelector('#p1')
const paper2 = document.querySelector('#p2')
const paper3 = document.querySelector('#p3')
const paper4 = document.querySelector('#p4')
const paper5 = document.querySelector('#p5')
const paper6 = document.querySelector('#p6')
const paper7 = document.querySelector('#p7')

// Event listeners 
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic 
let currentState = 1;
let numOfPapers = 7;
let maxState = numOfPapers + 1;


function openBook() {
    text.style.transition = "0.5s";
    text.style.transform = "translateY(-60px)";
    book.style.transform = "translateY(240px)";
    nextBtn.style.transition = "transfrom 0.5s";
    prevBtn.style.transition = "transfrom 0.5s";
    nextBtn.style.transform = "translateY(220px)";
    prevBtn.style.transform = "translateY(220px)";
    flipbookdiv.style.height = "700px";


}

function closeBook() {

    prevBtn.style.transition = "transform 0.5s";
    nextBtn.style.transition = "transform 0.5s";
    flipbookdiv.style.transition = "0.5s";
    prevBtn.style.transform = "translateY(30px)";
    nextBtn.style.transform = "translateY(30px)";
    flipbookdiv.style.height = "400px";
    text.style.transform = "translateY(-60px)";
    // book.style.transform = "translateY(-60px)"; 
}

function hehe() {
    prevBtn.style.transition = "transform 0.5s";
    nextBtn.style.transition = "transform 0.5s";
    // flipbookdiv.style.transition = "height 0.5s";
    prevBtn.style.transform = "translateY(30px)";
    nextBtn.style.transform = "translateY(30px)";
    flipbookdiv.style.height = "400px";
    book.style.transform = "translateY(-60px)";
    // text.style.transform = "translateY(0px)"; 
}


function goNext() {
    if (currentState < maxState) {
        switch (currentState) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            // case 7:
            //     paper7.classList.add("flipped");
            //     paper7.style.zIndex = 7;
            //     break;
            case 7:
                // closeBook(false); 
                prevBtn.style.transition = "transform 0.5s";
                nextBtn.style.transition = "transform 0.5s";
                // flipbookdiv.style.transition = "height 0.5s";
                prevBtn.style.transform = "translateY(25px)";
                nextBtn.style.transform = "translateY(25px)";
                flipbookdiv.style.height = "400px"
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            default:
                throw new Error("unkown state");
        }

        currentState++;
        console.log(currentState)
    }
}

function goPrevious() {
    if (currentState > 1) {
        console.log(currentState)
        switch (currentState) {
            case 2:
                hehe(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 7;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                break;
            case 8:
                openBook()
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
                break;
        }

        currentState--;
    }
}