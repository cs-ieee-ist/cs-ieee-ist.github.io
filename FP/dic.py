#A dictionary has the following syntax
nomeDoDicionario = {"key1":"value1", "key2":"value2"}

#Exemplo
thisdict =	{
  "brand": "Ferrari", #In this example the key is brand and the value is ferrari
  "model": "250GTO",  #In  this example the key is model and the value is 250GTO
  "year": 1962        #In this example, the key is year and value is 1962
}

#To change a given key we use the following syntax
thisdict["year"] = 1964

#This is to print the keys of the dictionary
for x in thisdict: 
  print(x) 

#This is to print the values of each key of the dictionary
for x in thisdict:
  print(thisdict[x]) 

#This is to print both the keys and their respective values of the dictionary
for x, y in thisdict.items():
  print(x, y) 

#To add a member to the dictionary
thisdict["color"] = "Ferrari Red"

print(thisdict) #Prints the dictionary

del thisdict["year"] #Eliminates both the key and the corresponding value

thisdict.pop("year") #Eliminates both the key and the corresponding value

del thisdict #Eliminates the dictionary completely

thisdict.clear() #Elimina todos os elementos do dicionario restanto um dicionario vazio

#Some Methods of dictionaries

thisdict.clear()	#Removes all the elements from the dictionary
thisdict.copy()	#Returns a copy of the dictionary
thisdict.fromkeys()	#Returns a dictionary with the specified keys and values
thisdict.get()	#Returns the value of the specified key
thisdict.items()	#Returns a list containing the a tuple for each key value pair
thisdict.keys()	#Returns a list contianing the dictionary's keys
thisdict.pop()	#Removes the element with the specified key
thisdict.popitem()	#Removes the last inserted key-value pair
thisdict.setdefault()	#Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
thisdict.update()	#Updates the dictionary with the specified key-value pairs
thisdict.values()	#Returns a list of all the values in the dictionary