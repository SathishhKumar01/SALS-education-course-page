document.getElementById("loginLink").addEventListener("mouseenter" ,function(){
    document.querySelector(".videocontent h2").classList.toggle("large");
})
var myCarousel = document.getElementById('carouselExampleCaptions');

// Add event listener for the slide event
myCarousel.addEventListener('slid.bs.carousel', function () {
    // Check if it's the last slide
    if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        // Move to the first slide
        $('.carousel-inner .carousel-item:first').addClass('active');
    }
});

var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }