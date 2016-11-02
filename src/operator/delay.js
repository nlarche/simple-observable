import createObservable from '../createObservable';

export default function delay(period) {
    const input$ = this;
    const output$ = createObservable(function subscribe(ouptObserver) {
        input$.subscribe({
            next(x) { 
                setTimeout(() => ouptObserver.next(x), period)
            },
            error(e) { ouputObserver.error(e) },
            complete() { ouptObserver.complete() },
        })
    })
    return output$;
}
