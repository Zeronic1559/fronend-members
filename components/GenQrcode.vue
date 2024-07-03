<template>
  <div class="my-3">
    <div class="flex flex-row justify-center">
      <div id="qrcode"></div>
    </div>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">ดาวน์โหลด QR Code</Button>
  </div>
</template>

<script setup>
import DefaultActionButton from '@/components/DefaultActionButton'

const props = defineProps({
    text: {
      type: String,
      default: '',
      require: true,
    },
    showButton: {
      type: Boolean,
      default: true,
      require: false
    }
  });
const qrCode = ref(null);
const primaryColor = ref('#bf1313');
const siteName = 'meslot168';
const text = ref('https://affiliate-meslot168.netlify.app?aff=JS1KTZu7Y');

onMounted(() => {
  primaryColor.value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
    genQrcode();
});

async function genQrcode() {
  const QRCodeStyling = await import('qr-code-styling');
  qrCode.value = new QRCodeStyling.default({
    width: 300,
    height: 300,
    type: 'svg',
    data: text.value,
    image: `/${siteName}/icon.png`,
    dotsOptions: {
      color: '#bf131',
      type: 'rounded',
    },
    cornersSquareOptions: {
      color: '#bf1313',
      type: 'extra-rounded',
    },
    backgroundOptions: {
      color: 'white',
    },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 10,
    },
  });

  qrCode.value.append(document.getElementById('qrcode'));
}

function downloadQrcode() {
  qrCode.value.download({
    name: `${siteName} - ${$auth.user.username}`,
    extension: 'png',
  });
}
</script>

<style scoped>
</style>