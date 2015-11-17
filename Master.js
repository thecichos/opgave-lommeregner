function add(number) {
	if (number === "=") {
		calc();
	} else {
		document.getElementById('numbers').value += number;
		return;
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
			alert("fuck you");
		} else {
			document.getElementById('numbers').value = Math.round((Number(arr[0]) / Number(arr[1])) * 1e12) / 1e12;
		}
	} else if (result == "*") {
		document.getElementById('numbers').value = Math.round((Number(arr[0]) * Number(arr[1])) * 1e12) / 1e12;
	}
}
