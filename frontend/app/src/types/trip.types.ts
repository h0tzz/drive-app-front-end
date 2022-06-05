import { CommonTypes, PlaceTypes } from './index';

export type TripInfo = {
  id: number;
  type: 'trips';
  capacity: number;
  departure_date: Date;
  arrival_date: Date;
  price: number;
  created_at: Date | null;
  updated_at: Date | null;
};

export type TripsCollection = {
  data: Array<TripInfo>;
  meta: CommonTypes.Meta;
};

export type TripsSingle = {
  data: Array<TripInfo>;
  relationships: CommonTypes.Relationships;
  places: {
    data: Array<PlaceTypes.PlaceInfo & { order: number }>;
  };
};
