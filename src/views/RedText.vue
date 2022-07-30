<template>
  <div>
    这是红文本组件
    <div style="font-size: 30px; font-weight:600">
      <slot name="title"></slot>
    </div>
    <div style="color: red">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "RedText",
};
</script>