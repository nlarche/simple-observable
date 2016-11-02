import createObservable from '../createObservable';

export default function map(transformFn) {
    const input$ = this;
    const ouput$ = createObservable(function subscribe(ouputObserver) {
        input$.subscribe({
            next: function (x) {
                const y = transformFn(x);
                ouputObserver.next(y);
            },
            error: e => ouputObserver.error(e),
            complete: () => ouputObserver.complete()
        })
    });
    return ouput$;
}
