import pandas as pd
#di={"2":1,"key":5,"door":"window"}
#series_dict=pd.Series(di)
#print(series_dict)
##index
#print(series_dict["key"])
#print(series_dict[1])
##mutable
#series_dict["key"]=10
#print(series_dict)
##more than one index
#print(series_dict[[0,1]])
#print(series_dict.iloc[0:1])
#print(series_dict.loc["2":"key"])
#drop elements from series
#print(series_dict.drop(labels="2"))
#print(series_dict.drop(labels="2",inplace=True))
#series_dict=series_dict.drop(labels="2")
#print(series_dict)
#mathematical operations
series_1=pd.Series([1,5,2])
series_2=pd.Series([10,3,5])
#current_series_add=pd.Series()
#for i in range(len(series_1)):
    #current_series_1=series_1[i]
    #current_series_2=series_2[i]
    #current_series=current_series_1+current_series_2
    #current_series=pd.Series(current_series,index=[i])
    #current_series_add=current_series_add.append(current_series)
#print(current_series_add)
print(series_1.add(series_2))
print(series_1.sub(series_2))
print(series_1)