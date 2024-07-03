<template>
    <div>
        <div class="bg"></div>
        <div class="content py-8">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(180deg,
            rgba(50, 50, 50, 0.044) 0%,
            rgba(26, 25, 25, 0.569) 50%),
        url('/images/main-background.webp');
    ;
    width: 100vw;
    min-height: 100vh;
    z-index: -9999;
}

.content {
    position: relative;
    z-index: 99;
}
</style>