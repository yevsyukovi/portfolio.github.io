
let burgerButton = document.getElementById('menu__icon');
let openClose = document.getElementById('openClose');
let menu__logo = document.getElementById('menu__logo');
let menu__body = document.getElementById('menu__body');

burgerButton.onclick = function(){

if(burgerButton.dataset.trigger == 'false'){

        openClose.innerHTML = 'ЗАКРЫТЬ';
        menu__body.style.left = '0%';
        openClose.style.color = 'black';
        menu__logo.style.border = '1px solid black';
        burgerButton.style.color = 'black';
        burgerButton.dataset.trigger = true;

    }else{

        openClose.innerText = openClose.dataset.text;
        menu__body.style.left = '100%';
        openClose.style.color = 'white';
        menu__logo.style.border = '1px solid white';
        burgerButton.style.color = 'white';
        burgerButton.dataset.trigger = false;

        }

};




let item__title__btn_1 = document.getElementById('item__title__btn_1');
let tour__list_1 = document.getElementById('tour__list_1');
let item__icon = document.getElementById('item__icon');
item__title__btn_1.onclick = function() {


if(item__title__btn_1.dataset.trigger == 'false'){
        tour__list_1.style.display = "grid";
        item__title__btn_1.dataset.trigger = true;
    } else {
         item__title__btn_1.dataset.trigger = false;
        	tour__list_1.style.display = "none";
    }
};

// let item__title__btn = document.getElementsByClassNane('item__title__btn');
// let tour__list_1 = document.getElementById('tour__list_1');
// let item__icon = document.getElementById('item__icon');
// item__title__btn_1.onclick = function() {


// if(item__title__btn_1.dataset.trigger == 'false'){
//         tour__list_1.style.display = "grid";
//         item__title__btn_1.dataset.trigger = true;
//     } else {
//          item__title__btn_1.dataset.trigger = false;
//         	tour__list_1.style.display = "none";
//     }
// };

// document.querySelector('.item__title__btn').addEventListener('click',function(e){
//   if (e.target.classList.contains('item__icon')){

//   }
// })
