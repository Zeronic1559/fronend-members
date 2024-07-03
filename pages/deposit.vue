<template>
    <wrapper>
      <div class="text-center">
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">ระบบเติมเงินอัตโนมัติ</h1>
    </div>
    <div class="text-center mt-10">
    <Label for="detail" class="text-lg">แจ้งเตือน!! ระบบเป็นระบบอัติโนมัติโปรดตรวจสอบหมายเลขบัญชีที่สมัครให้ตรงกับ บัญชีที่โอนมา</Label>
    <Label for="subdetail" class="text-lg"> หากเงินไม่เข้าภายใน 5 นาทีโปรดติดต่อแอดมิน
      {{
        isPromotion == true
        ? `หากสมาชิกท่านใดต้องการรับโบนัส 100% และยอมรับเงื่อนไขการทำเทิร์นกับทางบริษัท กรุณาติดต่อแอดมินเพื่อรับโบนัส`
        : ''
      }}
      {{ lineId }}
    </Label>
    </div>
    <notice class="mt-3 text-red-600 text-lg">
      <div>* ระบบอัพเดทใหม่ล่าสุด {{ currentYear }} ฝาก-ถอน รวดเร็วทันใจ เงินเข้าทันทีภายใน 3 วิ</div>
      <div class="mt-3">
        * รบกวนใช้บัญชีที่ใช้ลงทะเบียนฝากเข้ามาเท่านั้น
        หากพบว่าไม่ใช่บัญชีที่ลงทะเบียนฝากเข้ามาทางเราจะไม่รับผิดชอบทุกกรณี
      </div>
      <div class="mt-3">* ฝากขั้นต่ำ 1 บาท</div>
    </notice>

    <div class="mt-3 text-red-600 text-sm">*ทุกๆ การเติม 1,000 บาท ท่านจะได้รับ 1 เพชร (จำกัดจำนวน 10 เพชร ต่อวัน)</div>

    <notice v-if="copied" is-success class="my-8"> คัดลอก {{ copied }} เรียบร้อย </notice>

    <div v-if="isUseLocal">
      <div v-for="(item, index) in items" :key="`index_${index}`">
        <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5"
          v-if="manageConfition(item)">
          <div class="
              deposit__bank__account
              text-center
              xl:text-left
              flex flex-col
              md:flex-row
              items-center
              space-y-4
              md:space-x-4
            ">
            <img :src="item.image" :alt="item.name" class="deposit__bank__image" />
            <div class="flex flex-col space-x-2">
              <div class="deposit__bank__account">
                <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
                  {{ item.number }}
                </typography>
                <typography variant="span" class="deposit__bank__name text-center md:text-left mb-4">
                  ({{ item.name }})
                </typography>
              </div>
            </div>
          </div>
          <div class="deposit__bank__button ml-0">
            <link-gradient-button v-if="item.link" icon="fas fa-hand-pointer" text="เลือกเติมเงิน" :to="item.link">
            </link-gradient-button>
            <copy-button v-else text="คัดลอกบัญชี" @click="() => onCopy(item.number)"></copy-button>
          </div>
        </div>
        <notice v-if="item.errorMessage" class="mt-2">
          {{ item.errorMessage }}
        </notice>
      </div>
    </div>

    <div v-else>
      <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5">
      <div class="
          deposit__bank__account
          text-center
          xl:text-left
          flex flex-col
          md:flex-row
          items-center
          space-y-4
          md:space-x-4
        ">
        <img src="/images/icons/transfer.png" class="deposit__bank__image" />
        <div class="flex flex-col space-x-2">
          <div class="deposit__bank__account">
            <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
              เติมเงินด่วน QR CODE (Hengpay)
            </typography>
          </div>
          </div>
        </div>
      <div class="deposit__bank__button ml-0">
        <Button class="mt-4 w-full text-xl" variant="gradient" size="xl" @click="$router.push('/deposits/hangpay')">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 1 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"/></g></svg>
          &nbsp;เลือกเติมเงิน
        </Button>
      </div>
      </div>
      <div>
        <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5">
          <div class="
              deposit__bank__account
              text-center
              xl:text-left
              flex flex-col
              md:flex-row
              items-center
              space-y-4
              md:space-x-4
            ">
            <img :src="`/images/banks/ttb.png`" class="deposit__bank__image" />
            <div class="flex flex-col space-x-2">
              <div class="deposit__bank__account">
                <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
                    2157506722
                </typography>
                <typography variant="span" class="deposit__bank__name text-center md:text-left mb-4">
                    (ฐิติพนธ์ ทิมทอง)
                </typography>
              </div>
            </div>
          </div>
          <div class="deposit__bank__button ml-0">
            <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">
              <svg data-v-239ec6aa="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="icon"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="currentColor"></path></svg>  
              &nbsp;คัดลอกบัญชี
            </Button>
          </div>
        </div>
        <!-- <notice v-if="item.errorMessage" class="mt-2">
          {{ item.errorMessage }}
        </notice> -->
      </div>
    </div>

    <div>
        <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5">
          <div class="
              deposit__bank__account
              text-center
              xl:text-left
              flex flex-col
              md:flex-row
              items-center
              space-y-4
              md:space-x-4
            ">
            <img :src="`/images/banks/truewallet.png`" class="deposit__bank__image" />
            <div class="flex flex-col space-x-2">
              <div class="deposit__bank__account">
                <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
                    0825829823
                </typography>
                <typography variant="span" class="deposit__bank__name text-center md:text-left mb-4">
                    (พีรพงษ์ ศรีสาวรรณ์)
                </typography>
              </div>
            </div>
          </div>
          <div class="deposit__bank__button ml-0">
            <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">
              <svg data-v-239ec6aa="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="icon"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z" fill="currentColor"></path></svg>  
              &nbsp;คัดลอกบัญชี
            </Button>
            
          </div>
        </div>
        <!-- <notice v-if="item.errorMessage" class="mt-2">
          {{ item.errorMessage }}
        </notice> -->
      </div>
    

    <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5"
      v-if="isDepositBankTransferVisibled">
      <div class="
          deposit__bank__account
          text-center
          xl:text-left
          flex flex-col
          md:flex-row
          items-center
          space-y-4
          md:space-x-4
        ">
        <img src="/images/icons/mobile-banking.png" class="deposit__bank__image" alt="" />
        <div class="flex flex-col space-x-2">
          <div class="deposit__bank__account">
            <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
              โอนผ่านธนาคาร
            </typography>
          </div>
        </div>
      </div>
      <div class="deposit__bank__button ml-0">
        <link-gradient-button icon="fas fa-hand-pointer" text="เลือกเติมเงิน" to="/deposit/transfer?chanel=4">
        </link-gradient-button>
      </div>
    </div>

    <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5"
      v-if="isDepositQrcodeVisibled">
      <div class="
          deposit__bank__account
          text-center
          xl:text-left
          flex flex-col
          md:flex-row
          items-center
          space-y-4
          md:space-x-4
        ">
        <img src="/images/icons/digital-wallet.png" class="deposit__bank__image" alt="" />
        <div class="flex flex-col space-x-2">
          <div class="deposit__bank__account">
            <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
              เติมเงินผ่าน QR CODE
            </typography>
          </div>
        </div>
      </div>
      <div class="deposit__bank__button ml-0">
        <link-gradient-button icon="fas fa-hand-pointer" text="เลือกเติมเงิน" to="/deposit/transfer?chanel=2">
        </link-gradient-button>
      </div>
    </div>

    <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5" v-if="isDecimalVisibled">
      <div class="
          deposit__bank__account
          text-center
          xl:text-left
          flex flex-col
          md:flex-row
          items-center
          space-y-4
          md:space-x-4
        ">
        <img src="/images/banks/kasikorn.png" class="deposit__bank__image" />
        <div class="flex flex-col space-x-2">
          <div class="deposit__bank__account">
            <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
              ฝากแบบทศนิยม เงินเข้าเลย
            </typography>
            <typography variant="span" class="deposit__bank__name text-center md:text-left mb-4">
              (แนะนำ เงินเข้าเลยไม่ต้องรอ)
            </typography>
          </div>
        </div>
      </div>
      <div class="deposit__bank__button ml-0">
        <link-gradient-button icon="fas fa-hand-pointer" text="เลือกเติมเงิน" to="/deposit/decimal">
        </link-gradient-button>
      </div>
    </div>

    <div class="deposit__bank flex flex-col md:flex-row items-center justify-between mt-8 pt-5">
      <div class="
          deposit__bank__account
          text-center
          xl:text-left
          flex flex-col
          md:flex-row
          items-center
          space-y-4
          md:space-x-4
        ">
        <img src="/images/banks/truewallet.png" class="deposit__bank__image" />
        <div class="flex flex-col space-x-2">
          <div class="deposit__bank__account">
            <typography variant="span" class="deposit__bank__number text-center mb-1 inline-block px-4">
              TrueMoney Wallet GiftCard
            </typography>
            <typography variant="span" class="deposit__bank__name text-center md:text-left mb-4">
              (แนะนำ เงินเข้าเลยไม่ต้องรอ)
            </typography>
          </div>
        </div>
      </div>
      <div class="deposit__bank__button ml-0">
        <Button class="mt-4 w-full text-xl" variant="gradient" size="xl" @click="$router.push('/deposits/truegift')">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-.5v-2a1.5 1.5 0 1 1 3 0V12m0-1.5a1.5 1.5 0 0 1 3 0V12"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2h.208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022a1.87 1.87 0 0 1 2.28.28L8 13"/></g></svg>
          &nbsp;เลือกเติมเงิน
        </Button>
      </div>
    </div>
  </wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'
