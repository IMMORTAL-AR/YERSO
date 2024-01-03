function validateAndPlaceOrder() {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phoneno").value.trim();
    var address = document.getElementById("address").value.trim();
    var pin = document.getElementById("pin").value.trim();
    if (name === "" || phone === "" || address === "" || pin === "") {
        alert("Please fill in all personal details.");
    } else {
        var paymentMethod = document.querySelector('input[name="payment_method"]:checked');
        if (paymentMethod) {
            if (paymentMethod.value === 'UPI') {
                var upiId = document.getElementById('upiId').value.trim();
                if (upiId === "") {
                    alert("Please enter your UPI ID to proceed with UPI payment.");
                } else {
                    alert("Order placed successfully!");
                }
            } else if (paymentMethod.value === 'NetBanking') {
                var netbankingUsername = document.getElementById('netbankingUsername').value.trim();
                var netbankingcardno = document.getElementById('netbankingcardno').value.trim();
                var netbankingcvc = document.getElementById('netbankingcvc').value.trim();
                if (netbankingUsername === ""){    
                    alert("Please enter your Net Banking Username to proceed with UPI payment.");
                }
                else if (netbankingcardno === ""){
                    alert("Please enter your Net Banking card number to proceed with UPI payment.");
                }
                else if (netbankingcvc === ""){
                    alert("Please enter your Net Banking CVC to proceed with UPI payment.");
                }
                else {
                    alert("Order placed successfully!")
                }
            } else if (paymentMethod.value === 'CashonDelivery') {
                alert("Order placed successfully!");
            }
        } else {
            alert("Order unsuccessful. Please select a payment method.");
        }
    }
}


function handlePaymentMethodChange() {
    var upiDetails = document.getElementById('upiDetails');
    var netbankingDetails = document.getElementById('netbankingDetails');

    if (document.getElementById('upi').checked) {
        upiDetails.classList.remove('hidden');
        netbankingDetails.classList.add('hidden');
    } else if (document.getElementById('netbanking').checked) {
        netbankingDetails.classList.remove('hidden');
        upiDetails.classList.add('hidden');
    } else {
        upiDetails.classList.add('hidden');
        netbankingDetails.classList.add('hidden');
    }
}


function proceedWithNetBanking() {
    var netbankingUsername = document.getElementById('netbankingUsername').value;
    var netbankingcardno = document.getElementById('netbankingcardno').value;
    var netbankingcvc = document.getElementById('netbankingcvc').value;
    console.log('Proceeding with Net Banking payment. Username:', netbankingUsername);
}


function proceedWithUPI() {
    var upiId = document.getElementById('upiId').value;
    console.log('Proceeding with UPI payment. UPI ID:', upiId);
}


var radioButtons = document.querySelectorAll('input[name="payment_method"]');
radioButtons.forEach(function (radio) {
    radio.addEventListener('change', handlePaymentMethodChange);
});


var phoneNumberInput = document.getElementById("phoneno");
phoneNumberInput.addEventListener("input", function () {
    validatePhoneNumber();
});
function validatePhoneNumber() {
    var phoneNumberValue = phoneNumberInput.value;
    var numericRegex = /^[0-9]+$/;
    if (numericRegex.test(phoneNumberValue)) {
        console.log("Phone number is valid: " + phoneNumberValue);
        phoneNumberInput.style.borderColor = "green";
    } else {
        phoneNumberInput.style.borderColor = "red";
        alert("Please enter a valid 10-digit phone number")
    }
}


var pinCodeInput = document.getElementById("pin");
phoneNumberInput.addEventListener("input", function () {
    validatePinCode();
});
function validatePinCode() {
    var pinCodeInput = document.getElementById("pin");
    var pinCodeValue = pinCodeInput.value;
    var pinCodeRegex = /^[0-9]{6}$/;
    if (pinCodeRegex.test(pinCodeValue)) {
        console.log("Pin code is valid: " + pinCodeValue);
        pinCodeInput.style.borderColor = "green";
    } else {
        pinCodeInput.style.borderColor = "red";
        alert("Please enter a valid 6-digit pin code.");
    }
}


var nameInput = document.getElementById("name");
phoneNumberInput.addEventListener("input", function () {
    validateName();
});
function validateName() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    var nameRegex = /^[a-zA-Z]{3,}$/;
    if (nameRegex.test(nameValue)) {
        console.log("Name is valid: " + nameValue);
        nameInput.style.borderColor = "green";
    } else {
        nameInput.style.borderColor = "red";
        alert("Please enter a valid name with at least 3 alphabets.");
    }
}


var addressInput = document.getElementById("address");
phoneNumberInput.addEventListener("input", function () {
    validateAddress();
});
function validateAddress() {
    var addressInput = document.getElementById("address");
    var addressValue = addressInput.value.trim();
    if (addressValue !== "") {
        console.log("Address is valid: " + addressValue);
        addressInput.style.borderColor = "green";
    } else {
        addressInput.style.borderColor = "red";
        alert("Please enter a valid address.");
    }
}

