import { DATE_FILTERS } from '../variables';

export type TDatePanelFilters = typeof DATE_FILTERS[keyof typeof DATE_FILTERS];
