<template>
  <div class="wheel-container">
    <button class="spin-btn cursor-none">
      <img :src="`/images/meslot168/icon.png`" class="w-full h-full object-cover rounded-full" />
    </button>
    <div class="wheel" style="transform: rotate(0deg)" ref="wheel">
      <div
        class="wheel__inner"
        v-for="(item, index) in rewardList"
        :style="`--i:${index + 1};--clr:${index % 2 == 0 ? '#bf1313' : '#fff'};--clr-text:${
          index % 2 == 0 ? '#fff' : '#bf1313'
        }`"
      >
        <div class="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rotate-[27deg]" v-if="item.image">
          <img :src="item.image" class="image_in_wheel" />
        </div>
        <span v-else> {{ item.name }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
  rewardList: {
    type: Array,
    default: [],
  },
  prizeId: {
    type: Number,
  },
});

defineExpose({ onRotateWheel, resetWheel });

const emit = defineEmits(["rotateWheelEnd"]);

const deg = ref(360);
const wheel = ref(null);
const isRotating = ref(false);

const prizeDataId = computed(() => {
  return props.prizeId;
});

function onRotateWheel(id) {
  isRotating.value = true;
  console.log(id);
  let findPrize = props.rewardList.findIndex((item) => item.id == id);
  console.log("findPrize", findPrize);
  let angle = deg.value / props.rewardList.length;
  let value = 360 * props.rewardList.length - (angle * findPrize + angle / 2);
  let rotate = 20 + value;
  console.log("rotate", rotate);
  wheel.value.style.transition = "3s ease-in-out";
  wheel.value.style.transform = `rotate(${rotate}deg)`;
  setTimeout(() => {
    emit("rotateWheelEnd");
  }, 3000);
}

function resetWheel() {
  wheel.value.style.transition = "1s ease-in-out";
  wheel.value.style.transform = `rotate(0deg)`;
}
</script>

<style scoped>
.wheel-container {
  @apply w-[250px] h-[250px] md:w-[450px] md:h-[450px];
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
.wheel-container .spin-btn {
  @apply w-[40px] h-[40px] md:w-[70px] md:h-[70px];
  position: absolute;
  background: #700909;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid black;
  padding: 4px;
}

.wheel-container .spin-btn::before {
  @apply w-[30px] h-[30px] top-[-30px] md:w-[40px] md:h-[40px] md:top-[-40px];
  content: '';
  position: absolute;
  background: black;
  clip-path: polygon(50% 0%, 17% 100%, 81% 100%);
}
.wheel-container .wheel {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(#bf1313);
  border-radius: 50%;
  box-shadow: 0 0 0 3px #fff, 0 0 0 15px var(#bf1313), 0 0 0 18px #fff;
}

.wheel-container .wheel .wheel__inner {
  position: absolute;
  width: 50%;
  height: 50%;
  background: var(--clr);
  transform-origin: bottom right;
  transform: rotate(calc(45deg * var(--i)));
  clip-path: polygon(0 0, 60% 0, 100% 100%, 0 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.wheel-container .wheel .wheel__inner span {
  @apply text-[1.3em] md:text-[2em] font-bold;
  position: relative;
  transform: rotate(45deg);
  color: var(--clr-text);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.image_in_wheel {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
