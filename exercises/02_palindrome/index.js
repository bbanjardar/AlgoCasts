// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true    ['a','b','b','a']
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').every((element,index)=>{
		return element===str[str.length-1-index];
	})
	
}

module.exports = palindrome;


function palindromeSolution2(str) {
	var reversed = str.split('').reverse().join('');
	return (reversed===str);
}


function palindromeSolution1(str) {
	
	var arry = str.split('');
	var revrry=arry.reverse();
	var reversed= revrry.join('');
	
	if(reversed===str){
		return true;
	}else{
		return false;
	}
	
}