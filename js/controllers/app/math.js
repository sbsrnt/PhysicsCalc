function log10(val) {
    return Math.log(val) / Math.LN10;
}
function toRadians(angle) {
    return angle * (Math.PI / 180);
}
function sin(value){
    return Math.sin(toRadians(value));
}

function roundUpTo(result, upto) {
    return (result.toPrecision(upto));
}
function checkIfIsNaN(result) {
    var outcome = $('.result');
    if (!isNaN(result)) outcome.val(result);
}
function result(selector, formula) {
    if(selector === '' || selector === undefined) selector = 5;
    var outcome = roundUpTo(formula, selector);
    checkIfIsNaN(outcome);
}