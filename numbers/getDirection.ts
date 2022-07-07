/**
 * Get the direction of change between [next] and [last] by returning 1, -1, or 0 (no change)
 */
export const getDirection = (next: number, last: number): number => {
    return next > last ? 1 : next < last ? -1 : 0;
};
