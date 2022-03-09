// initial card values for players 
var player1StartCardNum1 = Math.floor(Math.random() * 11) + 1;
var player1StartCardNum2 = Math.floor(Math.random() * 11) + 1;
// first Ace card is set to eleven
if(player1StartCardNum1 == 11 || player1StartCardNum1==1 && player1StartCardNum2 == 11 || player1StartCardNum2==1){
	player1StartCardNum2 = 1;
	player1StartCardNum1 == 11;
}else if(player1StartCardNum1 == 1 || player1StartCardNum1 == 11){
	player1StartCardNum1 = 11;
}else if(player1StartCardNum2 == 1 || player1StartCardNum2 == 11){
	player1StartCardNum2 = 11;
}
var player2StartCardNum1 = Math.floor(Math.random() * 11) + 1;
var player2StartCardNum2 = Math.floor(Math.random() * 11) + 1;
if(player2StartCardNum1 == 1){
	player2StartCardNum1 = 11;
}else if(player2StartCardNum2 ==1){
	player2StartCardNum2 = 11;
}
var player1Sum = player1StartCardNum1 + player1StartCardNum2;
var player2Sum = player2StartCardNum1 + player2StartCardNum2; 

// counter for the number of hits player gets, initialize at 3 for next card
var addHit =3;

// var cardCounter =1;
// hide game, unless age >= 18
var ageValid = document.querySelector('#cards');
ageValid.style.visibility = 'hidden';
document.querySelector('#winOrLoose').style.visibility = 'hidden';

var winOrLoose = false;
// show default players hand title
document.querySelector('#placeName').innerHTML = `Your hand`;

// Show the appropriate starting img of player1
if(player1StartCardNum1 == 1 || player1StartCardNum1 == 11){
	document.getElementById("player1card1").src = "images/ace.png";
}else{
	document.getElementById("player1card1").src=`images/${player1StartCardNum1}.png`;
}
if(player1StartCardNum2 == 1 || player1StartCardNum2 == 11){
	document.getElementById("player1card2").src = `images/ace.png`;
}else{
	document.getElementById("player1card2").src=`images/${player1StartCardNum2}.png`;	
}


// Show face down cards for dealer
if(player2StartCardNum1 == 1 || player2StartCardNum1 == 11){
	document.getElementById("player2card1").src = `images/ace.png`;
}else{
	document.getElementById("player2card1").src = `images/${player2StartCardNum1}.png`;
}
// document.getElementById("player2card1").src="images/faceDown.png";
document.getElementById("player2card2").src="images/faceDown.png";


// event listeners for buttons
// document.querySelector("#player1Hit").addEventListener('click', hit);
document.querySelector("#player1Hit").addEventListener('click', hit);

document.querySelector("#showDealersHand").addEventListener('click', showDealers);
document.querySelector("#restart").addEventListener('click', restart);
document.querySelector("#name").addEventListener('change', name);
document.querySelector("#age").addEventListener('change', checkAge);

