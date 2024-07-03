<template>
  <container>
    <logo></logo>
    <div class="mb-4">
      <img src="/images/register/notice.webp" alt="Meslot ไม่ต้องโยกเงิน" class="rounded-md hidden" />
    </div>
    <wrapper>
      <typography variant="h1" class="text-center mb-4"> สมัครสมาชิก </typography>

      <form class="form" @submit.prevent="() => {}">
        <!-- Register Step 1 -->

        <f-text
          v-model="form.username"
          :validator="$v.form.username"
          label="เบอร์มือถือ"
          placeholder="เบอร์มือถือ"
          :disabled="step === 2"
        ></f-text>

        <f-dropdown
          v-model="form.bankCategoriesID"
          :validator="$v.form.bankCategoriesID"
          label="ธนาคารที่ผู้บัญชีกับเงินในระบบ"
          placeholder="กรุณาเลือกธนาคาร"
          :options="dataBankList"
          class="mt-5"
          :disabled="step === 2"
        ></f-dropdown>
        <f-text
          v-model="form.banknumber"
          :validator="$v.form.banknumber"
          label="หมายเลขบัญชีธนาคาร"
          placeholder="หมายเลขบัญชีธนาคาร"
          class="mt-5"
          :disabled="step === 2"
        ></f-text>

        <default-action-button
          text="ตรวจสอบบัญชี"
          class="mt-5"
          :is-loading="isLoading"
          @click="onValidateAccount"
          v-if="step === 1"
        ></default-action-button>

        <div v-if="step === 2">
          <f-text
            v-model="form.firstname"
            :validator="$v.form.firstname"
            label="ชื่อจริง"
            placeholder="ชื่อจริง"
            class="mt-5"
            :disabled="disabledFirstname"
          ></f-text>
          <f-text
            v-model="form.lastname"
            :validator="$v.form.lastname"
            label="นามสกุล"
            placeholder="นามสกุล"
            class="mt-5"
            :disabled="disabledLastname"
          ></f-text>

          <f-password
            v-model="form.password"
            :validator="$v.form.password"
            label="รหัสผ่าน"
            placeholder="รหัสผ่าน"
            class="mt-5"
          ></f-password>
          <f-password
            v-model="form.confirmPassword"
            :validator="$v.form.confirmPassword"
            label="ยืนยันรหัสผ่าน"
            placeholder="ยืนยันรหัสผ่าน"
            class="mt-5"
          ></f-password>
          <f-text
            v-model="form.lineid"
            :validator="$v.form.lineid"
            label="ไอดีไลน์"
            placeholder="ไอดีไลน์"
            class="mt-5"
          ></f-text>
          <f-text
            v-model="codeAff"
            :validator="$v.form.lineid"
            label="รหัสเพื่อนที่แนะนำ"
            class="mt-5"
            disabled
            v-if="codeAff"
          ></f-text>
          <f-dropdown
            v-model="form.waysID"
            :validator="$v.form.waysID"
            label="รู้จักเราช่องทางใด"
            placeholder="กรุณาเลือกช่องทาง"
            :options="knowMeOptions"
            class="mt-5"
          ></f-dropdown>
          <!-- <f-text
            v-model="form.otp_code"
            :validator="$v.form.otp_code"
            :label="`OTP (รหัสอ้างอิง ${form.otp_ref})`"
            placeholder="OTP"
            class="mt-5"
          ></f-text> -->
          <default-action-button
            text="สมัครสมาชิก"
            :is-loading="isLoading"
            class="mt-10"
            @click="onRegister"
          ></default-action-button>
          <text-link-button to="/login" class="mt-5 text-center"> เข้าสู่ระบบ </text-link-button>
        </div>
      </form>
    </wrapper>
    <popup
      :is-enabled="isEnablePopup"
      title="นโยบายการสมัครสมาชิก"
      :description="descriptionPopUp"
      :is-html="true"
      @click="isEnablePopup = false"
    ></popup>
    <ModalStatus :data="errorMessage" @close="errorMessage = null" v-if="errorMessage" />
  </container>
</template>

