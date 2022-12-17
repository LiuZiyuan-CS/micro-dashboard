export interface SearchParams {
  pg: number;
  size: number;
  userConnectUuid?: string;
  ip?: string;
  export?: string;
  exportIp?: string;
  exportPort?: string;
  visible?: number;
  deletable?: number;
}

export type SearchFormData = Omit<SearchParams, 'pg' | 'size'>;
