import {zeroPrepend} from './zeroPrepend';

describe('zeroPrepend', function () {
    it('should add 0s to the beginning of a number based on the value of places', () => {
        //given
        //when
        const result = zeroPrepend(34, 5);
        //then
        expect(result).toEqual('00034');
    });
    it('should NOT add 0s to the beginning of a number if the length is less than or equal to places', () => {
        //given
        //when
        const result = zeroPrepend(345, 3);
        //then
        expect(result).toEqual('345');
    });
});
