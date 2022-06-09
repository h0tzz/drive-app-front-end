import { TRelationships } from './common.types';

export interface IUserInfo {
  id: number;
  type: 'users';
  name: string;
  email: string;
};
export interface IUser {
  data: IUserInfo;
  relationships: TRelationships;
};
