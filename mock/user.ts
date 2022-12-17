import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
import { successResp } from './_utils';

const requests: MockMethod[] = [
  {
    url: '/api/v1/userList',
    method: 'get',
    response: () => {
      return successResp({
        data: Array(15)
          .fill(1)
          .map(() => ({
            //userUuid: Random.id(),
            userName: Random.name(),
          })),
      });
    },
  },
  {
    url: '/api/v1/visible',
    method: 'get',
    response: () => {
      return successResp({
        count: 100,
        data: Array(15)
          .fill(1)
          .map(() => ({
            userConnectUuid: Random.id(),
            ip: Random.ip(),
            port: Random.integer(10, 50),
            exportIp: Random.ip(),
            exportPort: Random.integer(10, 50),
            visible: Random.pick([0, 1]),
            deletable: Random.pick([0, 1]),
          })),
      });
    },
  },
  {
    url: '/api/v1/visible',
    method: 'post',
    response: () => {
      return successResp(null);
    },
  },
  {
    url: '/api/v1/visible',
    method: 'delete',
    response: () => {
      return successResp(null);
    },
  },
  {
    url: '/api/v1/visible',
    method: 'put',
    response: () => {
      return successResp(null);
    },
  },
  //参考数据库连接的get操作
  {
    url: '/api/v1/connect',
    method: 'get',
    response: ({ query }: { query: any }) => {
      const size = +query.size;
      return successResp({
        count: 500,
        data: Array(size)
          .fill(1)
          .map(() => {
            return {
              type: Random.pick([1, 2, 3, 4, 5, 6]),
            };
          }),
      });
    },
  },
];

export default requests;
