<template>
    <wrapper>
    <typography variant="h1" class="text-center mb-10"> โบนัสเพื่อนฝาก </typography>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4" v-if="0">
  <div class="border rounded-lg">
    <div class="card-header">
      <div>วันที่ 31 เดือน มีนาคม พ.ศ.2567</div>
      <div class="text-xs text-gray-200 text-center">MS168</div>
    </div>

    <div class="grid grid-cols-2 gap-4 px-2 py-4">
      <div class="text-left">
        จำนวนเงิน: <span class="text-green-500 font-semibold">1000</span>
      </div>
      <div class="text-left">
        ยอดเทิร์น: <span class="text-red-500 font-semibold">1000</span>
      </div>
    </div>
    <div class="px-2">
      <div class="text-sm">- รายละเอียด</div>
    </div>

    <div class="w-full mt-3 p-2">
      <DefaultActionButton text="รับโบนัส" @click="onClaimBonusId(item.id)">
      </DefaultActionButton>
      <div class="text-green-500 text-center text-lg">รับโบนัสเรียบร้อยแล้ว</div>
    </div>
  </div>
</div>
<div class="text-center text-sm text-red-500">ยังไม่มีรายการฝากของเพื่อน</div>
<!-- <ModalStatus :data="message" @close="onCloseModal" v-if="isOpenModal" /> -->
</wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import DefaultActionButton from '@/components/DefaultActionButton.vue'
import moment from 'moment'

definePageMeta({
  layout: "auth",
});

</script>

<style scoped>
.card-header {
  background-color: var(#bf1313);
  @apply border-b py-2 text-center rounded-t-lg text-white;
}
</style>