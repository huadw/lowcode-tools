<template>
  <a-collapse v-model:activeKey="activeKey" accordion>
    <a-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3">
      <p>{{ test }}</p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script  lang="ts" setup>
import Collapse from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { defineComponent, ref } from 'vue';

const activeKey = ref([]);
defineProps<{ text: string ,test: string}>();


</script>
