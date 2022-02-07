#quiz:1q

#import numpy as np
#np_arr=np.array([2,13])
#print(type(np_arr))

#quiz:2q

#np_arr=np.array([[1,2,3],[2,3,5],[10,11,12]])
#print(np_arr[2][0:2])

#quiz:3q
import numpy as np
#np_arr=np.array([10,21,5,11])
#np_sub_arr=np_arr[0:2]  #np_sub_arr=np.copy(np_arr[0:2]) gives output as unmodified array
#np_sub_arr[0:2]=[2,3]
#print(np_arr)

#quiz:4q
#np_arr=np.array([[20,3],[15,22]])
#np_arr2=np.append(np_arr,[6,10])
#print(np_arr2)

#quiz:5q
#list_quiz=[1,5,12,3,14]
#np_arr=np.array(list_quiz)
#print(list_quiz>10) it will give type error bcz python lists doesnt support logical indexing  
#print(np_arr>10)

#quiz:6q
np_arr=np.array([[1,4,2]])*20
print(np_arr)