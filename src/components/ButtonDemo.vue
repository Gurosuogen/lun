<template>
    <div>Button 示例</div>
    <h1>theme示例</h1>
    <div>
        <Button>hello!</Button>
        <Button theme="button">hello!</Button>
        <Button theme="link">hello!</Button>
        <Button theme="text">hello!</Button>
    </div>
    <h1>size示例</h1>
    <div>
        <Button size="big">It's so big!</Button>
        <Button>just normal.</Button>
        <Button size="small">tiny!</Button>
    </div>
    <div>
        <Button theme="link" size="big">It's so big!</Button>
        <Button theme="link">just normal.</Button>
        <Button size="small" theme="link">tiny!</Button>
    </div>
    <div>
        <Button theme="text" size="big" >It's so big!</Button>
        <Button theme="text">just normal.</Button>
        <Button theme="text" size="small" >tiny!</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
    components: { Button },
    setup() {
        const onClick = () => {
            console.log('hi');
        }
        return { onClick }
    }
}
</script>