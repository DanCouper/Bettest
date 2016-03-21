import { VIEW_AS_DECIMAL, VIEW_AS_FRACTIONAL } from '../constants/actionTypes'

export function viewAsFractional() {
  return {
    type: VIEW_AS_FRACTIONAL
  }
}

export function viewAsDecimal() {
  return {
    type: VIEW_AS_DECIMAL
  }
}
