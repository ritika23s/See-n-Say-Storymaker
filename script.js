// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;

var speakButton1 = document.querySelector('.b1');
var textToSpeakb1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];

var speakButton2 = document.querySelector('.b2');
var textToSpeakb2 = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];

var speakButton3 = document.querySelector('.b3');
var textToSpeakb3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];

var speakButton4 = document.querySelector('.b4');
var textToSpeakb4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];

var speakButton5 = document.querySelector('.b5');
var textToSpeakb5 = ['on the moom', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

var speakButton6 = document.querySelector('.Surprises');

var speakButton7 = document.querySelector('.Playback');

var line = [];

var text = document.querySelector('p');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

function randomValueFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
speakButton1.onclick = function () {
	var value1 = randomValueFromArray(textToSpeakb1);
	speakNow(value1);
	console.log(value1);
	line[0] = value1;
}

speakButton2.onclick = function () {
	var value2 = randomValueFromArray(textToSpeakb2);
	speakNow(value2);
	console.log(value2);
	line[1] = value2;
}

speakButton3.onclick = function () {
	var value3 = randomValueFromArray(textToSpeakb3);
	speakNow(value3);
	console.log(value3);
	line[2] = value3;
}

speakButton4.onclick = function () {
	var value4 = randomValueFromArray(textToSpeakb4);
	speakNow(value4);
	console.log(value4);
	line[3] = value4;
}

speakButton5.onclick = function () {
	var value5 = randomValueFromArray(textToSpeakb5);
	speakNow(value5);
	console.log(value5);
	line[4] = value5;
}

speakButton6.onclick = function () {
	console.log(line);
	speakNow(line.join(' '));
	line = [];
}

var randomline = [];

speakButton7.onclick = function () {
	randomline[0] = randomValueFromArray(textToSpeakb1);
	randomline[1] = randomValueFromArray(textToSpeakb2);
	randomline[2] = randomValueFromArray(textToSpeakb3);
	randomline[3] = randomValueFromArray(textToSpeakb4);
	randomline[4] = randomValueFromArray(textToSpeakb5);
	console.log(randomline);
	speakNow(randomline.join(' '));
	text.textContent = randomline.join(' ');
	randomline = [];
}
