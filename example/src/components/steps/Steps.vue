<template>
  <a-steps direction="vertical" :current="1">
    <a-step title="Finished" :description="desc0 || '默认数据'" />
    <a-step title="In Progress" :description="desc1 || '默认数据'" />
    <a-step title="Waiting" :description="desc2 || '默认数据'" />
  </a-steps>
</template>

<script lang="ts" setup>
import { Steps } from 'ant-design-vue';
const Step = Steps.Step;
import 'ant-design-vue/dist/antd.css';

const ASteps =  Steps;
const AStep =  Step;
import { defineComponent, ref } from 'vue';
const activeKey = ref([]);

defineProps<{ desc0: string; desc1: string; desc2: string }>();

</script>
