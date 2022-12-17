<script setup lang="ts">
import { Form, FormItem, Select, Option, Input, Checkbox } from '@arco-design/web-vue';
import { reactive } from 'vue';
import { useAxios } from '@vueuse/integrations/useAxios';
import { FormInstance } from '@arco-design/web-vue/es/form';
import { instance, ResponseWrap } from '@/api';
import { CONNECT_URL } from '@/api/url';
import { GetConnectListParams } from '@/api/types';
const form = reactive({
  userName: '',
  connect: '',
  isRead: true,
  isdelete: true,
});
</script>

<template>
  <Form :model="form" :style="{ width: '400px' }">
    <FormItem field="name" label="用户名">
      <Input v-model="form.userName" />
    </FormItem>
    <FormItem field="connect" label="连接" :rules="[{ required: true }]">
      <Select v-model="form.connect" multiple>
        <Option :value="1">MySQL</Option>
        <Option :value="2">达梦数据库</Option>
        <Option :value="3">金仓数据库</Option>
        <Option :value="4">Redis</Option>
        <Option :value="5">MongoDB</Option>
        <Option :value="6">Elasticsearch</Option>
      </Select>
    </FormItem>
    <FormItem field="isRead" disabled>
      <Checkbox v-model="form.isRead"> 是否可见 </Checkbox>
    </FormItem>
    <FormItem field="isRead">
      <Checkbox v-model="form.isdelete"> 是否可删 </Checkbox>
    </FormItem>
  </Form>
</template>
