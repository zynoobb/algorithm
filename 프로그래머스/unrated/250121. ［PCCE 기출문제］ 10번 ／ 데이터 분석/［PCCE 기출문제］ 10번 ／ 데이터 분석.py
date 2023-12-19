def solution(data, ext, val_ext, sort_by):
  order = ['code', 'date', 'maximum', 'remain']
  arr = []
  extIdx = order.index(ext)
  sortIdx = order.index(sort_by)
  
  for v in data :
    if val_ext > v[extIdx] :
      arr.append(v)

  arr.sort(key= lambda x : x[sortIdx])
  return arr
  