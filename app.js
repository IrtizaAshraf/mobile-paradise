const getMob = document.getElementById("store")


/// Array Area ...
const phones = [
      {
            brand: 'Xiaomi',
            img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/08/Xiaomi-Poco-M6-Pro-400x400.jpg",
            model: 'POCO M6 Pro',
            ram: 8,
            rom: 256,
            camera: '50+2mp megapixel',
            frontcamera: '8 megapixel',
            display: 6.76,
            price: 'PKR 48,000',
      },
      {
            brand: 'Samsung',
            img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/05/Samsung-Galaxy-M14.jpg",
            model: 'M14',
            ram: 6,
            rom: 64/1286,
            camera: '20 megapixel',
            frontcamera: '10 megapixel',
            display: 5.6,
            price: 'PKR 429,999',
      },
     {
        brand: 'Samsung',
        img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 429,999',
    },
    {
        brand: 'Xiomi',
        img:"https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 429,999',
    },
    {
        brand: 'Infinix',
        img:"https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 429,999',
    },
    {
        brand: 'Tecno',
        img:"https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 429,999',
    },
    {
        brand: 'Iphone',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 429,999',
    },
    {
        brand: 'Iphone',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/iphonex.jpg",
        model: 'X',
        ram: 6,
        rom: 128,
        camera: '30 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 429,999',
    },
    {
        brand: 'Oppo',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/07/oppof15nn-600x600.jpg",
        model: 'F15',
        ram: 8,
        rom: 128,
        camera: '48+8+2 megapixel',
        frontcamera: '16 megapixel',
        display: 6.4,
        price: 'PKR 40,990',
    },
    {
        brand: 'Vivo',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/05/vivo-Y78.jpg",
        model: 'y78',
        ram: 12,
        rom: 256,
        camera: '50 +2 megapixel',
        frontcamera: '8 megapixel',
        display: 6.76,
        price: 'PKR 65,999',
    },
    {
        brand: 'Huawei',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2023/03/Huawei-P60-Pro.jpg",
        model: 'P60 Pro',
        ram: 8,
        rom: 128,
        camera: '50+ 50+ 64 megapixel',
        frontcamera: '32 megapixel',
        display: 6.6,
        price: 'PKR 164,999',
    },
    {
        brand: 'Nokia',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/09/nkua-600x600.jpg",
        model: '6.2 Space',
        ram: 3,
        rom: 64,
        camera: '16+18 megapixel',
        frontcamera: '8 megapixel',
        display: '6.3 Inch',
        price: 'PKR 29,999'
    },
    {
        brand: 'I phone',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2021/07/13-1.jpg",
        model: '13 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        frontcamera: '10 megapixel',
        display: 5.6,
        price: 'PKR 229,999'
    },

]


//  console.log(phones[1].brand);


/// foor loop area..

for(let i = 0; i<phones.length;i++){
    getMob.innerHTML+=`<div class="item">
    <h1 class="head">${phones[i].brand}</h1>
    <img src="${phones[i].img}" class="image">
    <h2 class="heading">Model:${phones[i].model}</h2>
    <h3>Ram:${phones[i].ram} Gb</h3>
    <h3>Rom:${phones[i].rom}Gb</h3>
    <h3>Camra:${phones[i].camera}</h3>
    <h3>front Camra:${phones[i].frontcamera}</h3>
    <h3>Display:${phones[i].display}</h3>
    <h3>Price: ${phones[i].price}</h3>
    <button class="cart">Add To Cart<i class="fa-solid fa-cart-plus fa-beat-fade"></i></button>
    <button class="order">Order Now<i class="fa-brands fa-opencart fa-beat-fade"></i></button>
    </div>`
}

// for (let i = 0; i < phones.length; i++) {
//       // console.log(phones[i]);
//       getMob.innerHTML += `
//       <div class="p-[2rem] border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl">
//               <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
//               <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
//               <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
//               <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
//               <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
//               <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
//               <button onclick='addToCart(${i})' class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]">Add to Cart</button>
//       </div>
//       `
  
// }