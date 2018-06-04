describe('gridFill', function () {
    it('should fill a multidimensional array with items until length is reached', () => {
        //given
        const arr = [];
        //when
        const result = gridFill(arr, 2, 2);
        //then
        expect(result.length).toEqual(2);
        expect(result[0].length).toEqual(2);
    });
    it('should use the create method to add items to an array and should be passed the current row and col index', () => {
        //given
        const arr = [];
        //when
        const result = gridFill(arr, 2, 2, (i, j) => 'foo' + i + ':' + j);
        //then
        expect(result[0][0]).toEqual('foo0:0');
        expect(result[0][1]).toEqual('foo0:1');
        expect(result[1][0]).toEqual('foo1:0');
        expect(result[1][1]).toEqual('foo1:1');
    });
});
