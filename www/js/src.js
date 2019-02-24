// This does the filter by binding an event on the change of a select box
$("#grid-filter li").click(function() {
  var group = $(this).data('category');
  var group_class = "." + group;
  
  if(group == "*"){
    $(".grid-item").show();
    $('#masonry-grid').masonry('layout');
  }
  else if(group != "") {
    $(".grid-item").hide();
    $(group_class).show();
    $('#masonry-grid').masonry('layout');
  } else {
    $(".grid-item").show();
    $('#masonry-grid').masonry('layout');
  }
});


$('#masonry-grid').masonry({
  columnWidth: 1,
  itemSelector: '.grid-item'
});

$(".toggle-main-nav").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".main-nav ul a").click(function() {
 $(".main-nav").fadeOut(600);
 $(".sandwich").toggleClass("active");
}).append("<span>");

$(".toggle-main-nav").click(function() {
  if ($(".main-nav").is(":visible")) {
    $(".main-nav").fadeOut(600);
    $(".main-nav li a").removeClass("fadeInUp animated");
  } else {
    $(".main-nav").fadeIn(600);
    $(".main-nav li a").addClass("fadeInUp animated");
  };
});


$(".dial1").knob();
$({animatedVal: 0}).animate({animatedVal: 35}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
    $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
}); 

$(".dial2").knob();
$({animatedVal: 0}).animate({animatedVal: 55}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
    $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
}); 

$(".dial3").knob();
$({animatedVal: 0}).animate({animatedVal: 45}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
    $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
});

$(".dial4").knob();
$({animatedVal: 0}).animate({animatedVal: 35}, {
  duration: 2000,
  easing: "swing",
  step: function() { 
    $(".dial4").val(Math.ceil(this.animatedVal)).trigger("change"); 
  }   
});
