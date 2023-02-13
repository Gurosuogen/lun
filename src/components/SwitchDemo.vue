<script>
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';
export default {
    components: { Switch },
    setup() {
        const y = ref(false)
        return { y }
    }
};
</script>

<template>
    <Switch v-model:value="y"/>
</template>

<style lang="scss" scoped>
</style>