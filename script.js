function validateField(field) {
    var errorSpan = document.getElementById(field.id + "Error");
    if (!field.value.trim()) {
        field.classList.add("error");
        errorSpan.style.display = 'block';
    } else {
        field.classList.remove("error");
        errorSpan.style.display = 'none';
    }
}

document.getElementById("firstname").addEventListener('blur', function() {
    validateField(this);
});

document.getElementById("lastname").addEventListener('blur', function() {
    validateField(this);
});

document.getElementById("email").addEventListener('blur', function() {
    validateField(this);
});

document.getElementById("whysupport").addEventListener('blur', function() {
    validateField(this);
});

function validateGender() {
    var genderMale = document.getElementById("male");
    var genderFemale = document.getElementById("female");
    var genderNotPrefer = document.getElementById("notprefer");
    var errorSpan = document.getElementById("genderError");

    if (!genderMale.checked && !genderFemale.checked && !genderNotPrefer.checked) {
        errorSpan.style.display = 'block';
        genderMale.parentElement.classList.add("error");
        genderFemale.parentElement.classList.add("error");
        genderNotPrefer.parentElement.classList.add("error");
    } else {
        errorSpan.style.display = 'none';
        genderMale.parentElement.classList.remove("error");
        genderFemale.parentElement.classList.remove("error");
        genderNotPrefer.parentElement.classList.remove("error");
    }
}

document.getElementsByName("Gender").forEach(radio => {
    radio.addEventListener('blur', validateGender);
});

function validateForm() {
    var isValid = true;

    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const whysupport = document.getElementById("whysupport");

    validateField(firstname);
    validateField(lastname);
    validateField(email);
    validateField(password);
    validateField(whysupport);
    validateGender();

    if (!firstname.value.trim() || !lastname.value.trim() || !email.value.trim() || !password.value.trim() || !whysupport.value.trim() || (!document.querySelector('input[name="Gender"]:checked'))) {
        isValid = false;
    }

    return isValid;
}

function storeProfileDisplay(firstname, lastname, email, gender, whysupport) {
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("whysupport", whysupport);
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var gender = document.querySelector('input[name="Gender"]:checked').value;
        var email = document.getElementById("email").value;
        var whysupport = document.getElementById("whysupport").value;


        storeProfileDisplay(firstname, lastname, email, gender, whysupport);

        window.location.href = "profile.html";
    }
}

document.getElementById("sign-up").addEventListener('submit', handleSubmit);
document.getElementById("reset").addEventListener('click', function() {
    document.getElementById("firstname").value = '' + "<br>"; 
    document.getElementById("lastname").value = '' + "<br>"; 
    document.getElementById("email").value = '' + "<br>"; 
    document.getElementById("password").value = '' + "<br>"; 
    document.getElementById("whysupport").value = '' + "<br>"; 
    document.querySelectorAll('input[name="Gender"]').forEach(radio => radio.checked = false) +"<br>";
    document.querySelectorAll('.error-message').forEach(errorSpan => errorSpan.style.display = 'none') + "<br>";
    document.querySelectorAll('.error').forEach(field => field.classList.remove('error')) + "<br>";
});
