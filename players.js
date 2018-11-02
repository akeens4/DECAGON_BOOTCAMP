

function noOfGames(P,C) {
    // var PL;
	// var P = PL / 2;
	if( P === 0 && C === 0 || P/2 >= C ) {
	return parseInt(C);
    } else {
	return parseInt(P/2);
   }
}

console.log(noOfGames(6,12));
console.log(noOfGames(6,2));
console.log(noOfGames(2,9));
console.log(noOfGames(2,0));
console.log(noOfGames(3,1));
console.log(noOfGames(7,2));
console.log(noOfGames(7,9));
console.log(noOfGames(99,23));
console.log(noOfGames(102,102));