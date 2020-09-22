

function setupForm(){
    

    let formWrapper = document.getElementById("formWrapper");

    

    const form = document.createElement('form');
    form.classList.add("myForm");
    form.id = "myForm";

    const title = document.createElement('h2');
    title.innerHTML = "sign up form";
    form.appendChild(title);

    let linebreak = document.createElement("br");

    // email
    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = "email:";
    emailLabel.htmlFor = "email";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;

    // country
    const countryLabel = document.createElement('label');
    countryLabel.innerHTML = "country:";
    countryLabel.htmlFor = "country";
    countryLabel.id = "countryLabel";
    const countryInput = document.createElement('select');
    countryInput.id = "countrySelect"
    const countryOption = ['US', 'UK', 'CA', 'NZ'];
    for (var i = 0; i < countryOption.length; i++){
        var option = document.createElement('option');
        option.value = countryOption[i];
        option.text = countryOption[i];
        countryInput.appendChild(option);
    }
    countryOption.required = true;

    // zip code
    
    const zipLabel = document.createElement('label');
    zipLabel.innerHTML = "zip code:";
    zipLabel.htmlFor = "zip";
    const zipInput = document.createElement('input');
    zipInput.id = "zip";
    zipInput.type = "text";
    zipInput.required = true;



    // password 1
    const pass1Label = document.createElement("label");
    pass1Label.innerHTML = "create password:";
    pass1Label.htmlFor = "password";
    const pass1Input = document.createElement("input");
    pass1Input.id = "password1";
    pass1Input.type = "password";
    pass1Input.required = true;

    // password 2
    const pass2Label = document.createElement('label');
    pass2Label.innerHTML = "confirm password:";
    pass2Label.htmlFor = "password";
    const pass2Input = document.createElement('input');
    pass2Input.id = "password2";
    pass2Input.type = "password";
    pass2Input.required = true;

    // button
    const submitBtn = document.createElement('button');
    submitBtn.innerHTML = "submit";

    formWrapper.appendChild(form);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    linebreak = document.createElement("br");
    form.appendChild(linebreak);
    linebreak = document.createElement("br");
    form.appendChild(linebreak);
    form.appendChild(countryLabel);
    form.appendChild(countryInput);
    linebreak = document.createElement("br");
    form.appendChild(linebreak);

    form.appendChild(zipLabel);
    form.appendChild(zipInput);
    linebreak = document.createElement("br");
    form.appendChild(linebreak);

    form.appendChild(pass1Label);
    form.appendChild(pass1Input);
    linebreak = document.createElement("br");
    form.appendChild(linebreak);
    form.appendChild(pass2Label);
    form.appendChild(pass2Input);

    linebreak = document.createElement("br");
    form.appendChild(linebreak);
    form.appendChild(submitBtn);

    checkEmailValidity();
    checkZipValidity();
}

setupForm();


function checkEmailValidity(){
    //email
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("input", function(e) {
        if(emailInput.validity.typeMismatch){
            emailInput.setCustomValidity("pls enter a valid email");
        }
        else{
            emailInput.setCustomValidity("");
        }
    });
}

function checkZipValidity(){
    let pattern = /^([0-9]{5})+$/;
    const zipInput = document.getElementById("zip");
    zipInput.addEventListener("input", function(e){
        if(zipInput.value.match(pattern)){
            zipInput.setCustomValidity("");
            console.log("valid");
        }
        else{
            zipInput.setCustomValidity("pls enter a valid zip");
        }
    });
}


document.onreadystatechange = () => {
    if(document.readyState === 'complete'){
        var wrapperHeight = document.getElementById("formWrapper").clientHeight;
        var relativeFontSize = wrapperHeight / 10 + 'px';
        document.getElementById("myForm").style.fontSize = relativeFontSize;
    }
};
window.onresize = function(e){
    var wrapperHeight = document.getElementById("formWrapper").clientHeight;
    var relativeFontSize = wrapperHeight / 10 + 'px';
    document.getElementById("myForm").style.fontSize = relativeFontSize;

}