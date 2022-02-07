import pandas as pd
import numpy as np

##from ndarray

np_arr=np.array([1,2,3,7])
series_np=pd.Series(np_arr)
print(series_np)
##from a list
series_list=pd.Series([1,10,3])
print(series_list)
##from dict
di={"first":1,"second":2.5,"apple":"orange"}
series_dict=pd.Series(di,name="dict")
print(series_dict)
print(series_dict["apple"])
#from scalar value
scalar_value=10
series_scalar=pd.Series(scalar_value, index=[0,1,2,3,4,5])
print(series_scalar)
# numpy_like
print(series_dict.dtype)
np_arr=series_scalar.to_numpy()
print(np_arr)
#dict_like
print(series_scalar.get(4))
#shape
print(series_dict.shape)
#ndim
print(series_dict.ndim)
#size
print(series_dict.size)
#values
print(series_dict.values)
#index
print(series_dict.index)
#name
print(series_dict.name)