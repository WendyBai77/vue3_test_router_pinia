import { ref, computed } from "vue"
import { useRouter } from "vue-router"; // 原本寫在 courses/index.vue 
import { defineStore } from "pinia"
import axios from "axios"; // 原本寫在 courses/index.vue 

export const useHomeStore = defineStore("home", () => {

  const router = useRouter(); // 原本寫在 courses/index.vue 

  const coursesArr = ref([]) // 原本寫在 courses/index.vue 

  // 從 API 取出來的資料，透過計算屬性 當 coursesArr.value 發生變化時，coursesList 會自動更新 (這樣在 template 中使用 coursesList 時，視圖會自動響應並重新渲染，不需要手動呼叫更新邏輯)
  const coursesList = computed(() => coursesArr.value)

  const gotoCourses = (id) => { // 原本寫在 courses/index.vue 
    router.push(`/courses/${id}`)
  }

  // 調用 課程列表資料 API，並將 取出來的資料存到 coursesArr 陣列裡
  const getCourseData = async () => {
    try {
      const res = await axios.get("https://vue-lessons-api.vercel.app/courses/list")
      coursesArr.value = res.data
    } catch (error) {
      console.error(error)
    }
  }
  // 記得要匯出
  return { coursesArr, coursesList, gotoCourses, getCourseData }
})