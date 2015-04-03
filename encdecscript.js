$(function() {
	var firstName = $('#firstName').val(); // gets the information from the input box
	var encrypted = CryptoJS.AES.encrypt(firstName, passHash); //encrypts it 
	$('#firstName').val(encrypted); //sets it back to the input box
});

