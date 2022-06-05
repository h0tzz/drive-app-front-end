import { CommonTypes } from './index';

export type UserInfo = {
  id: number;
  type: 'users';
  name: string;
  email: string;
};
export type User = {
  data: UserInfo;
  relationships: CommonTypes.Relationships;
};
