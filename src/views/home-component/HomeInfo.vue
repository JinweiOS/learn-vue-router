<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="username" label="用户ID"> </el-table-column>
      <el-table-column prop="usernameC" label="姓名"> </el-table-column>
      </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import EventBus, { EventType } from "@/bus/index.js";
import Http from "@/service/index";
export default {
  name: "HomeInfo",
  inject: ["money"],
  data: function () {
    return {
      tableData: [],
    };
  },
  async mounted() {
    EventBus.$on(EventType.GiveMoney, (data) => {
      console.log(
        "这是appvue给我的钱，我是子组件homeinfo，我拿到的数额是",
        data.count
      );
    });
    await this.getUserData()
  },
  methods: {
    deleteRow(row, tableData) {
      console.log(row, tableData);
    },
    async getUserData() {
      const res = await Http.get("/user/all");
      this.tableData = res.data.data;
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  // height: 100%;
  // width: 100%;
}
</style>