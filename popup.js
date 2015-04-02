//Executing encdecscript which with jquery aes.js to be able encrypt and decrept strings
chrome.tabs.executeScript(null, { file: "jquery-2.1.3.js" }, function() {
    chrome.tabs.executeScript(null, { file: "/CryptoJS v3.1.2/rollups/aes.js" },function() 
	{chrome.tabs.executeScript(null, {file: "encdecscript.js"})})});

