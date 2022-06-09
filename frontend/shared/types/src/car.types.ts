import { TRelationships } from './common.types';

export interface ICarInfo {
  id: number;
  type: 'cars';
  plate_number: string;
  color: string;
  model: string;
  capacity: number;
};

export interface ICar {
  data: ICarInfo;
  relationships: TRelationships;
};
