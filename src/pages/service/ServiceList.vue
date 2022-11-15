<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import { Card, Row, Col, Divider, Tabs, TabPane, Result, CardMeta, TypographyText, Tag, Button, Descriptions, Popconfirm, Pagination, InputSearch,  } from '@arco-design/web-vue'
import { IconCheckCircleFill, IconExclamationCircleFill, IconPlus, } from '@arco-design/web-vue/es/icon';

const serviceCardData = [{
  label: 'uuid',
  value: 'fida0093io09gbfa9jf90ab',
}, {
  label: '实例数量',
  value: '29',
}, {
  label: 'createAt',
  value: '创建于xxxx'
}, {
  label: '创建用户',
  value: 'Alice',
}];

const aprovalServiceCardData = [{
  label: 'uuid',
  value: 'fida0093io09gbfa9jf90ab',
}, {
  label: 'createAt',
  value: '创建于xxxx'
}, {
  label: '创建用户',
  value: 'Alice',
}];


</script>

<template>

  <PageContainer>
    <Card class="general-card" :bordered="false">
      <template #title>服务中心</template>
      <Tabs type="rounded" :animation="true">
        <template #extra>
          <InputSearch :style="{ width: '320px' }" placeholder="搜索" search-button />
        </template>
        <TabPane key="1" title="所有服务">

          <Divider style="margin-top: 0" />
          <h4>所有服务</h4>

          <Row :gutter="24">
            <Col :span="6">
            <Card class="add-service-card" style="marginTop:3%; " hoverable>
              <Result :status="null" :title="'点击创建新服务'">
                <template #icon>
                  <IconPlus style="font-size:20px"></IconPlus>
                </template>
              </Result>
              <template #actions>

              </template>
            </Card>
            </Col>

            <Col v-for="i in Array(7)" :key="i" :span="6">

            <Card class="service-card" style="marginTop:3%; ">

              <CardMeta>
                <template #title>
                  <TypographyText style="margin-right:10px">
                    服务名称
                  </TypographyText>

                  <Tag size="small" color="green">
                    <template #icon>
                      <IconCheckCircleFill />
                    </template>
                    <span>已上线</span>
                  </Tag>
                </template>
                <template #description>
                  <Descriptions style="margin-top: 16px" :data="serviceCardData" layout="inline-horizontal" :column="2">
                  </Descriptions>
                </template>
              </CardMeta>

              <template #actions>
                <span class="icon-hover"><Button size="small" type="outline">查看实例</Button></span>
                <span class="icon-hover">
                  <Popconfirm content="确认删除？" type="error">
                    <Button size="small" status="danger" type="outline">删除服务</Button>
                  </Popconfirm>
                </span>

              </template>
            </Card>
            </Col>
          </Row>
          <Row :gutter="24">

            <Col v-for="i in Array(7)" :key="i" :span="6">

            <Card class="aproval-service-card" style="marginTop:3%; ">

              <CardMeta>
                <template #title>
                  <TypographyText style="margin-right:10px">
                    服务名称
                  </TypographyText>

                  <Tag size="small" color="blue">
                    <template #icon>

                      <IconExclamationCircleFill />

                    </template>
                    <span>待审批</span>
                  </Tag>
                </template>
                <template #description>
                  <Descriptions style="margin-top: 16px" :data="aprovalServiceCardData" layout="inline-horizontal"
                    :column="2">
                  </Descriptions>
                </template>
              </CardMeta>

              <template #actions>
                <Popconfirm content="通过审批？" type="success">
                  <Button size="small" type="outline">通过审批</Button>
                </Popconfirm>

              </template>
            </Card>
            </Col>

          </Row>

          <Row style="margin-top:2%" justify="center">
            <Col :span="8">
            <Pagination :total="200" show-total show-jumper show-page-size />
            </Col>

          </Row>



        </TabPane>
        <TabPane key="2" title="正在运行的服务">
          <Divider style="margin-top: 0" />
          <h4>正在运行的服务</h4>

          <Row :gutter="24">
            <Col :span="6">
            <Card class="add-service-card" style="marginTop:3%; " hoverable>
              <Result :status="null" :title="'点击创建新服务'">
                <template #icon>
                  <IconPlus style="font-size:20px"></IconPlus>
                </template>
              </Result>
              <template #actions>

              </template>
            </Card>
            </Col>

            <Col v-for="i in Array(7)" :key="i" :span="6">

            <Card class="service-card" style="marginTop:3%; ">

              <CardMeta>
                <template #title>
                  <TypographyText style="margin-right:10px">
                    服务名称
                  </TypographyText>

                  <Tag size="small" color="green">
                    <template #icon>
                      <IconCheckCircleFill />
                    </template>
                    <span>已上线</span>
                  </Tag>
                </template>
                <template #description>
                  <Descriptions style="margin-top: 16px" :data="serviceCardData" layout="inline-horizontal" :column="2">
                  </Descriptions>
                </template>
              </CardMeta>

              <template #actions>
                <span class="icon-hover"><Button size="small" type="outline">查看实例</Button></span>
                <span class="icon-hover">
                  <Popconfirm content="确认删除？" type="error">
                    <Button size="small" status="danger" type="outline">删除服务</Button>
                  </Popconfirm>
                </span>

              </template>
            </Card>
            </Col>
          </Row>
          <Row style="margin-top:2%" justify="center">
            <Col :span="8">
            <Pagination :total="200" show-total show-jumper show-page-size />
            </Col>

          </Row>
        </TabPane>
        <TabPane key="3" title="待审批的服务">
          <Divider style="margin-top: 0" />
          <h4>待审批的服务</h4>
          <Row :gutter="24">

            <Col v-for="i in Array(7)" :key="i" :span="6">

            <Card class="aproval-service-card" style="marginTop:3%; ">

              <CardMeta>
                <template #title>
                  <TypographyText style="margin-right:10px">
                    服务名称
                  </TypographyText>

                  <Tag size="small" color="blue">
                    <template #icon>

                      <IconExclamationCircleFill />

                    </template>
                    <span>待审批</span>
                  </Tag>
                </template>
                <template #description>
                  <Descriptions style="margin-top: 16px" :data="aprovalServiceCardData" layout="inline-horizontal"
                    :column="2">
                  </Descriptions>
                </template>
              </CardMeta>

              <template #actions>
                <Popconfirm content="通过审批？" type="success">
                  <Button size="small" type="outline">通过审批</Button>
                </Popconfirm>

              </template>
            </Card>
            </Col>

          </Row>
          <Row style="margin-top:2%" justify="center">
            <Col :span="8">
            <Pagination :total="200" show-total show-jumper show-page-size />
            </Col>

          </Row>
        </TabPane>
      </Tabs>



    </Card>
  </PageContainer>
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
}
</style>
