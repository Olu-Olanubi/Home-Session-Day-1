/*Function to produce an array of prime numbers from 0 to a given number.
Function is implemented using Eratosthenes Algorithm, as explained:
	Input: an integer n > 1.
 
 Let A be an array of Boolean values, indexed by integers 2 to n,
 initially all set to true.
 
 for i = 2, 3, 4, ..., not exceeding √n:
   if A[i] is true:
     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
       A[j] := false.
 
 Output: all i such that A[i] is true.
 ......................................................................
 Source: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
 ......................................................................
 However, all code is originally written based on existing algorithm. 
 No point re-inventing the wheel

 */

function getPrimes(n){

	if(n < 2){
		return "cannot list prime";
	}

	if(typeof n !== 'number'){
		return "invalid input";
	}

	//first declares two empty arrays, one to hold boolean values
	// and the other to hold final result
	var a  = [], result = [];
	//populate array of boolean values
	for(var i = 0; i <= n; i++){
		a.push(true);
	}
	
	for (var i = 2; i <= Math.sqrt(n); i++){
		if (a[i]){
		for (var j = i*i; j <= n; j+=i){
			a[j] = false;
			}
		}
	}

	for (var k = 2; k <= n; k++){
		if (a[k]){

		result.push(k);
		}
	}
	return result;
}

module.exports = getPrimes;