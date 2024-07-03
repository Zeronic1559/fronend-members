<template>
  <div class="w-full mb-1">
    <div class="container-jackpot">
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="text-price-jackpot">
          {{ formattedPrice }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

  const interval = ref(null);
  const min = 4083102;
  const max = 4993102;
  const price = ref(0);

  const formattedPrice = computed(() => {
    return price.value.toLocaleString('th-TH');
  });

  onMounted(() => {
    price.value = Math.floor(Math.random() * (max - min)) + min;
    interval.value = setInterval(() => {
      price.value += 0.01;
    }, 100);
  });

  onBeforeUnmount(() => {
    clearInterval(interval.value);
  });

  export {
    interval,
    min,
    max,
    price,
    formattedPrice,
  };
</script>


<style scoped>
.container-jackpot {
  @apply w-full h-[80px] md:h-[180px];
  background-image: url('/images/jackpot.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.text-price-jackpot {
  @apply text-white mt-10 md:mt-16 text-xl md:text-4xl font-normal md:font-semibold;
  @apply tracking-[3px] md:tracking-[5px];
}
</style>
