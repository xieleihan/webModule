<template>
    <div class="textContainer">
        <div class="textContainerTitle">{{ textObj.story.title }}</div>
        <div class="textdesc">
            <div class="textAthor">作者/{{ author }}</div>
            <div class="linkToZhihu">进入「懂乎」查看原文</div>
        </div>
        <div class="html" v-html="body"></div>
    </div>
</template>

<script>
export default {
    props: {
        textObj: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            body: '',
            author: ''
        };
    },
    created() {
        // 确保 `textObj.story.body` 有值
        if (this.textObj && this.textObj.story && this.textObj.story.body) {
            this.extractHtmlContent();
        }
    },
    methods: {
        extractHtmlContent() {
            // 正则匹配获取 <div class="content"> 标签内的内容
            const regex = /<div class="content">([\s\S]*?)<\/div>/i;
            const match = this.textObj.story.body.match(regex);
            const authorregex = /<span class="author">([^<]+)<\/span>/i;
            const authormatch = this.textObj.story.body.match(authorregex);
            // 如果匹配到了内容，则将其赋值给 body
            if (authormatch && authormatch[1]) {
                const result = authormatch[1].replace(/，$/, '');
                this.author = result;
            }

            if (match && match[1]) {
                this.body = match[1];
                const body = this.body;
                const updatedBody = body.replace(/<img(.*?)class="(.*?)"(.*?)>/g, '<img$1class="myimg $2"$3>')
                    .replace(/<img(?!.*class=")(.*?)>/g, '<img class="myimg"$1>');

                this.body = updatedBody;
                // console.log(match[1]); // 你可以通过控制台输出查看匹配的内容
            } else {
                console.error('未找到匹配的内容');
            }
        }
    }
};
</script>

<style lang="less">
.url{
    display: block;
    overflow: hidden;
}
p{
    word-break: break-word;
}

    .textContainer{
        width: 90%;
        margin: 0 auto;
        .textContainerTitle{
            width: 100%;
            font-size: 18px;
            padding-top: 20px;
            font-weight: bold;
            line-height: 30px;
        }
        .textdesc{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 12px;
            margin-top: 5px;
            .textAthor{
                font-size: 16px;
                margin-right: 10px;
                color: #a7a7a7;
            }
            .linkToZhihu{
                color: #3db9dc;
            }
        }
        .html{
            width: 100%;
            font-size: 16px;
            display: flex;
            flex-direction: column;
            .myimg{
                width: 100%;
            }
        }
    }
</style>