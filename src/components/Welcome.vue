<template>
  <h1>欢迎来到主界面</h1>
  <el-button @click="goLogin">去登录</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.welcome {
  background-color: #ffffff;
  height: 100%;
}
</style>
