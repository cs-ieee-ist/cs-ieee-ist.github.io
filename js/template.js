var codewrapper = document.getElementById("codeWrapper");

var paragraphs = codewrapper.getElementsByTagName('p');

var i = 0;
for (i = 0; i < paragraphs.length; i++) 
  paragraphs[i].innerText = (i + 1).toString() + ".  " + paragraphs[i].innerText;
