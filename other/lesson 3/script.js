const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
 function makeGETRequest (url) {
  return new Promise((resolve) =>{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      resolve(xhr.responseText);
    }
  }
})
};
class GoodsItem {
    constructor(title, price){
        this.product_name = title;
        this.price = price;
    }
    render(){
       return `<div class="goods-item"> <img src = "https://placehold.it/250x150"><h3>${this.product_name}</h3><p>${this.price}</p>
        <button class="buy-button">Купить</button></div>`
    }

};
class GoodsList {
    constsructor(){
        this.goods = [];
    }
fetchGoods(){
           return makeGETRequest(`${API_URL}/catalogData.json`) 
            .then(goods => {
              this.goods = JSON.parse(goods);
            })
        } 
render(){
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
      });
    document.querySelector('.goods-list').innerHTML = listHtml;
}
  sum(){
    let sumPrice = 0;
    this.goods.forEach(good => {
    sumPrice += good.price; 
    console.log(sumPrice);   
    });
    document.querySelector('.list').innerHTML = `Общая стоимость товаров ${sumPrice} $`;
}


};
const list = new GoodsList();
list.fetchGoods()
  .then(() => list.render())
  .then(() =>  list.sum());



