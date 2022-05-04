<template>
<!--  <Header />-->
<!--  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Electron" />-->
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
//
const container:any = ref(null)
const dom_root = document.getElementById('root')
onMounted(() => {
  const ul = container.value
  let fristChild:HTMLBaseElement = ul[0]
  let lastChild:HTMLBaseElement = ul[ul.length - 1]
  ul.applendChild(fristChild)
  ul.insertBefore(lastChild)
  console.log(container.value)
  dom_root.style.display = 'none'
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 100%;
  overflow: hidden;
  ul {
    width: 500%;
    display: flex;
    >li {
      width: 20%;
      height: 100px;
    }
  }
}
.logo img {
    width: 50%;
  }
</style>
