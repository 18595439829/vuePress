# for循环终止,使用break跳出当前循环
## 使用for遍历数组时,可使用break,终止循环
```
let arr = [1, 2, 3, 4, 5];
let valid = 0;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] >= 3) {
    valid += arr[index];
    console.log(arr[index]);
    break;
  }
}
console.log(valid);
```
输出3和3
## 使用forEach遍历数组时,不能使用break,而return只能跳过当前循环,继续执行
```
let arr = [1, 2, 3, 4, 5];
let valid = 0;
arr.forEach((item) => {
  if (item >= 3) {
    valid += item;
    console.log(item);
    return;
  }
});
console.log(valid);
```
输出3 4 5和12