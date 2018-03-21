/*let theAudioElement
console.log('hello world!');
function init() {
  theAudioElement = document.getElementById('theAudio');
  theAudioElement.play();
  console.log(5+5);
}*/
/*7393BA*/
let paused = true
let theAudioElement
let theButton
theAudioElement = document.getElementById('theAudio')
theButton = document.getElementById('playbutton')
theButton.onclick = () =>{
  if (paused) theAudioElement.play();
  else theAudioElement.pause();
  paused = !paused
}
theAudioElement.addEventListener('ended', function(){
  window.location.href = "emotions.html";
})
function changeimage(){
if(paused) document.getElementById('image').src="pause.png";
else document.getElementById('image').src="play.png";
 /*if (document.getElementById('image').src=="play.png")
 {
   document.getElementById('image').src="pause.png"
 }
 if (document.getElementById('image').src=="pause.png")
 {
   document.getElementById('image').src="play.png "
 }*/
}
