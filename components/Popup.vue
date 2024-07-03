<template>
  <div
    v-if="isEnabled"
    class="
      fixed
      top-0
      left-0
      flex
      items-center
      justify-center
      bg-black
      w-screen
      h-screen
      z-10
      bg-opacity-20
      overflow-y-auto
    "
  >
    <div
      class="rounded-md bg-white p-10 w-8/12 md:w-6/12 xl:w-4/12 text-center"
    >
      <typography variant="h2" class="mb-4">{{ title }}</typography>
      <typography variant="span" class="mb-8 text-sm" v-if="!isHtml">{{
        description
      }}</typography>
      <typography
        variant="span"
        class="mb-8 text-left"
        v-else
        v-html="description"
      ></typography>

      <default-action-button
        text="เข้าใจแล้ว"
        @click="() => $emit('click')"
      ></default-action-button>
    </div>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'
import DefaultActionButton from '@/components/DefaultActionButton'

const props = defineProps({
    isEnabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    isHtml: {
      type: Boolean,
      require: false,
      default: false,
    },
  })
</script>
