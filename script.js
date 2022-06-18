const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondeCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondeCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondeCard.dataset.card){
        disableCards();
        return;
    }
    unflipcard();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondeCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipcard(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondeCard.classList.remove('flip');

        resetBoard();
    }, 2000)
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondeCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})(); /* Imediatly invoked function */

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})