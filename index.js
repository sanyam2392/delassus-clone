$(document).ready( function(){

$('#carouselExampleIndicators').on('slide.bs.carousel', function onSlide (ev) {
    var id = ev.relatedTarget.id;
    switch (id) {
      case "e1":{
      $("body").css({"background-color" : "rgb(128,203,170)",  "transition" :"ease-out 1.4s"})
      $("hr").css({"margin-left":"40%", });
        break;}
      case "e2":{$("body").css({"background-color" : "rgb(245,93,128)",  "transition" :"ease-out 1.4s"});
      $("hr").css({"margin-left":"50%", });
    
break;}
      case "e3":{
        $("body").css({"background-color" : "rgb(222,59,60)",  "transition" :"ease-out 1.4s"});
        $("hr").css({"margin-left":"60%" ,});
        break;}

    }
  })

$(document).on("click mousemove",".carousel-inner",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x/30 ;
    var newposY = y/30; $(".orange").css("transform","translate3d("+(-newposX)+"px,"+(-newposY)+"px,0px)");





    });
    $(document).on("click mousemove",".carousel-inner",function(e){ 
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x/30 ;
        var newposY = y/30; $(".watermelon").css("transform","translate3d("+(-newposX)+"px,"+(-newposY)+"px,0px)");
        });
        $(document).on("click mousemove",".carousel-inner",function(e){ 
            var x = e.clientX;
            var y = e.clientY;
            var newposX = x/30 ;
            var newposY = y/30; $(".ava").css("transform","translate3d("+(-newposX)+"px,"+(-newposY)+"px,0px)");
            });
         

         
         
         
          })



$(document).ready(function(){
$("#carouselExampleIndicators").on("slide.bs.carousel", function(event) {
  $(".transition-timer-carousel-progress-bar", this)
      .removeClass("animate").css("width", "0%");
}).on("slid.bs.carousel", function(event) {
  $(".transition-timer-carousel-progress-bar", this)
      .addClass("animate").css("width", "5%");
});

$(".transition-timer-carousel-progress-bar", "#carouselExampleIndicators")
  .css("width", "5%");



})

