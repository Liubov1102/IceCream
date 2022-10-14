
const cardBox = document.querySelector('.products');

cardBox.addEventListener('click', onProductBtnFrontClick);
cardBox.addEventListener('click', onProductBtnClick);

function onProductBtnFrontClick(evt) {
    const isProductCardEl = evt.target.classList.contains('btn-f');
    if (!isProductCardEl) {
       return 
    }
    const parentCard = evt.target.closest('.products-block');
 
    addActiveCard(parentCard);
};

function onProductBtnClick(evt) {
    const isProductCardEl = evt.target.classList.contains('btn-b');
    if (!isProductCardEl) {
       return 
    }
    const parentCard = evt.target.closest('.products-block');
   
    removeActiveCard();
};

function addActiveCard(card) {
  card.classList.add('is-active');
};
  
function removeActiveCard() {
  const currentActiveCard = document.querySelector('.products-block.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
};



