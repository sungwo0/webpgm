onmessage = function (e) {
	let grade="F";
	let score = e.data;
	score = parseInt(score);
	switch(Math.floor(score/10)) {
		case 10 : case 9 : grade = "A"; break; 
		case 8 : grade = "B"; break; 
		case 7 : grade = "C"; break; 
		case 6 : grade = "D"; break;
		default :
	}
	postMessage(grade);
}