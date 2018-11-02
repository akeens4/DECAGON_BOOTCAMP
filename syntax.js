

function numberOperation(firstNumber,secondNumber) {
    var even = [];
    var odd = [];
    for (var i= firstNumber; i <= secondNumber; i++) {
        if(i % 2 === 0) {
            even.push(i);
        }   else{
            odd.push(i);
        }     
    }
    return [even,odd];
    // for(var i = firstNumber; i <= secondNumber; i++) {
    //     if(secondNumber % i) {

    //     }
    // }
}
console.log(numberOperation(1,100));