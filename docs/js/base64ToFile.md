# 将文件转化为base64,将base64转化为文件并下载
```
// 将文件转化为base64
    fileToBase64(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e.target.result);
        return e.target.result
      };
    },
```
```
// 将base64转化为文件
base64ToFile(base) {
      const arr = base.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
          const blobObject = new Blob([u8arr], { type: mime });
          window.navigator.msSaveBlob(blobObject, 'aaa.xls');
        } catch (e) {
          console.log(e);
        }
      } else {
        const url = window.URL.createObjectURL(new Blob([u8arr], { type: mime }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'aaa.xls');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // 下载完成移除元素
        window.URL.revokeObjectURL(url); // 释放掉blob对象
      }
    },
```