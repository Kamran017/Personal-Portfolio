// Work section tab-accardion
$(".category li").click(function(){
    var self = $(this);
    var contentItem = $(".content .tabItem");
    var dataVal = self.attr("data-val");
    self.parent().find("li").removeClass("active");
    self.addClass("active");
    contentItem.removeClass("active");
    contentItem.eq(dataVal).addClass("active");

})
// End of work section




// ow carousel  starts
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1
  });
});
// carousel ends




// About=>Skill bar section

var bars = document.querySelectorAll('.bar').forEach((bar) => {
  var percentage = bar.getAttribute("data-percent");

  var loading = setInterval(progressBar, 15);
  var progress = 0;

  //animation of skillbar loading
  function progressBar() {
    if (progress >= percentage) {
      clearInterval(loading);
      bar.childNodes[0].innerHTML = percentage + '%';
    } else {
      progress++;
      bar.style.width = progress + '%';
    }
  }
});


window.onload = function() {
  var radius = document.querySelector('circle').getAttribute('r');
  var circumference = 2 * radius * Math.PI;
  // console.log(circumference);

  var circles = document.querySelectorAll('.pie').forEach((circle) => {
    var num = circle.getAttribute("data-percent");
    circle.setAttribute('stroke-dasharray', circumference);
    // console.log(num);

    var currentCount = 0;
    var maxCircum = (num/100) * circumference;

    var intervalId = setInterval(function() {
      var currentCircum = (currentCount/num)*circumference;

      if (currentCircum > maxCircum) {
        clearInterval(intervalId);
        return;
      }
      var offset = (1 - currentCount/num)*circumference;
      var progress = circle.childNodes[3].setAttribute('stroke-dashoffset', offset);;

      currentCount++;
    }, 15);

     $(".loader").fadeOut(1000);

  });


  var nums = document.querySelectorAll('.number').forEach((num) => {
    var currentNum = 0;
    var maxNum = num.getAttribute("data-num");

    var intervalId = setInterval(function() {
      if (currentNum > maxNum) {
        clearInterval(intervalId);
        return;
      }
      num.innerHTML = currentNum + '%';
      currentNum++;
    }, 20);
  });


}
// Skill Bar ends





// Fixed menu in creative section

function scrollPage(){

  var ypos= window.pageYOffset;
  var menu = document.querySelector("#creative .menu");
  var ul=document.querySelector(".introduction #creative .menu .col-xs-6 .bar ul")
  var fromBottom=document.querySelector("#fromBottomTop");

    if(ypos> 129.60000610351562){
      menu.style.position="fixed";
      menu.style.top="0 ";
      menu.style.right="0 ";
      menu.style.backgroundColor = "#090F29";
      menu.style.zIndex = "99";
      ul.style.top="6px";
      ul.style.right="18.2em";
      fromBottom.style.display="block"
      document.querySelector("#h").style.textAlign="center";

    }
    else{
      menu.style.position="";
      menu.style.top="";
      menu.style.right="";
      menu.style.backgroundColor = "";
      menu.style.zIndex = "";
      ul.style.top="";
      ul.style.right="";
      fromBottom.style.display=""
      document.querySelector("#h").style.textAlign="";
  }
}
window.addEventListener("scroll", scrollPage);  

// Menu Ends




// // Scroll page from bottom to the top

$("#fromBottomTop").click(function(){
     $('html, body').animate({
            scrollTop: $(".basic").offset().top
      }, 1000);
})  




// Contact us section starts

// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});



// Contact us section ends