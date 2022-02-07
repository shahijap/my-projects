##car class
class Vehicle():

    def __init__(self,model,year):
        self.model=model
        self.year=year

    def print_veh(self):
        print("im a vehicle")

class Car(Vehicle):
     pass

car1=Car("BMW",2020)
#car1.print_veh()



##method overriding
class Vehicle():
    def __init__(self,model,year):
        self.model=model
        self.year=year

    def print_veh(self):
        print("im a vehicle")

class Car(Vehicle):
     def print_veh(self):
         print("im a car!")

car1=Car("BMW",2020)
car1.print_veh()

##method adding
class Car(Vehicle):
    def __init__(self,price):
        self.price=price

    def print_veh(self):
         print("im a car!")
    def discount(self,price,dis):
        self.price=price*(1-dis)
car1=Car(200000)
car1.discount(car1.price,0.2)
print(car1.price)

##super function
class Vehicle():
    def __init__(self,model,year):
        self.model=model
        self.year=year

    def print_veh(self):
        print("im a vehicle")

class Car(Vehicle):
    def __init__(self,price):
        self.price=price

    def print_veh(self):
         print("im a car!")

    def discount(self,dis):
        self.price=self.price*(1-dis)    
        super().print_veh()
car1=Car(100000)
car1.discount(0.1)

##multi inheritence

class Vehicle():
    def __init__(self,model,year):
        self.model=model
        self.year=year

    def print_veh(self):
        print("im a vehicle")
class Factory:
    def print_fac(self):
        print("im a factory!")


class Car(Vehicle,Factory):
    def __init__(self,price):
        self.price=price

    def print_veh(self):
         print("im a car!")

    def discount(self,dis):
        self.price=self.price*(1-dis)    
        super().print_veh()
car3=Car(1000)
car3.print_veh()