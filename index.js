import createObservable from './src/createObservable';

const arrayObservable = createObservable(function subscribe(observer) {
    [10, 20, 30].forEach(x => observer.next(x));
    observer.complete();
});

const clickObservable = createObservable(function subscribe(observer) {
    document.addEventListener('click', observer.next)
});

const observer = {
    next: function next(period) { console.log(`next -> ${period}`) },
    error: function error(err) { console.log(`error -> ${err}`) },
    complete: function complete() { console.log(`done`) }
}

arrayObservable
    .map(x => x / 10)
    .filter(x => x !== 2)
    .delay(2000)
    .subscribe(observer);