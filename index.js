const str = 'supercalifragilisticexpialidocious';
const noVowels = str.replace(/[aeiou]/gi, '');
console.log(noVowels);
function display(str) {
	for (let i = 0; i < str.length; i++){
		console.log(str[i]);
	}
}
display('sprclfrglstcxpldcs');

let stng = ("supercalifragilisticexpialidocious");
    for(let i=0; i < stng.length; i++) {
      if(stng.charAt(i) == 'a'|| stng.charAt(i) == 'e'|| 
          stng.charAt(i) == 'i' || stng.charAt(i) == 'o' || 
          stng.charAt(i) == 'u')
        
        console.log("Given string contains " + 
            stng.charAt(i)+" at the index " + i);
}



    


   let num;
   do {
	num = parseInt(prompt('Enter a number: '));
   } while (isNaN(num) || num < 1 || num > 50);
   if (num % 5 == 0 && num % 10 != 0){
	alert(`You entered ${num}.`)
   } else if (num % 10 == 0){
	console.log(`The number is skipped.`);
	num = parseInt(prompt('Enter a number: '));
   } else if (num <= 50){
	alert(`You entered ${num}.`)
   }else{
	num = parseInt(prompt('Enter a number: '));
   }


alert(`You entered ${num}.`)







