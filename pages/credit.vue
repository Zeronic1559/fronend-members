<template>
  <wrapper>
    <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">รับเครดิตฟรี</h1>
    </div>
    <div class="text-left mt-5">
    <Label for="detail" class="text-lg mb-5">หากสมาชิกไม่มี CODE กรุณาติดต่อแอดมินเพื่อทำกิจกรรมและรับ CODE เครดิตฟรี ที่ LINE :
      <a :href="lineIdLink">{{lineID}}</a></Label>
    </div>
    <div class="text-left mt-5">
    <Label for="detail" class="text-lg mb-5">**สำหรับเครดิตฟรีทางบริษัทขอสงวนสิทธิ์ 1ยูส/สิทธิ เท่านั้น** หากตรวจสอบพบเจอการทุจริต การตัดสินของ {{agentName}}
      ถือเป็นที่สิ้นสุด
      </Label>
    </div>
    <notice v-if="errorMessage" class="my-8">{{ errorMessage }}</notice>
    <notice v-if="successMessage" is-success class="my-8">
      {{ successMessage }}
    </notice>
    <div class="mt-5"> 
    <Label for="code" class="text-base md:text-lg text-left mt-5">รหัสโค้ด</Label>
    <Input type="text" placeholder="รหัสโค้ด" name="code" class="mt-1" v-model="code" />
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">รับเครดิต</Button>
  </div>
   
  </wrapper>
</template>

<script setup>
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import Notice from "@/components/Notice";
import FText from "@/components/Text";
import DefaultButton from "@/components/DefaultButton";
import { API } from "@/constants/API";

definePageMeta({
  layout: "auth",
});
const authUser = useAuthUser();

const isLogin = computed(() => {
  return authUser.value;
});

const code = ref(null);
const codeError = ref(false);
const lineID = ref("@meslot168");
const agentName = ref("meslot168");

// const toast = useToast();

async function onGetCreditFree() {
  codeError.value = false;
  if (!code.value) {
    codeError.value = true;
    return;
  }
  const { data } = await useFetchApi(API.MEMBER_GET_CREDIT_FREE, {
    method: "POST",
    body: {
      code: code.value,
    },
  });
  if (data.value?.isSuccess == false) {
    toast.add({
      title: "ไม่สำเร็จ",
      description: data.value?.errorMessage,
      color: "red",
      timeout: 3000,
      icon: "i-heroicons-shield-exclamation",
    });
  } else if (data.value?.isSuccess == true) {
    toast.add({
      title: "เติมเครดิตฟรีสำเร็จ",
      color: "green",
      timeout: 3000,
      icon: "i-heroicons-check-badge",
    });
  }
}
</script>

<style scoped></style>
