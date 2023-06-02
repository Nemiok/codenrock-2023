import {StateType} from '../../types/state-type';
import {AuthorizationStatus, NameSpace} from '../../utils/const/const';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
