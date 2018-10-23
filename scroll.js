const { isScriptable } = require('./capabilities');

async function toElement(element, nemo) {
	if (await isScriptable(nemo)) {
		await nemo.driver.executeScript('arguments[0].scrollIntoView(true)', element);
	}
};

module.exports = {
	toElement
}
