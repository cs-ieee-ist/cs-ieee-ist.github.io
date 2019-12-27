class account:

  def __init__(self, quantity): 
    '''Constructor is a method that creates a new instance of the object.
    The method is responsible for allocating resources necessary for the operation of the object beyond the initial definition of the state variables '''
    self.balance = quantity

  def consult(self): 
    '''In object-oriented programming a function is called a method. 
    Methods determine the behavior of objects in a class.'''
    return self.slado

  def deposit(self, quantity):
    '''In object-oriented programming a function is called a method. 
    The methods determine the behavior of the objects of a class.'''
    self.balance = self.balance + quantity
    return self.balance

  def withdraw(self, quantity):
    if self.balance - quantity >= 0:
      self.balance = self.balance - quantity
      return self.balance
    else:
      print('not enough balance')