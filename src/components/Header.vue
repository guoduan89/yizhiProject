<script lang="js"></script>

<script setup lang="js">
import { ref, toRefs, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import DialogLogin from './DialogLogin.vue';

const isShowDialogLogin = ref(true);

const router = useRouter();
const getBody = () => {
  router.push({ name: 'home' });
};
const getGuide = () => {
  router.push({ name: 'guide' });
};

onMounted(async () => {
  // getBody();
});
</script>

<template>
  <div class="nav">
    <div class="navtitle">某市职业学校教学能力大赛</div>
    <ul id="list">
      <li @click="getBody"><a href="">首页</a></li>
      <li @click="getGuide"><a href="">比赛指南</a></li>
      <li><a href="">我要报名</a></li>
      <li><a href="">进入专家评审</a></li>
    </ul>
    <button>登录</button>
    <!-- <div class="user">
      <img src="../../../assets/img/PC端_slices/组 1@2x.png" alt="" />
      <div class="name">
        <a href="">胡志新</a>
        <ul class="dropdown">
          <li>
            <img src="../../../assets/img/PC端_slices/矢量智能对象@2x(3).png" alt="" />退出登录
          </li>
          <li>
            <img src="../../../assets/img/PC端_slices/矢量智能对象@2x(4).png" alt="" />修改密码
          </li>
        </ul>
      </div>
      <img
        style="height: 5px"
        src="../../../assets/img/PC端_slices/矢量智能对象 拷贝 9@2x.png"
        alt=""
      />
    </div> -->
  </div>

  <DialogLogin v-model="isShowDialogLogin" />
</template>

<style scoped lang="scss">
$color: #436eff;
.nav {
  display: flex;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  // background-color: bisque;

  .navtitle {
    color: $color;
    padding-left: 50px;
  }

  ul {
    display: flex;
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
    margin-right: 400px; /* 修改为固定像素值 */

    li {
      list-style: none;
      line-height: 50px;
      padding: 0 20px;
      position: relative; /* 添加相对定位 */

      &:hover {
        background-color: #e0e0e0; /* 鼠标悬停时背景颜色变深 */

        a {
          color: $color; /* 鼠标悬停时字体变蓝色 */
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px; /* 横线高度 */
          background-color: $color; /* 横线颜色 */
        }
      }

      a {
        text-decoration: none;
        color: black;
        font-size: 14px;
      }
    }
  }

  button {
    margin-right: 50px;
    background-color: $color;
    border: none;
    padding: 6px 10px;
    color: white;
  }

  .user {
    display: flex;
    align-items: center;
    width: 100px;
    margin-right: 40px;
    img {
      height: 20px;
      z-index: 2;
    }

    .name {
      position: relative;
      text-align: center;
      a {
        text-decoration: none;
        color: black;
        margin: 0 5px;
        font-size: 14px;
      }
      .dropdown {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 120px;
        top: 100%;
        z-index: 3;
        left: -50px;
        background-color: white;
        padding-left: 0;
        font-size: 14px;
        opacity: 0;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      &:hover .dropdown {
        opacity: 1;
      }
    }
  }
}

@media (max-width: 1200px) {
  ul {
    margin-right: 200px; /* 在适当的媒体查询下修改margin-right的值 */
  }
}

@media (max-width: 768px) {
  ul {
    margin-right: 50px; /* 在更小的屏幕尺寸下再次修改margin-right的值 */
  }
}
</style>
