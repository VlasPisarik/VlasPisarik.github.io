

$(document).ready(function(){

    //анимация цифр
for(let i of document.querySelectorAll('.count')){
    
    let numberTop = i.getBoundingClientRect().top,
    start = +i.innerHTML, 
    end = +i.dataset.max;

    window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 5) {
    		this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
        		i.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 1);
    }
});
}



//анимация скилов

    
   let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
    observer.observe(el);    
    });
    
    

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
};


//сдайдер комментариев

    $('.comments_slider').slick({
        arrows:false,
        dots:true,
    });
    
//калькулятор 
    function calculate(){
        let sum = parseInt($('#select1 option:selected').val()) + parseInt($('#select2 option:selected').val()) + parseInt($('#select3 option:selected').val()) ;
        let days = parseInt($('#select1 option:selected').attr('days')) + parseInt($('#select2 option:selected').attr('days')) + parseInt($('#select3 option:selected').attr('days'));
        $('.days .numbers').text(days);
        $('.price .numbers').text(sum);
    }
    $('select').on('change',function(){
        calculate();
    });
    calculate();


//всплывающий попап
    
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign").fadeIn();
		}
	}, 10000);
});

$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});


});


//попап
$('.carousel-item').magnificPopup({
 type: 'image'
});
