<template>
  <div>
    <div class="bg"></div>
    <div class="pb-20">
      <Container>
        <Header />
        <Menu />

        <slot />
      </Container>
    </div>
  </div>
</template>

<script setup>
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/menu/index.vue";
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(180deg, rgba(50, 50, 50, 0.044) 0%, rgba(26, 25, 25, 0.569) 50%),
    url("/images/main-background.webp");
  width: 100vw;
  min-height: 100vh;
  z-index: -9999;
}
html {
  font-family: "Kanit", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

.content {
  position: relative;
  z-index: 99;
}

ol {
  padding-left: 15px;
  list-style: decimal;
}
</style>
