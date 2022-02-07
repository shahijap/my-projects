class Car:
    def __init__(self,model,year,price):
        self.__model=model
        self.year=year
        self.price=price
    def setmodel(self,model):
        self.__model=model
    def getmodel(self):
        return self.__model
    model=property(getmodel,setmodel)    
    number_of_wheels=4
car_1=Car('BMW',2010,100000)
#print(car_1.getmodel())
#print(car_1.setmodel('hyundai'))
#print(car_1.getmodel())
car_1.model='AAA'
print(car_1.model)
