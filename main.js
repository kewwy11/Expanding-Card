const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeCard();
        card.classList.add('active')
    })
})

function removeCard(){
    cards.forEach(card => {
        card.classList.remove('active')
    });
};