<template>
    <wrapper>
      <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">เชื่อมต่อระบบเข้ากับ LINE</h1>
    </div>
    <!-- <div v-if="!isLineConnected">
      <p class="text-center mb-10">
        เมื่อท่านเชื่อมต่อระบบเข้ากับ LINE แล้ว ท่านจะสามารถเข้าสู่ระบบผ่าน LINE
        ได้ทันที
      </p>

      <div class="flex flex-col justify-center items-center" v-if="profile">
        <div class="w-[150px] h-[150px] rounded-full">
          <img
            :src="profile.pictureUrl"
            alt=""
            srcset=""
            class="w-full h-full rounded-full object-cover"
          />
        </div>

        <div class="mt-4">
          <div class="text-center text-xl">{{ profile.displayName }}</div>
        </div>

        <default-action-button
          text="เชื่อมต่อ"
          :is-loading="isLoading"
          class="mt-7"
          @click="connectToLine"
        >
        </default-action-button>
      </div>
      <button
        class="p-3 bg-[#4cc764] text-white rounded-md w-full"
        v-if="!profile"
        @click="checkLoginLine"
      >
        LOGIN LINE
      </button>
    </div> -->
    <div>
      <p class="text-center mb-10">ท่านได้เชื่อมต่อระบบเข้ากับ LINE แล้ว</p>
      <div class="flex flex-col justify-center items-center">
        <div class="w-[150px] h-[150px] rounded-full">
          <img
            src="/images/icons/check.png"
            alt=""
            srcset=""
            class="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
    <ModalStatus
      :data="messageLine"
      @close="onCloseModal"
      v-if="isVisibleLineErrorMessage"
    />
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import DefaultActionButton from '@/components/DefaultActionButton'

definePageMeta({
  layout: "auth",
});

</script>

<style scoped>

</style>