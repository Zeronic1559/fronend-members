<template>
    <div class="container m-auto">
        <slot></slot>
    </div>
</template>

<script setup>

</script>
<style scoped>
.container {
    padding: 10px;
}

@media screen and (min-width: 1100px) {
    .container {
        max-width: 800px;
        margin: 40px auto;
    }
}
</style>