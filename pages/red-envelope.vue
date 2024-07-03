<template>
  <wrapper>
    <canvas
      id="my-canvas"
      class="absolute top-0 left-0 h-full w-full z-0"
      v-show="isShowConfetti"
    ></canvas>
    <typography variant="h1" class="text-center mb-2"> เปิดอั่งเปา </typography>

    <div class="mt-2 text-red-600 text-sm text-center">
      *ทุกๆ การเติม 1,000 บาท ท่านจะได้รับ 1 เพชร
    </div>

    <div class="mt-0 text-red-600 text-sm text-center mb-10">
      <div class="text-s">
        (จำกัดจำนวน 10 เพชร ต่อวัน)
      </div>
    </div>

    <div
      class="flex flex-row justify-center items-center relative h-[300px]"
      v-if="isShow"
    >
      <client-only>
        <div class="wrapper-red-envelope">
          <div class="surprises">
            <div class="fly">10w</div>
            <div class="fly">5毛</div>
            <div class="fly">100</div>
            <div class="fly">666</div>
            <div class="fly">999</div>
            <div class="fly">
              <i class="hearts"></i>
            </div>
            <div class="fly">$</div>
            <div class="fly">
              <i class="hearts"></i>
            </div>
          </div>
          <div
            class="bonus"
            :class="isOpening ? 'cursor-not-allowed jumping' : 'cursor-pointer'"
            @click="rotateSpin"
          ></div>
        </div>
      </client-only>
    </div>
    <div class="text-center mb-2 text-xs">
      เงินรางวัลสูงสุด
      <span class="font-semibold text-red-600">10,000</span> บาท
    </div>
    <div class="mt-10">
      <div class="flex flex-row justify-center items-center mb-8">
        <div class="text-lg">
          คุณมีเพชรคงเหลือ
          <span class="text-red-600 font-semibold">1,670</span>
          เพชร
        </div>
      </div>
      <HorizontalDivider />
      <div class="text-2xl mb-4 text-center">ประวัติการเล่น</div>

      <transection-spin
        :amount="10"
        :created-at="'28/3/2567 03:31:08'"
        :key="'001'"
        :description="'เครดิต'"
      ></transection-spin>
    </div>
    <ModalStatus
      :data="messageDiamond"
      @close="onClosePrize"
      v-if="isVisibleStatusMessage"
    />
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import Notice from '@/components/Notice'
import FText from '@/components/Text'
import DefaultButton from '@/components/DefaultButton'
import TransectionSpin from '@/components/TransectionSpin'
import DefaultActionButton from '@/components/DefaultActionButton'
import HorizontalDivider from '@/components/HorizontalDivider'
import { API } from "@/constants/API";

definePageMeta({
  layout: "auth",
});

const authUser = useAuthUser();
const auth = useAuth();
const isOpening = ref(false);
const messageStatus = ref(null);
const rewardList = ref([]);
const prizeId = ref(null);
const historyList = ref([]);

const diamond = computed(() => {
  return authUser?.value?.wallet?.point || 0;
});

function closeModalStatus() {
  messageStatus.value = null;
}

onMounted(() => {
  getRewardList();
  getRewardHistory();
});

async function getRewardList() {
  const { data } = await useFetchApi(API.REWARD_ANGPAO);
  rewardList.value = data.value.data;
}

async function getRewardHistory() {
  const { data } = await useFetchApi(API.REWARD_ANGPAO_HISTORY);
  historyList.value = data.value.data[0];
  console.log(historyList.value);
}

async function onPlayAngpao() {
  isOpening.value = true;
  const { data, error } = await useFetchApi(API.PLAY_ANGPAO, { method: "POST" });
  if (error.value) {
    messageStatus.value = {
      type: "sad",
      message: error.value.data.message,
    };
    isOpening.value = false;
    return;
  }
  prizeId.value = data.value.data.id;

  setTimeout(() => {
    openPrize();
    isOpening.value = false;
  }, 2000);
}

async function openPrize() {
  const findPrize = rewardList.value.find((item) => item.id == prizeId.value);
  messageStatus.value = {
    type: "congrat",
    message: `ยินดีด้วย !! คุณได้รับ <span class="text-green-400 font-bold">${findPrize.amount}</span> เครดิต`,
  };
  auth.getUserProfile();
}


</script>

