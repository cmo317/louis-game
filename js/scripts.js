//functioning hover on/off
//upper left hover on/off photo
$(".card").hover( function() {
	// pull picture URL from data attribute
	var picUrl = $(this).attr('data-pic')
  $(this).css('background-image', `url(${picUrl})`)
},
//this is the argument for hovering off
function() {
  $(this).css('background-image', 'none')
});



$("#button").click ( function () {
var answer1 = parseInt(document.getElementById("box1").value)
var answer2 = parseInt(document.getElementById("box2").value)
$("#answer").empty()
if (((answer1 == 1 ) && (answer2 == 6)) || ((answer1 == 6) && (answer2 == 1))) { $("#answer").text("yes! yay!")
console.log("yes")}
else {$("#answer").text("no :( try again")}
});
