import { CommonTypes } from './index';

export type CarInfo = {
  id: number;
  type: 'cars';
  plate_number: string;
  color: string;
  model: string;
  capacity: number;
};

export type Car = {
  data: CarInfo;
  relationships: CommonTypes.Relationships;
};
