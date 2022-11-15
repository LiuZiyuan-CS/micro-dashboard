<script setup lang="ts">
import { Modal } from '@arco-design/web-vue'
import { ref } from 'vue';
import DependencyGraph from './DependencyGraph.vue';
const dependencyGraphModalvisible = ref(false);
const showFooter=ref(false)
const dependencyGraphModalhandleClick = () => {
    dependencyGraphModalvisible.value = true;
};
const dependencyGraphModalhandleClickhandleOk = () => {
    dependencyGraphModalvisible.value = false;
};
const dependencyGraphModalhandleClickhandleCancel = () => {
    dependencyGraphModalvisible.value = false;
}

const props = defineProps({ dependencyGraphModalvisible: Boolean })

</script>

<template>
    <Modal :footer="showFooter" class="dependencyGraphModal" width="auto" v-model:visible="props.dependencyGraphModalvisible"
        @ok="dependencyGraphModalhandleClickhandleOk" @cancel="dependencyGraphModalhandleClickhandleCancel">
        <template #title>
            依赖关系图
        </template>
        <DependencyGraph></DependencyGraph>
    </Modal>
</template>