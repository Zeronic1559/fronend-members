<template>
    <nav class="navigation block md:hidden p-2 px-4 fixed bottom-0 left-0 w-full z-50">
      <ul class="flex items-center justify-between gap-2">
        <li v-for="item in menus" :key="item.link" class="navigation-item p-1 md:p-2">
          <div v-if="item.isFunction" class="flex flex-col text-center hover:opacity-90">
            <img :src="item.icon" :class="`w-8 m-auto mb-2 ${item.isAnimated ? 'rotate' : ''}`" :alt="item.name" />
            <span>{{ item.name }}</span>
          </div>
          <a
            v-else-if="item.external"
            :href="item.link"
            target="_blank"
            class="flex flex-col text-center hover:opacity-90"
          >
            <img :src="item.icon" :class="`w-8 m-auto mb-2 ${item.isAnimated ? 'rotate' : ''}`" :alt="item.name" />
            <span>{{ item.name }}</span>
          </a>
          <NuxtLink v-else :to="item.link" class="flex flex-col text-center hover:opacity-90">
            <img :src="item.icon" :class="`w-8 m-auto mb-2 ${item.isAnimated ? 'rotate' : ''}`" :alt="item.name" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { menuList } from '@/constants/function/allmenu'

  const menus = ref([
      {
        icon: '/images/icons/auto-deposit.webp',
        name: 'เติมเงิน',
        link: '/deposit',
        external: false,
        isAnimated: false,
        isShow: true,
      },
      {
        icon: '/images/icons/withdraw.webp',
        name: 'ถอนเงิน',
        link: '/withdraw',
        external: false,
        isAnimated: false,
        isShow: true,
      },
      {
        icon: '/images/icons/play.webp',
        name: 'เล่นเกม',
        link: '/',
        external: false,
        isAnimated: true,
        isShow: true,
      },
      {
        icon: '/images/icons/promotion.webp',
        name: 'โปรโมชั่น',
        link: '/promotion',
        external: false,
        isShow: true,
      },
      {
        icon: '/images/icons/customer-service.png',
        name: 'ติดต่อ',
        link: 'https://line.me/R/ti/p/@mes168',
        external: true,
        isAnimated: false,
        isShow: true,
      },
    ]);

    const menuLists = computed(() => {
      return menus.value.filter((el) => el.isShow === true || el.isShow === 'true');
    });
  </script>
  
  <style scoped>
  .navigation {
    background: linear-gradient(180deg, #bf1313 0%, #700909 88.02%);
    color: #ffffff;
    border-top: 1px solid transparent;
  }
  
  a:hover {
    color: #bdbdbd;
  }
  
  .rotate {
    animation: spin 1s ease-in-out infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-5deg) translateY(5px);
    }
    70% {
      transform: rotate(5deg) translateY(-5px);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  </style>
  