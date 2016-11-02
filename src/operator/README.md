
# Those operator have the same structure

- they take an input stream (this)
- they should return an new Observable
- they are doing stuff with the function in parameter

```javascript
export default function stuff(stuffFn) {
    const input$ = this
    // create a new observable
    const output$ = {
        subscribe : function subscribe(outputObserver){
            // subscribe to the input observable
            $input.subscribe({
                next : function next(x){
                    // for basic stuff, specific code here
                    const y = stuffFn(x);
                    // calling next fn from the output observer
                    outputObserver.next(y);
                },
            error: (e) => ouputObserver.error(e),
            complete: () => ouputObserver.complete(),
            })
        }
    }
    return output$;
}
```