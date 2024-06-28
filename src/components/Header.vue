<script lang="js"></script>

<script setup lang="js">
import { ref, toRefs, computed, watch, onMounted } from 'vue';
import {  useRouter } from 'vue-router';
import { Avatar, Select, Option, Poptip, Icon } from 'view-ui-plus';

import DialogLogin from './DialogLogin.vue';

const isShowDialogLogin = ref(false);

const { userData, logout } = toRefs(useUserStore());
const router = useRouter();



const activeTab = ref('home'); // 默认选中的标签
const selectTab = (tab) => {
  activeTab.value = tab;
  if (tab === 'home') {
    router.push({ name: 'home' });
  } else if (tab === 'guide') {
    router.push({ name: 'guide' });
  } else if (tab === 'fill') {
    router.push('/signUpWork/Fill');
  }else if (tab === 'review') {
    router.push('/Review');
  }
};

async function test(){
  const res =  await userServices.ChangePassword()
  console.log(res);
}

onMounted(async () => {
  // getBody();
});
</script>

<template>
  <div class="nav px-200">
    <div class="flex items-center gap-x-22">
      <div class="navtitle flex-shrink-0">某市职业学校教学能力大赛</div>
      <ul id="list">
        <li @click="selectTab('home')" :class="{ active: activeTab === 'home' }">
          <span>首页</span>
        </li>
        <li @click="selectTab('guide')" :class="{ active: activeTab === 'guide' }">
          <span>比赛指南</span>
        </li>
        <li @click="selectTab('fill')" :class="{ active: activeTab === 'fill' }">
          <span>我要报名</span>
        </li>
        <li @click="selectTab('review')" :class="{ active: activeTab === 'review' }">
          <span>进入专家评审</span>
        </li>
      </ul>
    </div>

    <div class="user" v-if="userData">
      <img src="../assets/img/PC端_slices/组 1@2x.png" alt="" />
      <div class="name">
        <a href="">{{ userData.userName }}</a>
        <ul class="dropdown">
          <li>
            <img src="../assets/img/PC端_slices/矢量智能对象@2x(3).png" alt="" /><div @click="logout">退出登录</div>
          </li>
          <li>
            <img src="../assets/img/PC端_slices/矢量智能对象@2x(4).png" alt="" />修改密码
          </li>
        </ul>
      </div>
      <img
        style="height: 5px"
        src="../assets/img/PC端_slices/矢量智能对象 拷贝 9@2x.png"
        alt=""
      />
    </div>

    <button
      v-else
      @click="
        () => {
          isShowDialogLogin = true;
        }
      "
    >
      登录
    </button>
    <!-- <div class="user">
      <img src="../assets/img/PC端_slices/组 1@2x.png" alt="" />
      <div class="name">
        <a href="">胡志新</a>
        <ul class="dropdown">
          <li>
            <img src="../assets/img/PC端_slices/矢量智能对象@2x(3).png" alt="" />退出登录
          </li>
          <li>
            <img src="../assets/img/PC端_slices/矢量智能对象@2x(4).png" alt="" />修改密码
          </li>
        </ul>
      </div>
      <img
        style="height: 5px"
        src="../assets/img/PC端_slices/矢量智能对象 拷贝 9@2x.png"
        alt=""
      />
    </div> -->
  </div>
  <button @click="test">测试</button>
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
  }

  ul {
    display: flex;
    justify-content: center; /* 水平居中对齐 */
    align-items: center; /* 垂直居中对齐 */
    .active {
      background-color: #e0e0e0; /* 鼠标悬停时背景颜色变深 */

      span {
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
    li {
      flex-shrink: 0;
      cursor: pointer;
      list-style: none;
      line-height: 50px;
      padding: 0 20px;
      position: relative; /* 添加相对定位 */

      // &:hover {
      //   background-color: #e0e0e0; /* 鼠标悬停时背景颜色变深 */

      //   a {
      //     color: $color; /* 鼠标悬停时字体变蓝色 */
      //   }

      //   &::after {
      //     content: '';
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     width: 100%;
      //     height: 2px; /* 横线高度 */
      //     background-color: $color; /* 横线颜色 */
      //   }
      // }

      span {
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
</style>
