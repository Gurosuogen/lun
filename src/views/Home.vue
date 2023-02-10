<template>
    <div>
        <div class="topnav">
            <div class="logo">LOGO</div>
            <div class="menu">
                <li>menu1</li>
                <li>menu2</li>
            </div>
        </div>
        <div class="banner">
            <h1>LUN UI</h1>
            <h2>一个厉害的 UI 框架</h2>
            <p class="actions">
                <a>GitHub</a>
                <a>开始</a>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.topnar {
    background: pink;
    display: flex;
    padding: 16px;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>