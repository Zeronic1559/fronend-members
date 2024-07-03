<template>
  <nav class="navigation mb-4 p-8 hidden md:block">
   <ul class="grid grid-cols-3 md:grid-cols-5 gap-5">
      <li
      v-for="item in menuList"
      :key="item.link"
      class="navigation-item p-1 md:p-2"
      :class="$route.path == item.link ? 'active-menu' : ''"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <NuxtLink :to="item.link" class="flex flex-col text-center hover:opacity-90">
         <img :src="item.icons"  class="w-10 m-auto mb-2" />
         <span>{{item.name}}</span>
       </NuxtLink>
      </li>
   </ul>
 </nav>
</template>

<script setup>
import { menuList } from '@/constants/function/allmenu'


</script>

<style scoped>

.navigation {
 background: linear-gradient(90deg, #d1191985 0%, #800c0c98 88.02%);
 border-radius: 10px;
 color: #ffffff;
 border-top: 1px solid transparent;
}

a:hover {
 color: #bdbdbd;
}

.navigation-item {
 position: relative;
 transition: 0.5s;
 overflow: hidden;
}

.navigation-item .line {
 position: absolute;
 display: block;
}

.navigation-item .line:nth-child(1) {
 top: 0;
 left: 0;
 width: 100%;
 height: 2px;
 background: linear-gradient(90deg, transparent, #bf1313);
 animation: animate1 2s linear infinite;
}

@keyframes animate1 {
 0% {
   left: -100%;
 }
 50%,
 100% {
   left: 100%;
 }
}

.navigation-item .line:nth-child(2) {
 top: -100%;
 right: 0;
 width: 2px;
 height: 100%;
 background: linear-gradient(180deg, transparent, #bf1313);
 animation: animate2 2s linear infinite;
 animation-delay: 0.5s;
}

@keyframes animate2 {
 0% {
   top: -100%;
 }
 50%,
 100% {
   top: 100%;
 }
}

.navigation-item .line:nth-child(3) {
 bottom: 0;
 right: -100%;
 width: 100%;
 height: 2px;
 background: linear-gradient(270deg, transparent, #bf1313);
 animation: animate3 2s linear infinite;
 animation-delay: 1s;
}

@keyframes animate3 {
 0% {
   right: -100%;
 }
 50%,
 100% {
   right: 100%;
 }
}

.navigation-item .line:nth-child(4) {
 bottom: -100%;
 left: 0;
 width: 2px;
 height: 100%;
 background: linear-gradient(360deg, transparent, #bf1313);
 animation: animate4 2s linear infinite;
 animation-delay: 1.5s;
}

@keyframes animate4 {
 0% {
   bottom: -100%;
 }
 50%,
 100% {
   bottom: 100%;
 }
}

.active-menu {
 background-color: #bf1313;
 border-radius: 3px;
}
</style>