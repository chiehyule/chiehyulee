/* script.js 
   Author: P. Bustamante
   Date: May 2018
   NOTES: Adapted from W3Schools: 
   https://www.w3schools.com/howto/howto_js_slideshow.asp

*/

// Initialize
var slideslen = $('.mySlides').length;
//console.log(slideslen);

var slideIndex = 0;

var timeoutVar; /* interval variable */

showSlides(slideIndex);



$(document).ready(function(){ // begin document.ready block

    var length = $('.mySlides').length;
    console.log(length);

    // prev and next actions

    $('.prev').click(function(){
        plusSlides(-1);
    });

    $('.next').click(function(){
        plusSlides(1);
    });

    // dots action

    $('.dot').click(function(){
        var i = $(this).index();
        //console.log(i);
        currentSlide(i);
    });

}); //end document.ready block


// Next/previous controls
function plusSlides(n) {
  clearTimeout(timeoutVar); // resets timeout so it doesn't go crazy
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timeoutVar); // resets timeout so it doesn't go crazy
  showSlides(slideIndex = n);
}

function autoSlide(){
    clearTimeout(timeoutVar); // resets timeout so it doesn't go crazy
    slideIndex++;
    showSlides(slideIndex);
}

function showSlides(n) {

    // console.log(slideIndex);

    // to remove back arrow on first slide
    if (slideIndex == 0){
        $('.prev').hide();
    } else {
        $('.prev').show();
    }
  

  // to make slideshow loop
  if (n > slideslen-1) {slideIndex = 0} 
  if (n < 0) {slideIndex = slideslen}
  
  $('.mySlides').each(function(i){
      $(this).hide();
  });

  $('.dot').each(function(i){
      $(this).removeClass('active');
  });

  console.log(slideIndex);

  $('.mySlides').eq(slideIndex).show();
  $('.dot').eq(slideIndex).addClass('active');

  //put this in if you want it to rotate automatically
  timeoutVar = setTimeout(autoSlide, 5000); // Change image every 2 seconds

}



