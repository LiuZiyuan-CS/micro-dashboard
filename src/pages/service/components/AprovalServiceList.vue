<script setup lang="ts">
import { Card, Row, Col, CardMeta, TypographyText, Tag, Button, Descriptions, Popconfirm} from '@arco-design/web-vue'
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