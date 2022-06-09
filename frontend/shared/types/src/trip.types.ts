import { TRelationships, IMeta } from './common.types';

export interface ITripInfo {
  id: number;
  type: 'trips';
  capacity: number;
  departure_date: Date;
  arrival_date: Date;
  price: number;
  created_at?: Date | null;
  updated_at?: Date | null;
  relationships?: TRelationships;

}

export interface ITripsCollection {
  data: Array<ITripInfo>;
  meta: IMeta;
}

export interface TripsSingle {
  data: Array<ITripInfo>;
}
