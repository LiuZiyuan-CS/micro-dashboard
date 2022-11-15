<script setup lang="ts">
import { Card, Row, Col, Result, CardMeta, TypographyText, Tag, Button, Descriptions, Popconfirm } from '@arco-design/web-vue'
import { IconCheckCircleFill, IconPlus, } from '@arco-design/web-vue/es/icon';
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

</script>
<template>
    <Row :gutter="24">
        <Col :span="6">
        <Card class="add-service-card" style="marginTop:3%; " hoverable>
            <Result :status="null" :title="'点击创建新服务'">
                <template #icon>
                    <Button shape="circle" size="small">
                        <IconPlus style="font-size:20px"></IconPlus>
                    </Button>
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
                    <Descriptions style="margin-top: 16px" :data="serviceCardData" layout="inline-horizontal"
                        :column="2">
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