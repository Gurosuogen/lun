<script lang="ts">
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
export default {
    components: { Tab, Tabs },
}
</script>
<template>
    <Tabs>
        <Tab title="nav1">content1</Tab>
        <Tab title="nav2">content2</Tab>
</Tabs>
</template>