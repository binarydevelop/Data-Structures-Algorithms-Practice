def soln(arr):
  largest = -1
  res = []
  for i in range(len(arr)-1, -1, -1):
    if arr[i] >= largest:
      res.append(arr[i])
      largest = arr[i]
    
  return res[::-1]
    
arr = []

print(soln(arr))