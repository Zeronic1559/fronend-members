<template>
  <div class="transaction flex md:flex-row justify-between py-4">
    <div class="flex space-x-2">
      <div>ได้รับเครดิต</div>
    </div>
    <div>
      <typography variant="span" class="transaction__amount text-right">
        <span class="text-green-400 font-bold">{{ amount }}</span> ฿
      </typography>
      <div class="transaction__date">
        {{ dateCreateAt }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

const props = defineProps({
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    amount: {
      type: [Number, String],
      required: true,
    },
  })
</script>

<style scoped>
.transaction {
  border-bottom: 1px solid #eeeeee;
}

.transaction__date {
  @apply text-xs md:text-base;
  color: #bdbdbd;
}
.transaction__status {
  color: green;
}

.transaction__status.--is-rejected {
  color: red;
}
.transaction__status.--is-pending {
  @apply text-yellow-500;
}
</style>
