const wait = (delay) => new Promise((resolve) => window.setTimeout(resolve, delay));

/**
 * Type some text.
 * @param {string | Element} element The element to type the text into.
 * @param {string} text The text to type.
 * @param {number?} delay The delay between characters.
 */
async function AutoType (element, text, delay = 80) {
	const e = typeof element === 'string' ? document.getElementById(element) : element;
	e.innerHTML = "&ZeroWidthSpace;";
	for (const letter of text) {
		e.innerHTML += letter;
		await wait(delay);
	}
}

/**
 * Backspace some text.
 * @param {string | Element} element The element to remove the text from. 
 * @param {number?} delay The delay between characters.
 */
async function AutoBackspace (element, delay = 50) {
	const e = typeof element === 'string' ? document.getElementById(element) : element;
	for (const _ of e.innerHTML) {
		e.innerHTML = e.innerHTML.substring(0, e.innerHTML.length - 1);
		if (e.innerHTML.length <= 0) e.innerHTML = "&ZeroWidthSpace;";
		await wait(delay);
	}
}
