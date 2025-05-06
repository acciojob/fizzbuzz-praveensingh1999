//your JS code here. If required.
let start = 1;
let end=20;
for(let i=start;i<=end;i++){
	if(i%3==0 && i%5==0){
		console.log("FizzBuzz");
	}
	else if(i%5==0){
		console.log("Buzz");
	}
	else if(i%3==0){
		console.log("Fizz");
	}
	else{
		console.log(i.toString());
	}
}