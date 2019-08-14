$(".owl-carousel").owlCarousel({
  nav: true,
  rtl: true,
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
});
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
var currentIndex = 0;
var hartList = document.querySelectorAll(".hart");

var harts = [];
for (var i = 0; i < hartList.length; i++) {
  //loop on harts list
  harts.push(hartList[i]);
  hartList[i].addEventListener("click", function(e) {
    if (e.srcElement.style.color == "rgb(128, 128, 128)") {
      $(".hart i").css("color", "rgb(255, 0, 0)");
    } else {
      $(".hart i").css("color", "rgb(128, 128, 128)");
    }
  });
}

$(".datepicker").datepicker({
  startView: 2,
  todayBtn: "linked",
  keyboardNavigation: false,
  forceParse: false,
  autoclose: true,
  orientation: "top left"
});
$(".fa-calendar-alt").click(function() {
  $(".datepicker").focus();
});
$(".datepicker1").datepicker({
  startView: 2,
  todayBtn: "linked",
  keyboardNavigation: false,
  forceParse: false,
  autoclose: true,
  orientation: "top left"
});
$(".e").click(function() {
  $(".datepicker1").focus();
});
