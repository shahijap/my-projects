class Car:
    cars_count=0
    def __init__(self,model):
        self.__model=model
        Car.cars_count=Car.cars_count+1
    @property
    def x(self):    #x is just a covention
        return self.__model
    @x.setter
    def model(self,model):
        self.__model=model
    @classmethod
    def countcars(car_class):
        print("we have: ",car_class.cars_count,"cars")
car1=Car("BMW")
car1.countcars()
car1.model="kea"
print(car1.model)
car2=Car("hyundai")
car2.countcars()
print(car2.model)
Car.countcars()