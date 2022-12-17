<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios';
import { Table, TableColumn, Space, Button, Popconfirm, Tag } from '@arco-design/web-vue';

import { instance } from '@/api';
import { VISIBLE_URL } from '@/api/url';

import { useTableStore } from '../hooks';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { pagination, tableData, isLoading, refreshList } = useTableStore()!;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//const { drawerVisible, selectService } = useDrawerStore()!;

const { isLoading: deleteIsLoading, execute: deleteExecute } = useAxios(
  VISIBLE_URL,
  {
    method: 'GET',
  },
  instance,
  { immediate: false },
);

// 更新分页参数, 触发请求
const handlePageChange = (page: number) => {
  pagination.current = page;
};

const handleDeleteUser = async (uuid: string) => {
  await deleteExecute({ data: { uuid } });

  refreshList();
};

const handleModifyUser = (uuid: string) => {
  refreshList();
};
</script>

<template>
  <Table
    row-key="userConnectUuid"
    :bordered="false"
    :pagination="pagination"
    :data="tableData"
    @page-change="handlePageChange"
  >
    <template #columns>
      <TableColumn title="用户连接名" data-index="userConnectUuid" />

      <TableColumn title="ip地址" data-index="ip" />

      <TableColumn title="ip端口" data-index="port" />
      <TableColumn title="输出地址" data-index="exportIp" />
      <TableColumn title="输出端口" data-index="exportPort" />

      <TableColumn title="是否可见">
        <template #cell="{ record }">
          <Tag v-if="record.visible === 0" color="red"><span>否</span></Tag>
          <Tag v-else-if="record.visible === 1" color="green"><span>是</span></Tag>
        </template>
      </TableColumn>
      <TableColumn title="是否可删">
        <template #cell="{ record }">
          <Tag v-if="record.deletable === 0" color="red"><span>否</span></Tag>
          <Tag v-else-if="record.deletable === 1" color="green"><span>是</span></Tag>
        </template>
      </TableColumn>
      <TableColumn title="操作">
        <template #cell="{ record }">
          <Space>
            <Popconfirm
              content="请确认是否修改此为可删除"
              @ok="() => handleModifyUser(record.uuid)"
            >
              <Button type="text" status="normal"> 修改 </Button>
            </Popconfirm>
          </Space>
          <Space>
            <Popconfirm
              content="请确认是否删除此用户连接"
              @ok="() => handleDeleteUser(record.uuid)"
            >
              <Button type="text" status="danger"> 删除 </Button>
            </Popconfirm>
          </Space>
        </template>
      </TableColumn>
    </template>
  </Table>
</template>
