<template>
    <wrapper>
      <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">ประวัติธุรกรรม</h1>
    </div>
    <!-- <div v-if="isLoading">
      <loader is-black></loader>
    </div> -->
    <!-- <div v-else-if="!isLoading">
       <div class="text-center mt-4">
      <Label for="title" class="text-lg">ไม่มีข้อมูล</Label>
    </div>
      <typography variant="span" class="text-center"> ไม่มีข้อมูล </typography>
    </div> -->
    <div>
    <!-- <div v-else-if="!isLoading"> -->
        <transaction
        :key="'001'"
        :amount="'100'"
        :created-at="'15/8/2566 13:28:22'"
        :status="'รอดำเนินการ'"
        :type="'ถอนเงิน'"
      ></transaction>
      <transaction
        :key="'002'"
        :amount="'123'"
        :created-at="'15/8/2566 11:51:52'"
        :status="'รอดำเนินการ'"
        :type="'ถอนเงิน'"
      ></transaction>
      
      <!-- <transaction
        v-for="transaction in transactions"
        :key="transaction.id"
        :amount="transaction.amount"
        :created-at="transaction.createdAt"
        :status="transaction.status"
        :type="transaction.type"
      ></transaction> -->
    </div>
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import Transaction from '@/components/Transaction'
import { API } from "@/constants/API";

definePageMeta({
  layout: "auth",
});
// const state = reactive({
//   isLoading: false,
//   offset: 0,
//   limit: 9999,
//   hasNext: true,
//   transactions: [],
// });

// const { data } = await useFetchApi(`${API.MEMBER_HISTORY}?offset=${state.offset}&limit=${state.limit}`);
// state.transactions = normalize(data.value);

// function normalize(data) {
//   return data.map((item) => {
//     let status = "";
//     if (item.status == "rejected") {
//       status = "ไม่สำเร็จ";
//     } else if (item.status == "ACTIVE") {
//       status = "สำเร็จ";
//     } else if (item.status == "pending") {
//       status = "รอดำเนินการ";
//     }
//     console.log(new Date(item.created_at));
//     return {
//       ...item,
//       status: status,
//       type: item.prefix === "D" ? "ฝากเงิน" : "ถอนเงิน",
//       amount: Intl.NumberFormat().format(item.amount),
//       createdAt: new Date(item.created_at).toLocaleString("th-TH", {
//         hour12: false,
//       }),
//     };
//   });
// }
</script>

<style scoped>

</style>