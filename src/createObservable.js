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
