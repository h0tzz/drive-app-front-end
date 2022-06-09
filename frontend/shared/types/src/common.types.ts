import { IUserInfo } from './user.types';
import { ICarInfo } from './car.types';
import { IPlacesCollection } from './place.types';

export type TRelationships  = Record<'cars' | 'users' | 'places', ICarInfo | IUserInfo | Pick<IPlacesCollection, 'data'>>;
export interface IMeta {
  count: number;
}


