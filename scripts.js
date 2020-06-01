$(document).ready(function() {

	function printHTML(text){
		var printHTML = document.getElementById('text');
		printHTML.innerHTML += text;
	}


	$('#buttonOne').click(function(){
        $('.text2').remove();
			printHTML("<h2 class='text1'>Told ya I was right! </h2>" );
		})

	$('#buttonTwo').click(function(){
        $('.text1').remove();
			printHTML("<h2 class='text2'> Loser, Haha I was right!! </h2>");
    })
})