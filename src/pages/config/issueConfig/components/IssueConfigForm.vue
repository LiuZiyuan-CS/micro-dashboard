<script lang="ts" setup>
import { Spin, Form, FormItem, Input, Button, Select, Option } from '@arco-design/web-vue';
import { FormInstance } from '@arco-design/web-vue/es/form';
import { useAxios } from '@vueuse/integrations/useAxios';
import { Codemirror } from 'vue-codemirror';
import { json } from '@codemirror/lang-json';

import { instance } from '@/api';
import { CONFIG_URL } from '@/api/url';

const extensions = [json()];

const emit = defineEmits<{
  (e: 'change-step', idx: number): void;
}>();

const formRef = ref<FormInstance>();

// 初始化表单初值
const formData = reactive<{ dataID: string; content: string; type: string }>({
  dataID: '',
  content: '',
  type: '',
});

const { execute, isLoading } = useAxios(CONFIG_URL, { method: 'POST' }, instance, {
  immediate: false,
});

// 提交表单数据
const handleSubmit = async () => {
  const res = await formRef.value?.validate();
  if (res) {
    return;
  }
  formData.content = JSON.stringify(formData.content);
  execute({
    data: {
      ...formData,
    },
  }).then(() => {
    formRef.value?.resetFields();
    emit('change-step', 1);
  });
};
</script>

<template>
  <Spin :loading="isLoading">
    <Form ref="formRef" :model="formData" class="form" @submit="handleSubmit">
      <FormItem field="dataID" label="配置文件名" :rules="[{ required: true, message: '必填' }]">
        <Input v-model="formData.dataID" placeholder="请输入配置文件名" />
      </FormItem>
      <FormItem field="content" label="配置内容" :rules="[{ required: true, message: '必填' }]">
        <Codemirror
          :style="{ width: '100%', height: '360px', background: '#D4D4D4' }"
          v-model="formData.content"
          placeholder="请在此处输入配置内容（Json）..."
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="extensions"
        ></Codemirror>
      </FormItem>
      <FormItem field="type" label="类型" :rules="[{ required: true, message: '必填' }]">
        <Select v-model="formData.type" placeholder="请选择配置类型">
          <Option value="1">配置一</Option>
          <Option value="2">配置二</Option>
          <Option value="3">配置三</Option>
          <Option value="4">配置四</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button html-type="submit" type="primary">提交</Button>
      </FormItem>
    </Form>
  </Spin>
</template>

<style lang="less" scoped>
.form {
  width: 700px;
}
</style>
