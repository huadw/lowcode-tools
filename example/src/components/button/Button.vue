<template>
    <a-button type="primary" block>{{ text || '主按钮'}}</a-button>
</template>
<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { defineComponent, ref } from 'vue';
const AButton =  Button;

const activeKey = ref([]);
defineProps<{ text: string;}>();

</script>