<style scoped>
a,
a:link,
a:hover,
a:active {
  text-decoration: none;
}
.wrapper-red-envelope {
  position: absolute;
  margin: 0 auto;
  width: 300px;
  height: 200px;
  text-align: center;
}
.wrapper-red-envelope h1 {
  margin-top: 15px;
  font-size: 12px;
  color: #f00;
}
.wrapper-red-envelope .bonus {
  position: absolute;
  bottom: 5px;
  left: 45%;
  margin-left: -40px;
  width: 120px;
  height: 150px;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f00;
  transition: all 0.75s ease;
  -webkit-animation-name: shaking;
  animation-name: shaking;
}
.wrapper-red-envelope .bonus:after {
  position: absolute;
  top: 15px;
  left: 0;
  content: '';
  width: 120px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 3px 0 2px #ff0;
  z-index: 3;
}
.wrapper-red-envelope .bonus:before {
  position: absolute;
  top: 22px;
  left: 50%;
  margin-left: -15px;
  content: '￥';
  width: 30px;
  height: 30px;
  line-height: 35px;
  font-size: 20px;
  font-weight: 700;
  color: #f00;
  background-color: #ff0;
  border-radius: 50%;
  z-index: 4;
}
.surprises .fly {
  position: absolute;
  top: 45px;
  left: 0;
  color: #f37476;
  z-index: 0;
  opacity: 0;
  font-size: 10px;
  -webkit-animation-duration: 1.65s;
  animation-duration: 1.65s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-delay: 0;
  animation-delay: 0;
  -webkit-animation-play-state: running;
  animation-play-state: running;
  -webkit-animation-name: flying;
  animation-name: flying;
}
.surprises .fly:nth-child(1) {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
  left: 150px;
}
.surprises .fly:nth-child(2) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
  left: 130px;
}
.surprises .fly:nth-child(3) {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
  left: 165px;
}
.surprises .fly:nth-child(4) {
  -webkit-animation-delay: 1.6s;
  animation-delay: 1.6s;
  left: 110px;
}
.surprises .fly:nth-child(5) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  left: 175px;
}
.surprises .fly:nth-child(6) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
  left: 137px;
}
.surprises .fly:nth-child(7) {
  -webkit-animation-delay: 1.15s;
  animation-delay: 1.15s;
  left: 185px;
}
.surprises .fly:nth-child(8) {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
  left: 118px;
}
.hearts {
  position: relative;
}
.hearts:before,
.hearts:after {
  position: absolute;
  content: '';
  width: 6px;
  height: 10px;
  background: #ff370f;
  border-radius: 3px 3px 0 0;
  transform: rotate(-45deg);
  transform-origin: 10% 50%;
}
.hearts:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 110% 68%;
}
.jumping,
.shaking {
  -webkit-animation-duration: 1.2s;
  animation-duration: 1.2s;
  animation-time-function: ease;
  -webkit-animation-delay: 0;
  animation-delay: 0;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-play-state: running;
  animation-play-state: running;
}
@-webkit-keyframes jumping {
  0% {
    bottom: 5px;
    transform: rotate(-10deg) scale(0.98);
  }
  10% {
    bottom: 30px;
    transform: rotate(0deg) scale(1);
  }
  50% {
    bottom: 5px;
    transform: rotate(10deg) scale(0.98);
  }
  60% {
    bottom: 30px;
    transform: rotate(0deg) scale(1);
  }
  100% {
    bottom: 5px;
    transform: rotate(-10deg) scale(0.98);
  }
}
@keyframes jumping {
  0% {
    bottom: 5px;
    transform: rotate(-10deg) scale(0.98);
  }
  10% {
    bottom: 30px;
    transform: rotate(0deg) scale(1);
  }
  50% {
    bottom: 5px;
    transform: rotate(10deg) scale(0.98);
  }
  60% {
    bottom: 30px;
    transform: rotate(0deg) scale(1);
  }
  100% {
    bottom: 5px;
    transform: rotate(-10deg) scale(0.98);
  }
}
@-webkit-keyframes shaking {
  0% {
    margin-left: -35px;
  }
  10% {
    margin-left: -45px;
  }
  20% {
    margin-left: -35px;
  }
  30% {
    margin-left: -45px;
  }
  40% {
    margin-left: -35px;
  }
  50% {
    margin-left: -40px;
  }
  65% {
    bottom: 20px;
  }
  100% {
    bottom: 5px;
  }
}
@keyframes shaking {
  0% {
    margin-left: -35px;
  }
  10% {
    margin-left: -45px;
  }
  20% {
    margin-left: -35px;
  }
  30% {
    margin-left: -45px;
  }
  40% {
    margin-left: -35px;
  }
  50% {
    margin-left: -40px;
  }
  65% {
    bottom: 20px;
  }
  100% {
    bottom: 5px;
  }
}
@-webkit-keyframes flying {
  0% {
    transform: rotate(20deg);
    opacity: 0;
  }
  50% {
    transform: rotate(-20deg);
    opacity: 1;
  }
  100% {
    top: -60px;
    transform: rotate(20deg);
    opacity: 0;
  }
}
@keyframes flying {
  0% {
    transform: rotate(20deg);
    opacity: 0;
  }
  50% {
    transform: rotate(-20deg);
    opacity: 1;
  }
  100% {
    top: -60px;
    transform: rotate(20deg);
    opacity: 0;
  }
}
</style>
