import { CarTypes, UserTypes } from './index';

export type Relationships = Record<'cars' | 'users', CarTypes.CarInfo | UserTypes.UserInfo>;
export type Meta = {
  count: number;
};
