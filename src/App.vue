<script setup>
import { RouterView } from 'vue-router';
// import Form from './views/Login/components/Form.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
