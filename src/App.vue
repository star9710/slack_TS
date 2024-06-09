<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/sidebar.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- 页面展示区 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside>
      <Sidebar></Sidebar>
    </el-aside>

    <!-- 内容显示区 -->
    <el-main>
      <router-view>
      </router-view>
    </el-main>
  </el-container>
</template>

<style scoped>

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.el-container {
  width: 100vw;
}

.el-main {
  background-color: #FFFFFF;
  width: 100vw;
}

.el-aside {
  width: 64px;
}
</style>
