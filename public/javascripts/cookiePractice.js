console.log("starting......");
var color = "";

$(document).ready(function(){
	$('button').click(function(){
		//alert( "Handler for .click() called." );
		var color = $('input').val();
		console.log("the color is " + color);
		
		$('#colorAnswer').append(color);
	});
});



console.log(document.cookie);
 
//document.cookie.color = "red"; 