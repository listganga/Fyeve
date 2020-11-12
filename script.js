var total = 9;
function createSlick(){  

	$(".slider").not('.slick-initialized').slick({
		centerMode: true,
	    autoplay: true,
	    dots: true,
	
  		slidesToShow: 3,
	    responsive: [{ 
	        breakpoint: 768,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	});	

}

createSlick();

//Will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );

$(document).ready(function(){
    
        for(var i = 1 ; i <= total; i++){
            $(".row1").append('<div class="ilb-m box4 imgwrap"><a class="imgdiv ilb-m" href="https://teespring.com/stores/fyeve"><img class="box1 ilb-t" src="./images/'+ i +'a.jpg" alt="Legging"><img class="box2a ilb-t" src="./images/'+ i+'b.jpg" alt="Legging"><img class="box2a ilb-t" src="./images/'+ i+'c.jpg" alt="Legging"><p>Visit Store</p></a></div>');
        };
});
