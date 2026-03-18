//your JS code here. If required.
let counter=document.getElementById("counter");
let count=0;
function incrementCounter(){
	alert(count);
	count++;
	counter.textContent=count;
}