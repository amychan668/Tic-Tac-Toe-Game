function start(){    //loads when page opens
	for(var a=1; a < 10; a++){
		clear(a)
	}
	document.move="X";
	document.winner= null;
	setinput(document.move + " will start first.")
}

function setinput(message){   //display message
	document.getElementById("input").innerText=message;
}

function nextmove(box){   // states if player won, or if box is taken and go through the changeturn function
	if (document.winner != null) {
		setinput(document.move + " already won! Play again!")
	} else if (box.innerText== ''){
		box.innerText = document.move;
		changeturn();
	} else {
		setinput("Box taken, Please choose another box.")
	}
}

function changeturn(){ // check for winner, then tie, then who's turn it is
	if (checkforwinner(document.move)) {
		setinput("Congrats " + document.move + ", you won!")
		document.winner= document.move;
	}else if (checkfortie()){
		setinput("It's a tie! Play again.");
	}else if (document.move =="X"){
		document.move="O";
		setinput("It's " + document.move + "'s turn.")
	} else {
		document.move="X";
		setinput("It's " + document.move + "'s turn.")
	}
}

function getbox(number){ //retrieves the input in the box 
	return document.getElementById("box" + number).innerText;
}

function checkrow(a,b,c, move){
	var result= false;
	if (getbox(a)== move && getbox(b) == move && getbox(c) == move){
		result= true;
	}
	return result;
}

function checkforwinner(move){ //the positions to win the game
	var result= false;
	if (checkrow(1,2,3, move) ||
	    checkrow(4,5,6, move) ||
	    checkrow(7,8,9, move) ||
	    checkrow(1,4,7, move) ||
	    checkrow(2,5,8, move) ||
	    checkrow(3,6,9, move) ||
	    checkrow(1,5,9, move) ||
	    checkrow(3,5,7, move)){
		result= true;
	   }
	   return result;
}

function checkfortie(){  //look to see if there is a tie
	for (var a=1; a<10; a++)
	{
		if (getbox(a)=="")
			return false;
	}
	return true;
}

function clear(number){  //clear the table
	document.getElementById("box" + number).innerText= "";
}