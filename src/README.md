
# An Observable is an Object with a subscribe function

- You can add helpers functions to do some stuff
- each of this function should return an new Observable
- then you can chain them

```javascript
import map from './operator/map';
import filter from './operator/filter';
import delay from './operator/delay';

export default function createObservable(subscribe) {
    return {
        subscribe: subscribe,
        map: map,
        filter: filter,
        delay: delay
    }
}

```