import {backgroundImage} from './backgroundImage';

describe('backgroundImage', function () {
    it('should return an object with the css property backgroundImage', () => {
        //given
        const str = '../img/foobar.jpg';
        //when
        const result = backgroundImage(str);
        //then
        expect(result.backgroundImage).toEqual('url(\'../img/foobar.jpg\')');
    });
    it('should backgroundImage property to a style object if supplied', () => {
        //given
        const str = '../img/foobar.jpg';
        const obj = {width: 300};
        //when
        const result = backgroundImage(str, obj);
        //then
        expect(result.backgroundImage).toEqual('url(\'../img/foobar.jpg\')');
        expect(result.width).toEqual(300);
    });
});
