import { CommonTypes } from './index';

export type PlaceInfo = {
  id: number;
  type: string;
  title: string;
};

export type PlacesCollection = {
  data: Array<PlaceInfo>;
  meta: CommonTypes.Meta;
};
export type PlacesSingle = {
  data: PlaceInfo;
  relationships: CommonTypes.Relationships;
};
