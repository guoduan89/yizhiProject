import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userData = ref(null);
  const userRoles = ref(null);
  const userPermissions = ref(null);
  const userDsUser = ref(null);

  async function updateUserInfo() {
    const data = await userServices.getInfo();
    console.log(`updateUserInfo: `, data);
    if(data.code !== 200) return;
    // 更新用户信息
    userData.value = data.user;
    userRoles.value = data.roles;
    userPermissions.value = data.permissions;
    userDsUser.value = data.dsUser;
  }

  async function logout() {
    userData.value = null
    userRoles.value = null;
    userPermissions.value = null;
    userDsUser.value = null;
    localStorage.removeItem('token')
  }

  async function change(data){
    Object.assign(userData.value, data)
      await userServices.changeInfo(
      {
      userId: userDsUser.value.userId,
      userType: userDsUser.value.userType,
      readFlag: userDsUser.value.readFlag,
      nickName: userDsUser.value.nickName,
      schoolName: userDsUser.value.schoolName,
      sysUser: {
        userId: userData.value.userId,
        userName: userData.value.userName,
        password: userData.value.password,
      },
    }
    // {
    //   userId: 668,
    //   userType: 1,
    //   readFlag: 0,
    //   nickName: "胡志薇",
    //   schoolName: "⻘岛恒星学院",
    //   sysUser:{
    //     userId: 668,
    //     userName: "hzw_9527",
    //     password:data,
    //   }
    //   }
  )
  }

  return {userData, userRoles, userPermissions, updateUserInfo ,logout,change};
});
