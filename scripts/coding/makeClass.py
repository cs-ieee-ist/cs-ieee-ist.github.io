import sys
import os
className = sys.argv[1].lower()
os.system("touch ../../" + className + ".html")
template = open("../../template.html", "r")

fullName = input("Class full name: ")

g = open("../../" + className + ".html", "w")

for line in template:
    if "CHANGEME" in line:
        g.write(line.replace("CHANGEME", fullName))

    else:
        g.write(line)

g.close()
template.close()

buf = ""
with open("../../index.html", "r") as in_file:
    buf = in_file.readlines()

with open("../../index.html", "w") as out_file:
    for line in buf:
        if  "<!-- Add here -->" in line:
            line = line + "    <div class = \"page\" id = \""+ className + "\"       style = \"display: none \"></div>\n"
        elif "// add here" in line:
            line = line + "\n\t\t\t$(function() {\n\n\t\t\t\t$(\"#" + className +"\").load(\"" + className +".html\");\n\t\t\t});\n"
        out_file.write(line)

with open("../../sidenav.html", "r") as in_file:
    buf = in_file.readlines()

with open("../../sidenav.html", "w") as out_file:
    for line in buf:
        if  "<!-- Add here -->" in line:
            line = "\t\t\t<button class=\"dropdown-btn\" onclick=\"navigate('" + className + "')\">" +className.upper() + "\n\t\t\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t\t</button>\n\t\t\t<div class=\"dropdown-container\" id = \"" + className + "0\">\n\t\t\t\t<a href=\"#\" id = \"d1\">Tópico1</a>\n\t\t\t\t<a href=\"#\" id = \"d2\">Tópico2</a>\n\t\t\t</div>\n\n" + line

        out_file.write(line)
