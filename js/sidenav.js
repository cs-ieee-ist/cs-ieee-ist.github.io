
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

var current = document.getElementById("welcome");

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block")
      dropdownContent.style.display = "none";
    else
      dropdownContent.style.display = "block";

  });
}

function navigate(p) {

  page = document.getElementById(p);

  current.style.display = "none";
  current = page;
  current.style.display = "block";
}
