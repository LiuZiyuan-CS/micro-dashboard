<script setup lang="ts">
import { Table, TableColumn, Button } from '@arco-design/web-vue'
import { reactive } from 'vue'
import DependencyGraphModal from './DependencyGraphModal.vue';
const data = reactive([{
    key: '1',
    serviceName:'甲',
    ip: '192.168.1.1',
    port: '8080',
    startTime: '2022-11-11 16:56',
    instanceNum: '17'
},
{
    key: '2',
    serviceName:'乙',
    ip: '192.168.1.2',
    port: '8082',
    startTime: '2022-11-13 16:56',
    instanceNum: '72'
},
{
    key: '3',
    serviceName:'丙',
    ip: '192.168.1.3',
    port: '8083',
    startTime: '2022-11-13 16:59:30',
    instanceNum: '34'
},
{
    key: '4',
    serviceName:'丁',
    ip: '192.168.1.4',
    port: '8084',
    startTime: '2022-11-13 18:25:31',
    instanceNum: '58'
},
{
    key: '5',
    serviceName:'戊',
    ip: '192.168.1.4',
    port: '8084',
    startTime: '2022-11-13 17:23:30',
    instanceNum: '59'
},
]);


/**
 * 打开依赖关系模态框
 */
const dependencyGraphModalvisible = ref(false)
const dependencyGraphModalhandleClick = () => {
    dependencyGraphModalvisible.value = true;
};
</script>

<template>
    <DependencyGraphModal v-model:visible="dependencyGraphModalvisible"></DependencyGraphModal>
    <Table :data="data" :bordered="false">
        <template #columns>
            <TableColumn title="服务名称" data-index="serviceName"></TableColumn>
            <TableColumn title="节点IP" data-index="ip"></TableColumn>
            <TableColumn title="节点端口" data-index="port"></TableColumn>
            <TableColumn title="启动时间" data-index="startTime"></TableColumn>
            <TableColumn title="实例数量" data-index="instanceNum"></TableColumn>
            <TableColumn title="依赖关系">
                <template #cell="{ record }">
                    <Button @click="dependencyGraphModalhandleClick" type="text">查看依赖</Button>
                </template>
            </TableColumn>
        </template>
    </Table>
</template>