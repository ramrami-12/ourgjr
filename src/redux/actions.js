export const CHANGE_MODE = false;

export function displayMode(mode) {
    return {
        type: CHANGE_MODE,
        mode,
    };
}