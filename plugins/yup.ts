import { defineNuxtPlugin } from "#app";
import * as yup from "yup";

export default defineNuxtPlugin(() => {
  yup.addMethod(yup.string, "thaiPhone", function () {
    return this.matches(/^(?:0|\+66)\d{9}$/, "เบอร์โทรศัพท์มีรูปแบบไม่ถูกต้อง");
  });

  yup.addMethod(yup.string, "english", function () {
    return this.matches(/^[A-Za-z]+$/, "ระบุเป็นภาษาอังกฤษเท่านั้น");
  });

  yup.addMethod(yup.string, "thai", function () {
    return this.matches(/^[ก-๙]+$/, "ระบุเป็นภาษาไทยเท่านั้น");
  });

  yup.addMethod(yup.string, "numeric", function () {
    return this.matches(/^[\d]+$/, "ระบุเป็นตัวเลขเท่านั้น");
  });
});
