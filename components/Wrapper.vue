<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
    padding: 20px;
    background: #ffffff;
    border-radius: 5px;
}

@media screen and (min-width: 1100px) {
    .wrapper {
        padding: 60px 80px;
    }
}
</style>