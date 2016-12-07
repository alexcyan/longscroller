$(window).scroll(function(){


var topNumber =Math.floor($(window).scrollTop());

$("#counter").css({"top":"400px","position":"fixed"});

$("#counter").text("px:" + topNumber);

if (topNumber >=2000){


$("#lgate").css({
"top":80 + topNumber * 0.10 + "px"});

$("#rgate").css({
"top":80 + topNumber * 0.10 + "px"});


$("#ground").css({
"top":-130 + topNumber * 0.12 + "px"});

$("#ground2").css({
"top":-750 + topNumber * 0.40 + "px"});

$("#ground3").css({
 "top":-1350 + topNumber * 0.70 + "px"});

 $("#ground4").css({
   "top":-1900 + topNumber * .95 + "px"});

 $("#ground6").css({
   "top":-130 + topNumber * 0.12 + "px"});
}
else {
$("#counter").css({"background-color":"green"});
}

if (topNumber >=0){
  $("#city").css({
  "top":0 + topNumber / 2 + "px"});

  $("#city2").css({
  "top":0 + topNumber / 1.1 + "px"});

}

else {
$("#city").css({
  "top":0 + "px"});

$("#city2").css({
  "top":0 +"px"});
}

});
// BEGINNING OF: custom hero function
$(document).ready(function(){
//HEROS//
$("#button_1").on("click", function(){
    $("#herofinal").toggleClass("avatar1");
 });
 $("#button_2").on("click", function(){
      $("#herofinal").toggleClass("avatar2");
  });
  $("#button_3").on("click", function(){
      $("#herofinal").toggleClass("avatar3");
   });
   $("#button_4").on("click", function(){
        $("#herofinal").toggleClass("avatar4");
    });

//HEADGEARS//
$("#radio1").on("click", function(){
    $("#head").toggleClass("gear1");
});
$("#radio2").on("click", function(){
    $("#head").toggleClass("gear2");
});
$("#radio3").on("click", function(){
    $("#head").toggleClass("gear3");
});
$("#radio4").on("click", function(){
    $("#head").toggleClass("gear4");
});
$("#radio5").on("click", function(){
    $("#head").toggleClass("gear5");
});
$("#radio6").on("click", function(){
    $("#head").toggleClass("gear6");
});

//BODY//
$("#radio7").on("click", function(){
    $("#body").toggleClass("gear7");
});
$("#radio8").on("click", function(){
    $("#body").toggleClass("gear8");
});
$("#radio9").on("click", function(){
    $("#body").toggleClass("gear9");
});
$("#radio10").on("click", function(){
    $("#body").toggleClass("gear10");
});
$("#radio11").on("click", function(){
    $("#body").toggleClass("gear11");
});
$("#radio12").on("click", function(){
    $("#body").toggleClass("gear12");
});
//WEAPONS//
$("#radio13").on("click", function(){
    $("#weapon").toggleClass("gear13");
});
$("#radio14").on("click", function(){
    $("#weapon").toggleClass("gear14");
});
$("#radio15").on("click", function(){
    $("#weapon").toggleClass("gear15");
});
$("#radio16").on("click", function(){
    $("#weapon").toggleClass("gear16");
});
$("#radio17").on("click", function(){
    $("#weapon").toggleClass("gear17");
});
$("#radio18").on("click", function(){
    $("#weapon").toggleClass("gear18");
});

});

$(document).ready(function(){
//HEROS//
$("#button_1").on("click", function(){
    $("#herobase").toggleClass("avatar1");
 });
 $("#button_2").on("click", function(){
      $("#herobase").toggleClass("avatar2");
  });
  $("#button_3").on("click", function(){
      $("#herobase").toggleClass("avatar3");
   });
   $("#button_4").on("click", function(){
        $("#herobase").toggleClass("avatar4");
    });

//HEADGEARS//
$("#radio1").on("click", function(){
    $("#head2").toggleClass("gear1");
});
$("#radio2").on("click", function(){
    $("#head2").toggleClass("gear2");
});
$("#radio3").on("click", function(){
    $("#head2").toggleClass("gear3");
});
$("#radio4").on("click", function(){
    $("#head2").toggleClass("gear4");
});
$("#radio5").on("click", function(){
    $("#head2").toggleClass("gear5");
});
$("#radio6").on("click", function(){
    $("#head2").toggleClass("gear6");
});

//BODY//
$("#radio7").on("click", function(){
    $("#body2").toggleClass("gear7");
});
$("#radio8").on("click", function(){
    $("#body2").toggleClass("gear8");
});
$("#radio9").on("click", function(){
    $("#body2").toggleClass("gear9");
});
$("#radio10").on("click", function(){
    $("#body2").toggleClass("gear10");
});
$("#radio11").on("click", function(){
    $("#body2").toggleClass("gear11");
});
$("#radio12").on("click", function(){
    $("#body2").toggleClass("gear12");
});
//WEAPONS//
$("#radio13").on("click", function(){
    $("#weapon2").toggleClass("gear13");
});
$("#radio14").on("click", function(){
    $("#weapon2").toggleClass("gear14");
});
$("#radio15").on("click", function(){
    $("#weapon2").toggleClass("gear15");
});
$("#radio16").on("click", function(){
    $("#weapon2").toggleClass("gear16");
});
$("#radio17").on("click", function(){
    $("#weapon2").toggleClass("gear17");
});
$("#radio18").on("click", function(){
    $("#weapon2").toggleClass("gear18");
});


});
