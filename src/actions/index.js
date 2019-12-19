// action creator
export const updateField = (field) => {
    // return an action
    return {
        type: 'FIELD_UPDATED',
        payload: field
    }
}

export const updateHTMLOutput = (output) => {
    return {
        type: 'UPDATE_HTML',
        payload: output
    }
}