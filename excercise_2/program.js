function sum(arr) {
	var a = arr.slice(2, arr.length);
	return a.reduce((a,b)=> Number(a)+Number(b), 0);
}

console.log(sum(process.argv));