<template>
  <div class="app">
    <!-- 两种写法一样-->
    <!--建议用v-slot-->
    <!-- <RedText>
      <template slot="title"> 这是标题，字体超大&加粗显示 </template>
      <template v-slot:body> 内容还是丑红色 </template>
    </RedText> -->
    <!-- <component v-for="(comps, index) in componentArr" :is="comps" :key="index"></component> -->
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
