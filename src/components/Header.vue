<template>
  <div class="header text-white">
    我是一个标题栏
    <span class="float-right btn-opt text-white">
      <i class="el-icon-minus mr-10" @click="toMin()"></i>
      <i class="el-icon-close" @click="toClose()"></i>
    </span>
  </div>
</template>

<script setup>
import { ipcRenderer } from "electron";
const toMin = () => {
  ipcRenderer.send("window-mini");
};

const toClose = () => {
  ipcRenderer.send("window-closed");
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-app-region: drag; // 设置可拖动
}
</style>
