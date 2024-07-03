<template>
  <Wrapper>
    <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">สร้างรายได้</h1>
    </div>
    <Label for="detail" class="text-md mb-5 mt-4">
      <span class="text-red-600 mt-4 ml-5"> ลิ้งช่วยแชร์รับ 0.8% ฟรี </span>
      (แค่ก็อปลิ้่งค์ไปแชร์ก็ได้เงินแล้ว) ยิ่งแชร์มาก ยิ่งได้มาก ท่านสามารถนำลิ้งด้านล่างไปแชร์ตามช่องทางต่างๆได้
      ไม่ว่าจะเป็น เว็บไซต์ส่วนตัว,Blog,Facebook หรือ Social Netowrk อื่นๆ หากมีการสมัครสมาชิกผ่านลิ้งค์ของท่าน
      ลูกค้าที่สมัครจะเข้ามาอยู่ภายใต้เครือข่ายของท่านทันทีและหากลูกค้าภายใต้เครือข่ายของท่านมีการเดิมพันเข้ามา
      ทุกยอดการเดิมพันท่านจะได้รับส่วนแบ่งในการแนะนำ 0.8% ทันทีโดยไม่มีเงื่อนไข
    </Label>

    <notice class="mt-3">
      <div class="text-center text-sm md:text-base">
        ลิงค์แชร์รับทรัพย์
        <span class="font-bold text-sm md:text-base text-red-600"> 9% </span>
        ยอดเทิร์นโอเวอร์ฟรี !
      </div>
      <div class="text-center text-sm md:text-base">(เมื่อผู้เล่นที่สมครผ่านลิงค์ของท่านเดิมพันหมวดหวยรัฐบาล)</div>
    </notice>

    <notice class="mt-2 mb-8">
      <div class="text-center text-sm md:text-base">
        ลิงค์แชร์รับทรัพย์
        <span class="font-bold text-sm md:text-base text-red-600"> {{ percent }}% </span>
        ยอดเทิร์นโอเวอร์ฟรี !
      </div>
      <div class="text-center text-sm md:text-base">
        (เมื่อผู้เล่นที่สมครผ่านลิงค์ของท่านเดิมพันหมวดคาสิโน สล็อต กีฬา)
      </div>
    </notice>
    <notice v-if="transferStatus === 'resolved' || copyStatus === 'resolved'" is-success class="my-8"> สำเร็จ </notice>
    <notice v-if="transferStatus === 'rejected' || copyStatus === 'rejected'" class="my-8"> ล้มเหลว </notice>
    <horizontal-divider></horizontal-divider>
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex flex-col md:flex-row items-center gap-8 mb-4 md:mb-0">
        <div class="flex flex-col text-center md:text-left">
          <Label class="text-lg">รายได้ของคุณ</Label>
          <Label class="text-xl"> ฿ {{ amount }} </Label>
        </div>
        <div class="flex justify-center items-center gap-8">
          <div class="flex flex-col text-center md:text-left">
            <Label class="text-lg">จำนวนลูก</Label>
            <Label class="text-xl"> {{ Child }} คน </Label>
          </div>
          <div class="flex flex-col text-center md:text-left">
            <Label class="text-lg">จำนวนหลาน</Label>
            <Label class="text-xl"> {{ grandChild }} คน </Label>
          </div>
        </div>
      </div>
      <div>
        <Button class="mt-4 w-full text-lg" variant="gradient" size="lg">โอนเข้าบัญชี</Button>
      </div>
    </div>
    <horizontal-divider></horizontal-divider>

    <div class="text-center">
      <Label class="text-lg font-normal">ท่านสามารถนำ QR CODE นี้ไปแสดงให้เพื่อนสแกนเพื่อสมัครสมาชิกได้</Label>
    </div>
    <GenQrcode :text="affiliateLink" v-if="affiliateLink" />
    <horizontal-divider></horizontal-divider>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-8 bg-gray-200 p-3 rounded-md overflow-y-scroll">
        <span class="text-gray-700" style="white-space: nowrap">
          https://affiliate-meslot168.netlify.app?aff=JS1KTZu7Y
        </span>
      </div>
      <div class="col-span-12 md:col-span-4">
        <Button class="mt-4 w-full text-xl" variant="gradient" size="xl" @click="copyAffiliateLink">
          <svg data-v-239ec6aa="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="icon"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="currentColor"></path></svg>  
          &nbsp;คัดลอกลิงก์
        </Button>
      </div>
    </div>

    <horizontal-divider></horizontal-divider>

    <img src="/meslot168/affiliate/banner.webp" alt="สร้างรายได้" class="mt-6" />

    <horizontal-divider></horizontal-divider>
    <div class="grid grid-cols-12 gap-4">
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=https://affiliate-meslot168.netlify.app?aff=JS1KTZu7Y`"
        target="_blank"
        class="col-span-12 md:col-span-4 flex items-center justify-center gap-4 rounded-md p-3"
        style="background-color: #edf0f8; color: #4267b2"
      >
        <img src="/images/social/facebook.png" class="w-5 h-5" alt="Facebook" />
        <span>แชร์ Facebook</span>
      </a>
      <a
        :href="`https://social-plugins.line.me/lineit/share?url=https://affiliate-meslot168.netlify.app?aff=JS1KTZu7Y`"
        target="_blank"
        class="col-span-12 md:col-span-4 flex items-center justify-center gap-4 rounded-md p-3"
        style="background-color: #e6f9e6; color: #00c300"
      >
        <img src="/images/social/line.png" class="w-5 h-5" alt="Line" />
        <span>แชร์ Line</span>
      </a>
      <a
        :href="`fb-messenger://share/?link=https://affiliate-meslot168.netlify.app?aff=JS1KTZu7Y`"
        target="_blank"
        class="col-span-12 md:col-span-4 flex items-center justify-center gap-4 rounded-md p-3"
        style="background-color: #edf0f8; color: #4267b2"
      >
        <img src="/images/social/messenger.png" class="w-5 h-5" alt="Messenger" />
        <span>แชร์ Messenger</span>
      </a>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import Notice from "@/components/Notice";
