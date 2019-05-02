// variables for ids of images
const door1 = document.querySelector("#door1");
const door2 = document.querySelector("#door2");
const door3 = document.querySelector("#door3");


//These functions will change the current images on the page
function choice1(){
	return door1.src = "./img/red-x.png";
};


function choice2(){
	return door2.src = "./img/green-check.png";
};

function choice3(){
	return door3.src = "./img/red-x.png";
};