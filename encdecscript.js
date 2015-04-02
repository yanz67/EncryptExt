$(function() {
	$('#firstName').val('sss');
	var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
	alert(encrypted);
});

