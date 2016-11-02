# Simple Observable

Simple Observable implementation from [André Staltz](https://github.com/staltz) presentation

[![André Staltz presentation from ng-europe 2016](https://i.ytimg.com/vi/uQ1zhJHclvs/hqdefault.jpg)](https://www.youtube.com/watch?v=uQ1zhJHclvs)

Just to learn.


# An Observable suscribe to an observer

# An observer is an object with 3 functions (callback)

```javascript
const observer = {
    next: function next(period) { console.log(`next -> ${period}`) },
    error: function error(err) { console.log(`error -> ${err}`) },
    complete: function complete() { console.log(`done`) }
}
```

# An observable is an object with at least a function call subscribe

## subscribe means give me some data

```javascript
export default function createObservable(subscribe) {
    return {
        subscribe: subscribe,    
    }
}
```

## it's easy to create an Observable from An array

```javascript
const arrayObservable = createObservable(function subscribe(observer) {
    [10, 20, 30].forEach(x => observer.next(x));
    observer.complete();
});
```

## it's easy to create an Observable from An events

```javascript
const clickObservable = createObservable(function subscribe(observer) {
    document.addEventListener('click', observer.next)
});
```

## Finally you can susbscribe to your observer

```javascript
arrayObservable  
    .subscribe(observer);

clickObservable  
    .subscribe(observer);
```