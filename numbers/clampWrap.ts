/**
 * Keeps [n] within the range of [min] and [max] by adding or subtracting the range until
 * the result value is back the range.
 *
 * @see https://github.com/freeqaz/wrap-clamp/blob/master/index.js
 */
export const clampWrap = (n: number, min: number, max: number): number => {
    const range = max - min + 1;
    return n - Math.floor((n - min) / range) * range;
};
