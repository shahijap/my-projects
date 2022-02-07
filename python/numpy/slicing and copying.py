import numpy as np
#np.random.seed(0)  #we get same random values while rerun
#np_rand=np.random.random((3,3))
#print(np_rand)
#print(np_rand[0:2,0:2])
#print(np_rand[0:1,0:1])
#print(np_rand[0:3,0:3])
#print(np_rand[0:3,0])

#np_sub_rand=np.copy(np_rand[0:3,0])   #this copy function prevent manipulation of original rand function from modified access 
#print(np_sub_rand)
#np_sub_rand[0]=1000
#print(np_sub_rand)
#print(np_rand)
np_arr=np.ones((7,6))
print(np_arr)
np_copy=np.copy(np_arr)
print(np_copy[2:4,3:5])
np_slice=np.zeros((2,2))
#print(np_slice)
np_copy[2:4,3:5]=np.zeros((2,2))
print(np_slice)
#print(np_arr)
