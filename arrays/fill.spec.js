import {fill} from './fill';

describe('fill', function () {
    it('should add items to an array until length is reached', () => {
        //given
        const arr = [];
        //when
        const result = fill(arr, 5);
        //then
        expect(result.length).toEqual(5);
    });
    it('should use the create method to add items to an array and should be passed the current index', () => {
        //given
        const arr = [];
        //when
        const result = fill(arr, 3, (i) => 'foo'+i);
        //then
        expect(result[0]).toEqual('foo0');
        expect(result[1]).toEqual('foo1');
        expect(result[2]).toEqual('foo2');
    });
});
