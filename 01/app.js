function christmasTree([arg1]) {
    let n = arg1;
    for (var i = 0; i < n + 1; i++) {
        console.log(' '. repeat(n - i) +
            '*'.repeat(i) +
            ' | ' +
            '*'.repeat(i) +
            ' '.repeat(n - 1));    
    }
}
christmasTree(['5']);
