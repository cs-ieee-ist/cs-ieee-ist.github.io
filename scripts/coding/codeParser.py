#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

key = ["False", "True", "class", "finally", "is", "return", "None", "continue", "for", "while", "if", "in", "lambda", "try", "def", "from", "nonlocal", "and", "del", "global", "not", "with", "as", "elif", "else", "or", "yield", "assert", "import", "pass", "break", "except", "raise"]
sub = { " ": "&nbsp ", "<": "&lt; ", ">": "&gt; ", "\"": "'", "\t": "&nbsp &nbsp &nbsp &nbsp " }
for file in sys.argv[1:]:
	if file == "h":
		print("python codeParser.py file1 file2 file3")
		break

	f = open(file, "r")
	g = open(file + ".out", "w")

	for line in f:
		newLine = "<p>"
		spaces = 0
		if line != "":
			for c in line[:-1]:
				if c in sub.keys():

					newLine += sub[c]
					spaces += 1

				else:
					newLine += c

			newLine += "</p>\n"
			tup = newLine.split(sub[" "])
			# for color in tup:
			# 	if color in key:
			# 		color = "<font color = \"#5555AE\">" + color + "</font>"
			g.write("".join(tup))
		else:
			g.write("<p></p>")
	f.close()
	g.close()
