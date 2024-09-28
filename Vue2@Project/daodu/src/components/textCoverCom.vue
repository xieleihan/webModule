<template>
    <div class="textCover">
        <img :src="this.textObj.story.image" />
        <div class="gradient"
            :style="{ background: `linear-gradient(to top, ${convertColor(this.textObj.story.imageHue)}, transparent)` }"></div>
            <div class="textTitle">{{ this.textObj.story.title }}</div>
    </div>
</template>

<script>
    export default {
    props: {
            textObj: {
                type:Object
            }
    },
        methods: {
            convertColor(color) {
                if (color.startsWith('0x')) {
                    return `#${color.slice(2)}`;
                }
                return color;
            }
        }
}
</script>

<style lang="less" scoped>
    .textCover{
        width: 100%;
        position: relative;
        img{
            width: 100%;
        }
        .gradient{
            position: absolute;
            width: 100%;
            bottom: 0;
            height: 100%;
        }
        .textTitle{
            position: absolute;
            bottom: 40px;
            font-size: 18px;
            color: white;
            width: 90%;
            line-height: 30px;
            font-weight: bold;
            left: 50%;
            transform: translateX(-50%);
            
        }
    }
</style>