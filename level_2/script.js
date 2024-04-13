const buttonClick = () => {
	const hiContainer = document.getElementById('hi-container');
	const hiElement = document.getElementById('hi');
	if (!hiElement) {
		const newElement = document.createElement('p');
		newElement.innerHTML = 'hi!';
		newElement.className = 'hi-color';
		hiContainer.appendChild(newElement);
	}
}

window.onload = () => {
	document.getElementById('hi-button').onclick = buttonClick;
}