// Check to see if the hands are over 21
if(player1Sum>21){
	console.log("player1 LOST");
	document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE`;
	document.querySelector("#winOrLoose").style.color = "red";
	document.getElementById("winOrLoose").style.fontSize = "x-large";
	let btHit = document.getElementById("player1Hit").disabled = true;
	console.log(player1Sum);
}
if(player2Sum>21){
	console.log("player2 LOST");
	document.querySelector("#winOrLoose").innerHTML = `YOU WIN`;
	document.querySelector("#winOrLoose").style.color = "green";
	document.getElementById("winOrLoose").style.fontSize = "x-large";
	let btHit = document.getElementById("player1Hit").disabled = true;
	console.log(player2Sum);
}
if(player1Sum==21){
	document.querySelector("#winOrLoose").innerHTML = `YOU WIN`;
	document.querySelector("#winOrLoose").style.color = "green";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
	let btHit = document.getElementById("player1Hit").disabled = true;
	// console.log(player1Sum);
	// console.log(player2Sum);
}
if(player2Sum==21){
	document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE`;
	document.querySelector("#winOrLoose").style.color = "red";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
	let btHit = document.getElementById("player1Hit").disabled = true;
	// console.log(player1Sum);
	// console.log(player2Sum);
}
function showDealers(){
	
	if(player1Sum>21){
		document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE ${player1Sum} is > 21`;
		document.querySelector("#winOrLoose").style.color = "red";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
		let btShowDealer = document.getElementById("showDealersHand").disabled = true;
		// console.log(player1Sum);
		// console.log(player2Sum);
	}
	if(player2Sum>21){
		document.querySelector("#winOrLoose").innerHTML = `YOU WIN`;
		document.querySelector("#winOrLoose").style.color = "green";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
		let btShowDealer = document.getElementById("showDealersHand").disabled = true;
		// console.log(player1Sum);
		// console.log(player2Sum);
	}
	else if( !(player1Sum>21) && player1Sum >player2Sum){
		document.querySelector("#winOrLoose").innerHTML = `YOU WIN`;
		document.querySelector("#winOrLoose").style.color = "green";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
		let btShowDealer = document.getElementById("showDealersHand").disabled = true;
		// console.log(player1Sum);
		// console.log(player2Sum);
		document.getElementById("winOrLoose").style.fontSize = "x-large";
	}
	else if( !(player2Sum>21) && player2Sum > player1Sum ){
		document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE ${player1Sum} is < dealers hand ${player2Sum}`;
		document.querySelector("#winOrLoose").style.color = "red";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
		let btShowDealer = document.getElementById("showDealersHand").disabled = true;
		// console.log(player1Sum);
		// console.log(player2Sum);
	}
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = "#" +randomColor;
	if(player2StartCardNum1 == 1 || player2StartCardNum1 == 11){
		document.getElementById("player2card1").src = "images/ace.png";
	}
	if(player2StartCardNum2 == 1 || player2StartCardNum2 == 11){
		document.getElementById("player2card2").src = `images/ace.png`;
	}
	for(let i=2; i<11; i++ ){ // dynamically display image with a loop
		if(player2StartCardNum1 == i){
			document.getElementById("player2card1").src = `images/${i}.png`;
		}
	}
	for(let i=2; i<11; i++ ){ 
		if(player2StartCardNum2 == i){
			document.getElementById("player2card2").src = `images/${i}.png`;
		}
	}
	// stop user input after bust
	let btHit = document.getElementById("player1Hit").disabled = true;
	let btShowDealer = document.getElementById("showDealersHand").disabled = true;
}

function hit(){
	// condition to stop user input if won or lost
	if(winOrLoose == true){
		let btHit = document.getElementById("player1Hit").disabled = true;
		// let btShowDealer = document.getElementById("showDealersHand").disabled = true;
	}
	
	let newCard = Math.floor(Math.random() * 11) +1;
	console.log(newCard);
	if(newCard == 11){
		newCard=1; // only first Ace is considered an eleven, all others are considered one
	}
	player1Sum += newCard;
	if(player1Sum>21){
		document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE ${player1Sum} is > 21`;
		document.querySelector("#winOrLoose").style.color = "red";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
		// console.log(player1Sum);
		// console.log(player2Sum);
	}
	if(addHit>10){
		console.log("out of range for images, need more image containers to add card to!");
	}
	if(newCard == 1 ){
		document.getElementById(`player1card${addHit}`).src = "images/ace.png";
	}else{
		document.getElementById(`player1card${addHit}`).src = `images/${newCard}.png`;
	}
	if(player1Sum>21){
		document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE ${player1Sum} is > 21`;
		document.querySelector("#winOrLoose").style.color = "red";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
		// console.log(player1Sum);
		// console.log(player2Sum);
	}
	if(player2Sum>21){
		document.querySelector("#winOrLoose").innerHTML = `YOU WIN`;
		document.querySelector("#winOrLoose").style.color = "green";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
	}
	if(player1Sum==21){
		document.querySelector("#winOrLoose").innerHTML = `YOU WIN`;
		document.querySelector("#winOrLoose").style.color = "green";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;
	}
	if(player2Sum==21){
		document.querySelector("#winOrLoose").innerHTML = `YOU LOOSE Dealers hand: ${player1Sum} is = 21`;
		document.querySelector("#winOrLoose").style.color = "red";
		document.getElementById("winOrLoose").style.fontSize = "x-large";
		let btHit = document.getElementById("player1Hit").disabled = true;

	}

	addHit +=1;
	// cardCounter+=1;
}

function restart() {
	location.reload();
}

function name() {
	let name = document.querySelector('#name').value;
	document.querySelector('#placeName').innerHTML = `${name}'s hand`;
}

function checkAge() {
	let age = document.querySelector("#age").value;
	if(age >=18){
		// display game
		ageValid.style.visibility = 'visible';
		document.querySelector("#ageNotValid").innerHTML = "";
		document.querySelector('#winOrLoose').style.visibility = 'visible';

	}else{
		// tell user he/she is too young
		// hide game
		ageValid.style.visibility = 'hidden';
		document.querySelector('#winOrLoose').style.visibility = 'hidden';
		document.querySelector("#ageNotValid").innerHTML = "~You must be 18 or older to play~";
		document.querySelector("#ageNotValid").style.color = "blue";
		document.getElementById("ageNotValid").style.fontSize = "x-large";
	}
}