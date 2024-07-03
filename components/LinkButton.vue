<template>
   <nuxt-link
    :to="to"
    :class="[
      'bg-gradient-to-br from-primary to-secondary text-white text-center text-default rounded-sm size-full py-2.5 px-5',
      {
        'link-button--red': color === 'red',
        'link-button--blue': color === 'blue',
        'link-button--green': color === 'green',
      },
    ]"
  >
    <i :class="icon"></i>
    <typography variant="span">
      <slot></slot>
    </typography>
  </nuxt-link>
</template>

<script setup>
import Typography from '@/components/Typography'

const props = defineProps({
    color: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>

.link-button {
  @apply px-[7px] py-[7px] md:px-[15px]  rounded-[5px] text-white text-sm md:text-base;
}

.link-button--green {
  background: #0aaf01;
}

.link-button--green:hover {
  background: #00c448;
}

.link-button--red {
  background: #d33939;
}

.link-button--red:hover {
  background: #d75c5c;
}

.link-button--blue {
  background: #395bd3;
}

.link-button--blue:hover {
  background: #5c77d7;
}

</style>