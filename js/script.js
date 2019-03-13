
    
    const cartWrapper = document.querySelector('.cart__wrapper'),
      cart = document.querySelector('.cart'),
      //кнопка закрытия корзины
      cartClose = document.querySelector('.cart__close'),
      //кнопка открытия корзины
      cartOpen = document.querySelector('#cart'),
      //общая стоимость товаров в корзине
      cartTotalCost = document.querySelector('.cart__total > span'),
      //иконка корзины для анимации подтверждения добавления в корзину
      aniCartIcon = document.querySelector('.confirm'),
      //бэйджик на иконке корзины для показа количества товаров в корзине
      badge = document.querySelector('.nav__badge'),

      goodsButtons = document.querySelectorAll('.goods__btn'),
      goods = document.querySelectorAll('.goods__item'),
      titles = document.querySelectorAll('.goods__title');

    function showCart() {
      //значение по-умолчанию display: none
      cart.style.display = 'block';
      //блокирует прокрутку страницы при открытой корзине
      document.body.overflow = 'hidden';
    }

    function hideCart() {
      cart.style.display = 'none';
      //разблокировка прокрутки страницы
      document.body.overflow = '';
    }

    cartOpen.addEventListener('click', showCart);
    cartClose.addEventListener('click', hideCart);

    goodsButtons.forEach(function(btn, i){
	btn.addEventListener('click', ()=> {
	    let item = goods[i].cloneNode(true),
		trigger = item.querySelector('button'),
		removeBtn = document.createElement('div'),
		empty = cartWrapper.querySelector('.empty');
	});
});

//1.31.02
