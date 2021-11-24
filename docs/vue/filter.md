# vue添加自定义过滤器:去三位小数
```
filters: {
    fixedThree(num) {
      let value = '';
      if (String(num).indexOf('.') !== -1) {
        const x = String(num).indexOf('.') + 1; // 小数点的位置
        const y = String(num).length - x; // 小数的位数
        if (y <= 3) {
          value = num;
        } else {
          value = Number(num).toFixed(3);
        }
      } else {
        value = num;
      }
      return value;
    },
  },
```