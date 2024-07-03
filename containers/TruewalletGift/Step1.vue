<template>
  <div>
    <notice v-if="error" class="my-8">
      error
    </notice>
    <form class="mt-2" @submit.prevent="onSubmit">
      <div class="mt-10">
      <Label for="link" class="text-base md:text-lg text-left">กรอกลิ้งที่ได้จากวอลเล็ท</Label>
      <Input type="text" placeholder="https://gift.truemoney.com/campaign/?v=...." name="link" class="mt-1" v-model="link" />
    </div>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">ยืนยัน</Button>
      <horizontal-divider></horizontal-divider>
      <typography variant="h2">ขั้นตอนการเติมเงิน</typography>
      <typography variant="span" class="mt-8 text-center">
        1. เลือกเมนูทั้งหมด
      </typography>
      <img
        src="/images/truegift/1.png"
        class="w-6/12 m-auto"
        alt="True Wallet Gift Step 1"
      />
      <typography variant="span" class="mt-8 text-center">
        2. เลือกเมนูส่งซองของขวัญ
      </typography>
      <img
        src="/images/truegift/2.png"
        class="w-6/12 m-auto"
        alt="True Wallet Gift Step 2"
      />
      <typography variant="span" class="mt-8 text-center">
        3. กรอกจำนวนเงิน และ เลือกตามรูป
      </typography>
      <img
        src="/images/truegift/3.png"
        class="w-6/12 m-auto"
        alt="True Wallet Gift Step 3"
      />
      <typography variant="span" class="mt-8 text-center">
        4. กดยืนยัน
      </typography>
      <img
        src="/images/truegift/4.png"
        class="w-6/12 m-auto"
        alt="True Wallet Gift Step 4"
      />
      <typography variant="span" class="mt-8 text-center">
        5. คัดลอกมาใส่ที่เว็บและกดเติมเงิน
      </typography>
      <img
        src="/images/truegift/5.png"
        class="w-6/12 m-auto"
        alt="True Wallet Gift Step 5"
      />
    </form>
  </div>
</template>

<script setup>
// import { inject } from '@vue/composition-api'
// import { numeric } from 'vuelidate/lib/validators'
import Typography from '@/components/Typography'
import FText from '@/components/Text'
import DefaultButton from '@/components/DefaultButton'
import Notice from '@/components/Notice'
import HorizontalDivider from '@/components/HorizontalDivider'


definePageMeta({
  layout: "auth",
});

</script>

<style scoped></style>
