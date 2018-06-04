import {prettyPrint} from './prettyPrint';

describe('prettyPrint', function () {
    it('should remove -_, put spaces between words, and put spaces between number and words', () => {
        //given
        const str = ' 1_TheIQuick45Brown-Fox! ';
        //when
        const result = prettyPrint(str);
        //then
        expect(result).toEqual('1 The I Quick 45 Brown Fox!');
    });
    it('should ignore strings that are only - or _', () => {
        //given
        //when
        const result1 = prettyPrint('-');
        const result2 = prettyPrint('_');
        //then
        expect(result1).toEqual('-');
        expect(result2).toEqual('_');
    });
});
