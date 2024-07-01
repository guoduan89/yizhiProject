<script lang="js"></script>

<script setup lang="js">
import { ref, toRefs, computed, watch, onMounted } from 'vue';
import {  useRouter } from 'vue-router';
import { Avatar, Select, Option, Poptip, Icon } from 'view-ui-plus';

import DialogLogin from './DialogLogin.vue';
import ChangePassword from './ChangePassword.vue';

const isShowDialogLogin = ref(false);
const isChangePassword = ref(false);

const { userData, logout, userDsUser} = toRefs(useUserStore());

async function test(){

console.log('getListInfo',data)
}
onMounted(async () => {
  
});
</script>

<template>
  <!-- <button @click="test">test</button> -->
  <div class="nav px-200">
    <div class="flex items-center gap-x-22">
      <div class="nav-title flex-shrink-0">某市职业学校教学能力大赛</div>
      <ul id="list">
        <RouterLink to='/' active-class="active" class="nav-li">
          <span class="nav-item">首页</span>
        </RouterLink>
        <RouterLink to="/guide" active-class="active" class="nav-li">
          <span class="nav-item">比赛指南</span>
        </RouterLink>
        <RouterLink v-if="userDsUser?.userType===1" to="/signUpWork" active-class="active" class="nav-li">
          <span class="nav-item">我要报名</span>
        </RouterLink>
        <RouterLink v-else-if="userDsUser?.userType===2" to="/Review" active-class="active" class="nav-li">
          <span class="nav-item">进入专家评审</span>
        </RouterLink>
        
        <template v-else>
          <RouterLink to="/signUpWork" active-class="active" class="nav-li">
          <span class="nav-item">我要报名</span>
        </RouterLink>
        <RouterLink to="/Review" active-class="active" class="nav-li">
          <span class="nav-item">进入专家评审</span>
        </RouterLink>
        {{ userDsUser?.userType }}
        </template>
        
      </ul>
    </div>

    <div class="user" v-if="userData">
      <img src="../assets/img/PC端_slices/组 1@2x.png" alt="" />
      <div class="name">
        <a href="">{{ userData.userName }}</a>
        <ul class="dropdown">
          <li class="dropdown-item">
            <img src="../assets/img/PC端_slices/矢量智能对象@2x(3).png" alt="" /><div @click="logout">退出登录</div>
          </li>
          <li class="dropdown-item">
            <img src="../assets/img/PC端_slices/矢量智能对象@2x(4).png" alt="" /><div @click="()=>{isChangePassword=true}">修改密码</div>
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

  <DialogLogin v-model="isShowDialogLogin" />
  <ChangePassword v-model="isChangePassword"/>
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

  .nav-title {
    color: $color;
  }

  #list {
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
    .nav-li {
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

      .nav-item {
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
        left: -24px;
        background-color: white;
        padding-left: 0;
        font-size: 14px;
        opacity: 0;
        border-radius: 4%;
        .dropdown-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px
        }
      }
      &:hover .dropdown {
        opacity: 1;
      }
    }
  }
}
</style>
