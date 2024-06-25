<template>
  <div class="bg">
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="username" />
        <Password password name="password" />
        <div class="demo-auto-login">
          <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox>
          <a>忘记密码</a>
        </div>
        <Submit />
      </Login>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      autoLogin: true,
    };
  },
  methods: {
    handleSubmit(valid, { username, password }) {
      if (valid) {
        this.$Modal.info({
          title: '输入的内容如下：',
          content: `username: ${username} | password: ${password}`,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bg {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-color: antiquewhite;
  height: 400px;
  width: 650px;
  position: relative;
  left: 400px;
  .demo-login {
    width: 400px;
    margin: 0 auto !important;
  }
  .demo-auto-login {
    margin-bottom: 24px;
    text-align: left;
  }
  .demo-auto-login a {
    float: right;
  }
}
</style>
