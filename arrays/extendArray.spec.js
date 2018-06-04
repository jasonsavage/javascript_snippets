import {extendArray} from './extendArray';

describe('extendArray', function () {
    it('should add items from src array to dest array and return dest array', () => {
        //given
        const arr1 = ['dog', 'cat'];
        const arr2 = ['foo', 'bar'];
        //when
        const result = extendArray(arr1, arr2);
        //then
        expect(result).toEqual(arr1);
        expect(result.indexOf('foo')).not.toEqual(-1);
        expect(result.indexOf('bar')).not.toEqual(-1);
    });
});
