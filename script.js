let signs = [
	'1', '2', '3', '+',
	'4', '5', '6', '-',
	'7', '8', '9', '/',
	'0', '=', '.', '*', 'c'
]

const draw = () => {
	document.body.innerHTML += `<input type="text" name="" id="input_nums" class="input_nums">`
	document.body.innerHTML += `<div id="container" class="container"></div>`
	signs.forEach(elem => {

		if (elem === 'c') {
			document.getElementById('container').innerHTML += `<button id=${elem} class="c" onclick="calc(event)">${elem}</button>`
		}
		else {
			document.getElementById('container').innerHTML += `<button id=${elem} class="btn" onclick="calc(event)">${elem}</button>`
		}
	})
}

draw()

const calc = (event) => {
	let clickedSigns = event.target.id;
	if (event.target.innerHTML === '=') {
		let answer = eval(document.getElementById('input_nums').value)
		document.getElementById('input_nums').value = '';
		document.getElementById('input_nums').value = answer;
	}
	if (event.target.innerHTML != '=') {
		document.getElementById('input_nums').value += clickedSigns;
	}
	if (event.target.innerHTML === 'c') {
		document.getElementById('input_nums').value = '';
	}
	if (document.getElementById('input_nums').value === 'Infinity') {
		alert("На ноль делить нельзя!")
		document.getElementById('input_nums').value = '';
	}
}