import { useAxios } from '@vueuse/integrations/useAxios';
import { FormInstance } from '@arco-design/web-vue';

import { instance, ResponseWrap } from '@/api';
import { VISIBLE_URL } from '@/api/url';
import { UserListData } from '@/api/types';

import { SearchParams, SearchFormData } from './types';

const [useTableProvideStore, useTableStore] = createInjectionState(() => {
  // 表单实例
  const searchFormRef = ref<FormInstance>();

  // 数据绑定
  const searchFormData = reactive<SearchFormData>({
    userConnectUuid: '',
    ip: '',
    export: '',
    exportIp: '',
    exportPort: '',
    // visible:[],
    // deletable:[],
  });

  // 分页参数
  const pagination = reactive<{ current: number; pageSize: number; total?: number }>({
    current: 1,
    pageSize: 15,
  });

  // 请求用户列表
  /*const { data:userdata} = useAxios<ResponseWrap<UserDataParams>>(
    USERLIST_URL,
   {
     method: 'GET',
     params: {
       pg: pagination.current,
       size: pagination.pageSize,
     },
   },
   instance,
 );*/

  // 请求用户列表
  const { data, isLoading, execute } = useAxios<ResponseWrap<UserListData>>(
    VISIBLE_URL,
    {
      method: 'GET',
      params: {
        pg: pagination.current,
        size: pagination.pageSize,
      },
    },
    instance,
  );

  // 服务表格数据计算属性
  const tableData = computed(() => data.value?.data?.data);

  //const userData = ref([]);

  //
  //const userData=computed(()=>userdata.value?.data);

  // 变更分页参数
  watch(
    () => data.value?.data?.count,
    newVal => {
      pagination.total = newVal;
    },
  );

  // 监听分页参数变化, 发起请求
  watch(
    () => pagination.current,
    () => refreshList(),
  );

  // 刷新列表
  const refreshList = () => {
    const params: SearchParams = { pg: pagination.current, size: pagination.pageSize };

    if (searchFormData.userConnectUuid && searchFormData.userConnectUuid !== '') {
      params.userConnectUuid = searchFormData.userConnectUuid;
    }

    if (searchFormData.ip && searchFormData.ip !== '') {
      params.ip = searchFormData.ip;
    }
    if (searchFormData.export && searchFormData.export !== '') {
      params.export = searchFormData.export;
    }
    if (searchFormData.exportIp && searchFormData.exportIp !== '') {
      params.exportIp = searchFormData.exportIp;
    }
    if (searchFormData.exportPort && searchFormData.exportPort !== '') {
      params.exportPort = searchFormData.exportPort;
    }
    if ((searchFormData.visible && searchFormData.visible === 0) || searchFormData.visible === 1) {
      params.visible = searchFormData.visible;
    }
    if (
      (searchFormData.deletable && searchFormData.deletable === 0) ||
      searchFormData.deletable === 1
    ) {
      params.deletable = searchFormData.deletable;
    }

    execute({ params });
  };

  return { searchFormRef, searchFormData, tableData, isLoading, pagination, refreshList };
});

const [useDrawerProvideStore, useDrawerStore] = createInjectionState(() => {
  const drawerVisible = ref(false);
  const selectService = ref('');

  return { drawerVisible, selectService };
});

export { useTableProvideStore, useTableStore, useDrawerProvideStore, useDrawerStore };
