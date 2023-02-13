<script lang="ts">
export default {
    inheritAttrs: false,
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    },
};
</script>

<template>
    <button class="gulu-button"
            :class="{[`theme-${theme}`]: theme}">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>