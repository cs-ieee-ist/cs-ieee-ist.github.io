var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

var current = document.getElementById("welcome");
var active = null;
var activeButton = null;

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
}