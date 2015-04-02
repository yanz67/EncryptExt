$(function() {
	var firstName = $('#firstName').val();
	var encrypted = CryptoJS.AES.encrypt(firstName, "Secret Passphrase");
	$('#firstName').val(encrypted);
});

