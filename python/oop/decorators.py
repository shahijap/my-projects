##inner functions
def outer_fun():
    print("this is the first print message")
    def inner_fun():
        print("this is the inner function")
    #inner_fun()
    print("this will also printed!")
    return inner_fun()
#outer_fun()    
##calling inner functions
output=outer_fun()
print(output)

##returning inner functions
#print(output())
##decorators
def dec(inner_fun):
    def wrapper_fun():
        print("iam a wrapper")
        inner_fun()
    return wrapper_fun
def modified_print():
    print("this is a modified print function")
z=(modified_print())
print(z)
##@symbol
@dec
def modified_print():
    print("this is a modified print function")
x=modified_print()
##reuse decorators
def print_2():
    print("this is another modified print function")
c=print_2()