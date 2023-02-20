<script lang="ts">
import { ref } from 'vue';
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
export default {
    components: { Tab, Tabs },
    setup() {
        const x = ref('nav1')
        return { x }
    }
}
</script>
<template>
    <Tabs v-model:selected="x">
        <Tab title="nav1">content1</Tab>
        <Tab title="nav2">content2</Tab>
    </Tabs>
</template>