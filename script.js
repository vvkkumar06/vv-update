$(document).ready(function(){

    $(".navbar-nav li a[href^='#']").on('click', function(e) {

    // This sets the hash
    var target;
    target = this.hash;

    // Prevent default anchor click behavior
    e.preventDefault();


    // Animate The Scroll
    $('html, body').animate({
    scrollTop: $(this.hash).offset().top
    }, 800, function(){

    // Adds hash to end of URL
    return window.history.pushState(null, null, target);

    });

    });
 
  
});
// When the user scrolls the page, execute myFunction 

var scrolllSpy = function(scroll, elements){
  var currentLocation = window.location;
  for(var i in elements){
    var current = elements[i];
    var currentElementOffsetStart = $('#' + current).offset().top;
    var currentElementOffsetEnd = currentElementOffsetStart + $('#' + current).height();
    var navLink = $('.navbar-nav li.nav-item');
    var valueOffset = 100;
    if((currentElementOffsetStart - valueOffset) < scroll && scroll < (currentElementOffsetEnd - valueOffset)){
      console.log(scroll, (currentElementOffsetStart - valueOffset), (currentElementOffsetEnd - valueOffset));
      //console.log($("a[href='#" + current + "']"));
      var activelink = navLink.find("a[href='#" + current + "']");
      navLink.find("a[href='#" + current + "']").addClass('active').parent().siblings().find('a').removeClass('active');
      // window.location.href = currentLocation  + "/" + activelink.attr('href');
    } else if(scroll == 0) {
      navLink.find("a").removeClass('active');
    }
  }
};
window.onscroll = function() {
  myFunction();
  var scroll = $(window).scrollTop();
  var items = ['about', 'work', 'team', 'career', 'contact'];
  scrolllSpy(scroll, items);
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position


