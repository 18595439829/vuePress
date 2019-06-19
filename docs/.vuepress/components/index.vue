<template>
    <div class="index">
        <div class="img">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>
<script>
import imgUrl from '../../docs/.vuepress/public/img/羊驼.jpg'
export default {
    name: 'index',
    data() {
        return {
            imgUrl,
        }
    }
}
</script>
<style lang="less">
.index {
    width: 100%;
    text-align: center;
    .img {
        width: 300px;
        margin: 0 auto;
        & > img {
            width: 100%;
        }
}
}

</style>
