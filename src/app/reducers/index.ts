import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { noteFeatureKey, noteReducer } from '../core/store/reducer/note.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [noteFeatureKey],
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}

export interface State {
}

export const reducers: ActionReducerMap<State> = {
  [noteFeatureKey]: noteReducer
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer]
