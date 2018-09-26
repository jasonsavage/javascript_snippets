
/**
 * Gets the value from the given path through a data structure
 * @param {object} context
 * @param {...string|number} path
 * @return {*}
 *
 * @example
 * var context1 = { response: { data: { foo: 123 } } };
 * const value = getIn(context1, ['response', 'data', 'foo']);
 */
export const getValueIn = (context, ...path) => {
    let value = context;
    while (value !== undefined && path.length) {
        value = value[path.shift()];
    }
    return value;
};
