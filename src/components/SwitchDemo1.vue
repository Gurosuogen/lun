<script lang='ts'>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
export default {
    components: { Switch },
    setup() {
        const bool = ref(false)
        return { bool }
    }
}
</script>

<template>
    <Switch v-model:value="bool" />
</template>

<style lang='scss' scoped></style>