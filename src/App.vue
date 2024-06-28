<script setup>
import { RouterView } from 'vue-router';
// import Form from './views/Login/components/Form.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const userStore = useUserStore()
onMounted(() => {
  userStore.updateUserInfo()
})
</script>

<template>
 <Header /> 
    <div class="body">
      <RouterView />
    </div>
  <Footer />
</template>

<style scoped>
.body{
  background-color: rgb(246 247 249);
  padding: 10px;
}
</style>
