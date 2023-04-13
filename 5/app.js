function convertArrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] === 'name') {
        obj[arr[i]] = arr[i + 1];
      } else {
        obj[arr[i]] = {};
        obj[arr[i]][arr[i + 1]] = arr[i + 2];
        i += 2;
      }
    }
    return obj;
  }
  
  let arr = ['name', 'John', 'lastname', 'Black', 'age', '23'];
  let obj = convertArrayToObject(arr);
  console.log(obj);