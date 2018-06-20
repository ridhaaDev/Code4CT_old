function myFunction(){
  // var item=document.getElementById("moreLinks");
  // item.style.animation="roll 1.5s ease-in-out";

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


window.onload = function() {
  var ball = document.getElementById('moreLinks');
  ball.style.animation="roll 1.5s ease-in-out";
}




window.onscroll = function() {scrollEffect()};

function scrollEffect() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 350) {
        // document.getElementById("myImg").className = "slideUp";
        var mainNav=document.getElementById("mainNav");
        mainNav.style.height="50px";
    }
}
