<template>
  <wrapper>
    <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5" v-if="!isSendReport">ร้องเรียน</h1>
    </div>
    <div class="text-center text-2xl" v-if="isSendReport">ขณะนี้คำร้องของท่านกำลังอยู่ในกระบวนการตรวจสอบ</div>
    <notice v-if="ล้มเหลว" class="my-8"> ล้มเหลว </notice>
    <div class="mt-4">
      <Label for="title" class="text-lg"> หัวข้อ</Label>
    </div>
    <form @submit.prevent="onSubmit">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="หัวข้อร้องเรียน" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <!-- <SelectLabel>Fruits</SelectLabel> -->
            <SelectItem value="moretenC"> แอดมินไม่ตอบแชทเกิน 10 นาที </SelectItem>
            <SelectItem value="moretenW"> แอดมินถอนเงินช้าเกิน 10 นาที </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div :class="ล้มเหลว">
        <div class="mt-4">
          <Label for="title" class="text-lg"> รายละเอียด</Label>
        </div>
        <Textarea rows="4"
          cols="50"
          class="text-area"
          placeholder="รายละเอียด"
          @blur="รายละเอียด"
          v-model="รายละเอียด">
        </Textarea>
      </div>

      <div class="mt-4">
          <Label for="title" class="text-lg"> อัปโหลดหลักฐาน</Label>
        </div>
      <div :class="ล้มเหลว">
        <div class="upload-container" @click="preUploadFile" v-if="!ไฟล์">
          <i class="fa fa-plus"></i>
        </div>
        <div class="image-preview-container" @click="preUploadFile" v-else>
          <img :src="imagePreview" class="w-full h-full rounded" />
        </div>
        <div class="text-sm" v-if="ไฟล์">ทดสอบ</div>
      </div>

      <input type="file" class="hidden" id="uploadFile" @input="uploadFile" />
      <div class="text-red-600 text-left mt-5">ท่านสามารถส่งคำร้องได้ 1 ครั้ง/วัน</div>
      <Button class="mt-4 w-full text-xl" variant="gradient" size="xl" :isLoading="isLoading">ส่งคำร้อง</Button>
    </form>
  </wrapper>
</template>

<script setup>
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import Notice from "@/components/Notice";
import DefaultButton from "@/components/DefaultButton";
import FDropdown from "@/components/Dropdown";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea'

definePageMeta({
  layout: "auth",
});
</script>

<style scoped>
.text-area {
  @apply w-full border rounded border-[#bdbdbd] p-4;
}

.text-area:focus {
  border-color: #700909;
}

.hasError .text-area {
  border: 1px solid red;
}

.upload-container {
  @apply border border-dashed border-[#bdbdbd];
  @apply rounded h-[80px]  w-[80px]  cursor-pointer;
  @apply flex flex-col justify-center items-center;
}

.hasError .upload-container {
  border: 1px solid red !important;
}
.image-preview-container {
  @apply border-2 rounded border-green-600;
  @apply h-[80px]  w-[80px]  cursor-pointer;
}
</style>
