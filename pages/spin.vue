<template>
    <wrapper>
    <canvas id="my-canvas" class="absolute top-0 left-0 h-full w-full z-0" v-show="isShowConfetti"></canvas>
    <typography variant="h1" class="text-center mb-2"> กงล้อนำโชค </typography>

    <div class="mt-2 text-red-600 text-sm text-center">*ทุกๆ การเติม 1,000 บาท ท่านจะได้รับ 1 เพชร</div>

    <div class="mt-0 text-red-600 text-sm text-center mb-10">
      <div class="text-s">(จำกัดจำนวน 10 เพชร ต่อวัน)</div>
    </div>

    <div class="flex flex-row justify-center items-center" v-if="isShow">
      <client-only>
        <SpinWheel :reward-list="rewardList" ref="wheel" @rotateWheelEnd="onRotateEnd" />
      </client-only>
    </div>
    <div class="mt-10">
      <div class="flex flex-row justify-center items-center">
        <div class="text-lg">
          คุณมีเพชรคงเหลือ
          <span class="text-red-600 font-semibold"> 1,670</span>
          เพชร
        </div>
      </div>
      <div class="flex flex-row justify-center items-center mb-10 mt-2">
        <!-- <default-action-button
          :text="diamond > 0 ? 'หมุนเลย!' : 'เพชรไม่พอ'"
          :is-disabled="diamond < 1 || isRotating"
          @click="rotateSpin()"
        >
        </default-action-button> -->
        <Button class="mt-4 w-full text-xl" variant="gradient" size="xl"
          :is-disabled="diamond < 1 || isRotating"
          @click="rotateSpin()">หมุนเลย!</Button>
        <!-- <default-action-button
          :text="'หมุนเลย!'"
          :is-disabled="diamond < 1 || isRotating"
          @click="rotateSpin()"
        >
        </default-action-button> -->
      </div>
      <div class="text-2xl mb-4 text-center">ประวัติการเล่น</div>

      <transection-spin
        :amount="10"
        :created-at="'28/3/2567 03:31:08'"
        :key="'001'"
        :description="'เครดิต'"
      ></transection-spin>
    </div>
    <ModalStatus :data="messageDiamond" @close="onClosePrize" v-if="isVisibleErrorMessage" />
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import Notice from '@/components/Notice'
import DefaultButton from '@/components/DefaultButton'
import TransectionSpin from '@/components/TransectionSpin'
import DefaultActionButton from '@/components/DefaultActionButton'
import SpinWheel from '@/components/SpinWheel.vue'

definePageMeta({
  layout: "auth",
});

onMounted(() => {
  getRewardList();
  getRewardHistory();
});

const auth = useAuth();
const authUser = useAuthUser();
const rewardList = ref([]);
const historyList = ref([]);
const wheel = ref(null);
const prizeId = ref(null);
const isRotated = ref(false);
const isRotating = ref(false);
const resetting = ref(false);
const messageModel = ref(null);

const diamond = computed(() => {
  return authUser?.value?.wallet?.point || 0;
});

async function getRewardList() {
  const { data } = await useFetchApi(API.REWARD_SPIN);
  rewardList.value = data.value.data;
}

async function getRewardHistory() {
  const { data } = await useFetchApi(API.REWARD_SPIN_HISTORY);
  historyList.value = data.value.data[0];
}

function rotateWheelEnd() {
  isRotated.value = true;
  isRotating.value = false;
  const findPrize = rewardList.value.find((item) => item.id == prizeId.value);
  messageModel.value = {
    type: "congrat",
    message: `ยินดีด้วยคุณได้รับรางวัล <span class="text-green-500 font-bold">${findPrize.name}</span> เครดิต`,
  };
  auth.getUserProfile();
}
function closeModal() {
  messageModel.value = null;
  resetWheel();
}
function resetWheel() {
  resetting.value = true;
  wheel.value.resetWheel();
  setTimeout(() => {
    isRotated.value = false;
    resetting.value = false;
  }, 1000);
}

async function onRotateWheel() {
  isRotating.value = true;
  const { data, error } = await useFetchApi(API.PLAY_SPIN, { method: "POST" });
  if (error.value) {
    messageModel.value = {
      type: "sad",
      message: error.value.data.message,
    };
    isRotating.value = false;
    return;
  } else {
    prizeId.value = data.value.data.id;
    wheel.value.onRotateWheel(data.value.data.id);
  }
}
</script>

<style scoped>

</style>