<script lang="jsx">
export default {
  name: "signUpWork"
}
</script>

<script setup lang="jsx">
import { ref, toRefs, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref('fill'); // 默认选中的标签

const selectTab = (tab) => {
  activeTab.value = tab;
  if (tab === 'fill') {
    router.push('/signUpWork/fill');
  } else if (tab === 'upload') {
    router.push('/signUpWork/upload');
  }
};

onMounted(async () => {

});
</script>

<template>
  <div class="container">
    <div class="title">
      <div @click="selectTab('fill')" :class="{'workInfo': true, 'active': activeTab === 'fill'}">填写作品信息</div>
      <div @click="selectTab('upload')" :class="{'workUpload': true, 'active': activeTab === 'upload'}">上传参赛作品</div>
    </div>
    <RouterView/>
  </div>
  
  
</template>

<style scoped lang="scss">

.container{
            width: 800px;
            margin: 0 auto;
            border: 1px solid #ddd;
            background-color: white;
            .title{
              display: flex;
              cursor:pointer;
              .workInfo,.workUpload{
                  display: flex;
                  background-color: #ddd;
                  justify-content: center;
                  align-content: center;
                  font-weight: 700;
                  flex: 1;
                  padding: 10px;
              }
              .active{
                  background-color: #446eff;
                  color: white;
              }
                }
}  
</style>
