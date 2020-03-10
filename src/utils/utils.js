export const isJson = str => {
	try {
		JSON.parse(str);
		return true;
	} catch (err) {
		return false;
	}
};

/**
 * 跳转到指定页面
 * @param {Object} history
 * @param {String} url
 */
export const jumpToPage = (history, url) => {
	if (window.event && window.event.ctrlKey) {
		window.open(url, "_blank");
	} else {
		history.push(url);
	}
};
