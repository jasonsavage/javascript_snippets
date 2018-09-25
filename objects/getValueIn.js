
/**
 * Gets the value from a given path through a data structure
 * @param {object} context
 * @param {string} path
 * @return {any}
 *
 * @example
 * var context1 = { response: { data: { cat: 123 } } };
 * var context2 = { response: { data: [ { cat: 1 }, { cat: 12 }, { cat: 123 } ] } };
 * getValueIn(context1, 'response.data.cat');
 * getValueIn(context2, 'response.data[2].cat');
 */
function getValueIn(context, path) {
    const temp = path.split('.');
    let value = context;
    while (value !== undefined && temp.length) {
        const key = temp.shift();
        if (/\[\d\]/.test(key)) {
            const match = key.match(/(.*)\[(\d)\]/);
            if (!match || match.length > 2) { return undefined; }
            const [, arrKey, arrIdx] = match[1];
            value = value[arrKey][parseInt(arrIdx, 10)];
        } else {
            value = value[key];
        }
    }
    return value;
}
