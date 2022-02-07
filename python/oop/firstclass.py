##creating class

class Car:
    def __init__(self,model,year,price):
        self.model=model
        self.year=year
        self.price=price
    number_of_wheels=4
first_car=Car('nissan',2010,100000)
second_car=Car('BMW',2016,200000)
third_car=Car('nissan',2010,100000)
#print(first_car==third_car)    #o/p is false eventhough we create it as same bcz they have their own self
print(second_car.price)
print(second_car.number_of_wheels)