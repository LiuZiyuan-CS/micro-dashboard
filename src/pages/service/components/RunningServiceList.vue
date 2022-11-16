<script setup lang="ts">
import {
  Card,
  Row,
  Col,
  Result,
  CardMeta,
  TypographyText,
  Tag,
  Button,
  Descriptions,
  Popconfirm,
  Drawer,
  Space,
  Form,
  FormItem,
  Input,
} from '@arco-design/web-vue';
import { IconCheckCircleFill, IconPlus } from '@arco-design/web-vue/es/icon';
const serviceCardData = [
  {
    label: 'uuid',
    value: 'fida0093io09gbfa9jf90ab',
  },
  {
    label: '实例数量',
    value: '29',
  },
  {
    label: 'createAt',
    value: '创建于xxxx',
  },
  {
    label: '创建用户',
    value: 'Alice',
  },
];
const instanceCardData = [
  {
    label: 'uuid',
    value: 'fdja909gaj9a0dal3g8',
  },
  {
    label: 'ip地址',
    value: '192.168.82.2',
  },
  {
    label: '端口号',
    value: '10054',
  },
  {
    label: 'createAt',
    value: '创建于2022/11/16/00:00:51',
  },
];
const addServiceDrawerVisible = ref(false);
const addServiceDrawerHandleClick = () => {
  addServiceDrawerVisible.value = true;
};
const addServiceDrawerHandleOk = () => {
  addServiceDrawerVisible.value = false;
};
const addServiceDrawerHandleCancel = () => {
  addServiceDrawerVisible.value = false;
};

const InstanceListDrawerVisible = ref(false);

const InstanceListDrawerHandleClick = () => {
  InstanceListDrawerVisible.value = true;
};
const InstanceListDrawerHandleOk = () => {
  InstanceListDrawerVisible.value = false;
};
const InstanceListDrawerHandleCancel = () => {
  InstanceListDrawerVisible.value = false;
};

const form = reactive({
  serviceName: '',
  post: '',
});
</script>
<template>
  <Drawer
    :footer="false"
    :width="400"
    :height="340"
    :visible="addServiceDrawerVisible"
    :placement="'right'"
    unmount-on-close
    @ok="addServiceDrawerHandleOk"
    @cancel="addServiceDrawerHandleCancel"
  >
    <template #header>
      <span>新建服务</span>
    </template>
    <Space direction="vertical" size="large" :style="{ width: '350px' }">
      <Form size="small" :model="form" :layout="'vertical'">
        <FormItem field="serviceName" label="服务名">
          <Input v-model="form.serviceName" placeholder="please enter your username..." />
        </FormItem>
        <FormItem>
          <Button type="primary">提交</Button>
        </FormItem>
      </Form>
    </Space>
  </Drawer>
  <Drawer
    :footer="false"
    :width="400"
    :height="340"
    :visible="InstanceListDrawerVisible"
    :placement="'right'"
    unmount-on-close
    @ok="InstanceListDrawerHandleOk"
    @cancel="InstanceListDrawerHandleCancel"
  >
    <template #header>
      <Space align="center">
        <span>实例列表</span>
        <Button type="primary" size="small">
          <template #icon>
            <IconPlus />
          </template>
          <template #default>新增服务实例</template>
        </Button>
      </Space>
    </template>
    <Space direction="vertical" fill>
      <Card v-for="i in Array(3)" :key="i" class="instance-card">
        <CardMeta>
          <template #title>
            <TypographyText style="margin-right: 10px"> 实例名称 </TypographyText>
          </template>
          <template #description>
            <Descriptions
              style="margin-top: 16px"
              :data="instanceCardData"
              layout="vertical"
              :column="2"
            >
            </Descriptions>
          </template>
        </CardMeta>
        <template #actions>
          <span class="icon-hover">
            <Popconfirm content="确认删除？" type="error">
              <Button size="small" status="danger" type="outline">删除实例</Button>
            </Popconfirm>
          </span>
        </template>
      </Card>
    </Space>
  </Drawer>
  <Row :gutter="20">
    <Col :span="6">
      <Card class="add-service-card" style="margin-top: 3%" hoverable>
        <Result :status="null" :title="'点击创建新服务'">
          <template #icon>
            <Button shape="circle" size="small" @click="addServiceDrawerHandleClick">
              <IconPlus style="font-size: 20px"></IconPlus>
            </Button>
          </template>
        </Result>
      </Card>
    </Col>
    <Col v-for="i in Array(9)" :key="i" :span="6">
      <Card class="service-card" style="margin-top: 3%">
        <CardMeta>
          <template #title>
            <TypographyText style="margin-right: 10px"> 服务名称 </TypographyText>
            <Tag size="small" color="green">
              <template #icon>
                <IconCheckCircleFill />
              </template>
              <span>已上线</span>
            </Tag>
          </template>
          <template #description>
            <Descriptions
              style="margin-top: 16px"
              :data="serviceCardData"
              layout="inline-horizontal"
              :column="2"
            >
            </Descriptions>
          </template>
        </CardMeta>
        <template #actions>
          <span class="icon-hover"
            ><Button size="small" type="outline" @click="InstanceListDrawerHandleClick"
              >查看实例</Button
            ></span
          >
          <span class="icon-hover">
            <Popconfirm content="确认删除？" type="error">
              <Button size="small" status="danger" type="outline">删除服务</Button>
            </Popconfirm>
          </span>
        </template>
      </Card>
    </Col>
  </Row>
</template>
<style lang="less" scoped>
.service-card {
  height: 100%;
}

.add-service-card {
  height: 100%;
  transition-property: all;
}

.add-service-card:hover {
  transform: translateY(-4px);
}

.aproval-service-card {
  height: 100%;
}

.icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
