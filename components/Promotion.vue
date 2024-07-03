<template>
  <div class="grid grid-cols-12 gap-4 pb-8 items-center promotion">
    <div class="col-span-12 md:col-span-7 grid grid-cols-12 items-center gap-4">
      <img :src="image" :alt="title" class="w-full col-span-12 md:col-span-4 rounded-md" />
      <div class="text-center md:text-left col-span-12 md:col-span-8 font-medium">
      <Label for="title" class="text-lg">
        {{ title }}
      </Label>
    </div>
    </div>
    <div class="col-span-12 md:col-span-5 grid grid-cols-12 gap-4">
      <Button class="col-span-6 md:col-span-6 text-md" variant="register" size="xl">เงื่อนไข</Button>
      <Button class="col-span-6 md:col-span-6 text-md" variant="gradient" size="xl">รับโปรโมชัน</Button>
    </div>
    <notice v-if="successMessage" is-success>สำเร็จ</notice>
    <notice v-if="errorMessage">ล้มเหลว</notice>
  </div>
</template>

<script setup>
import Typography from "@/components/Typography";
import DefaultActionButton from "@/components/DefaultActionButton";
import Notice from "@/components/Notice";
import OutlineActionButton from "@/components/OutlineActionButton";

const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.promotion {
  border-bottom: 1px solid #eeeeee;
}
</style>
