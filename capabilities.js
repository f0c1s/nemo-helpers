async function isScriptable(nemo) {
	const capabilities = await nemo.driver.getCapabilities();
	return capabilities.get('javascriptEnabled');
}

module.exports = {
	isScriptable
}
