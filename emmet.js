
function findWord() {
	var text=document.getElementById('text').value;
	console.log(text);
	var audio=("https://ssl.gstatic.com/dictionary/static/sounds/de/0/" + text + ".mp3")

	newFrame = document.createElement("audio");
	newFrame.src = audio;
	newFrame.type= "audio/mpeg";
	newFrame.autoplay = true;
	newFrame.load();
	var inputBox = document.getElementById('text');
	inputBox.value= '';
}
