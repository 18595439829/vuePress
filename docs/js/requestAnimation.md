# 使用requestAnimationFrame模拟setTimeout和setInterval
## 1.模拟setTimeout
```
const mockSetTimeOut = (cb,time = 0) =>{
   let t = 0;
   let timer = () => {
        t += 1;
        if ((t * (1000 / 60)) > time) {
          cb();
          cancelAnimationFrame(timer);
        } else {
          requestAnimationFrame(timer);
        }
    }
    requestAnimationFrame(timer);
}
mockSetTimeOut(()=> {
  console.log('1s后');
}, 1000)
```
## 2.模拟setInterval
```
const mockSetInterval = (cb,time = 0) => {
    let t = 0;
    let timer = () => {
        t += 1;
        requestAnimationFrame(timer);
        if ((t * (1000 / 60)) > time) {
          t = 0;
          cb();
        }
    };
    requestAnimationFrame(timer);
}
let a = 0;
mockSetInterval(()=> {
  a+= 1;
  console.log(`${a}s后`);
}, 1000)
```