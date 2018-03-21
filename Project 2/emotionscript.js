function enlargehappy(){
  document.getElementById('happy').setAttribute("class","enlarge smooth")
  document.getElementById('sad').setAttribute("class","disappear smooth")
  document.getElementById('stressed').setAttribute("class","disappear smooth")
  document.getElementById("emotionspage").href="emotions.html"
  document.getElementById('backarrow').style.background='#FF6B6B'
}
function enlargesad(){

  document.getElementById('sad').setAttribute("class","enlarge smooth")
  document.getElementById('happy').setAttribute("class","disappear smooth")
  document.getElementById('stressed').setAttribute("class","disappear smooth")
    document.getElementById("emotionspage").href="emotions.html"
      document.getElementById('backarrow').style.background='#708E9E'
}
function enlargestressed(){
  document.getElementById('stressed').setAttribute("class","enlarge smooth")
  document.getElementById('sad').setAttribute("class","disappear smooth")
  document.getElementById('happy').setAttribute("class","disappear smooth")
    document.getElementById("emotionspage").href="emotions.html"
}
function chBackColor(color){
    document.body.style.background=color;
}
function mainpage(){
  document.getElementById('emotionspage').src="sound.html";
}
