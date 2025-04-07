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
  <div className="h-screen flex justify-center items-center">
    <h1 class="text-red-500 animate-pulse" v-if="isLoading">Загрузка</h1>
    <h1 class="text-green-400" v-else>{{ data.id }}</h1>
    <button class="text-tg-text" type="button" @click="getUserId()">
      Узнай свой id
    </button>
  </div>
</template>
