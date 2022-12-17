import { RouteRecordRaw } from 'vue-router';
import { MAIN_LAYOUT } from '@/router/constant';

const visible: RouteRecordRaw = {
  path: '/visible',
  name: 'Visible',
  component: MAIN_LAYOUT,
  children: [
    {
      path: 'controlList',
      name: 'ControlList',
      component: () => import('@/pages/user/controlList.vue'),
      meta: {
        requireAuth: true,
        locale: '用户列表',
      },
    },
  ],
  meta: { requireAuth: true, locale: '用户管理', icon: 'icon-common' },
};

export default visible;
