
$("button").css("color", "red");
console.log($("a").attr("href"));
$("button").addClass("btn");
$("h1").addClass("small-title");

$("button").click(function() {
  $("h1").toggleClass("large-title");
});

$("input").keydown(function(e) {
  console.log(e.key);
  $("h1").text(`Key press ${e.key}`);
});


$(document).on("mouseover", function(){
  $("h1").css("color", "purple");
})
