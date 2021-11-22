function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(","); 
      let idx = cache.findIndex((item) => item.hash === hash); 
      if (idx !== -1 ) { 
        // console.log("Из кэша: " + cache[idx].result); 
        return "Из кэша: " + cache[idx].result;
      }
  
      let result = func(...args);
      cache.push({hash, result}) ; 
      if (cache.length > 5) { 
        cache.shift(); 
      }
      // console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
}
  

function debounceDecoratorNew(func, ms) {
  let timeout;
  func(...args);
  let flag = true;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!flag) {
        func.call(this, ...args); 
        flag = true;
      }
    }, ms);
  };
}

function debounceDecorator2(debounceDecoratorNew) {
  let count = 0;
  function wrapper(...args) {
    wrapper.count = count++;
    return debounceDecoratorNew.call(this, ...args);
  }
  return wrapper;
}