// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	var strArry = str.split('-');
    return strArry.reduce((rev,chr)=>{return chr+rev; },'');
}

module.exports = reverse;


function reverseSolution3(str) {

	var strArry = str.split('');

    function doReverse(revStr,charVal){
       return charVal+revStr;
    }	
    
    var revStr= strArry.reduce(doReverse,'');
    return revStr;
}

function reverseSolution2(str) {
	 let reversedStr='';
	 
	 for(let charVal of str){
	    reversedStr= charVal+reversedStr;
	 }

	 return reversedStr;
}

function reverseSolution1(str) {
	 var strArry = str.split('');
	 strArry.reverse();
	 var revStr=strArry.join('');
	 return revStr; 
}