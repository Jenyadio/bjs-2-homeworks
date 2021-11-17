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
  let timeoutFlag = false;
  return function() {
    if (timeoutFlag) return;
    func.apply(this, arguments);
    timeoutFlag = true;
    setTimeout(() => timeoutFlag = false, ms);
  };
}

function debounceDecorator2(func, ms) {
  let timeoutFlag = false;
  function wrapper(...args) {
    if (timeoutFlag) return;
    func.apply(this, arguments);
    timeoutFlag = true;
    setTimeout(() => {timeoutFlag = false; wrapper.count++}, ms);
  };
  wrapper.count = 0;
  return wrapper;
}