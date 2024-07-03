<template>
  <wrapper>
    <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">ถอนเงิน</h1>
    </div>
    <div class="text-left">
      <Label for="detail" class="text-lg mb-5">
        ขอบคุณที่ใช้บริการ {{AgentName}} ค่ะ และหวังเป็นอย่างยิ่งว่าเราจะได้ให้บริการคุณอีกครั้งนะคะ
      </Label>
    </div>
    <hr />
    <div class="text-center mt-5">
      <Label for="totalturn" class="text-xl mb-2 mt-5">
        ยอดเทิร์นคงเหลือของคุณ
      </Label>
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 my-3 mb-5">
      <div
        class="bg-primary text-primary-foreground inline-flex text-white text-default rounded-sm size-full py-3 px-3 justify-between"
      >
        <div>ยอดเทิร์นโปรโมชั่น :</div>
        <div>1000.00</div>
      </div>
      <div
        class="bg-primary text-primary-foreground inline-flex text-white text-default rounded-sm size-full py-3 px-3 justify-between"
      >
        <div>ยอดเทิร์นฝาก :</div>
        <div>1000.00</div>
      </div>
    </div>

    <hr />
    <div class="text-center">
    <Label for="withdrawDetail" class="text-base md:text-xl">ข้อมูลการถอน</Label>
    </div>
    <div class="flex flex-row justify-between items-center w-full">
      <Accordion type="single" class="w-full" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger class="text-base md:text-lg">ข้อมูลการโอน</AccordionTrigger>
          <AccordionContent>
            <div class="flex flex-row justify-between items-center text-base md:text-lg">
              <div><b>ชื่อบัญชี</b> :</div>
              ทดสอบ ทดสอบ
            </div>
            <div class="flex flex-row justify-between items-center text-base md:text-lg">
              <div><b>ธนาคาร</b> :</div>
              ธนาคารกรุงไทย
            </div>
            <div class="flex flex-row justify-between items-center text-base md:text-lg">
              <div><b>เลขที่บัญชี</b> :</div>
              1111-111-11
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    <notice v-if="successMessage" is-success class="my-8">
      {{ successMessage }}
    </notice>
    <notice v-if="errorMessage" class="my-8">{{ errorMessage }}</notice>
    <Label for="insertCash" class="text-base md:text-lg text-left">ระบุจำนวนเงิน</Label>
    <Input type="text" placeholder="ระบุจำนวนเงิน" name="insertCash" class="mt-1" v-model="insertCash" />
    <p class="text-red-600 text-sm mt-1">* ถอนสูงสุดได้ไม่เกิน 2,000,000 บาท / ครั้ง</p>
    <p class="text-red-600 text-sm mt-1" v-if="!withdrawPercent">* ถอนได้เต็มจำนวนเท่านั้น</p>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">ยืนยันการถอนเงิน</Button>
    <hr class="mt-10" />
    <div class="text-center">
    <Label for="insertCash" class="text-base md:text-xl text-left">ประวัติการถอน</Label>
    </div>
    <div v-if="0">
      <transaction
        v-for="transaction in transactions"
        :key="transaction.id"
        :amount="transaction.amount"
        :created-at="transaction.createdAt"
        :status="transaction.status"
        :type="transaction.type"
      ></transaction>
    </div>
    <p class="text-center mt-5" v-else>ไม่เจอผลลัพธ์</p>
  </wrapper>
</template>

<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/Typography";
import FText from "@/components/Text";
import Transaction from "@/components/Transaction";
import DefaultActionButton from "@/components/DefaultActionButton";
import Notice from "@/components/Notice";

setup: () => ({
  isOpenBankInfo: false,
  withdrawPercent: true,
});

definePageMeta({
  layout: "auth",
});
const withdrawPercent = ref(true);
const AgentName = ref("melsot168");

// const toast = useToast();
const authUser = useAuthUser();

const itemsUserInfo = [
  {
    label: "ข้อมูลการโอน",
    icon: "i-heroicons-information-circle",
    defaultOpen: false,
    slot: "user-info",
  },
];

const amount = ref(null);

const bankAccount = computed(() => {
  return `${authUser.value.firstname} ${authUser.value.lastname}`;
});

const bankName = computed(() => {
  return authUser.value.bank.name;
});

const banknumber = computed(() => {
  return authUser.value.banknumber;
});

const depositTurn = computed(() => {
  const wallet = authUser.value.wallet;
  const lock = new Decimal(wallet.depositTurnover);
  const user_turn = new Decimal(wallet.depositTurnoverCounter);
  const turn = lock - user_turn;
  return turn < 0 ? 0 : turn;
});

const promotionTurn = computed(() => {
  const wallet = authUser.value.wallet;
  if (wallet.user_promotion == undefined) return 0;
  const lock = new Decimal(wallet.user_promotion.lock_amount);
  const user_turn = new Decimal(wallet.user_promotion.user_turnover);
  const turn = lock - user_turn;
  return turn < 0 ? 0 : turn;
});

async function onWithdraw() {
  const { data, error } = await useFetchApi(API.MEMBER_WITHDRAW, {
    method: "POST",
    body: {
      amount: amount.value,
    },
  });
  if (data.value.isSuccess) {
    toast.add({
      title: "ถอนเงินสำเร็จ",
      description: data.value.data.message,
      color: "green",
      timeout: 3000,
      icon: "i-heroicons-check-badge",
    });
    amount.value = null;
  } else {
    toast.add({
      title: "ถอนไม่สำเร็จ",
      description: data.value.errorMessage,
      color: "red",
      timeout: 3000,
      icon: "i-heroicons-shield-exclamation",
    });
  }
}
</script>

<style scoped>
.box-turnover {
  border: 1px solid #700909;
  background: #bf1313;
  @apply w-full p-3 rounded-lg text-white;
  @apply flex flex-row justify-between items-center;
}
.open-info-bank {
  border: 1px solid #bf1313;
  @apply cursor-pointer w-[20px] h-[20px] ml-3 rounded-full;
  @apply bg-white shadow-sm flex flex-col justify-center items-center;
}

.text-icon-toggle {
  color: #bf1313;
}
</style>
