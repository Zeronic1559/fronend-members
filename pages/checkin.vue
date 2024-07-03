<template>
    <Wrapper>
    <typography variant="h1" class="text-center"> เช็คอิน </typography>
    <div class="mt-4 text-center">
        ท่านสามารถเช็คอินได้ทุกวัน โดยการเติมเงินเข้ามาในระบบ 300 บาทขึ้นไป แล้วทำการทำรายการเช็คอินที่ปุ่มด้านล่างได้เลย
    </div>

    <div class="flex flex-row justify-center items-center mt-10">
      <div class="progress-checkin">
        <div class="circle-progress" id="progress-checkin">
          <div class="relative z-20">
            <span class="text-[60px]">10</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3 text-center">
      ท่านเช็คอินไปแล้ว <span class="text-xl"> 10 </span> วัน
    </div>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">เช็คอิน</Button>
    <!-- <DefaultActionButton text="เช็คอิน" @click="checkIn">
    </DefaultActionButton> -->
    <HorizontalDivider class="mt-10" />
    <div class="mt-4">
      <div class="text-center text-2xl mb-4">รางวัลที่ได้รับ</div>
      <div class="text-base mt-2">
        1. เช็คอินครบ 3 วันติดต่อกัน รับ 0.5 เพชร
      </div>
        <div class="text-base mt-2">
        2. เช็คอินครบ 5 วันติดต่อกัน รับเพิ่ม 1 เพชร
      </div>
      <div class="text-base mt-2">
        3. เช็คอินครบ 7 วันติดต่อกัน รับเพิ่ม 2 เพชร
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue';
import Typography from '@/components/Typography.vue';
import DefaultActionButton from '@/components/DefaultActionButton.vue';
import HorizontalDivider from '@/components/HorizontalDivider';
import { API } from "@/constants/API";

definePageMeta({
  layout: "auth",
});

// const toast = useToast();
const infoCheckIn = ref(null);
const isLoadingCheckIn = ref(false);

const progressEnd = computed(() => {
  return dataUserCheckIn ? Math.ceil((dataUserCheckIn.current || 0 / 7) * 360) || 0 : 0;
});

const { data, pending } = await useFetchApi(API.MEMBER_CHECK_IN_REWARD);
infoCheckIn.value = data.value?.data || null;

const { data: dataUserCheckIn, refresh: refreshUserCheckin } = await useFetchApi(API.MEMBER_CHECK_IN_REMAINING);

async function onCheckIn() {
  isLoadingCheckIn.value = true;
  const { data, error } = await useFetchApi(API.MEMBER_CHECK_IN, { method: "POST" });

  if (data.value.isSuccess) {
    toast.add({
      title: "เช็คอินสำเร็จ!",
      description: data.value?.message,
      timeout: 2000,
      color: "green",
      icon: "i-heroicons-check-badge",
    });
  } else {
    toast.add({
      title: "เช็คอินไม่สำเร็จ!",
      timeout: 2000,
      description: data.value.message,
      color: "red",
      icon: "i-heroicons-shield-exclamation",
    });
  }
  isLoadingCheckIn.value = false;
  refreshUserCheckin();
}

</script>

<style scoped>
.timeline {
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(#bf1313);
    z-index: 3;
    border-radius: 10px;
  }
}
.card-checkin {
  @apply mt-[20px] md:mt-0 mr-0 md:mr-[20px] last:mr-0 rounded-full;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid var(#bf1313);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  color: var(#bf1313);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(#bf1313);
    opacity: 0.1;
    z-index: -1;
  }
}

.active {
  background-color: var(#bf1313);
  color: #fff;
}

.checkin-level-1 {
  border: 3px solid var(#bf1313);
}
.checkin-level-2 {
  border: 5px solid var(#bf1313);
}

.checkin-level-3 {
  border: 7px solid var(#bf1313);
}

.progress-checkin {
  @apply w-[220px] h-[220px] rounded-full;
}

.circle-progress {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-progress::before {
  content: '';
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: white;
  z-index: 1;
}
</style>