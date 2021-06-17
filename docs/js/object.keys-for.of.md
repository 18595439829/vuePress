# 对象遍历方法Object.keys()和for...in的区别
借鉴https://blog.csdn.net/weixin_45000381/article/details/96996942
### Object.keys()：返回对象,返回一个数组，数组值为对象自有的属性，不会包括继承原型的属性
### for in :以任意顺序遍历一个对象的属性，包括自身属性，以及继承自原型的属性
>两种方法都无法遍历到以[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)为键(key)的属性

如要遍历以symbol为key的对象,参考es6提供的方法:http://caibaojian.com/es6/object.html
ES6一共有5种方法可以遍历对象的属性。
1. for...in
for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。
2. Object.keys(obj)
Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
3. Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
4. Object.getOwnPropertySymbols(obj)
Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。
5. Reflect.ownKeys(obj)
Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
```
let s = Symbol();
function Person(name, age) {
    this.name = name;
    this.age = age;
    this[s] = 'symbol';
}
Person.prototype = {
    sex: "男",
    [s]: 'symbol1'
}

var man = new Person("张三", 18);

console.log(Object.keys(man));//["name","age"]

for (var key in man) {
    console.log(key);//name age sex
}
```