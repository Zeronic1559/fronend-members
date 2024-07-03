<template>
  <wrapper>
    <NewUser v-if="isNewUser" title="ฝากเงิน True Wallet Gift" />
    <div v-else>
      <h1 class="text-center text-2xl md:text-3xl font-medium">ฝากเงิน True Wallet Gift</h1>
      <step1 v-if="step === 1"></step1>
      <step2 v-if="step === 2"></step2>
    </div>
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import Step1 from '@/containers/TruewalletGift/Step1'
import Step2 from '@/containers/TruewalletGift/Step2'
import NewUser from '@/components/NewUser'
import FText from '@/components/Text'
import Notice from '@/components/Notice'
import HorizontalDivider from '@/components/HorizontalDivider'


definePageMeta({
  layout: "auth",
});

const step = ref(1);

  
</script>

<style scoped></style>
