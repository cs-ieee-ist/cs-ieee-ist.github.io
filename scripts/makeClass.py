import sys
import os

# Prompt

print("==== Please make sure you are using a Bash terminal or equivalent ====")
classId = input("Class abbreviation: ")
fullName = input("Class full name: ")

# PATHS

TEMPLATE_PATH = "../template.html"
INDEX_PATH = "../index.html"
CLASS_PATH = f'../{classId}.html'


template = open(TEMPLATE_PATH, "r", encoding="utf8")
g = open(CLASS_PATH, "w", encoding="utf8")

for line in template:
    if "Title" in line:
        g.write(line.replace("Title", fullName))
    else:
        g.write(line)

g.close()
template.close()

buf = ""
with open(INDEX_PATH, "r", encoding="utf8") as in_file:
    buf = in_file.readlines()

with open(INDEX_PATH, "w", encoding="utf8") as out_file:
    for line in buf:
        if "<!-- Add dropdown here -->" in line:
            line = f'\t\t\t<button class="dropdown-btn" id="navigate-{classId}">{classId.upper()}\n\t\t\t</button>\n\t\t\t<div class="dropdown-container" id="options-{classId}">\n\t\t\t\t<a href="#" id="d1">Topico1</a>\n\t\t\t\t<a href="#" id="d2">Topico2</a>\n\t\t\t</div>\n\n{line}'
        elif "<!-- Add page here -->" in line:
            line = line + \
                f'<div class="page" id="{classId}" style="display: none"></div>\n'
        out_file.write(line)
