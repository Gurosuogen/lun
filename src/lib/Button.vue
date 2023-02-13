<script lang="ts">
export default {
    inheritAttrs: false,
    props: {},
    setup(props, content) {
        const { size, ...rest } = content.attrs
        return { size, rest }
    }
};
</script>

<template>
    <div :size="size">
        <button v-bind="rest">
            <slot />
        </button>
    </div>
</template>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>