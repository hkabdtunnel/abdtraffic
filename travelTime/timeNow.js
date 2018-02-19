//Variables

var d = new Date(); //this is the prototype for getting time information
	
var dow = d.getDay();			//get the day-of-week today
var h = d.getHours();			//get the hour now
var m = d.getMinutes();			//get the minute now

var year = d.getFullYear();		//get year
var month = d.getMonth();		//get month now
var day = d.getDate();			//get date now

function pad2(number) {
	return (number < 10 ? '0' : '') + number
}

// testing

function iframeChange() {
    var buttons = document.querySelector(".loadiframe"),
        iframe = document.getElementById('frame');

    buttons.addEventListener("click", function (e) {
        iframe.src = e.target.dataset.src;
        iframe.width = e.target.dataset.width;
        iframe.height = e.target.dataset.height;
    });
}
window.onload = iframeChange;