// basic sum test

function sum(a,b){
    // this number check block is added for toThrow example
    if(typeof a!== 'number' || typeof b!== 'number'){
        throw new Error('a and b should be numbers');
    }
    return a+b;
}

module.exports =  sum;
