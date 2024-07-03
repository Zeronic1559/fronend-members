<template>
  <wrapper>
    <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">ข้อมูลส่วนตัว</h1>
    </div>
    <div class="mt-3">
      <Label for="fullname" class="text-base text-left">ชื่อ-นามสกุล</Label>
      <Input type="text" class="mt-1 disabled:text-black" v-model="fullname" readonly />
    </div>
    <div class="mt-3">
      <Label for="bankacc" class="text-base text-center">เลขที่บัญชี</Label>
      <Input type="text" class="mt-1 disabled:text-black" v-model="bankacc" readonly />
    </div>
    <div class="mt-3">
      <Label for="bankname" class="text-base text-center">ชื่อธนาคาร</Label>
      <Input type="text" class="mt-1 disabled:text-black" v-model="bankname" readonly />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Button class="bg-blue-600 hover:bg-blue-500 mt-4 w-full text-base" variant="line" size="xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25m3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3z" clip-rule="evenodd"/></svg>
        &nbsp;เปลี่ยนรหัสผ่าน</Button
      >
      <Button class="bg-red-600 hover:bg-red-500 mt-4 w-full text-base" variant="line" size="xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M2 4.75A2.75 2.75 0 0 1 4.75 2h3a2.75 2.75 0 0 1 2.75 2.75v.5a.75.75 0 0 1-1.5 0v-.5c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5A2.75 2.75 0 0 1 7.75 14h-3A2.75 2.75 0 0 1 2 11.25zm9.47.47a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H5.25a.75.75 0 0 1 0-1.5h7.19l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>
        &nbsp;ออกจากระบบ
    </Button>
    </div>
  </wrapper>
</template>

<script setup>
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import LinkButton from "@/components/LinkButton";

definePageMeta({
  layout: "auth",
});

const fullname = ref("ทดสอบ ทดสอบ");
const bankacc = ref("1111-111-11");
const bankname = ref("ธนาคารกรุงไทย");
const authUser = useAuthUser();

const fullName = computed(() => {
  return authUser.value?.firstname + " " + authUser.value?.lastname;
});

const bankNumber = computed(() => {
  return authUser.value?.banknumber || "";
});

const username = computed(() => {
  return authUser.value?.username || "";
});

const bank = computed(() => {
  return authUser.value?.bank.name || "";
});

const lineId = computed(() => {
  return authUser.value?.lineid || "";
});

const status = computed(() => {
  return authUser.value?.status || "";
});
</script>

<style scoped></style>
