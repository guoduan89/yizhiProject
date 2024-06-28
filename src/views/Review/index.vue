<script lang="js">
export default {
  name: "index"
}
</script>

<script setup lang="js">
import { ref, toRefs, computed, watch, onMounted } from 'vue';

const props = defineProps([]);
const emit = defineEmits([]);

const {} = toRefs(props);

onMounted(async () => {

});
</script>

<template>
  <RouterView/>
</template>

<style scoped lang="scss">

</style>
