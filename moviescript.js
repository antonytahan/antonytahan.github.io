let theVideo;
let theButton1;
let theButton2;
let theButton3;
let theMain;
let theTitle;
let theOverlayButton;
let theBackButton;
window.addEventListener('load', () =>{

										//then, we grab our video element from the DOM
										theVideo = document.getElementById("movie1");
                    theButton1= document.getElementById("part1");
                    theButton2= document.getElementById("part2");
                    theButton3= document.getElementById("part3");
										theMain= document.getElementById('main');
										theTitle= document.getElementById('title');
										theOverlayButton= document.getElementById('overlaybutton');
										theBackButton= document.getElementById('backbutton');

										console.log(theVideo);


                    theButton1.onclick= () =>{
                      console.log('clicked')
											theVideo.style.display='block';
											theButton1.style.display='none';
											theButton2.style.display='none';
											theButton3.style.display='none';
											theMain.style.display='none';
											theTitle.style.display='none';
											theOverlayButton.style.display='block';
											theBackButton.style.display='block';

                    }
                      theButton2.onclick=() =>{
                        theVideo=document.getElementById("movie2");
                        theVideo.style.display='block';
												theButton1.style.display='none';
												theButton2.style.display='none';
												theButton3.style.display='none';
												theMain.style.display='none';
												theTitle.style.display='none';
												theOverlayButton.style.display='block';
												theBackButton.style.display='block';


                      }
											theButton3.onclick=() =>{
												theVideo=document.getElementById("movie3");
												theVideo.style.display='block';
												theButton1.style.display='none';
												theButton2.style.display='none';
												theButton3.style.display='none';
												theMain.style.display='none';
												theTitle.style.display='none';
												theOverlayButton.style.display='block';
												theBackButton.style.display='block';


											}

                  });

									function on() {
		document.getElementById("overlay").style.display = "block";
		console.log('clickon');
}

function off() {
		document.getElementById("overlay").style.display = "none";
}
