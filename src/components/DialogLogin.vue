<script lang="jsx">
export default {
  name: 'DialogLogin',
};
</script>

<script setup lang="jsx">
import { Message } from 'view-ui-plus';
import { ref, toRefs, computed, watch, onMounted } from 'vue';

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
async function loginHandle() {
  console.log(`loginHandle: `);
  const res = await fromRef.value?.validate();
  console.log(`res: `, res);
  if (res) {
    // this.$Message.success('登录成功');
    // Message;
  } else {
    // this.$Message.error('表单验证失败');
  }
}

console.log(`$attrs: `, useAttrs());

onMounted(async () => {});
</script>

<template>
  <Modal v-bind="$attrs" title="登录" :modelValue="visible">
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

<style scoped lang="scss">
.DialogLogin {
}
</style>
