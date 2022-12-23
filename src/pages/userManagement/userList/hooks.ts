import { useAxios } from '@vueuse/integrations/useAxios';
import { FormInstance } from '@arco-design/web-vue';

import { instance, ResponseWrap } from '@/api';
import { USER_URL, USER_AUTHORIZATION_URL } from '@/api/url';
import { UserListData, AuthListData } from '@/api/types';

import { SearchParams, UserUpdateInfo } from './tpyes';

const [useTableProvideStore, useTableStore] = createInjectionState(() => {
  // 表单实例
  const searchFormRef = ref<FormInstance>();

  // 数据绑定
  const searchFormData = reactive({
    username: '',
  });

  // 分页参数
  const pagination = reactive<{ current: number; pageSize: number; total?: number }>({
    current: 1,
    pageSize: 15,
  });

  // 请求服务列表
  const { data, isLoading, execute } = useAxios<ResponseWrap<UserListData>>(
    USER_URL,
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
  const tableData = computed(() => data.value?.data?.userdata || []);

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

    if (searchFormData.username && searchFormData.username !== '') {
      params.username = searchFormData.username;
    }
    execute({ params });
  };

  return { searchFormRef, searchFormData, tableData, isLoading, pagination, refreshList };
});

const [useDrawerProvideStore, useDrawerStore] = createInjectionState(() => {
  const drawerVisible = ref(false);
  const userdrawVisible=ref(false);
  const selectUser = reactive<UserUpdateInfo>({});

  // 表单实例
  const UserInfoUpdateFormRef = ref<FormInstance>();

  // 分页参数
  const pagination = reactive<{ current: number; pageSize: number }>({
    current: 1,
    pageSize: 15,
  });

  // 请求服务列表
  const { data, isLoading, execute } = useAxios<ResponseWrap<AuthListData>>(
    USER_AUTHORIZATION_URL,
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
  const authData = computed(() => data.value?.data?.authdata || []);

  const selectLoadMore = () => {
    pagination.current++;

    execute({
      params: {
        pg: pagination.current,
        size: pagination.pageSize,
      },
    });
  };

  return { drawerVisible, userdrawVisible,selectUser, isLoading, authData, UserInfoUpdateFormRef, selectLoadMore };
});

export { useTableProvideStore, useTableStore, useDrawerProvideStore, useDrawerStore };
