import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      isFocusLogin: false,
      isFocusLoginWorking: null,
      isFocusLoginWorkingCount: 0,
    };
  },
  actions: {
    setIsFocusLogin() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const self = this;
      if (!this.isFocusLoginWorking) {
        this.isFocusLoginWorking = setInterval(() => {
          if (self.isFocusLoginWorkingCount > 4) {
            clearInterval(self.isFocusLoginWorking);
            self.isFocusLoginWorking = null;
            self.isFocusLoginWorkingCount = 0;
            self.isFocusLogin = false;
          } else {
            this.isFocusLogin = !this.isFocusLogin;
            this.isFocusLoginWorkingCount++;
          }
        }, 200);
      }
    },
  },
});
