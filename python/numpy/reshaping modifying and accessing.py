import numpy as np
#my_arr=np.arange(20)
#print(my_arr)
#my_arr_reshaped=np.reshape(my_arr,(5,4))
#print(my_arr_reshaped)
#my_arr_reshaped=np.reshape(my_arr,(5,4),order="F")     #(5,4)should be compatible with 20 or it can be as (10,2)
#print(my_arr_reshaped)
#my_arr_reshaped=np.reshape(my_arr,(10,2))
#print(my_arr_reshaped)
#my_list=list(my_arr)
#my_list[1]=5
#my_arr[1]=6
#print(my_list[1])
#print(my_arr[1])
#print(my_arr)
#my_list_reshaped=list(my_arr_reshaped)
#my_arr_reshaped[1,1]=10
#print(my_arr_reshaped[1,1])
#print(my_arr_reshaped)
#print(my_list_reshaped[0][1])


#assignment
np_arr=np.arange(2,14)
print(np_arr)
np_reshaped=np.reshape(np_arr,(3,4))
print(np_reshaped)
np_reshaped[1,0]=20
print(np_reshaped)
