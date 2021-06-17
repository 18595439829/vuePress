#  js将数组对象转化为树形结构
## 第一种方法: 使用for循环(性能比递归好很多,推荐使用)
```
    // jsonData: 数组对象
    // id: 每条数据的id
    // pid: 每条数据的父节点对应字段
    /*
      [
        {
          name: '测试',
          id: '1001',
          pid: '-1',
        }
      ] 
    */
    jsonToTree(jsonData, id, pid) {
      let result = [],
        temp = {};
      for (let i = 0; i < jsonData.length; i++) {
        temp[jsonData[i][id]] = jsonData[i]; // 以id作为索引存储元素，可以无需遍历直接定位元素
      }
      for (let j = 0; j < jsonData.length; j++) {
        let currentElement = jsonData[j];
        let tempCurrentElementParent = temp[currentElement[pid]]; // 临时变量里面的当前元素的父元素
        if (tempCurrentElementParent) {
          // 如果存在父元素
          if (!tempCurrentElementParent["children"]) {
            // 如果父元素没有chindren键
            tempCurrentElementParent["children"] = []; // 设上父元素的children键
          }
          tempCurrentElementParent["children"].push(currentElement); // 给父元素加上当前元素作为子元素
        } else {
          // 不存在父元素，意味着当前元素是一级元素
          result.push(currentElement);
        }
      }
      return result;
    }
```
## 第二种方法: 使用递归的方式:
```
translateDataToTree(data) {
    // 没有父节点的数据
    const parent = data.filter(value => value.pid.trim() === '-1'
    || value.pid.trim() === null
    || value.pid.trim() === '');

    // 有父节点的数据
    const child = data.filter(value => value.pid.trim() !== '-1'
    && value.pid.trim() !== null
    && value.pid.trim() !== '');


    // 定义转换方法的具体实现
    const translator = (parents, children) => {
      // 遍历父节点数据
      parents.forEach((item) => {
        // 遍历子节点数据
        children.forEach((current, index) => {
          // 此时找到父节点对应的一个子节点
          // if (current.pid === parent.id) {
          if (current.pid === item.id) {
            // 对子节点数据进行深复制，这里只支持部分类型的数据深复制，
            const temp = JSON.parse(JSON.stringify(children));
            // 让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
            temp.splice(index, 1);
            // 让当前子节点作为唯一的父节点，去递归查找其对应的子节点
            translator([current], temp);
            // 把找到子节点放入父节点的children属性中
            if (typeof item.children !== 'undefined') {
              item.children.push(current);
            } else {
              // eslint-disable-next-line no-param-reassign
              item.children = [current];
            }
          }
        });
      });
    };

    // 调用转换方法
    translator(parent, child);
    // 返回最终的结果
    return parent;
  },
```
