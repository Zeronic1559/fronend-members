<template>
  <header class="header mb-4">
    <div class="header__announcement py-2 text-center">
      <typography variant="span" class="header__announcement__text marquee">
        แจ้งเตือน!!
        ระบบเป็นระบบอัติโนมัติโปรดตรวจสอบหมายเลขบัญชีที่สมัครให้ตรงกับบัญชีที่โอนมาไม่เช่นนั้นทางเว็บจะไม่ปรับยอดให้และไม่รับผิดชอบทุกกรณี
      </typography>
    </div>
    <div class="header__profile px-4 py-4 md:px-4 md:pt-4">
      <div class="flex flex-col md:flex-row justify-start items-start">
        <div class="flex flex-row justify-start items-start mr-0 md:mr-10">
          <div class="mr-3" v-if="false">
            <div class="w-[80px] h-[80px] rounded-full">
              <!-- <img :src="/medals"  class="w-full h-full object-cover" /> -->
            </div>
            <div class="text-white text-xs text-center">bronze</div>
          </div>
          <div class="mr-3" v-else>
            <div class="circle-box-logo">
              <img :src="`/meslot168/icon.png`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="mt-0">
            <div class="text-white text-2xl">0918208192</div>
            <div class="text-white text-sm">ทดสอบ ทดสอบ</div>
            <div class="text-[#2ae4fd] text-sm flex flex-row justify-start items-center">
              <MaterialSymbolsDiamondOutline class="mr-2" />
              <span> 1000 เพชร</span>
            </div>
          </div>
        </div>
        <div class="box-credit">
          <div class="grid grid-cols-2 gap-2 md:gap-4">
            <div>
              <div class="text-white text-base">เครดิตคงเหลือ</div>
              <div class="text-[#e7c34b]">577 THB</div>
            </div>

            <div>
              <div class="text-white text-base">ค่าคอมที่ได้คืน</div>
              <div class="text-[#e7c34b]">1,000.0000 THB</div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 md:gap-4 mt-4">
        <Button class="bg-green-500 hover:bg-green-400 mt-4 w-full text-base" variant="line" size="xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20"><path fill="white" d="M1 4.25a3.73 3.73 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 2H3.25A2.25 2.25 0 0 0 1 4.25m0 3a3.73 3.73 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 5H3.25A2.25 2.25 0 0 0 1 7.25M7 8a1 1 0 0 1 1 1a2 2 0 1 0 4 0a1 1 0 0 1 1-1h3.75A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5A2.25 2.25 0 0 1 3.25 8z"/></svg>
        &nbsp; ฝากเงิน </Button>

        <Button class="bg-red-500 hover:bg-red-400 mt-4 w-full text-base" variant="line" size="xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="white"><path d="M12 7.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"/><path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625zM8.25 9.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75zM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"/><path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075c1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75z"/></g></svg>
        &nbsp; ถอนเงิน </Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import Typography from "@/components/Typography";
import LinkButton from "@/components/LinkButton";
</script>

<style></style>
