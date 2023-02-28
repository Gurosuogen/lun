<script lang='ts'>
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },
    // setup(props) {
    //     const content = ref(null)
    //     import(/* @vite-ignore */props.path).then(result => {
    //         content.value = result.default
    //     })
    //     return { content }
    // }
}
</script>

<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<style lang='scss' scoped></style>