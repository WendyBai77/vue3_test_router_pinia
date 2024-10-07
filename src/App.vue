<script setup>
import { useHomeStore } from "@/store/home.js"

const store = useHomeStore()

store.getCourseData()

</script>

<template>
  <div class="_mid flex-center">
    <div class="flex-center menu">
      <router-link to="/">首頁</router-link>
      <router-link to="/about">關於我們</router-link>
      <router-link to="/address">聯絡我們</router-link>
      <router-link to="/courses">課程列表</router-link>
      <router-link to="/member">會員專區</router-link>
    </div>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.router-link-active {
  color: #333 !important;
  background-color: #e2e2e2 !important;
  font-weight: bold;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "微軟正黑體";
  background-color: #888;
}
#app {
  width: 100%;
  height: 100%;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
._mid {
  width: 100%;
  height: 100%;
}

.menu {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
}

.menu > a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #333;
}
</style>
