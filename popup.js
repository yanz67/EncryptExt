//Executing encdecscript which with jquery aes.js to be able encrypt and decrept strings

$(function() {
	$('#save').click(handlePassword);
	var hash = CryptoJS.SHA3("Pass");
	chrome.storage.sync.set({'pass': hash.toString()}, function() {
	         // Notify that we saved.
	         //alert('Settings saved');
	       });
	//var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
});


function handlePassword(e){
	chrome.storage.sync.get('pass',function(objects){
		
		$('#pass span').text(objects['pass']);
		$('#pass').show();
		encryptFunction();
	});
}


function encryptFunction (){
	
	chrome.tabs.executeScript(null, { file: "jquery-2.1.3.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "/CryptoJS v3.1.2/rollups/aes.js" },function() 
		{chrome.tabs.executeScript(null, {file: "encdecscript.js"})})});	
}

