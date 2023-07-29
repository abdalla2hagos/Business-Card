const card = document.querySelector('.card')
const frontBtn = document.querySelector('.flip--front')
const backBtn = document.querySelector('.flip--back')

frontBtn.addEventListener('click', ()=> card.style.transform = 'rotateY(180deg)')

backBtn.addEventListener('click', ()=> card.style.transform = '')