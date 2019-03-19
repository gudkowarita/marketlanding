window.addEventListener('DOMContentLoaded', () => {
    
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
      calcGoods(1);
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
        empty.remove();
      }
    });
  });

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
  
  function calcGoods(i) {
    const items = cartWrapper.querySelectorAll('.goods__item');
    badge.textContent = i + items.length;
  }
  //setTimeOut(function, 1000)
});  //function window onload

//второе видео 1.01.23--чуть пораньше
