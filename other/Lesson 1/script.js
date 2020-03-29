
const goods = [
    {title:"Shirt", price: 150},
    {title:"Socks", price: 50},
    {title:"jacket", price: 350},
    {title:"shoes", price: 250},
];
const renderGoodsItem = (item, img = "https://placehold.it/250x150") => {
return `<div class="goods-item" alt ="Some img">
    <img src = "${img}">
    <div class = "box">
    <h3>${item.title}</h3>
    <p>${item.price}</p>
    <button class="buy-goods"> Купить</button>
    </div>
    </div>`;
    };
    const renderGoodsList = (list) => {
        const goodsList = list.map(item => renderGoodsItem(item)).join("");
        document.querySelector(".goods-list").innerHTML = goodsList;
    }
    renderGoodsList(goods);