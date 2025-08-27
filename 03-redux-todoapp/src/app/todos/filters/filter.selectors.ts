import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ValidFilters } from "./filter.actions";

export const selectFilterState = createFeatureSelector<ValidFilters>('filter');

export const selectFilter = createSelector(
    selectFilterState,
    (state) => state
);