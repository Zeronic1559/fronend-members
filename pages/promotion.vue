<template>
    <wrapper>
      <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">โปรโมชัน</h1>
    </div>
    <popup
      :is-enabled="errorMessage"
      title="รับโปรโมชันไม่สำเร็จ"
      :description="errorMessage"
      @click="resetError"
    ></popup>
    <popup
      :is-enabled="successMessage"
      title="รับโปรโมชันสำเร็จ"
      :description="successMessage"
      @click="resetError"
    ></popup>
    <div v-if="isLoading">
      <!-- <loader is-black></loader> -->
    </div>
    <div v-else class="grid grid-cols-1">
      <promotion
        :id="'001'"
        :key="'001'"
        :image="'/meslot168/popup/aff.jpg'"
        :title="'ชวนเพื่อนรับคอม 0.8%'"
        :success-message="'สำเร็จ'"
        :errror-message="'ล้มเหลว'"
        :type="'test'"
        :internal-link="''"
      ></promotion>
      <promotion
        :id="'001'"
        :key="'001'"
        :image="'/meslot168/popup/05-05.jpg'"
        :title="'โปรต้อนรับ! 05.05'"
        :success-message="'สำเร็จ'"
        :errror-message="'ล้มเหลว'"
        :type="'test'"
        :internal-link="''"
      ></promotion>
    </div>
  </wrapper>
</template>

<script setup>
import Popup from '@/components/Popup'
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import Promotion from '@/components/Promotion'


definePageMeta({
  layout: "auth",
});

</script>

<style scoped>

</style>