# vue文件下载:

## 返回文件流:
1. 修改axios请求的responseType为blob，以post请求为例：
```
axios({
    method: 'post',
    url: 'api/user/',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    },
    responseType: 'blob'
}).then(response => {
    this.download(response)
}).catch((error) => {

})
```
2. 
```
methods: {
    // 下载文件
    download (data) {
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        // link.style.display = 'none'
        link.href = url
        link.setAttribute('download', 'ivr.xls')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link) // 下载完成移除元素
        window.URL.revokeObjectURL(url) // 释放掉blob对象
    }
}
```
## 使用a链接
直接打开链接即可