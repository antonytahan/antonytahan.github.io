window.onload=function(){
    document.getElementById("main").onmouseover=function(){
        document.getElementById("intro").style.opacity=1;
        document.getElementById("pic1").style.opacity=1;
    };
};
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
$(window).on("load",function() {
  var comic1 = document.getElementById("comic1svg").contentDocument.documentElement;
  var comic2=document.getElementById("comic2svg").contentDocument.documentElement;
  var comic5=document.getElementById("comic5svg").contentDocument.documentElement;
  var comic4=document.getElementById("comic4svg").contentDocument.documentElement;
  var dragon= comic2.getElementById("dragonColors_xA0_Image_1_");
  var dragonBW=comic2.getElementById("dragonBW_xA0_Image_1_");
  var princess= comic2.getElementById("princessColors_xA0_Image");
  var hero=comic2.getElementById("heroColors_xA0_Image")
  var heroText4=comic4.getElementById("heroText4");
  var dragonText4=comic4.getElementById("dragonText4");
  var princessText4=comic4.getElementById("princessText4");
  var heroText5=comic5.getElementById("heroText5");
  var dragonText5=comic5.getElementById("dragonText5");
  var princessText5=comic5.getElementById("princessText5");
  dragon.style.opacity=0
  princess.style.opacity=0
  hero.style.opacity=1;

  $(comic2).hover(
    () => {
      console.log('hovering')
      dragon.style.opacity=1
      princess.style.opacity=1;
      hero.style.opacity=0;
    },
    () => {
      dragon.style.opacity=0
      princess.style.opacity=0;
      hero.style.opacity=1;
    })
  $(comic2).click(
      () =>{
        window.location.href="#comic3svg"
      })
      $(comic3).click(
          () =>{
            window.location.href="#comic4svg"
          })
          $(comic4).click(
              () =>{
                window.location.href="#comic5svg"
              })
  $(dragon).click(
    () =>{
      heroText4.style.opacity=0;
      dragonText4.style.opacity=1;
      princessText4.style.opacity=0;
      heroText5.style.opacity=0;
      dragonText5.style.opacity=1;
      princessText5.style.opacity=0;
    }
  )
  $(princess).onclick(
    () =>{
      heroText4.style.opacity=0;
      dragonText4.style.opacity=0;
      princessText4.style.opacity=1;
      heroText5.style.opacity=0;
      dragonText5.style.opacity=0;
      princessText5.style.opacity=1;
    }
  )
  $(hero).click(
    () =>{
      heroText4.style.opacity=1;
      dragonText4.style.opacity=0;
      princessText4.style.opacity=0;
      heroText5.style.opacity=1;
      dragonText5.style.opacity=0;
      princessText5.style.opacity=0;
    }
  )
})
$(window).on("load",function() {
  var comic2 = document.getElementById("comic2svg").contentDocument.documentElement;
  var dragon = comic2.getElementById("paper-hover");
  $(dragon).hover(
    () => {
      console.log("hovered")
      $(dragon).children().addClass("paperhovered");
    },
    () => {
      $(dragon).children().removeClass("paperhovered");
    })

})
