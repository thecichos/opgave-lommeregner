// document.getElementById('numbers').disabled;

function uniCharCode(event) {
	var key = event.keyCode;
	if (key === 13) {
		add("=")
	} else if (key === 67) {
		document.getElementById('numbers').value = null;
	} else {
		var num = String.fromCharCode(key);
		add(num);
	}
}

function add(number) {
	if (number === "=" || number === "") {
		calc();
	} else {
		document.getElementById('numbers').value += number;
	}
}

function calc() {
	var string = document.getElementById('numbers').value;
	var patt1 = /[^0-9 .]/g;
	var arr = document.getElementById('numbers').value.split(patt1);
	var result = string.match(patt1);
	if (result == "+") {
		document.getElementById('numbers').value = Math.round((Number(arr[0]) + Number(arr[1])) * 1e12) / 1e12;
	} else if (result == "-") {
		document.getElementById('numbers').value = Math.round((Number(arr[0]) - Number(arr[1])) * 1e12) / 1e12;
	} else if (result == "/") {
		if (arr[0] == 0 || arr[1] == 0) {
			alert("please do not divide zero, the universe will die");
		} else {
			document.getElementById('numbers').value = Math.round((Number(arr[0]) / Number(arr[1])) * 1e12) / 1e12;
		}
	} else if (result == "*") {
		document.getElementById('numbers').value = Math.round((Number(arr[0]) * Number(arr[1])) * 1e12) / 1e12;
	}
}
