import jasmine from 'jasmine';
import Promise from 'bluebird';
import {throttle} from './throttle';

describe('throttle', function () {
    it('should return wrapper function that limits the calls to the supplied function', () => {
        //given
        const spy = jasmine.createSpy('spy');
        let count = 0;
        //when
        const result = throttle(spy, 50);
        const promise = new Promise((accept) => {
            let intId = setInterval(() => {
                result();
                if(count++ > 10) {
                    clearInterval(intId);
                    //then
                    accept(spy.calls.count());
                }
            }, 10);
        });

        return expect(promise).resolves.toEqual(3);
    });
});
