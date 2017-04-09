console.time('fib');

for (var i = 0; i < 10; i++) {
    console.log('measuring console.log performance');
    console.log('does this double the time?');
    console.log('surprisingly not');
}

console.timeEnd('fib');