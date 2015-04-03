$(function() {
	var firstName = $('#firstName').val();
	var encrypted = CryptoJS.AES.encrypt(firstName, passHash);
	$('#firstName').val(encrypted);
});

