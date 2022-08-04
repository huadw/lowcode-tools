<template>
  <a-progress :percent="text0 || 30" />
  <a-progress :percent="text1 || 50" status="active" />
  <a-progress :percent="text2 || 70" status="exception" />
  <a-progress :percent="text3 || 100" />
</template>
<script lang="ts" setup>
import { Progress } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { defineComponent, ref } from 'vue';
const AProgress =  Progress;

const activeKey = ref([]);
defineProps<{ text0: string;text1: string;text2: string;text3: string;}>();

</script>
