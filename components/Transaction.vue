<template>
  <div class="transaction flex flex-col md:flex-row justify-between py-4">
    <div class="flex space-x-2">
      <typography variant="span">{{ type }}</typography>
      <typography
        variant="span"
        :class="[
          'transaction__status',
          {
            '--is-rejected': status === 'ไม่สำเร็จ',
          },
          {
            '--is-pending': status === 'รอดำเนินการ',
          },
        ]"
        >[{{ status }}]</typography
      >
    </div>
    <div
      class="
        flex flex-row
        md:flex-col
        justify-between
        md:justify-start
        items-end
      "
    >
      <typography variant="span" class="transaction__amount">
        {{ amount }} ฿
      </typography>
      <typography variant="span" class="transaction__date">
        {{ createdAt }}
      </typography>
    </div>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

const props = defineProps({
    createdAt: {
      type: String,
      required: true,
    },
    amount: {
      type: [Number, String],
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
.transaction {
  border-bottom: 1px solid #eeeeee;
}

.transaction__date {
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
