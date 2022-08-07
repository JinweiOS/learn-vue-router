<template>
  <div>
    <div class="hello" @click="file">
      <input
        type="file"
        ref="upload"
        style="height: 100%; width: 100%; position: relative; z-index: -1"
        @click="file"
        @change="fileInfo"
      />
    </div>
    <el-progress type="circle" :percentage="progress" status="success"></el-progress>
  </div>
</template>

<script>
import Http from "../service/index";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      progress: 0,
    };
  },
  methods: {
    file() {
      console.log("hahahah");
      this.$refs.upload.click();
    },
    async fileInfo(event) {
      console.log(event.target.files);
      const formData = new FormData();
      formData.append("zip", event.target.files[0]);
      await Http.post("/upload", formData, {
        onUploadProgress: (progressEvent) => {
          this.progress = (progressEvent.loaded / progressEvent.total) * 100;
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background-color: red;
  position: relative;
}
.hello:hover {
  cursor: pointer;
}
</style>
