class app {
    constructor() {
        this.emailValidation();
    }

    emailValidation() {
        var email = '1.a-b.c_9.A@a';

        // Validate first and last characters
        var regexPattern = '^[a-zA-Z0-9].*[a-zA-Z]$';
        var emailRegexObj = new RegExp(regexPattern);
        var FL = emailRegexObj.test(email);

        var emailArray = [{
            key: 'Valid first and last characters',
            value: FL
        }];

        // allow only specific characters
        var allowedCharsPattern = "^[0-9A-Za-z_@.-]+$";
        var allowedCharsRegex = new RegExp(allowedCharsPattern);
        var ACP = allowedCharsRegex.test(email);
        emailArray.push({key: 'Contains only allowed characters', value: ACP});

         // Not allowed substring 
        var notAllowedPattern = "-@|_@|@_|@-|--|__|-_|_-|@@|\\.@|@\\.";
        var notAllowedPatternRegex = new RegExp(notAllowedPattern);
        var isNotAllowedString = notAllowedPatternRegex.test(email);
        emailArray.push({key: 'Not allowed string', value: isNotAllowedString});



        // Output
        var html = '<table>';
        var i;
        for(i=0; i < emailArray.length; i++) {
            html += '<tr>';
            html += '<td>';
            html += emailArray[i].key
            html += '</td>';
            html += '<td>';
            html += emailArray[i].value
            html += '</td>';
            html += '</tr>';
        }
        html += '</table>';
        document.getElementById('email').innerHTML = html;
    }
}

new app();