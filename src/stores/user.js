import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userData = ref(null);
  const userRoles = ref(null);
  const userPermissions = ref(null);

  async function updateUserInfo() {
    const data = await userServices.getInfo();
    console.log(`updateUserInfo: `, data);
    if(data.code !== 200) return;

    // 更新用户信息
    userData.value = data.user;
    userRoles.value = data.roles;
    userPermissions.value = data.permissions;
  }

  async function logout() {
    userData.value = null
    userRoles.value = null;
    userPermissions.value = null;

    localStorage.removeItem('token')
  }


  return {userData, userRoles, userPermissions, updateUserInfo ,logout};
});