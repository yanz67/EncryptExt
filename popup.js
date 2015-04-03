//Executing encdecscript which with jquery aes.js to be able encrypt and decrept strings

$(function() {
	$('#save').click(handlePassword);
	var hash = CryptoJS.SHA3("1");
	chrome.storage.sync.set({'pass': hash.toString()}, function() {
	         // Notify that we saved.
	         //alert('Settings saved');
	       });
	//var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
});

function handlePassword(e){
	chrome.storage.sync.get('pass',function(objects){
		var hashPass = objects['pass'];
		var userInput = $('#encPassword').val();
		var hashInput = CryptoJS.SHA3(userInput);
		if (hashPass == hashInput){
			encryptFunction(hashInput);
		}else{
			$('#pass span').text('Wrong Password!');
			$('#pass').show();
		}
	});
}

function encryptFunction(hashPass){
	var passHash = CryptoJS.SHA1(hashPass);
	chrome.tabs.executeScript(null, {code: 'var passHash = '+JSON.stringify(passHash.toString())}, function() {chrome.tabs.executeScript(null,
		{ file: "jquery-2.1.3.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "/CryptoJS v3.1.2/rollups/aes.js" },function() 
		{chrome.tabs.executeScript(null, {file: "encdecscript.js"})})})});	
}

