import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {AppDispatchType, StateType} from '../types/state-type';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;
