const isEmpty = (string = '') => {
    if (string.trim() === '') return true;
    else return false;
};
const isEmail = (string) => {
    var emailRegEx =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegEx.test(string)) return true;
    else return false;
};

exports.validateSignUpData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
        errors.email = "Email is not valid";
    }

    if (isEmpty(data.password)) {
        errors.password = "Must not be empty";
    }
    if (isEmpty(data.confirmPassword) && data.password !== data.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
    }
    if (isEmpty(data.centerName)) {
        errors.centerName = "Must not be empty";
    }
    if(isEmpty(data.branch)) {
        errors.branch = "Must not be empty";
    }
    if(isEmpty(data.companyIncorporationNumber)){
        errors.companyIncorporationNumber = "Must not be empty";
    }
    if(isEmpty(data.contactNumber)){
        errors.contactNumber = "Must not be empty";
    }
    return {
        errors,
        valid : Object.keys(errors).length === 0? true : false
    }
}

exports.validateLoginData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
        errors.email = "Email is not valid";
    }

    if (isEmpty(data.password)) {
        errors.password = "Must not be empty";
    }

    return {
        errors,
        valid : Object.keys(errors).length === 0 ? true : false
    }
}