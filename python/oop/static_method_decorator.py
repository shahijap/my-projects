class Car:
    car_count=0
    def __init__(self,model):
        self.__model=model
        Car.car_count+=1
    # setting and getting arrtributes(setters & getters)
    @property
    def model(self):
        return self.__model

    @model.setter
    def model(self,model):
        self.__model=model

    # access to nothing   
    @staticmethod
    def peep():
        print("PEEEEP!")

    # access only to the class
    @classmethod
    def countcars(car_class):
        print("we have: ",car_class.car_count,"cars")

    ## it is normal function( access to both the class and object )
    def print_car_model(self):
        print("your car model is : ",self.__model)
        print("we have: ",self.car_count,"cars")

car1=Car("BMW")
print(car1.model)
car1.print_car_model()
car1.peep()   #object
Car.peep()   #class
    
