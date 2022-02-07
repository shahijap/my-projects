import pandas as pd
pd_csv=pd.read_csv("university_records.csv")
print(pd_csv.head())
##access elements
print(pd_csv.iloc[3,0])
print(pd_csv.loc[3,"name"])
#add rows
x=pd.Series([1],name="anything")
print(pd_csv.append(x))
#pd_csv=pd_csv.append(x)
print(pd_csv.head())
##add columns
pd_csv.insert(loc=0,column="anyone",value=5)
print(pd_csv.head())
##remove(pop-drop)
print(pd_csv.drop(labels=0))
##rename
print(pd_csv.rename(columns={"anyone":"integer"}))
##set index
print(pd_csv.set_index("anyone"))