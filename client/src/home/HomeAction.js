export const home = params => {
  return { type: "HOME", payload: params }
}
export const homeSuccess = () => {
  return { type: "HOME_SUCCESS" }
}
export const homeFail = error => {
  return { type: "HOME_FAIL", error: error }
}
export const deleteOrganisation = params => {
  return { type: "DELETE_ORGANISATION", payload: params }
}
export const deleteOrganisationSuccess = () => {
  return { type: "DELETE_ORGANISATION_SUCCESS" }
}
export const deleteOrganisationFail = error => {
  return { type: "DELETE_ORGANISATION_FAIL", error: error }
}
export const newOrganisationShow = error => {
  return { type: "NEW_ORGANISATION_SHOW" }
}
export const newOrganisation = params => {
  return { type: "NEW_ORGANISATION", payload: params }
}
export const newOrganisationSuccess = () => {
  return { type: "NEW_ORGANISATION_SUCCESS" }
}
export const newOrganisationFail = error => {
  return { type: "NEW_ORGANISATION_FAIL", error: error }
}
export const editOrganisationShow = kind => {
  return { type: "EDIT_ORGANISATION_SHOW", payload: kind }
}
export const editOrganisation = params => {
  return { type: "EDIT_ORGANISATION", payload: params }
}
export const editOrganisationSuccess = () => {
  return { type: "EDIT_ORGANISATION_SUCCESS" }
}
export const editOrganisationFail = error => {
  return { type: "EDIT_ORGANISATION_FAIL", error: error }
}
export const joinOrganisation = params => {
  return { type: "JOIN_ORGANISATION", payload: params }
}
export const joinOrganisationSuccess = () => {
  return { type: "JOIN_ORGANISATION_SUCCESS" }
}
export const joinOrganisationFail = error => {
  return { type: "JOIN_ORGANISATION_FAIL", error: error }
}
export const leaveOrganisation = params => {
  return { type: "LEAVE_ORGANISATION", payload: params }
}
export const leaveOrganisationSuccess = () => {
  return { type: "LEAVE_ORGANISATION_SUCCESS" }
}
export const leaveOrganisationFail = error => {
  return { type: "LEAVE_ORGANISATION_FAIL", error: error }
}
export const newShiftShow = error => {
  return { type: "NEW_ORGANISATION_SHOW" }
}
export const newShift = params => {
  return { type: "NEW_SHIFT", payload: params }
}
export const newShiftSuccess = () => {
  return { type: "NEW_SHIFT_SUCCESS" }
}
export const newShiftFail = error => {
  return { type: "NEW_SHIFT_FAIL", error: error }
}
export const deleteShift = params => {
  return { type: "DELETE_SHIFT", payload: params }
}
export const deleteShiftSuccess = () => {
  return { type: "DELETE_SHIFT_SUCCESS" }
}
export const deleteShiftFail = error => {
  return { type: "DELETE_SHIFT_FAIL", error: error }
}
export const editShiftShow = () => {
  return { type: "EDIT_SHIFT_SHOW" }
}
export const editShift = params => {
  return { type: "EDIT_SHIFT", payload: params }
}
export const editShiftSuccess = () => {
  return { type: "EDIT_SHIFT_SUCCESS" }
}
export const editShiftFail = error => {
  return { type: "EDIT_SHIFT_FAIL", error: error }
}
