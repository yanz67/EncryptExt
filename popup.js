//Executing encdecscript which with jquery aes.js to be able encrypt and decrept strings

$(function() {
	$('#save').click(handlePassword); //add click capability to the extension popup
	var hash = CryptoJS.SHA3("1"); //Temporary Password Will be set in settings
	chrome.storage.sync.set({'pass': hash.toString()}, function() {
	         // Notify that the password is saved
	         //alert('Settings saved');
	       });
});

function handlePassword(e){
	//Function that will handle the click
	chrome.storage.sync.get('pass',function(objects){
		var hashPass = objects['pass'];
		var userInput = $('#encPassword').val(); //gets user input
		var hashInput = CryptoJS.SHA3(userInput);// hash userinput 
		if (hashPass == hashInput){ 			 //check if user enters correct password
			encryptFunction(hashInput);
		}else{
			$('#pass span').text('Wrong Password!');
			$('#pass').show();
		}
	});
}

function encryptFunction(hashPass){
	var passHash = CryptoJS.SHA1(hashPass); //rehashes user input using a different SHA1
	//Programmatic injection of scripts to encrypt or decrypt the input boxes 
	chrome.tabs.executeScript(null, {code: 'var passHash = '+JSON.stringify(passHash.toString())}, function() {chrome.tabs.executeScript(null,
		{ file: "jquery-2.1.3.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "/CryptoJS v3.1.2/rollups/aes.js" },function() 
		{chrome.tabs.executeScript(null, {file: "encdecscript.js"})})})});	
}

