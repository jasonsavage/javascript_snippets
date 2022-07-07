import {range} from 'ramda';

/**
 * Creates an array of numbers that are offset by [index], uses clamp wrap to grab numbers that are
 * out of the range: 0 -> totalPages
 */
export const calculateOrder = (index: number, total: number): number[] => {
    const nextIndex = clampWrap(index, 0, total - 1);
    return range(0, total).map((_, i) => clampWrap(nextIndex + i, 0, total - 1));
};
