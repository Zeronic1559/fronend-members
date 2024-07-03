<template>
  <div v-if="$route.path != '/'">
    <ToHomeButton class="block md:hidden"></ToHomeButton>
  </div>
  <div v-else-if="$route.path == '/'">
    <nav class="navigation mb-4 p-4 block md:hidden">
      <ul class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <li
          v-for="item in menuList"
          :key="item.url"
          class="navigation-item p-4 md:p-2 rounded-md"
          :class="$route.path == item.link ? 'active-menu' : ''"
        >
          <NuxtLink :to="item.link" class="flex flex-col text-center hover:opacity-90">
            <img :src="item.icons" class="w-10 m-auto mb-2" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { menuList } from "@/constants/function/allmenu";
import ToHomeButton from "@/components/ToHomeButton";
</script>

<style scoped>
.navigation-item {
  position: relative;
  transition: 0.5s;
  overflow: hidden;
}

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
  background: linear-gradient(180deg, #bf1313 0%, #700909 88.02%);
  border: 1px solid transparent;
}
</style>
