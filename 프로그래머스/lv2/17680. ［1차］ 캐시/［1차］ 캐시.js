function solution(cacheSize, cities) {
    let cache = []
    let result = 0
    cities = cities.map((a) => a = a.toLowerCase())    
    
    if(cacheSize === 0) return cities.length * 5
    
    for(let i = 0 ; i < cities.length ; i ++){
      if(cache.length !== cacheSize 
         && !cache.includes(cities[i])) {
         cache.push(cities[i])
         result += 5
      } else if(cache.length !== cacheSize 
         && cache.includes(cities[i])){
         cache.push(cities[i])
         result ++ 
      } else if(!cache.includes(cities[i])){
         cache.shift()
         cache.push(cities[i])
         result += 5
      } else if(cache.includes(cities[i])){
         cache.splice(cache.indexOf(cities[i]),1)
         cache.push(cities[i])
         result ++
      }
    }
  return result
}