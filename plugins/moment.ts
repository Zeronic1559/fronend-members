import moment from "moment";
export default defineNuxtPlugin((nuxtApp) => {
  moment.defineLocale("th", {
    months: [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ],
    monthsShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    monthsParseExact: true,
    weekdays: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
    weekdaysShort: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"], // yes, three characters difference
    weekdaysMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
    weekdaysParseExact: true,

    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "YYYY/MM/DD",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY เวลา H:mm",
      LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
    },
  });
  return {
    provide: {
      moment,
    },
  };
});
