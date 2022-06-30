export const IS_DARK = false;

export function displayMode(mode) {
    return {
        type: IS_DARK,
        mode,
    };
}