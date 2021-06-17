# vue使用axios兼容IE10+的文件下载
```
const uploadFile = (Url, name) => {
  axios.get(Url, { responseType: 'blob' }).then((res) => {
    //  如果支持微软的文件下载方式(ie10+浏览器)
    if (window.navigator.msSaveBlob) {
      try {
        const blobObject = new Blob([res.data]);
        window.navigator.msSaveBlob(blobObject, `${name}.xls`);
      } catch (e) {
        console.log(e);
      }
    } else {
      //  其他浏览器
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${name}.xls`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // 下载完成移除元素
      window.URL.revokeObjectURL(url); // 释放掉blob对象
    }
  });
}
```