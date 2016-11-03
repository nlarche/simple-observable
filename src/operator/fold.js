import createObservable from '../createObservable';

export default function fold(accuFn, seed) {
    const input$ = this;
    const acc = seed;
    const ouput$ = createObservable(function subscribe(outputObserver) {
        input$.subscribe({
            next(x) { 
                const y = accuFn(x, acc);
                outputObserver.next(y); 
            },
            error(e) { outputObserver.error(e); },
            complete() { outputObserver.complete(); },
        })
    })
    return ouput$;
}