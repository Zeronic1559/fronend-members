<template>
  <wrapper>
    <NewUser v-if="isNewUser" :title="title" />
    <div v-else>
      <h1 class="text-center text-2xl md:text-3xl font-medium">{{ title }}</h1>
      <div class="text-red-600 text-sm text-center mb-10">(HENGPAY)</div>
      <div class="mt-3">
      <Label for="hangpay" class="text-base md:text-lg text-left">ระบุจำนวนเงิน</Label>
      <Input type="text" placeholder="ระบุจำนวนเงิน" name="hangpay" class="mt-1" v-model="hangpay" />
    </div>
      <div class="text-red-600 text-sm mt-3">- ขั้นต่ำ 1 บาท ต่อครั้ง</div>
      <div class="text-red-600 text-sm mt-3">- สูงสุดไม่จำกัด ต่อครั้ง</div>
      <div class="text-red-600 text-sm mt-3">- กรุณาเติมทศนิยมให้ครบตามจำนวน หากโอนผิดจะไม่มีการรับผิดชอบใดๆ</div>
      <!-- <step1 v-if="step === 1" :data="dataTransfer"></step1>
        <step2 v-if="step === 2"></step2>
        <step3 v-if="step === 3"></step3> -->
    </div>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">ยืนยัน</Button>
  </wrapper>
</template>

<script setup>
import Wrapper from "@/components/Wrapper";
import NewUser from "@/components/NewUser";

const title = ref("เติมเงินผ่าน QR Code");

definePageMeta({
  layout: "auth",
});

</script>
