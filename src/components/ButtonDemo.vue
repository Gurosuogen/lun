<template>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
        <button>hello!</button>
        <button theme="button">hello!</button>
        <button theme="link">hello!</button>
        <button theme="text">hello!</button>
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