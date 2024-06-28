<script lang="jsx">
export default {
  name: 'DialogLogin',
};
</script>

<script setup lang="jsx">
import { Message, Button } from 'view-ui-plus';
import { ref, toRefs, computed, onMounted } from 'vue';
//
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);

const visible = computed({
  get: () => modelValue.value,
  set: (val) => emit('update:modelValue', val),
});

const fromRef = ref();
const loginFormData = ref({
  username: '',
  password: '',
});

const loginFormRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }],
});

async function close() {
  visible.value = false;
}

const userStore = useUserStore()
async function loginHandle() {
  const res = await fromRef.value?.validate();
  if (res) {
    const { code, token, msg } = await userServices.login(loginFormData.value);
    if (code === 200) {
      userStore.updateUserInfo()
      localStorage.setItem('token', token);
      Message.success('登录成功');
      close();
    } else {
      Message.error(msg);
    }
  }
}

const visibleChange = (val) => {
  visible.value = val;

  if (val) {
    loginFormData.value = {
      username: '',
      password: '',
    };
    fromRef.value?.resetFields();
  }
};

onMounted(async () => {});
</script>

<template>
  <Modal
    v-bind="$attrs"
    title="登录"
    :modelValue="visible"
    @on-visible-change="visibleChange"
    :mask-closable="false"
  >
    <Form ref="fromRef" :model="loginFormData" :rules="loginFormRules" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="loginFormData.username" placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="loginFormData.password" type="password" password placeholder="请输入密码" />
      </FormItem>
    </Form>

    <template #footer>
      <div>
        <Button type="text" @click="close">取消</Button>
        <Button type="primary" @click="loginHandle">确定</Button>
      </div>
    </template>
  </Modal>
</template>
