<script>
import request from "./utils/api";

export default {
  data() {
    return {
      data: "",
      isLoading: true,
    };
  },
  mounted() {
    Telegram.WebApp.ready();
    this.applyThemeParams();
  },
  methods: {
    getUserId() {
      this.isLoading = true;
      request("users/get").then((data) => {
        this.data = data.data.user;
        console.log(data.data.user);
      });
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <div className="h-screen flex justify-center items-center bg-bg">
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-accent-text animate-pulse" v-if="isLoading">
        Загрузка
      </h1>
      <h1 className="text-destructive-text" v-else>{{ data.id }}</h1>
      <button
        class="text-button-text bg-button rounded-lg p-2"
        type="button"
        @click="getUserId()"
      >
        Узнай свой id
      </button>
      <h1 className="text-text">Жопа</h1>
    </div>
  </div>
</template>
