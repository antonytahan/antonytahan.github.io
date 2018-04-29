window.addEventListener('load', () =>{
   let the1 = document.getElementById("1");
   let the2 = document.getElementById("2");
   let the3 = document.getElementById("3");
   let theVideo = document.getElementById("video1");
   let theAudio= document.getElementById("audio");
the1.onmouseover= () =>{
theAudio.play();
}
the2.onclick = () => {
  document.getElementById("video1").style.display='inline';
}
});
