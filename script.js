/*console.log("Hello World!")
//eventlistener
//document object model

let myvariable = 'antony'
let mynumberofclicks= 0


console.log(myvariable)
let myblock= document.getElementById("myblock")
console.log(myblock)
myblock.onclick = () => {
  //myblock.stye.height='0px'
  //css transition

  //setTimeout( () =>{
  //let myvideo=document.getElementById("VIDEONAME")
  //myvideo.play()
  //myvideo.style.display="block"},1000)
}
  mynumberofclicks+=1
  console.log('I have been clicked')
  console.log("you have clicked: "+mynumberofclicks)
}*/
/*$(document).ready(function() {
	$('#fullpage').fullpage();*/
  
  function ReplaceForm()
  {
  // Three places to customize:

  // Specify the id of the form.
  var IDofForm = "form3";

  // Specify the id of the div containing the form.
  var IDofDivWithForm = "example3";

  // Specify the id of the div with the content to replace the form with.
  var IDforReplacement = "for_replacement";

  // End of customizations.

  // This line submits the form. (If Ajax processed, call Ajax function, instead.)
  /*document.getElementById(IDofForm).submit();*/

  // This replaces the form with the replacement content.
  document.getElementById(IDofDivWithForm).innerHTML = document.getElementById(IDforReplacement).innerHTML;
  }
