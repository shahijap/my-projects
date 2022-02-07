import numpy as np
#np_arr=np.array([[1,2],[6,8]])
#print(np_arr)
#print(np_arr.shape)
#np_arr_insert=np.insert(arr=np_arr,obj=0,values=[3,4],axis=0)   #object represent index and axis=1 insert column where as o insert row
#print(np_arr_insert)
#np_arr_append=np.append(arr=np_arr,values=[[3,4],[5,6]],axis=0)  #by using append we add elements eventhough array is single dimension but with axis it will show error it can be sloved by adding same compatible dimension  
#print(np_arr_append)   #append gives 1d default even we give 2d
#np_arr_delete=np.delete(arr=np_arr,obj=1,axis=1)    
#print(np_arr_delete)
np_arr=np.array([[20,14],[31,41],[941,678],[1468,121]])
np_copy1=np.append(np_arr,values=[3,4,5])
print(np_copy1)
np_copy2=np.insert(np_arr,obj=[1],values=[[15,21],[41,93]],axis=0)
print(np_copy2)
np_copy3=np.delete(np_arr,obj=0,axis=0)
print(np_copy3)