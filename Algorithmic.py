def allSequenceCombinations(start,end,currentIdx,container):
    if end == 0:
        return container
    
    else:
        for i in range(start,end):
            tempo = currentIdx + i
            if tempo > 5:
                return allSequenceCombinations(i,0,currentIdx,container)
            else:
                currentIdx = tempo
                container[currentIdx] = i
                return allSequenceCombinations(i,end-start,currentIdx+1,container)

n = int(input("Masukkan bilangan bulat positif: "))
temp = [1]*n
print(allSequenceCombinations(1,n,0,temp))