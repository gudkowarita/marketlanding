# Страничка для интернет-магазина

<h2>Верстка<h2>
  За основу макета странички был взят дизайн aliexpress, страница сверстана на фреймфорке bootstrap, что позволяет с большей скоротью сверстать страницу однотипными карточками и сделать ее адаптивной.
  <h2>Функционал<h2>
Страница содержит код JS:
    <ul>
      <li>Показ и закрытие корзины выполнялись изменением стилей по щелчку (display: block/none)</li>
      <li>Подсчет количества позиций и общей стоимости с помощью функции перебора массивов и подсчета количества элементов в нем</li>
      <li>Добавление и удаление элементов из корзины осуществлялось с помощью манипуляций с DOM-элементами на JS</li>
      <li>При удалении всех элементов из корзины снимается <code>display:none</code> с объявленгия о том, что корзина пуста</li>
      <li>Использование CSS-анимации для изображения при добавлении товара в корзину</li>
      <li>Карточки товара заполняются с помощью базы данных в файле JSON, также применялись асинхронные запросы к серверу, fetch</li>
    </ul>