import CopyButton from '@/components/CopyButton'
import Notice from '@/components/Notice'
import LinkGradientButton from '@/components/LinkGradientButton'
import { API } from "@/constants/API";

definePageMeta({
  layout: "auth",
});
// const { copy } = useClipboard();
// const toast = useToast();

const lineId = ref("@meslot168");
const currentYear = ref("2024");
const bankListRaw = ref([]);

const bankList = computed(() => {
  return bankListRaw.value;
});

const { data } = await useFetchApi(API.MEMBER_BANK_DEPOSIT, {}, true);
bankListRaw.value = data.value?.data || [];

const getBankImage = (bank) => {
  const name = bank?.toLowerCase() || null;
  return `https://storage.googleapis.com/meslotvip_cdn/frontend/banks/${name}.png`;
};

const copyNumber = (number) => {
  copy(number);
  toast.add({
    title: "คัดลอกบัญชีแล้ว!",
    timeout: 2000,
    description: `ท่านได้คัดลอกเลขบัญชี ${number}`,
    color: "green",
    icon: "i-heroicons-check-badge",
  });
};

</script>

<style scoped>
.deposit__bank {
  border-top: 1px solid #eeeeee;
}

.deposit__bank__number {
  background: #222222;
  border-radius: 5px;
  color: #ffffff;
}

.deposit__bank__image {
  max-width: 60px;
}
</style>