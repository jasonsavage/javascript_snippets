import {chunks} from './chunks';

describe('chunks', function () {
    it('should split an array in an array of arrays, based on size', () => {
        //given
        const arr = ['foo', 'bar', 'hello', 'world'];
        //when
        const result = chunks(arr, 2);
        //then
        expect(result.length).toEqual(2);
        expect(result[0].length).toEqual(2);
        expect(result[0][0]).toEqual('foo');
        expect(result[1][0]).toEqual('hello');
    });
});
