import { TRelationships, IMeta } from './common.types';

export interface IPlaceInfo {
  id: number;
  type: 'places';
  title: string;
};

export interface IPlacesCollection {
  data: Array<IPlaceInfo>;
  meta: IMeta;
};
export interface IPlacesSingle {
  data: IPlaceInfo;
  relationships: TRelationships;
};
