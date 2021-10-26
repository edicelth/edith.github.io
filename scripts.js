$( document ).ready( function () {


  $("#article p a  img").click(function (event) {
  event.preventDefault();

    $("#lightbox").show();

    var imageLink = $(this).attr("src");
    imageLink=imageLink.replace("thumbnail", "photo");

    var imgText = "<img src='" + imageLink + "' />";

    $("#lightbox").html(imgText);

    $("#lightbox").click(function (event) {
      $("#lightbox").hide();

    });

  });
});


$(document).ready(function() {
  console.log("hello");
  $("#button1").click(function(){
    var ValueCelsius =  $("#cel").val();
      var farenheit = parseInt(ValueCelsius) * 1.8 +32;
      $("#fa").val(farenheit);



  });
  $("#button2").click(function() {
    var valueFarenheit = $("#fa").val();
      var celsius = parseInt(valueFarenheit) - 32/1.8;
        $("#cel").val(celsius);
  })
});


$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
