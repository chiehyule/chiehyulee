/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	$(".gridpic").hover(function(){
		$('.photocaption', this).fadeToggle();

	});

	$('.popup').click(function(){
		$('.overlay').fadeIn();

	});

	$('.closer').click(function(){
		$('.overlay').hide();

	});


	// waypoints 

   $('.bigphoto').waypoint(function(direction){

   	console.log(direction);

      if (direction == 'down') {

 

      } else if (direction == 'up') {

 

      }

   });




}); //end document.ready block
