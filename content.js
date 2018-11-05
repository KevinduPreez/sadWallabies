//alert("CONTENT");

function nokiaFiller(title, content){
	alert(title);
	document.getElementById("nokiaTitle").innerHTML = title.toSting();
	document.getElementById("nokiaBody").innerHTML = content;
}

function kathFiller(title, content){
	document.getElementById("kathkimTitle").innerHTML = title;
	document.getElementById("kathkimBody").innerHTML = content;
}

function bradFiller(title, content){
	document.getElementById("bradburyTitle").innerHTML = title;
	document.getElementById("bradburyBody").innerHTML = content;
}


function disneyFiller(title, content){
	document.getElementById("disneyTitle").innerHTML = title;
	document.getElementById("disneyBody").innerHTML = content;
}

function keyllyFiller(title, content){
	document.getElementById("kellyTitle").innerHTML = title;
	document.getElementById("kellyBody").innerHTML = content;
}

function emFiller(title, content){
	document.getElementById("eminemTitle").innerHTML = title;
	document.getElementById("eminemBody").innerHTML = content;
}

nokiaFiller("CHICKEN", "Was the best selling  handset, with the Nokia 6100, 6610 and Nokia 3510 being the best.");

