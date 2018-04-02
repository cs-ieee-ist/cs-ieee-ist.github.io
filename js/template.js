var codewrapper = document.getElementsByClassName("codeWrapper");

for (var n = 0; n < codewrapper.length; n++) {

  if(codewrapper[n].classList.contains("done")) continue;
  codewrapper[n].classList.add("done");
  var paragraphs = codewrapper[n].getElementsByTagName('p');

  var i = 0;
  for (i = 0; i < paragraphs.length; i++) {

    oldHTML = paragraphs[i].innerHTML;
      paragraphs[i].innerHTML = "<font class = 'beforeCode'> " + (i + 1).toString() + ".</font> " + oldHTML;

  }

}
