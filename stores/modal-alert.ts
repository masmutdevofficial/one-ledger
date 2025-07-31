import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    show: false,
    message: "",
  }),
  actions: {
    open(message: string) {
      this.message = message;
      this.show = true;
    },
    close() {
      this.show = false;
      this.message = "";
    },
  },
});
