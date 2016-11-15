class app {
    constructor() {
        this.emailValidation();
    }

    emailValidation() {
        var email = '1abc9Aa';
        var regexPattern = '^[a-zA-Z0-9].*[a-zA-Z]$';
        var emailRegexObj = new RegExp(regexPattern);
        var result;
        if(emailRegexObj.test(email)) {
            result = 'yes';
        }

        else {
            result = 'no';
        }

        document.getElementById('email').innerHTML = result;
    }
}

new app();