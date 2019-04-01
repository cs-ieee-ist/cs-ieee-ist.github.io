var codewrapper = document.getElementsByClassName("codeWrapper");

for (var n = 0; n < codewrapper.length; n++) {

  if(codewrapper[n].classList.contains("done")) continue;
  codewrapper[n].classList.add("done");
  var paragraphs = codewrapper[n].getElementsByTagName('p');

  var i = 0;

  var a = paragraphs.length;

  var added = 0;
  while (a >= 10) {
    added += 1;
    a = Math.floor(a/10);
  }

    for (i = 0; i < paragraphs.length; i++) {

      var toAdd = "";
      var string = (i + 1).toString();

      for (var j = 0; j <= added - string.length; j++)
        toAdd += "0";

      oldHTML = paragraphs[i].innerHTML;
      paragraphs[i].innerHTML = "<font class = 'beforeCode'> " + toAdd + (i + 1).toString() + ".</font> " + oldHTML;

  }

}
