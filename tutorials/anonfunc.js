
function callFunction(funcToPass){
    funcToPass();
}

module.exports.sayStuff = function(){
    console.log('say stuff')
}
//callFunction(sayStuff);

module.exports.counter = function (arr){
    return 'There are ' + arr+ ' in this array';
};

module.exports.adder = function(a,b){
    return `The sum of the 2 number is ${a+b}`;
}
module.exports.pi = 3.142


//console.log(counter(['shaun', 'crystal', 'ryu']))


