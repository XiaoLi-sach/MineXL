<template>
  <div class="header text-white">
    我是一个标题栏
    <span class="float-right btn-opt text-white">
      <i class="el-icon-minus mr-10"></i>
      <i class="el-icon-close"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'
const toMin = () => {
  ipcRenderer.send("window-mini");
};

const toClose = () => {
  ipcRenderer.send("window-closed");
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  -webkit-app-region: drag;
}
</style>
