
// Email must not contain ASC2 characters (Uppercase, Digits, Chars, Characters)

const accepted_chars = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function checkEmail(email: string): boolean{
    // If no email entered return false
    if (!email) return false;
    const emailSplit = email.split('@');
    // If email is improperly split
    if (emailSplit.length != 2) {
        return false
    }

    const account: string = emailSplit[0];
    const address: string = emailSplit[1];

    if(account.length > 64) {
        return false
    }
    else if(address.length > 255){
        return false
    }

    const domain: string[] = address.split('.');

    if (domain.some(function (part) {
        return part.length > 63;
    })) return false;

    if (!accepted_chars.test(email)){
        return false;
    }

    return true;

}