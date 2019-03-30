 window.addEventListener('DOMContentLoaded', () => {

const loadContent = async (url, callback) => {
  await fetch(url) //promise
    .then(response => response.json()) 
    .then(json => createElement(json.goods));

  callback();
}

function createElement(arr) {
  const goodsWrapper = document.querySelector('.goods__wrapper');
  arr.forEach(function(item) {
    let card = document.createElement('div');
    card.classList.add('goods__item');
    card.innerHTML = `
    <img class="goods__img" src="${item.url}" alt="phone">
    <div class="goods__colors">Доступно цветов: 4</div>
    <div class="goods__title">
        ${item.title}
    </div>
    <div class="goods__price">
        <span>${item.price}</span> руб/шт
    </div>
    <button class="goods__btn">Добавить в корзину</button>
    `;
    goodsWrapper.appendChild(card);
  });
}

loadContent('js/db.json', () => {
  const cartWrapper = document.querySelector('.cart__wrapper'),
   cart = document.querySelector('.cart'),
      //кнопка закрытия корзины
   close = document.querySelector('.cart__close'),
      //кнопка открытия корзины
   open = document.querySelector('#cart'),
      //общая стоимость товаров в корзине
    totalCost = document.querySelector('.cart__total > span'),
      //иконка корзины для анимации подтверждения добавления в корзину
    confirm = document.querySelector('.confirm'),
      //бэйджик на иконке корзины для показа количества товаров в корзине
     badge = document.querySelector('.nav__badge'),

      goodsBtn = document.querySelectorAll('.goods__btn'),
      products = document.querySelectorAll('.goods__item'),
      titles = document.querySelectorAll('.goods__title');

    function openCart() {
      //значение по-умолчанию display: none
      cart.style.display = 'block';
      //блокирует прокрутку страницы при открытой корзине
      document.body.overflow = 'hidden';
    }

    function closeCart() {
      cart.style.display = 'none';
      //разблокировка прокрутки страницы
      document.body.overflow = '';
    }

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);
  goodsBtn.forEach(function(btn, i){  //добавление в корзину карточки товара
  	btn.addEventListener('click', () => {
      showConfirm();
	    let item = products[i].cloneNode(true),
		    trigger = item.querySelector('button'),
		    removeBtn = document.createElement('div'),
		    empty = cartWrapper.querySelector('.empty');
    
      trigger.remove();
      removeBtn.classList.add('goods__item-remove');
      removeBtn.innerHTML = '&times';
      item.appendChild(removeBtn);

      cartWrapper.appendChild(item);
        if (empty) {
        empty.style.display = 'none';
      }
      calcGoods();
      calcTotal();
      removeFromCart();
    });
  });//click on add to basket


  titles.forEach(function(item){   //обрезка строк названий
    if (item.textContent.length < 70 ) {
     return;
    } else {
      const str = item.textContent.slice(0, 71) + '...';
      item.textContent = str;
    }
  });

  function showConfirm() {  //анимация при добавлении в корзину
    confirm.style.display = 'block';
    let counter = 100;  //счетчик
    const id = setInterval(frame, 10);
    function frame() {
      if ( counter == 10) {
        clearInterval(id);
        confirm.style.display = 'none';
      } else {
      counter--;
      confirm.style.opacity = '.' + counter;
      confirm.style.transform = `translateY(-${counter}px)`;
      }
    }
  }
  
  function calcGoods() {
    const items = cartWrapper.querySelectorAll('.goods__item');
    badge.textContent = items.length;
    if (items.length == 0) {cartWrapper.querySelector('.empty').style.display = 'block';}
  }

  function calcTotal() {
    const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
    let total = 0;
    prices.forEach(function(item) {
      total += +item.textContent;
    });
    totalCost.textContent = total;
  }

  function removeFromCart() {
    const removeBtn = cartWrapper.querySelectorAll('.goods__item-remove');
    removeBtn.forEach(function(btn) {
      btn.addEventListener('click', () => {
          btn.parentElement.remove();
          calcGoods();
          calcTotal();
      });
    });
  }//function delete from basket

});// function load content

});  //function window onload

/*
const example = {username: "ivan"};

fetch('https://jsonplaceholder.typicode.com/posts', 
  {//две строки внизу - для отправки на сервер
      method: "POST",
      body: JSON.stringify(example)
  }) //promise, то что ниже - для получения
  .then(response => response.json()) //turn to js format if it's ok
  .then(json => console.log(json)) //using data from previous step
//end of fetch */
