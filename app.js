'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let highestAttempts = 25;

let cusCounter = 0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;




function Products(name, source) {
    this.name = name;
    this.source = source;
    this.viewTimes = 0;
    this.votes = 0;

    Products.totalProducts.push(this);

}

Products.totalProducts = [];



new Products('bag', 'img/bag.jpg');
new Products('banana', 'img/banana.jpg');
new Products('bathroom', 'img/bathroom.jpg');
new Products('boots', 'img/boots.jpg');
new Products('breakfast', 'img/breakfast.jpg');
new Products('bubblegum', 'img/bubblegum.jpg');
new Products('chair', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulhu.jpg');
new Products('dog-duck', 'img/cthulhu.jpg');
new Products('dragon', 'img/dragon.jpg');
new Products('pen', 'img/pen.jpg');
new Products('pet-sweep', 'img/pet-sweep.jpg');
new Products('scissors', 'img/scissors.jpg');
new Products('shark', 'img/shark.jpg');
new Products('sweep', 'img/sweep.png');
new Products('tauntaun', 'img/tauntaun.jpg');
new Products('usb', 'img/usb.gif');
new Products('water-can', 'img/water-can.jpg');
new Products('wine-glass', 'img/wine-glass.jpg');

console.log(Products.totalProducts);

function makeRandomIndex() {

    return Math.floor(Math.random() * Products.totalProducts.length);
}


console.log(makeRandomIndex);

function renderThreeImages() {

    rightImageIndex = makeRandomIndex();
    leftImageIndex = makeRandomIndex();
    middleImageIndex = makeRandomIndex();



    while (leftImageIndex === middleImageIndex); {
        leftImageIndex = makeRandomIndex();
    }

    while (middleImageIndex === rightImageIndex) {
        middleImageIndex = makeRandomIndex();
    }
    while (leftImageIndex === rightImageIndex) {
        rightImageIndex = makeRandomIndex();
    }





    leftImageElement.src = Products.totalProducts[leftImageIndex].source;
    middleImageElement.src = Products.totalProducts[middleImageIndex].source;
    rightImageElement.src = Products.totalProducts[rightImageIndex].source;


}

renderThreeImages();

let containerImgElement = document.getElementById('imges');


containerImgElement.addEventListener('click', handleUserClick);


function handleUserClick(event) {
    console.log(event.target.id);





    cusCounter++;
    console.log(cusCounter);


    if (cusCounter <= highestAttempts) {


        if (event.target.id === 'left-image') {
            Products.totalProducts[leftImageIndex].votes++;

        }
        else if (event.target.id === 'middle-image') {
            Products.totalProducts[middleImageIndex].votes++;
        }

        else if (event.target.id === 'right-image') {
            Products.totalProducts[rightImageIndex].votes++;
        }


        console.log(Products.totalProducts);
        renderThreeImages();
    }




    else {
        let button = document.getElementById('result-bt');
        button.addEventListener('click', resultBtn);

        function resultBtn(event) {

            let list = document.getElementById('results');
            let productResult;
            for (let i = 0; i < Products.totalProducts.length; i++) {
                productResult = document.createElement('li');
                list.appendChild(productResult);
                //banana had 3 votes, and was seen 5 times
                productResult.textContent = `${Products.totalProducts[i].name} got ${Products.totalProducts[i].votes} votes, while ${Products.totalProducts[i].viewTimes} times`;

            }

        }

        containerImgElement.removeEventListener('click', handleUserClick);


    }







}

