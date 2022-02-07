class Car:
    def __init__(self,model):
        self.__model=model
    @property
    def x(self):
        return self.__model
    @x.setter
    def model(self,model):
        self.__model=model
car1=Car("BMW")
print(car1.model)
car1.model="kea"
print(car1.model)


