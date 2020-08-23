import {setUpNav} from './homepage.js';

function setUpMenu(){
    let contentWrapper = document.getElementById("content");

    let menuWrapper = document.createElement('div');
    menuWrapper.classList.add("menuWrapper");
    menuWrapper.id = "menuWrapper";

    contentWrapper.appendChild(menuWrapper);

    //BURGERS
    let burgerHeading = document.createElement('h2');
    menuWrapper.append(burgerHeading);
    burgerHeading.innerHTML = "BURGERS";

    let burgerWrapper = document.createElement('div');
    burgerWrapper.classList.add("burgerWrapper");
    burgerWrapper.id = "burgerWrapper";
    menuWrapper.appendChild(burgerWrapper);
    
    //APPETIZERS
    let appHeading = document.createElement('h2');
    menuWrapper.appendChild(appHeading);
    appHeading.innerHTML = "APPETIZERS";

    let appWrapper = document.createElement('div');
    appWrapper.classList.add("appWrapper");
    appWrapper.id = "appWrapper";
    menuWrapper.appendChild(appWrapper);

    //DESSERTS
    let dessertHeading = document.createElement('h2');
    menuWrapper.appendChild(dessertHeading);
    dessertHeading.innerHTML = "DESSERTS";

    let dessertWrapper = document.createElement('div');
    dessertWrapper.classList.add("dessertWrapper");
    dessertWrapper.id = "dessertWrapper";
    menuWrapper.appendChild(dessertWrapper);

//burger options
//burger A
    //row 1 column 1
    let burgerAFig = document.createElement('figure');
    let burgerA = document.createElement('img');
    burgerA.classList.add("box");
    burgerA.src = "../src/images/burger_menu_1.jpeg";
    //row 1 column 2
    let burgerAInfo = document.createElement('div');
    let burgerAName = document.createElement("h4");
    let burgerADescription = document.createElement('p');
    burgerAInfo.classList.add("box");
    burgerAName.innerHTML = "Fried Egg Burger <br> 目玉焼きバーガー";
    burgerADescription.innerHTML = "目玉焼きとチーズのおいしいハンバーガー <br> 1200円";
    burgerAInfo.appendChild(burgerAName);
    burgerAInfo.appendChild(burgerADescription);

//burger B
    //row 1 column 3
    let burgerB = document.createElement('img');
    burgerB.classList.add("box");
    burgerB.src = "../src/images/burger_menu_5.jpeg";
    //row 1 column 4
    let burgerBInfo = document.createElement('div');
    let burgerBName = document.createElement("h4");
    let burgerBDescription = document.createElement('p');
    burgerBInfo.classList.add("box");
    burgerBName.innerHTML = "Triple Cheese Burger <br> トリプルチーズバーガー";
    burgerBDescription.innerHTML = "小麦パンとチーズの3つの層のハンバーガー <br> 1350円";
    burgerBInfo.appendChild(burgerBName);
    burgerBInfo.appendChild(burgerBDescription);

//burger C
    //row 2 column 1
    let burgerC = document.createElement('img');
    burgerC.classList.add("box");
    burgerC.src = "../src/images/burger_menu_3.jpeg";
    //row 2 column 2
    let burgerCInfo = document.createElement('div');
    let burgerCName = document.createElement("h4");
    let burgerCDescription = document.createElement('p');
    burgerCInfo.classList.add("box");
    burgerCName.innerHTML = "Toasted Sriracha Burger <br> トーストしたシラチャバーガー";
    burgerCDescription.innerHTML = "スパイシーで濃厚なシラチャソースのハンバーガーとトーストパン  <br> 1450円";
    burgerCInfo.appendChild(burgerCName);
    burgerCInfo.appendChild(burgerCDescription);

//burger D
    //row 2 column 3
    let burgerD = document.createElement('img');
    burgerD.classList.add("box");
    burgerD.src = "../src/images/burger_menu_4.jpeg";
    //row 2 column 4
    let burgerDInfo = document.createElement('div');
    let burgerDName = document.createElement("h4");
    let burgerDDescription = document.createElement('p');
    burgerDInfo.classList.add("box");
    burgerDName.innerHTML = "Black Sesame Chipotle Burger <br> 黒ごまチポトレバーガー";
    burgerDDescription.innerHTML = "チッパーソースと黒ごまパンのハンバーガー <br> 1100円";
    burgerDInfo.appendChild(burgerDName);
    burgerDInfo.appendChild(burgerDDescription);

//burger E
    //row 3 column 1
    let burgerE = document.createElement('img');
    burgerE.classList.add("box");
    burgerE.src = "../src/images/burger2.jpg";
    //row 3 column 2
    let burgerEInfo = document.createElement('div');
    let burgerEName = document.createElement("h4");
    let burgerEDescription = document.createElement('p');
    burgerEInfo.classList.add("box");
    burgerEName.innerHTML = "Garlic Sauce Burger <br> ガーリックソースバーガー";
    burgerEDescription.innerHTML = "濃厚なにんにくとオニオンソースとローストトマトのハンバーガー <br> 1150円";
    burgerEInfo.appendChild(burgerEName);
    burgerEInfo.appendChild(burgerEDescription);

//burger F
    //row 3 column 3
    let burgerF = document.createElement('img');
    burgerF.classList.add("box");
    burgerF.src = "../src/images/burger4.jpg";
    //row 3 column 4
    let burgerFInfo = document.createElement('div');
    let burgerFName = document.createElement("h4");
    let burgerFDescription = document.createElement('p');
    burgerFInfo.classList.add("box");
    burgerFName.innerHTML = "Bacon Cheeseburger <br> ベーコンチーズバーガー";
    burgerFDescription.innerHTML = "チーズとベーコンのハンバーガー <br> 900円";
    burgerFInfo.appendChild(burgerFName);
    burgerFInfo.appendChild(burgerFDescription);

//burger G
    //row 4 column 1
    let burgerG = document.createElement('img');
    burgerG.classList.add("box");
    burgerG.src = "../src/images/burger_2.jpg";
    //row 4 column 2
    let burgerGInfo = document.createElement('div');
    let burgerGName = document.createElement("h4");
    let burgerGDescription = document.createElement('p');
    burgerGInfo.classList.add("box");
    burgerGName.innerHTML = "Bacon Thick Burger <br> ベーコンシックバーガー";
    burgerGDescription.innerHTML = "カナダのベーコンと厚いハンバーガー <br> 1000円";
    burgerGInfo.appendChild(burgerGName);
    burgerGInfo.appendChild(burgerGDescription);

    //add to wrapper
    burgerWrapper.appendChild(burgerA);
    burgerWrapper.appendChild(burgerAInfo);
    burgerWrapper.appendChild(burgerB);
    burgerWrapper.appendChild(burgerBInfo);
    burgerWrapper.appendChild(burgerC);
    burgerWrapper.appendChild(burgerCInfo)
    burgerWrapper.appendChild(burgerD);
    burgerWrapper.appendChild(burgerDInfo);
    burgerWrapper.appendChild(burgerE);
    burgerWrapper.appendChild(burgerEInfo);
    burgerWrapper.appendChild(burgerF);
    burgerWrapper.appendChild(burgerFInfo);
    burgerWrapper.appendChild(burgerG);
    burgerWrapper.appendChild(burgerGInfo);

//OTHER OPTIONS
//app A
    //row 1 column 1
    let appA = document.createElement('img');
    appA.classList.add("box");
    appA.src = "../src/images/salad1.jpg"
    //row 1 column 2 
    let appAInfo = document.createElement('div');
    let appAName = document.createElement('h4');
    let appADescription = document.createElement('p');
    appAInfo.classList.add("box");
    appAName.innerHTML = "Pomegranate and Chicken Salad <br> ザクロとチキンのサラダ";
    appADescription.innerHTML = "ほうれん草とグリーン、ザクロとチキン <br> 400円";
    appAInfo.appendChild(appAName);
    appAInfo.appendChild(appADescription);

//app B
    //row 1 column 3
    let appB = document.createElement('img');
    appB.classList.add("box");
    appB.src = "../src/images/salad2.jpg"
    //row 1 column 4 
    let appBInfo = document.createElement('div');
    let appBName = document.createElement('h4');
    let appBDescription = document.createElement('p');
    appBInfo.classList.add("box");
    appBName.innerHTML = "Tofu and Black Bean Salad <br> 豆腐と黒豆のサラダ";
    appBDescription.innerHTML = "ほうれん草とレタスのサラダ、豆腐と黒豆とキャベツ <br> 550円";
    appBInfo.appendChild(appBName);
    appBInfo.appendChild(appBDescription);

//app C
    //row 2 column 1
    let appC = document.createElement('img');
    appC.classList.add("box");
    appC.src = "../src/images/pizza.jpeg"
    //row 2 column 2 
    let appCInfo = document.createElement('div');
    let appCName = document.createElement('h4');
    let appCDescription = document.createElement('p');
    appCInfo.classList.add("box");
    appCName.innerHTML = "Pepperoni Pizza <br> ペパロニピザ";
    appCDescription.innerHTML = "ペパロニとモッツァレラチーズの中型ピザ <br> 850円";
    appCInfo.appendChild(appCName);
    appCInfo.appendChild(appCDescription);

//app D
    //row 2 column 3
    let appD = document.createElement('img');
    appD.classList.add("box");
    appD.src = "../src/images/sliders.jpeg"
    //row 2 column 4 
    let appDInfo = document.createElement('div');
    let appDName = document.createElement('h4');
    let appDDescription = document.createElement('p');
    appDInfo.classList.add("box");
    appDName.innerHTML = "Big Bang Sliders <br> ビッグバンスライダー";
    appDDescription.innerHTML = "トマトとズッキーニのスパイシーなスライダー <br> 700円";
    appDInfo.appendChild(appDName);
    appDInfo.appendChild(appDDescription);

//app E
    //row 2 column 3
    let appE = document.createElement('img');
    appE.classList.add("box");
    appE.src = "../src/images/brussels.jpeg"
    //row 2 column 4 
    let appEInfo = document.createElement('div');
    let appEName = document.createElement('h4');
    let appEDescription = document.createElement('p');
    appEInfo.classList.add("box");
    appEName.innerHTML = "Spicy Brussels <br> スパイシーブリュッセル";
    appEDescription.innerHTML = "オーブンでローストしたシャキッとしたスパイシーな芽キャベツ <br> 400円";
    appEInfo.appendChild(appEName);
    appEInfo.appendChild(appEDescription);

    //add to wrapper
    appWrapper.appendChild(appA);
    appWrapper.appendChild(appAInfo);
    appWrapper.appendChild(appB);
    appWrapper.appendChild(appBInfo);
    appWrapper.appendChild(appC);
    appWrapper.appendChild(appCInfo);
    appWrapper.appendChild(appD);
    appWrapper.appendChild(appDInfo);
    appWrapper.appendChild(appE);
    appWrapper.appendChild(appEInfo);


//desserts
//dessert A
    //row 1 column 1
    let dessertA = document.createElement('img');
    dessertA.classList.add("box");
    dessertA.src = "../src/images/chocolate_cake.jpeg";
    //row 1 column 2
    let dessertAInfo = document.createElement('div');
    let dessertAName = document.createElement("h4");
    let dessertADescription = document.createElement('p');
    dessertAInfo.classList.add("box");
    dessertAName.innerHTML = "Cherry and Chocolate Cake <br> チェリーとチョコレートのケーキ";
    dessertADescription.innerHTML = "チェリーゼリーをのせた濃厚なチョコレートケーキ <br> 1100円" ;
    dessertAInfo.appendChild(dessertAName);
    dessertAInfo.appendChild(dessertADescription);

//dessert B
    //row 1 column 3
    let dessertB = document.createElement('img');
    dessertB.classList.add("box");
    dessertB.src = "../src/images/strawberry_cake.jpeg";
    //row 1 column 4
    let dessertBInfo = document.createElement('div');
    let dessertBName = document.createElement("h4");
    let dessertBDescription = document.createElement('p');
    dessertBInfo.classList.add("box");
    dessertBName.innerHTML = "Strawberry Vanilla Cake <br> いちごバニラケーキ";
    dessertBDescription.innerHTML = "バタークリームとストロベリー風味のフロスティングの甘いバニラケーキ <br> 900円";
    dessertBInfo.appendChild(dessertBName);
    dessertBInfo.appendChild(dessertBDescription);

//dessert C
    //row 2 column 1
    let dessertC = document.createElement('img');
    dessertC.classList.add("box");
    dessertC.src = "../src/images/churros.jpeg";
    //row 2 column 2
    let dessertCInfo = document.createElement('div');
    let dessertCName = document.createElement("h4");
    let dessertCDescription = document.createElement('p');
    dessertCInfo.classList.add("box");
    dessertCName.innerHTML = "Churros <br> チュロス";
    dessertCDescription.innerHTML = "甘いペストリーを揚げて砂糖とシナモンで巻きました <br> 400円";
    dessertCInfo.appendChild(dessertCName);
    dessertCInfo.appendChild(dessertCDescription);

//dessert D
    //row 2 column 3
    let dessertD = document.createElement('img');
    dessertD.classList.add("box");
    dessertD.src = "../src/images/ice_cream.jpeg";
    //row 2 column 4
    let dessertDInfo = document.createElement('div');
    let dessertDName = document.createElement("h4");
    let dessertDDescription = document.createElement('p');
    dessertDInfo.classList.add("box");
    dessertDName.innerHTML = "Chocolate Mint Almond Milk Ice Cream <br> チョコレートミントアイスクリーム";
    dessertDDescription.innerHTML = "ミントのノートが入ったチョコレートアイスクリーム <br> 350円";
    dessertDInfo.appendChild(dessertDName);
    dessertDInfo.appendChild(dessertDDescription);

    //add to wrapper
    dessertWrapper.appendChild(dessertA);
    dessertWrapper.appendChild(dessertAInfo);
    dessertWrapper.appendChild(dessertB);
    dessertWrapper.appendChild(dessertBInfo);
    dessertWrapper.appendChild(dessertC);   
    dessertWrapper.appendChild(dessertCInfo);
    dessertWrapper.appendChild(dessertD);
    dessertWrapper.appendChild(dessertDInfo);
}

export {setUpMenu}