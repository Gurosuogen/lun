<script lang="ts">
import { ref } from 'vue';
export default {
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return { toggle }
    }
};
</script>

<template>
    <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}">
        <span></span>
    </button>
</template>

<style lang="scss">
$h: 22px;
$h2: calc($h - 4px);

.gulu-switch {
    height: $h;
    width: calc($h * 2);
    border: none;
    background: #bfbfbf;
    border-radius: calc($h / 2);
    position: relative;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: calc($h2 / 2);
        transition: all 250ms;
    }

    &.gulu-checked {
        background: #1890ff;

        >span {
            left: calc(100% - #{$h2} - 2px)
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: calc($h2 + 4px);
        }
    }

    &.gulu-checked:active {
        >span {
            width: calc($h2 + 4px);
            margin-left: -4px;
        }
    }
}
</style>