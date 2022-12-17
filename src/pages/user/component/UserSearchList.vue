<script setup lang="ts">
import {
  Form,
  FormItem,
  Row,
  Col,
  Input,
  RangePicker,
  Space,
  Divider,
  Button,
  Select,
  Option,
  Modal,
} from '@arco-design/web-vue';
import AddModal from './AddModal.vue';
import { useTableStore } from '../hooks';
import { reactive, ref } from 'vue';
import { useAxios } from '@vueuse/integrations/useAxios';
import { FormInstance } from '@arco-design/web-vue/es/form';
import { instance, ResponseWrap } from '@/api';
import { USERLIST_URL } from '@/api/url';
import { UserDataParams, UserData } from '@/api/types';
//选择框动态生成
const formSelect = reactive<{
  userName: string;
}>({
  userName: '',
});

const dbs = ref<UserDataParams[]>([]);

const {
  data: listData,
  isLoading: listLoading,
  execute: listExec,
} = useAxios<ResponseWrap<UserData>>(USERLIST_URL, { method: 'GET' }, instance, {
  immediate: false,
});

watch(
  () => listData.value?.data?.data,
  newVal => {
    const tmp = new Set(dbs.value);
    newVal?.forEach(item => {
      tmp.add(item);
    });

    dbs.value = Array.from(tmp);
    if (formSelect.userName === '' && dbs.value.length != 0) {
      formSelect.userName = dbs.value[0].userName;
    }
  },
);

onMounted(() => {
  listExec();
});

const selectLoadMore = () => {
  listExec({
    params: {
      size: 50,
    },
  });
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { searchFormData, pagination, refreshList } = useTableStore()!;

// 搜索按钮点击事件

const visible = ref(false);
const form = reactive({});

const handleAdd = () => {
  visible.value = true;
};
const handleBeforeOk = (done: any) => {
  console.log(form);
  window.setTimeout(() => {
    done();
    // prevent close
    // done(false)
  }, 3000);
};
const handleCancel = () => {
  visible.value = false;
};
</script>

<template>
  <Row>
    <Col :flex="1">
      <Form
        ref="searchFormRef"
        :model="formSelect"
        :label-col-props="{ span: 6 }"
        :wrapper-col-props="{ span: 18 }"
        label-align="left"
      >
        <Row :gutter="16">
          <Col :span="12">
            <FormItem
              field="userName"
              label="用户名"
              :rules="[{ required: true, message: '请选择用户名' }]"
              :virtual-list-props="{ height: 20 }"
            >
              <Select
                v-model="formSelect.userName"
                :loading="listLoading"
                allow-clear
                allow-search
                @dropdown-reach-bottom="selectLoadMore"
              >
                <Option v-for="item in dbs" :key="item.userName" :value="item.userName">
                  {{ item.userName }}
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Col>

    <Divider style="height: 34px" direction="vertical" />

    <Col flex="86px">
      <Space direction="vertical" :size="18">
        <Button type="primary" @click="handleAdd">
          <template #icon>
            <icon-plus />
          </template>
          添加
        </Button>
      </Space>
    </Col>
  </Row>
  <Modal
    v-model:visible="visible"
    title="添加用户连接"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk"
  >
    <AddModal />
  </Modal>
</template>
