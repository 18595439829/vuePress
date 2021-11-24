# html2canvas将DOM导出为图片
```
import html2canvas from 'html2canvas';

const  doScreeenShots = (html, imgName = 'default') => {
      setTimeout(() => {
        const div = html;
        const width = div.offsetWidth;
        const height = div.offsetHeight;
        const canvas2 = document.createElement('canvas');
        const scale = 1;
        canvas2.width = width * scale;
        canvas2.height = height * scale;
        const context1 = canvas2.getContext('2d');
        if (context1) {
          context1.scale(scale, scale);
        }
        const opts = {
          scale,
          canvas: canvas2,
          width,
          height,
          useCORS: true,
        };
        html2canvas(div, opts).then((canvas) => {
          const context = canvas2.getContext('2d');
          if (context) {
            context.scale(1, 1);
            context.mozImageSmoothingEnabled = false;
            context.webkitImageSmoothingEnabled = false;
            context.imageSmoothingEnabled = false;
          }
          const aLink = document.createElement('a');
          const evt = document.createEvent('HTMLEvents');
          evt.initEvent('click', true, true);
          aLink.download = imgName;
          aLink.href = canvas.toDataURL();
          aLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        });
      }, 1000);
    }
export {
  doScreeenShots 
}
```