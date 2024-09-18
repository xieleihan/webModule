<template>
    <div>
        <span>共<span>{{ num }}</span>件</span><span>已完成[<span>{{ okNum }}</span>]</span><span>未完成[<span>{{ noNum }}</span>]</span>
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

<style scoped></style>