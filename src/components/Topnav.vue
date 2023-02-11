<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup() {
        const menuVisible = inject<Ref<boolean>>('menuVisible') // get
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value
        }
        return { toggleMenu }
    }
}
</script>

<template>
    <div class="topnav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>menu1</li>
            <li>menu2</li>
        </ul>
        <span class="toggleMenu"></span>
    </div>
</template>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleMenu {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }
    }
}
</style>