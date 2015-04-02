chrome.tabs.executeScript(null, { file: "jquery-2.1.3.js" }, function() {
    chrome.tabs.executeScript(null, { file: "encdecscript.js" },function() 
	{chrome.tabs.executeScript(null, {file: "/CryptoJS v3.1.2/components/core-min.js"},function() 
	{chrome.tabs.executeScript(null, {file: "/CryptoJS v3.1.2/components/aes.js"})})})
});