<template>
  <Container>
    <div class="w-[300px] mx-auto mb-9">
      <img src="/images/logo.png" class="w-full h-full object-contain" />
    </div>
    <Wrapper>
      <h1 class="text-center text-2xl md:text-3xl font-medium mb-5">เข้าสู่ระบบ</h1>

      <div>
        <Label class="error"> {{ errors.user}}</Label>>
      </div>
      <div>
        <Label for="username" class="text-base md:text-lg">ชื่อผู้ใช้ (เบอร์มือถือ)</Label>
        <Input type="text" placeholder="กรอกชื่อผู้ใช้ (เบอร์มือถือ)" name="username" class="mt-1" v-model="username" />
      </div>

      <div class="mt-4 md:mt-5">
        <Label class="error"> {{ errors.pass}}</Label>>
      </div>
      <div>
        <Label for="password" class="text-base md:text-lg">รหัสผ่าน</Label>
        <Input type="text" placeholder="กรอกรหัสผ่าน" name="password" class="mt-1" v-model="password" />
      </div>

      <div class="text-right px-2 mt-1">
        <NuxtLink to="/forgot-password" class="text-sm md:text-base underline">ลืมรหัสผ่าน</NuxtLink>
      </div>

      <Button class="mt-4 w-full text-xl" variant="gradient" size="xl"  @submit="Login">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25"/></svg>
        &nbsp;เข้าสู่ระบบ
      </Button>
      <Button class="mt-4 w-full text-xl" variant="register" size="xl">สมัครสมาชิก</Button>
      <div class="relative py-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-b border-gray-300"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-base text-gray-500">OR</span>
        </div>
      </div>
      <Button class="mt-4 w-full text-base" variant="line" size="xl">เข้าสู่ระบบด้วย LINE</Button>
    </Wrapper>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import Wrapper from "@/components/Wrapper.vue";
import { object, string, number } from 'zod'
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import { z } from "zod";

const username = ref(null);
const password = ref(null);

const formSchema = toTypedSchema(
  z.object({
    user: z
      .number()
      .min(10,{ message: "กรุณากรอกชื่อผู้ใช้งาน(เบอร์โทรศัพท์มือถือ)"}).max(10),
    pass: z.string().min(4,{message:"รหัสผ่านสั้นเกินไป"}).max(4),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
})

const Login = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
.error {
  color: red;
}
</style>

