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
$("#gifbox").css('background-image','none');
if (((answer1 == 1 ) && (answer2 == 6)) || ((answer1 == 6) && (answer2 == 1))) {
	$("#answer").text("yes! yay!")
}
else if (isNaN(answer1) && isNaN(answer2)) {
		$("#answer").text("you didn't even try :(")
		$("#gifbox").css('background-image',`url("https://tv-fanatic-res.cloudinary.com/iu/s--02uNV0Fd--/t_xlarge_l/f_auto,fl_lossy,q_75/v1490231460/attachment/got-shame.gif")`);
}
else if (isNaN(answer1) || isNaN(answer2)) {
		$("#answer").text("try a little harder")
}
else {$("#answer").text("no :( try again")
}
});
