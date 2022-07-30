<template>
  <div>keep</div>
</template>
<script>
export default {
  name: "NeedKeep",
  mounted() {
    console.log("mounted");
  },
  activated() {
    console.log("activated");
  },
  destroyed() {
    console.log("destroyed");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>