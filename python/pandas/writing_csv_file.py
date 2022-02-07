import csv
#field names
fields=['name','branch','year','cgpa']
#data rows of csv file
rows=[['nikhil','coe','2','9.0'],['sanchit','coe','2','9.1'],['aditya','IT','2','9.3'],['sagar','se','1','9.5'],['prathik','MCE','3','7.8'],['sahil','EP','2','9.1']]
#name of csv file
filename="university_records.csv"
#writing to csv file
with open(filename,'w')as csvfile:
    #creating csv writer object
    csvwriter=csv.writer(csvfile)
    #writing the fields
    csvwriter.writerow(fields)
    #writing data rows
    csvwriter.writerows(rows)