<script setup lang="ts">
import Container from '@/components/Container'
import Wrapper from '@/components/Wrapper'
import Logo from '@/components/Logo'
import Typography from '@/components/Typography'
import FText from '@/components/Text'
import TextLinkButton from '@/components/TextLinkButton'
import FPassword from '@/components/Password'
import FDropdown from '@/components/Dropdown'
import TextButton from '@/components/TextButton'
import DefaultActionButton from '@/components/DefaultActionButton'
import Notice from '@/components/Notice'
import Popup from '@/components/Popup.vue'
import ModalStatus from '@/components/ModalStatus'
import { local_affiliate } from '~/constants/localStore'

 
interface userRegister {
  username: string;
  password: string;
  confirmPassword?: string;
  firstname: string;
  lastname: string;
  bankCategoriesID?: string;
  banknumber: string;
  lineId?: string;
  waysID?: string;
  affiliate?: string;
}
const authen = useAuth();
const local_affiliate = "affiliate";
const toast = useToast();
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const bankList = ref(BANK);
const knowMeOptions = ref(CHANEL);
const state = ref<userRegister>({
  username: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  bankCategoriesID: "",
  banknumber: "",
  lineId: "",
  waysID: "",
});

const schema = object({
  username: string().min(10, "กรุณากรอกให้ครบ").max(10, "กรุณาตรวจสอบข้อมูลให้ถูกต้อง").required("กรุณากรอก"),
  password: string().min(6, "รหัสผ่านอย่างน้อย 6 ตัว").required("กรุณากรอก"),
  confirmPassword: string().required("กรุณากรอก").min(6, "รหัสผ่านอย่างน้อย 6 ตัว"),
  banknumber: string().required("กรุณากรอก"),
  bankCategoriesID: string().required("กรุณาเลือก"),
  firstname: string().required("กรุณากรอก"),
  lastname: string().required("กรุณากรอก"),
  lineId: string().required("กรุณากรอก"),
  waysID: string().required("กรุณาเลือก"),
});

const form = ref();

async function submit() {
  await form.value!.validate();

  if (state.value.password != state.value.confirmPassword) {
    toast.add({
      title: "รหัสผ่านไม่ตรงกัน",
      color: "red",
      timeout: 3000,
      icon: "i-heroicons-shield-exclamation",
    });
    isLoading.value = false;
    return;
  }

  isLoading.value = true;
  const payload = {
    ...state.value,
    bank_categories_id: state.value.bankCategoriesID,
    ways_id: state.value.waysID,
    lineid: state.value.lineId,
  };
  delete payload["confirmPassword"];
  delete payload["bankCategoriesID"];
  delete payload["lineId"];
  delete payload["waysID"];

  const { aff } = route.query;
  const localAff = localStorage.getItem(local_affiliate);

  if (aff && localAff != aff) localStorage.setItem(local_affiliate, aff);

  const realAff = localStorage.getItem(local_affiliate);

  if (realAff) payload.affiliate = realAff;

  const { data } = await useFetchApi<ResponseUserInfo>(API.REGISTER, {
    method: "POST",
    body: payload,
  });

  if (data.value?.isSuccess) {
    toast.add({
      title: "สมัครสมาชิกสำเร็จ",
      color: "green",
      timeout: 3000,
      icon: "i-heroicons-check-badge",
    });
    localStorage.removeItem(local_affiliate);
    const loginForm = {
      username: state.value.username,
      password: state.value.password,
    };
    const { data } = await useFetchApi<any>(API.MEMBER_LOGIN, {
      method: "POST",
      body: loginForm,
    });
    if (data.value?.isSuccess) {
      const token = useCookie(LOCAL_STORAGE.AUTH_TOKEN);
      token.value = data.value?.access_token;
      if (realAff) {
        await useFetch(`${API_AFF}/agents/users`, {
          method: "POST",
          body: {
            usename: state.value.username,
            agent: "huay990",
            affiliateId: realAff,
          },
        });
      }

      setTimeout(async () => {
        await authen.getUserProfile();
        router.push(Route.HOME);
      }, 1000);
    }
  } else if (!data.value?.isSuccess) {
    toast.add({
      title: "สมัครสมาชิกไม่สำเร็จ",
      description: data.value?.errorMessage,
      color: "red",
      timeout: 3000,
      icon: "i-heroicons-shield-exclamation",
    });
  }
  isLoading.value = false;
}
</script>

<style scoped>
.form {
  margin-top: 20px;
}
</style>
