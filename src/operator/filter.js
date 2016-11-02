import createObservable from '../createObservable';

export default function filter(conditionFn) {
    const input$ = this;
    const ouput$ = createObservable(function subscribe(ouputObserver) {
        input$.subscribe({
            next: (x) => {
                if (conditionFn(x)) {
                    ouputObserver.next(x);
                }
            },
            error: (e) => ouputObserver.error(e),
            complete: () => ouputObserver.complete(),
        })
    })
    return ouput$;
}
