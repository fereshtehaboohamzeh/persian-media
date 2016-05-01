$(document).ready(function(){
	$("#container").Progress({
					
			 // width & height of the progress bar
			  width: 700,
			  height: 33, 
			  left:0,

			  // percent value
			  percent: 10, 

			  // background color of the progress bar
			  backgroundColor: '#dddddd',

			  // fill color of the progress bar
			  barColor: '#c93839', 

			  // text color
			  fontColor: 'black', 

			  // border radius
			  radius: 0,

			  // font size
			  fontSize: 14,

			  // animation options
			  increaseTime: 1000.00/60.00, 
			  increaseSpeed: 1, 
			  animate: true
			  
			  
			});
			
			
			
			
			
			$("#container2").Progress({
					
					  // width & height of the progress bar
			  width: 700,
			  height: 33, 
			  left:0,

			  // percent value
			  percent: 60, 

			  // background color of the progress bar
			  backgroundColor: '#dddddd',

			  // fill color of the progress bar
			  barColor: '#c93839', 

			  // text color
			  fontColor: 'black', 

			  // border radius
			  radius: 0,

			  // font size
			  fontSize: 14,

			  // animation options
			  increaseTime: 1000.00/60.00, 
			  increaseSpeed: 1, 
			  animate: true
			  
			  
			});
			 
	 
	 
	 
	 
			 $('.fancybox').fancybox();


	   
			 $('button').click(function() {
			  $(this).toggleClass('expanded').siblings('div').slideToggle();
			  $("nav.mobile").toggleClass("open");
			});
			
			
			
			
			
			
              //AUTO RESIZE SECTION FOR FULL PAGE
			 $('.autosize').css("min-height" , $(window).height()+"px");

			$(window).resize(function() {
				$('.autosize').css("min-height" , $(window).height()+"px");

			});
		});