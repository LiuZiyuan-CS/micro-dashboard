<script setup lang="ts" >
import { Row, Col, Pagination } from '@arco-design/web-vue'
</script>
<template>
    <Row style="margin-top:2%" justify="center">
        <Col :span="8">
        <Pagination :total="200" show-total show-jumper show-page-size />
        </Col>
    </Row>
</template>