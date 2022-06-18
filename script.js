const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondeCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;

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
}

function unflipcard(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondeCard.classList.remove('flip');
    }, 2000)
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})

