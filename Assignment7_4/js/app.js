
function outer(inner){

	if (inner && (typeof inner == "function")) {
		inner();
	}
}

outer(function(){
	console.log("Hello World");
});