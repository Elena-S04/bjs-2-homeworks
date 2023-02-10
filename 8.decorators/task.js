//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    if (wrapper.allCount === 0) {
      func(...args);
      wrapper.count += 1;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count += 1;
    }, delay);
    wrapper.allCount += 1;
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
