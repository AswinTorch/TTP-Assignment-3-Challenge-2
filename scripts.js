//argyuing buttons #1
$(document).ready(function() {

	function printHTML(text){
		var printHTML = document.getElementById('text');
		printHTML.innerHTML += text;
	}


	$('#buttonOne').click(function(){
        $('.text2').remove();
			printHTML("<h1 class='text1'>Told ya I was right! </h1>" );
		})

	$('#buttonTwo').click(function(){
        $('.text1').remove();
			printHTML("<h1 class='text2'> Loser, Haha I was right!! </h1>");
    })
})
console.log("Scripts file linked!");

// Bonus Page JS
const calculateVolume = () => {
  console.log("Button clicked!")
  let r = document.getElementById("radius").value;
  let volume = (4.0 / 3.0) * Math.PI * Math.pow(r, 3);
  volume = (Math.round(volume * 100) / 100).toFixed(2);
  let volumeLabel = document.getElementById("volumeLabel");
  volumeLabel.innerText = "Volume: " + volume;
  return false;
}
// End of Bonus Page JS

//hover js 
$('.noHover').hover(function(){
  alert("You dont listen huh! I said DON'T HOVER OVER ME!");
})