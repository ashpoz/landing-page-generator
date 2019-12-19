export const UPDATE_HTML = 'UPDATE_HTML';

// action creator
export const updateHTMLOutput = (output) => {
    return {
        type: UPDATE_HTML,
        output: output
    }
}