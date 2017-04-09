// a less than groundbreaking script that reminds us: cache lookups are, on the whole, quicker than recursion

function fibonacci (num) {
    return num > 1 ? fibonacci(num-2) + fibonacci(num-1) : 1;
};

var cache = [1, 1];

function fibCache (num) {
    if (cache[num]) {
        return cache[num];
    }

    if (num < 0) {
        return 0;
    }

    var result = fibCache(num-2) + fibCache(num-1);
    cache[num] = result;
    return result;
};

console.log('fibonacci with and without caching');

for (var repeats = 0; repeats < 40; repeats++) {
    console.time('fib cache');
    console.log(fibCache(repeats));
    console.timeEnd('fib cache');

    // without caching, anything greater than about 40 starts to take waaaaay too long
    console.time('fib without cache');
    console.log(fibonacci(repeats));
    console.timeEnd('fib without cache');
}