# js格式化日期时间为YYYY-MM-DD HH:MM:SS
```
const format = time => {
  const date = new Date(time)

  const year = date.getFullYear()
  const month = date.getMonth() + 1 // 月份是从0开始的
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const newTime =
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (day < 10 ? '0' + day : day) +
    ' ' +
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (sec < 10 ? '0' + sec : sec)

  return newTime
}
export {
  format
}
```