import DefaultActionButton from "@/components/DefaultActionButton";
import HorizontalDivider from "@/components/HorizontalDivider";
import CopyButton from "@/components/CopyButton";
import Label from "@/components/ui/label/Label.vue";
import GenQrcode from '@/components/GenQrcode'

definePageMeta({
  layout: "auth",
});

const authUser = useAuthUser();
const affiliate = useAffiliate();
const affiliateInfo = useAffiliateInfo();

const isLoadingTransfer = ref(false);

const isLogin = computed(() => {
  return authUser.value;
});

const { copy } = useClipboard();
// const toast = useToast();
const amount = ref(1000.0);
const Child = ref(1);
const grandChild = ref(2);
const affiliateLink =ref("https://affiliate-meslot168.netlify.app?aff=JS1KTZu7Y");

const percent = ref("0.8");

await affiliate.getInfo();

// const affiliateLink = computed(() => {
//   console.log(affiliateInfo.value);
//   return affiliateInfo.value?.affiliateLink || "";
// });

const totalCommission = computed(() => {
  return affiliateInfo.value?.totalCommission || 0;
});
const totalChild = computed(() => {
  return affiliateInfo.value?.totalChild || 0;
});

const totalGrandchild = computed(() => {
  return affiliateInfo.value?.totalGrandchild || 0;
});
const copyLink = () => {
  copy(affiliateLink.value);
  toast.add({
    title: "คัดลอกลิ้งแล้ว!",
    timeout: 2000,
    description: `ท่านได้คัดลอกลิ้งแล้ว`,
    color: "green",
    icon: "i-heroicons-check-badge",
  });
};

async function transfer() {
  isLoadingTransfer.value = true;
  const { data, error } = await affiliate.transfer();
  if (error.value) {
    toast.add({
      title: "โอนเงินไม่สำเร็จ",
      timeout: 2000,
      description: error.value.data?.message,
      color: "red",
      icon: "i-heroicons-shield-exclamation",
    });
  } else {
    toast.add({
      title: "โอนเงินสำเร็จ",
      timeout: 2000,
      color: "green",
      icon: "i-heroicons-check-badge",
    });
    await affiliate.getInfo();
  }
  isLoadingTransfer.value = false;
}
</script>

<style scoped></style>
