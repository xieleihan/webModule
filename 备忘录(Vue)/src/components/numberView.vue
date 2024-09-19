<template>
    <div>
        <span>共<span class="big">{{ num }}</span>件</span><span>已完成[<span class="big">{{ okNum }}</span>]</span><span>未完成[<span class="big">{{ noNum }}</span>]</span>
    </div>
</template>

<script>
export default {
    props: {
        num: {
            type: Number,
            required: true
        },
        noNum: {
            type: Number,
            required: true
        },
        okNum: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.big{
    font-size: 24px;
    font-weight: bold;
}
</style>