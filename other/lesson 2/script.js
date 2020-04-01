class GoodsItem {
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    render(){
        return `<div class="goods-item"> <img src = "https://placehold.it/250x150"><h3>${this.title}</h3><p>${this.price}</p>
        <button class="buy-button">Купить</button></div>`
    }

}
class GoodsList{
    constsructor(){
        this.goods = [];
    }
    fetchGoods(){
        this.goods = [
    {title:"Shirt", price: 150},
    {title:"Socks", price: 50},
    {title:"jacket", price: 350},
    {title:"shoes", price: 250}
]
    }
render(){
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
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
}
class CartButton extends GoodsList{
    constsructor(){

    }
//     addCart(){
//     document.querySelector(".byu-button").addEventListener ('click', (evt) => {
//         if () {
//              ()
//         }
//     })
// }
}
    //    let cart = elem.getElementsByClassName(buy-button);
    //     cart.addEventListener("click", function() {
    //     console.log("вы добавили товар в корзину")
    //   });
    

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sum();




// const renderGoodsItem = (item, img = "https://placehold.it/250x150") => {
// return `<div class="goods-item" alt ="Some img">
//     <img src = "${img}">
//     <div class = "box">
//     <h3>${item.title}</h3>
//     <p>${item.price}</p>
//     <button class="buy-goods"> Купить</button>
//     </div>
//     </div>`;
//     };
//     const renderGoodsList = (list) => {
//         const goodsList = list.map(item => renderGoodsItem(item)).join("");
//         document.querySelector(".goods-list").innerHTML = goodsList;
//     }
//     let cartButton = {


//     }
//     renderGoodsList(goods);