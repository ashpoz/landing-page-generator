// action creator
export const updateField = (field) => {
    // return an action
    return {
        type: 'FIELD_UPDATED',
        payload: field
    }
}