import {
  SET_LOADING,
} from '../types'

export function setAppLoading(isLoading){
  return setDataLoading('app', isLoading)
}

export function setExampleDataLoading(isLoading){
  return setDataLoading('example_data', isLoading)
}

function setDataLoading(key, isLoading){
  return {
    type: SET_LOADING,
    payload: {
      [key]: isLoading
    },
  }
}
