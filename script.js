function toCase(text) {
  // write your code here
	let res = text.toLowerCase();
	let res_2 = text.toUpperCase();
	let ans = res +'-'+res_2 ;
	return ans ;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
