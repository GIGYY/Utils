
// 一堆数组去重 不能去重对象
const arrRemoval = (arr) => {
  if (Array.isArray(arr)) {
    return [...new Set(arr)];
  } else {
    console.log('请传入数组');
  }
}


const deepClone = (params) => {
  // if (typeof params === 'string')return;
  let newObj = {};
  if (Array.isArray(params)) {
    newObj = [];
  }
  for (key in params) {
    if (typeof params[key] === 'object' && params[key] !== null) {
      newObj[key] = deepClone(params[key]);
    } else {
      newObj[key] = params[key];
    }
  }
  return newObj;
}