#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

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
			g.write(newLine)
		else:
			g.write("<p></p>")
	f.close()
	g.close()
