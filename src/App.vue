<template>
  <div class="app">
    <!--注释已将删除了-->
    <router-view />
  </div>
</template>
<script>
import EventBus, { EventType } from "./bus/index.js";
import NotFound from "./views/NotFound.vue";
import RedText from "./views/RedText.vue";
export default {
  name: "App",
  data: function() {
    return {
      componentArr: ['RedText', 'RedText', 'NotFound', 'NotFound']
    }
  },
  components: {
    NotFound,
    RedText,
  },
  provide: {
    money: "100000",
  },
  mounted() {
    setTimeout(() => {
      EventBus.$emit(EventType.GiveMoney, { count: 1 });
      this.$i18n.locale = 'zh'
    }, 3000);
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

html, body, .app {
  height: 100%
}
</style>
