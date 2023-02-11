<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup() {
        const menuVisible = inject<Ref<boolean>>("menuVisible") // get
        const toggleMenu = () => {
            menuVisible!.value = !menuVisible!.value
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
        <span class="toggleAside" @click="toggleMenu"></span>
    </div>
</template>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    z-index: 10;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

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

    >.toggleAside {
        display: none;
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media(max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>