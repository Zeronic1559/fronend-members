<template>
  <wrapper>
    <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">รับเงินคืน</h1>
    </div>
    <notice v-if="transferStatus === 'resolved'" is-success class="my-8">
     สำเร็จ
    </notice>
    <notice v-if="transferStatus === 'rejected'" class="my-8">
      ล้มเหลว
    </notice>
    <horizontal-divider v-if="enableRanking"></horizontal-divider>
    <div
      v-if="enableRanking"
      class="md:grid md:grid-cols-12 md:gap-8 md:items-center"
    >
      <div class="md:col-span-3">
        <img
          :src="`/images/meslot/loyalty/${currentRank}.jpeg`"
          class="w-52 m-auto md:w-full"
        />
      </div>
      <div class="md:col-span-9">
        <div class="flex flex-col">
          <typography variant="h2"
            size="text-2xl"
            class="font-medium mb-4 text-center md:text-left"
          >
            {{ currentRank }} Rank
          </typography>
          <div class="md:grid md:grid-cols-12 md:gap-4 mb-4 md:items-center">
            <div class="md:col-span-9 rounded-full" style="background: #f5f5f5">
              <div
                class="rounded-full h-4"
                :style="`width: ${expAsPercentage}%; background: #7e3a82`"
              ></div>
            </div>
            <div class="md:col-span-3">
              <typography variant="paragraph"
                weight="medium"
                class="text-center mt-2 md:mt-0"
                style="color: #7e3a82"
              >
                {{ commaFormat(currentExp) }} / {{ commaFormat(maximumExp) }}
              </typography>
            </div>
          </div>
          <div
            class="
              flex flex-col
              md:flex-row
              justify-between
              md:items-center
              gap-2
            "
          >
            <div class="flex md:flex-col justify-between md:text-center">
              <typography variant="paragraph" size="text-lg" class="text-gray-700">รับเงินคืน</typography>
                <typography variant="paragraph" size="text-2xl" weight="medium" class="text-gray-700">
                {{ commaFormat(totalLoyaltyCommission) }}%
              </typography>
            </div>
            <div class="flex md:flex-col justify-between md:text-center">
              <typography variant="paragraph" size="text-lg" class="text-gray-700">รับโบนัสวันเกิด</typography>
                <typography variant="paragraph" size="text-2xl" weight="medium" class="text-gray-700">
                ฿ {{ commaFormat(totalDOBBonus) }}
              </typography>
            </div>
            <div class="flex md:flex-col justify-between md:text-center">
              <typography variant="paragraph" size="text-lg" class="text-gray-700">เครดิตต้อนรับ </typography>
              <typography variant="paragraph" size="text-2xl" weight="medium" class="text-gray-700">
                ฿ {{ commaFormat(totalCreditBonus) }}
              </typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    <horizontal-divider></horizontal-divider>
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-0">
        <div class="flex flex-col text-center md:text-left">
          <Label for="total" class="text-lg">ยอดการเล่น</Label>
          <Label for="detail" class="text-lg"> <i class="fas fa-donate text-xl mr-1"></i>
            64.00000
          </Label>
        </div>
        <div class="flex flex-col text-center md:text-left">
          <div
            class="
              rounded-full
              w-8
              h-8
              flex
              items-center
              justify-center
              bg-primary
            "
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8" clip-rule="evenodd"/></svg>
          </div>
        </div>
        <div class="flex flex-col text-center md:text-left">
          <Label for="total" class="text-lg">รับเงินคืน</Label>
          <Label for="detail" class="text-lg"> <i class="fas fa-donate text-xl mr-1"></i>
            ฿ 0.19200
          </Label>
        </div>
      </div>
      <div class="w-full md:w-48">
        <Button class="mt-4 w-full text-xl" variant="gradient" size="xl"  @click="onRequestTransfer"
          :isLoading="isLoading || requesting">ย้ายไปกระเป๋าหลัก</Button>
      </div>
    </div>
    <horizontal-divider></horizontal-divider>
    <carousel autoplay :per-page="1" :pagination-enabled="false">
      <slide>
        <img
          :src="`/meslot168/loyalty/slide-1.jpeg`"
          class="w-full h-auto image-carousel"
          alt="รับเงินคืน"
        />
      </slide>
    </carousel>
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import Notice from '@/components/Notice'
import DefaultActionButton from '@/components/DefaultActionButton'
import HorizontalDivider from '@/components/HorizontalDivider'

definePageMeta({
  layout: "auth",
});

// const toast = useToast();
const loyalty = useLoyalty();
const loyaltyInfo = useLoyaltyInfo();
const isLoading = ref(false);
const totalBetLost = computed(() => {
  return loyaltyInfo.value?.totalBetLost;
});

const totalPayback = computed(() => {
  return loyaltyInfo.value?.totalPayback;
});
loyalty.getInfo();

async function tranfers() {
  isLoading.value = true;
  const { data, error } = await loyalty.transfer();
  if (error.value) {
    toast.add({
      title: "ไม่สำเร็จ",
      description: error.value.data.message,
      color: "red",
      timeout: 3000,
      icon: "i-heroicons-shield-exclamation",
    });
  } else {
    toast.add({
      title: "คืนเงินสำเร็จ",
      color: "green",
      timeout: 3000,
      icon: "i-heroicons-check-badge",
    });
  }
  isLoading.value = false;
}

</script>

<style scoped>
.bg__icon {
  background: #bf1313;
}
</style>
