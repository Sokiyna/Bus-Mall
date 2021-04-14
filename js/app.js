'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let highestAttempts = 25;

let cusCounter = 0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let namesArr = [];
let votesArr = [];
let viewTimesArr = [];


function Products(name, source) {
    this.name = name;
    this.source = source;
    this.viewTimes = 0;
    this.votes = 0;

    Products.totalProducts.push(this);
    namesArr.push(this.name);

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


let repeatImg = [];

function renderThreeImages() {


    rightImageIndex = makeRandomIndex();
    leftImageIndex = makeRandomIndex();
    middleImageIndex = makeRandomIndex();





    while ((repeatImg.includes(leftImageIndex) || leftImageIndex === middleImageIndex) || (repeatImg.includes(rightImageIndex) || leftImageIndex === rightImageIndex) || repeatImg.includes(middleImageIndex) || middleImageIndex === rightImageIndex) {

        leftImageIndex = makeRandomIndex();
        middleImageIndex = makeRandomIndex();
        rightImageIndex = makeRandomIndex();
    }

    repeatImg = [];


    repeatImg.push(leftImageIndex);
    repeatImg.push(middleImageIndex);
    repeatImg.push(rightImageIndex);

    console.log(repeatImg);







    leftImageElement.src = Products.totalProducts[leftImageIndex].source;
    Products.totalProducts[leftImageIndex].viewTimes++;

    middleImageElement.src = Products.totalProducts[middleImageIndex].source;
    Products.totalProducts[middleImageIndex].viewTimes++;

    rightImageElement.src = Products.totalProducts[rightImageIndex].source;
    Products.totalProducts[rightImageIndex].viewTimes++;




}

renderThreeImages();

let containerImgElement = document.getElementById('imges');


containerImgElement.addEventListener('click', handleUserClick);



console.log(votesArr);
console.log(viewTimesArr);

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
        console.log('votes :', votesArr);
        console.log('views :', viewTimesArr);
        renderThreeImages();
    }




    else {
        for (let i = 0; i < Products.totalProducts.length; i++) {
            votesArr.push(Products.totalProducts[i].votes);
            viewTimesArr.push(Products.totalProducts[i].viewTimes);
        
        }
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
        // console.log(votesArr);
        chart();

    }







}

function chart() {

    let ctx = document.getElementById('Chart1').getContext('2d');

    let chart = new Chart(ctx, {

        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: namesArr,

            datasets: [
                {
                    label: 'Products Chart',
                    data: votesArr,
                    backgroundColor: [
                        '#810000',
                    ],

                    borderWidth: 1
                },

                {
                    label: 'Products View Times',
                    data: viewTimesArr,
                    backgroundColor: [
                        'black',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {}
    });




}

