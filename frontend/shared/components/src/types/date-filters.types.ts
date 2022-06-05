import { DATE_FILTERS } from '../variables/date-filters.variables';

export type TDatePanelFilters = typeof DATE_FILTERS[keyof typeof DATE_FILTERS];
export type TDateFiltersWithoutCalendar = Exclude<TDatePanelFilters, 'calendar'>;
