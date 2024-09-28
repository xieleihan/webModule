<template>
    <div class="readText">
        <div class="readTextContainer">
            <textCover :textObj="textObj"></textCover>
            <textContainer :textObj="textObj"></textContainer>
        </div>
        
        <textNav @changeView="changeView"></textNav>
    </div>
</template>

<script>
import textNav from '../components/textNavCom.vue'
import textCover from '../components/textCoverCom.vue'
import textContainer from '../components/textContainerCom.vue'
    export default {
    props: {
            textObj: {
                type:Object
            }
    },
        components: {
            textNav,
            textCover,
            textContainer
    },
    methods: {
        changeView() {
            this.$emit('changeView')
        }
    }
    }
</script>

<style lang="less" scoped>
    .readText{
        width: 100dvw;
        height: 100dvh;
        .readTextContainer{
            width: 100%;
            height: calc(100dvh - 50px);
            overflow-y: scroll;
        }
    }
</style>