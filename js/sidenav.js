var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

var current = document.getElementById("welcome");
var active = null;
var activeButton = null;
var scrolling = true;

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function() {

    if (this == activeButton)
      return;

    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block")
      dropdownContent.style.display = "none";

    else if (active == null || dropdownContent.innerText != active.innerText){
      if(active != null) {

        activeButton.classList.toggle("active");
        active.style.display = "none";
      }
      dropdownContent.style.display = "block";
      active = dropdownContent;
      activeButton = this;
    }

  });
}

function navigate(p) {

  page = document.getElementById(p);

  current.style.display = "none";
  current = page;
  current.style.display = "block";

    i = 1;


    $( document ).ready( function() {

      l = document.getElementById(p + "0").getElementsByTagName("a").length;
      console.log(l);
      for (n = 1; n <= l; n++) {
        console.log(n);
        a = $("#" + p + "0").children()[n - 1];
        scroll(a, n);
      }
    });
  }

function scroll(a, n) {

          a.addEventListener("click", function() {
            return function() {
              if (scrolling) {

                scrolling = false;
                doEvent(n);
              }
            window.setTimeout(function(){
              scrolling = true;
            }, 1250);
          }
          }(a, n));
}

function doEvent(n) {


  console.log(n);
  console.log($("#sub" + (n).toString()));
  $('body').animate({
    scrollTop: jQuery("#sub" + (n).toString()).offset().top
  }, 1000);
}
