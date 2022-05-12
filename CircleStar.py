def getShape(n):
    if (n%2==0 and n%3 ==0):
        print("CIRCLE STAR")
    elif (n%2==0):
        print("CIRCLE")
    elif (n%3==0):
        print("STAR")
    else:
        print("null")

# main
n = int(input("Masukkan sebuah bilangan bulat positif : "))
getShape(n)