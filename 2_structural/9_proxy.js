// proxy pattern

function newtworkFetch(url) {
    return `${url} - Ответ с сервера`;
}

function callNetwork(cacheParam) {
    const cache = cacheParam;

    const proxiedFetch = new Proxy(newtworkFetch, {
        apply(target, thisArg, args) {
            const url = args[0];

            if(cache.has(url)) {
                return `${url} - ответ из кэша`;
            } else {
                cache.add(url);
                return Reflect.apply(target, thisArg, args);
            }
        }
    });
    return (url) => {
        return proxiedFetch(url);
    }
}
const cache = new Set();
const callerNetwork = callNetwork(cache);

console.log(callerNetwork('angular.io'));
console.log(callerNetwork('react.io'));
console.log(callerNetwork('redux.io'));
console.log(callerNetwork('angular.io')); // Ответ из кеша
