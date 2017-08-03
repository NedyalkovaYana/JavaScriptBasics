function drawSquare([n]) {
    n = Number(n);
    console.log('*'.repeat(n))  
    for (let i = 0; i < n-2; i++) {
       
        console.log('*' + ' '.repeat(n - 2)+ '*');
    }
    console.log('*'.repeat(n))  
    
}
drawSquare(['6']);
console.log('---');
drawSquare(['4']);
console.log('---');
drawSquare(['6']);


