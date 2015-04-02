//chrome.tabs.executeScript(null,
//    {code:"document.getElementById('firstName').value='tertsdfrst'"});


//chrome.tabs.executeScript(null, {file: "encdecscript.js"});
chrome.tabs.executeScript(null, { file: "jquery-2.1.3.js" }, function() {
    chrome.tabs.executeScript(null, { file: "encdecscript.js" });
});