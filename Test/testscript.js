window.addEventListener('load', () =>{
   let the1 = document.getElementById("1");
   let the2 = document.getElementById("2");
   let the3 = document.getElementById("3");
   let theVideo = document.getElementById("video1");
   let theAudio= document.getElementById("audio");
   let theImage= document.getElementById("image");
   let theLink2= document.getElementById("link2");
   let theLink3= document.getElementById("link3");

   the1.addEventListener("mouseover",function(){
     theAudio.play();
   });
   the2.addEventListener("mouseover",function(){
     theVideo.style.display='block'
   });
   the2.addEventListener("mouseout",function(){
     theVideo.style.display='none'
   });
   the3.addEventListener("mouseover",function(){
     theImage.style.display='block'
   });
   the3.addEventListener("click",function(){
     theLink3.setAttribute('href','https://en.wikipedia.org/wiki/Alfred_Bloom')
   });
   // the3.addEventListener("mouseout",function(){
   //   theImage.style.display='none'
   // });
 });
//    the3.addEventListener("click",
//     theImage.style.display='block')
// }
// the1.onmouseover= () =>{
// theAudio.play();
// }
// the2.onclick = () => {
//   document.getElementById("video1").style.display='inline';
// }
// });
