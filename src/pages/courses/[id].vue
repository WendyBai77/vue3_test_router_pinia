<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();

const router = useRouter();

const courses = ref({});

const goBack = () => {
  router.go(-1);
};

onMounted(() => {
  axios.get(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`).then((res) => {
    courses.value = res.data.data[0];
  });
});
</script>
<template>
  <div class="courses_box flex-center">
    <div class="content flex-center flex-col">
      <img :src="courses.photo" alt="" />
      <p>{{ courses.description }}</p>
      <button @click="goBack">返回</button>
    </div>
  </div>
</template>
<style scoped>
.courses_box {
  width: 100%;
  height: 100%;
  background-color: #333;
}
img {
  margin-bottom: 20px;
  width: 100%;
  height: 346px;
  background-color: #555;
}
p {
  display: block;
  font-size: 20px;
  color: #fff;
  line-height: 38px;
  height: 152px;
}
.content {
  width: 704px;
}
button {
  cursor: pointer;
  width: 160px;
  height: 30px;
  border-radius: 50px;
  margin-top: 20px;
  background-color: #7dd19f;
  border: 0px;
  color: #001c3c;
  font-size: 16px;
}
</style>
