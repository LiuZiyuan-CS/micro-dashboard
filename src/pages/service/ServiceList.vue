<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import { Card, Row, Col, Divider, Form, FormItem, Input, RangePicker, Space, Button } from '@arco-design/web-vue'
import { IconSearch, IconRefresh } from '@arco-design/web-vue/es/icon';
import ServiceTable from './components/ServiceTable.vue';

const form = reactive({
  serviceName: '',
  ip: '',
  startTime: false,
})

const handleServiceSearch = () => {

}
const handleFormReset = () => {

}

function timePickerOnSelect(dateString: any, date: any) {
  console.log('onSelect', dateString, date);
}

function timePickerOnChange(dateString: any, date: any) {
  console.log('onChange: ', dateString, date);
}

function timePickerOnOk(dateString: any, date: any) {
  console.log('onOk: ', dateString, date);
}

</script>

<template>

  <PageContainer>
    <Card class="general-card" :bordered="false">
      <template #title>已注册的服务</template>
      <Row>
        <Col :flex="1">
        <Form :model="form" :label-col-props="{ span: 6 }" :wrapper-col-props="{ span: 18 }" label-align="left">
          <Row :gutter="16">
            <Col :span="5">
            <FormItem field="serviceName" label="服务名">
              <Input v-model="form.serviceName" placeholder="请输入服务名" />
            </FormItem>
            </Col>
            <Col :span="5">
            <FormItem field="ip" label="IP地址">
              <Input v-model="form.ip" placeholder="请输入数据库地址" />
            </FormItem>
            </Col>
            <Col :span="8">
            <FormItem field="startTime" label="启动时间">
              <RangePicker style="width: 500px; margin: 0 24px 24px 0;" show-time
                :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }" format="YYYY-MM-DD HH:mm"
                @change="timePickerOnChange" @select="timePickerOnSelect" @ok="timePickerOnOk" />
            </FormItem>
            </Col>
          </Row>
        </Form>
        </Col>
        <Divider style="height: 34px" direction="vertical" />
        <Col :flex="'86px'" style="text-align: right">
        <Space :size="18">
          <Button type="primary" @click="handleServiceSearch">
            <template #icon>
              <IconSearch />
            </template>
            搜索
          </Button>
          <Button @click="handleFormReset">
            <template #icon>
              <IconRefresh />
            </template>
            重置
          </Button>
        </Space>
        </Col>
      </Row>
      <Divider style="margin-top: 0" />
      <ServiceTable></ServiceTable>
    </Card>
  </PageContainer>
</template>
