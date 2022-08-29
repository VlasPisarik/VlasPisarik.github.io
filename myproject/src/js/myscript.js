/*$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter:$(this).text() 
    },{
        duration: 4000,
        easing: 'swing',
        step:function(now){
        $(this).text(Math.ceil(now));
        }
    });
});*/





var number = document.querySelector('.count'),
		numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
    		this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
        		number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
    }
});





$(document).ready(function(){
    
   let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
    observer.observe(el);    
    });
    
    
});



function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
};



$(document).ready(function(){
    $('.comments_slider').slick({
        arrows:false,
        dots:true,
    });
});

/*
let website = {
    "сайт визитка": 1500,
    "корпоративный сайт": 2000,
    "интернет магазин": 3000,
};

let key1 = prompt("Ваш тип сайта","сайт визитка, корпоративный сайт, интернет магазин")

alert( website[key1] );

let design = {
    "шаблон": 1500,
    "уникальный": 2000,
    "специальный": 3000,
};

let key2 = prompt("Какой дизайн?", "шаблон, уникальный, специальный")

alert( design[key2] );

let adapt = {
    "пк": 1000,
    "телефон": 2000,
    "пк + гаджет": 3000,
};

let key3 = prompt("Где бы вы хотели использовать ваш сайт?", "пк, телефон, пк + гаджет")

alert( adapt[key3] );

alert( website[key1] + design[key2] + adapt[key3] );

})*/