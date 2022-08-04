<template>
  <div>
    <a-collapse v-model:activeKey="activeKey" accordion>
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text || '主人，我终于等到你了！'}}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2">
        <p>{{ text  || '主人，你是最棒的！'}}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
        <p>{{ test  || '主人，你要加油哦！'}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script lang="ts" setup>
import { Collapse } from 'ant-design-vue';
const CollapsePanel = Collapse.Panel;
import 'ant-design-vue/dist/antd.css';
import { defineComponent, ref } from 'vue';

const ACollapse =  Collapse;
const ACollapsePanel =  CollapsePanel;

const activeKey = ref([]);
defineProps<{ text: string; test: string }>();

</script>
