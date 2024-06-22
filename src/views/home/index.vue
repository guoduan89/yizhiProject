<script lang="jsx">
export default {
  name: 'Home',
};
</script>

<script setup lang="jsx">
import { ref, toRefs, computed, watch, onMounted } from 'vue';

const props = defineProps([]);

const {} = toRefs(props);

onMounted(async () => {});
</script>

<template>
  <div class="home">Home</div>
</template>

<style scoped lang="less">
.home {
}
</style>
