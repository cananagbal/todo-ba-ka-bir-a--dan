// const taxRate = 0.18;
// const shippingRrice = 15;
// const shippingFreePrice = 300;

// wondow.addEventListener("load", () =>{

//     localStorage.setItem("taxRate", taxRate);
//     localStorage.setItem("shippingRrice", shippingRrice);
//     localStorage.setItem("shippingFreePrice", shippingFreePrice);
//     calculateCartPrice();
// });

// const productsDiv = document.querySelector(".products");
// productsDiv.addEventListener("click", (e) =>{
//     //e.target  vs. e.currentTarget arasındaki fark:
//     // alert(e.target.tagName)
//     // alert(e.currentTarget.tagName)
//     if(e.target.className === "fa-solid fa-minus"){
//         // alert("minus btn clicked");
//         if(e.target.nextElementSibling.innerText > 1){
//             e.target.nextElementSibling.innerText--;

//             calculateProductPrice(e.target);
//         }
//         else{
//             if(confirm(`${e.target.closest(".product-info").querySelector("h2").innerText} will be removed`)){
//                 e.target.closest("product").remove();
//             }

//         }   
//         calculateCartPrice();
    
//     }
//     else if(e.target.classList.contains("fa-plus")){
//         // alert("plus btn clicked");
//         e.target.parentElement.querySelector(".quantity").innerText++;
//         calculateProductPrice(e.target);
//         calculateCartPrice();

//     }
//     else if(e.target.getAttribute("class") == "remove-product"){
//         // alert("remove btn clicked");
//         if(confirm(`${e.target.closest(".product-info").querySelector("h2").innerText} will be removed`)){
//             e.target.closest("product").remove();
//         }


//         calculateCartPrice();
//     }
//     else{
//         alert("other element clicked");
//     }

// })


// const calculateProductPrice = (target) => {
//     const productInfoDiv = target.closest(".product-info")
//     const price =productInfoDiv.querySelector("div.product-price strong").innerText
//     const quantity = productInfoDiv.querySelector("p.quantity").innerText;
//     productInfoDiv.querySelector("div.product-line-price").innerText = (price *quantity).toFixed(2)

// }


// const calculateCartPrice = () =>{
//     const productLinePriceDiv = document.querySelectorAll(".product-line-price");
//     const subtotal= 0;

// }




const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ['sezer', 'ali', 'hasan', 'ayse'];

const ogrenciler = [
    {id : 12, isim : "sezer", yas : 30},
    {id : 22, isim : "hasan", yas : 15},
    {id : 32, isim : "fatma", yas : 55},
    {id : 13, isim : "nuriye", yas : 19},
    {id : 92, isim : "kemal", yas : 45},
    {id : 15, isim : "mustafa", yas : 75},
    {id : 44, isim : "ceren", yas : 30}
];

const a = sayilar.shift(); //Arraydan ilk elemanı siler ve sildiği elemanı gösterir.
console.log(a);
console.log(sayilar);

sayilar.unshift(100)//Arrayın başına eleman ekler ekleyeceğimiz elemanı parentez içine yazıyoruz.
isimler.unshift("Noah") //Noah kelimesini ekledi.

sayilar.pop(); //Arrayın sonundan aleman siliyor

sayilar.push(200) //Arrayın sonuna eleman ekler Eklerken parentez içine yazıyoruz.

sayilar.slice(1, 5); //Arrayı dilimleyerek istediğimiz kısmı alırız. 1 dahil 5 dahil değil. kaynak dizi bozulmaz. kopyalamak gibi.

sayilar.slice(1) //1.index dahil devamını (hepsini )alır.

sayilar.splice(2,4) //2. indexe git 4 tanesini sil. kaynak diziden silmek istediklerimizi alabiliriz. Kaynak dizi bozuluyor.

sayilar.splice(2,0, 1111, 2222) //2. indexi silmeyip, 2.indeksin olduğu yere iki tane eleman ekledi.

sayilar.splice(2,1,1111, 2222) //2.indekten bir eleman silip yerine iki tane eleman ekler. kaynak dizi bozulur.

ogrenciler.find((item)=> item.id === 92); //id si 92 olanı alır.
ogrenciler.find((item)=> item.yas === 30); //yaşlarda arama yapar. ilk bulduğu 30 olanı alır.
ogrenciler.find((item)=> item.isim === "Hasan");// büyük harf olduğu için undifined döndürür. "hasan" olması lazımdı.







