<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center bg-black w-screen h-screen z-[333] bg-opacity-40 overflow-y-auto"
    v-if="props.data"
  >
    <div class="md:w-[400px] w-[300px] rounded-xl bg-white md:p-4 p-4 relative">
      <div class="absolute p-2 bg-black rounded-full top-[-10px] right-0 border border-white" @click="closeModal">
        <IcSharpClose class="text-white" />
      </div>
      <div class="flex flex-row justify-center w-full">
        <div class="w-[120px] h-[120px] mt-5">
          <img :src="icon" class="w-full h-full" id="confetti" />
        </div>
      </div>
      <div class="mt-4 text-center" v-html="data.message"></div>
    </div>
  </div>
</template>

<script setup>
import IcSharpClose from "@/components/IcSharpClose.vue";

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["close"]);

const icon = computed(() => {
  console.log(props.data);
  if (props.data.type == "success") {
    return "/images/status/check.png";
  } else if (props.data.type == "error") {
    return "/images/status/cancel.png";
  } else if (props.data.type == "warning") {
    return "/images/status/warning.png";
  } else if (props.data.type == "info") {
    return "/images/status/info.png";
  } else if (props.data.type == "congrat") {
    return "/images/status/congratulation.png";
  } else if (props.data.type == "sad") {
    return "/images/status/sad.png";
  }
});

function closeModal() {
  emit("close");
}
</script>

<style lang="scss" scoped></style>
