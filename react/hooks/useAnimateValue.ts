import * as React from 'react';

interface Options {
    from: number;
    to: number;
    duration: number;
    done: () => void;
}

const defaultOptions = {
    from: 0,
    to: 1,
    duration: 1000,
    done: () => {},
};

export const useAnimateValue = (props: Partial<Options>) => {
    const [progress, setProgress] = React.useState(0);
    const timer = React.useRef(0);
    const {from, to, duration, done} = Object.assign({}, defaultOptions, props);

    React.useEffect(() => {
        const start: number = Date.now();
        const end: number = start + duration;
        const length: number = to - from;

        const step = () => {
            const now: number = Date.now() - start;
            const timeProgress: number = now / duration;
            const valueProgress: number = timeProgress * length;

            // set progress, (value between from and to)
            setProgress(valueProgress);

            if (Date.now() < end) {
                timer.current = window.requestAnimationFrame(step);
            } else if (progress !== 1) {
                setProgress(to);
                done();
            }
        };

        //start
        step();

        return () => {
            window.cancelAnimationFrame(timer.current);
        };
    }, [from, to, duration]);

    return progress;
};
