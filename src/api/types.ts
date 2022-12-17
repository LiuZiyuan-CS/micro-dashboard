// 获取服务列表
export interface UserInfo {
  nickName: string;
  uuid: string;
}

export interface InstanceItem {
  uuid: string;
  ip: string;
  port: number;
  createAt: string;
}

export interface ThemeListItem {
  uuid: string;
  name: string;
  instance: InstanceItem[];
  createAt: string;
  user: UserInfo;
}

export interface ThemeListData {
  count: number;
  data: ThemeListItem[];
}

export interface ConfigListItem {
  uuid: string;
  dataId: string;
  type: string;
  createAt: string;
  updateAt: string;
  user: UserInfo;
}

export interface ConfigListData {
  count: number;
  data: ConfigListItem[];
}

export interface UserListItem {
  userConnectUuid: string;
  ip: string;
  port: string;
  exportIp: string;
  exportPort: string;
  visible: number;
  deletable: number;
}

export interface UserListData {
  count: number;
  data: UserListItem[];
}

export interface UserDataParams {
  //userUuid: string;
  userName: string;
}
export interface UserData {
  data: UserDataParams[];
}

//参考数据库连接操作
export interface GetConnectListParams {
  type?: 1 | 2 | 3 | 4 | 5 | 6;
}
