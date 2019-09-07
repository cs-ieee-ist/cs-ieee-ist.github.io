import sys
import os
print("==== Please make sure you are using a Bash terminal or equivalent ====")
classId = input("Class abbreviation: ")
fullName = input("Class full name: ")
os.system(f'touch ../../{classId}.html')

template = open("../../template.html", "r", encoding="utf8")
g = open(f'../../{classId}.html', "w", encoding="utf8")

for line in template:
    if "Title" in line:
        g.write(line.replace("Title", fullName))
    else:
        g.write(line)

g.close()
template.close()

buf = ""
with open("../../index.html", "r", encoding="utf8") as in_file:
    buf = in_file.readlines()

with open("../../index.html", "w", encoding="utf8") as out_file:
    for line in buf:
        if "<!-- Add dropdown here -->" in line:
            line = f'\t\t\t<button class="dropdown-btn" id="navigate-{classId}">{classId.upper()}\n\t\t\t</button>\n\t\t\t<div class="dropdown-container" id="options-{classId}">\n\t\t\t\t<a href="#" id="d1">Topico1</a>\n\t\t\t\t<a href="#" id="d2">Topico2</a>\n\t\t\t</div>\n\n{line}'
        elif "<!-- Add page here -->" in line:
            line = line + \
                f'<div class="page" id="{classId}" style="display: none"></div>\n'
        out_file.write(line)
