<script setup lang="ts">
import { Card, Row, Col, Divider } from '@arco-design/web-vue';
import PageContainer from '@/components/PageContainer.vue';
import { useTableProvideStore, useDrawerProvideStore } from './hooks';
import UserSearchList from './component/UserSearchList.vue';
import UserListTable from './component/UserListTable.vue';

useTableProvideStore();
useDrawerProvideStore();
</script>

<template>
  <PageContainer>
    <Card class="general-card" :bordered="false">
      <template #title>用户管理列表</template>

      <UserSearchList />

      <Divider style="margin-top: 0" />

      <Row>
        <Col :span="24">
          <UserListTable />
        </Col>
      </Row>
    </Card>
  </PageContainer>
</template>
